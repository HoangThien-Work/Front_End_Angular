import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../Models/Mat_Hang';

@Component({
  selector: 'app-table-sp',
  templateUrl: './table-sp.component.html',
  styleUrls: ['./table-sp.component.scss']
})
export class TableSPComponent implements OnInit {

 

  private itemsCollection: AngularFirestoreCollection<Item>;
  mat_hangs: Observable<Item[]>;
 //biến dữ liệu trở thành mảng chứ k còn là observable nữa.
  mathangs_list : Item[];
  config: any;
  //khai báo biến tổng hứng tổng giá trị các mặt hàng trong trang.
  total_mat_hangs: number = 0 ;

  constructor(private readonly afs: AngularFirestore) 
  { 
    
    this.itemsCollection = afs.collection<Item>('Mat_Hang'); //==> tham so truyen vao la ten collection tren firebase
                                        //kieu lay ve ep thanh 1 Item
    this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
                                                      // dai dien cho document id }

  this.mat_hangs.subscribe(data=>{
    console.log(data); 
    //this line of code meaning parsing the data that subcribe by observable 
    //then parse into the list name mathang_list
    this.mathangs_list = data; 
    //parsing the number of items in the mathangslist  
    //in to the total_mat_hangs value type number
    this.total_mat_hangs = this.mathangs_list.length
                                })
  this.config = {
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.total_mat_hangs,
               }


  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
  }

  delete(docId:string){
    this.itemsCollection.doc(docId).delete();
     
    }

    Filter($event){
      let q=$event.target.value;
      if(q!="")
      {
        this.itemsCollection=this.afs.collection('Mat_Hang',ref=>ref.where('MoTa','==',q));
        this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' });
        this.mat_hangs.subscribe(data=>
          {
            this.mathangs_list=data;  
            this.total_mat_hangs = this.mathangs_list.length
        });
      }
      else{
        this.itemsCollection = this.afs.collection<Item>('Mat_Hang');
        this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
        //valueChanges: trả về dữ liệu: trong doc khong bao gom docID
        //snapshotChanges: trả về cả docID
        this.mat_hangs.subscribe(data=>
            {
              this.mathangs_list=data;  
              this.total_mat_hangs = this.mathangs_list.length
          });
        }
  }

  Filtergia($event){
    let q=$event.target.value;
    if(q!="")
    {
      this.itemsCollection=this.afs.collection('Mat_Hang',ref=>ref.where('Gia','>=',q));
      this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' });
      this.mat_hangs.subscribe(data=>
        {
          this.mathangs_list=data;  
          this.total_mat_hangs = this.mathangs_list.length
      });
    }
    else{
      this.itemsCollection = this.afs.collection<Item>('Mat_Hang');
      this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
      //valueChanges: trả về dữ liệu: trong doc khong bao gom docID
      //snapshotChanges: trả về cả docID
      this.mat_hangs.subscribe(data=>
          {
            this.mathangs_list=data;  
            this.total_mat_hangs = this.mathangs_list.length
        });
      }
}
    
    Search($event){
      let q=$event.target.value;
        if(q!="")
        {
          this.itemsCollection=this.afs.collection('Mat_Hang',ref=>ref.where('Ten','>=',q).where('Ten','<=',q+'\uf8ff'));
          this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' });
          this.mat_hangs.subscribe(data=>
            {
              this.mathangs_list=data;  
              this.total_mat_hangs = this.mathangs_list.length
          });
        }
        else{
          this.itemsCollection = this.afs.collection<Item>('Mat_Hang');
          this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
          //valueChanges: trả về dữ liệu: trong doc khong bao gom docID
          //snapshotChanges: trả về cả docID
          this.mat_hangs.subscribe(data=>
              {
                this.mathangs_list=data;  
                this.total_mat_hangs = this.mathangs_list.length
            });
          }
    }
    
    
    
}

