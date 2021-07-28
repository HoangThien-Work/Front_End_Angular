import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/Mat_Hang';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  mat_hangs: Observable<Item[]>;
  constructor(private readonly afs: AngularFirestore) 
{ 


this.itemsCollection = afs.collection<Item>('Mat_Hang'); //==> tham so truyen vao la ten collection tren firebase
                              //kieu lay ve ep thanh 1 Item
this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
                                            // dai dien cho document id

this.mat_hangs.subscribe(data=>{console.log(data)})
}
  ngOnInit(): void {
  }

}
