import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../Models/Mat_Hang';

@Component({
  selector: 'app-update-sp',
  templateUrl: './update-sp.component.html',
  styleUrls: ['./update-sp.component.scss']
})
export class UpdateSPComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  Mathang: Observable<Item>;
  MathangItems:Item;
  param:string;

  constructor(private router:ActivatedRoute, 
              private readonly afs: AngularFirestore,
              private fb:FormBuilder,
              private routernav : Router,
              ) {
                
    const routerParam=this.router.snapshot.paramMap;
    this.param=routerParam.get('id');
    this.itemsCollection = afs.collection<Item>('Mat_Hang');
    this.afs.doc('Mat_Hang/'+this.param).valueChanges().subscribe(data=>
    this.MathangItems=data,
    )
   }
   insertFrm:FormGroup;
  ngOnInit(): void {
    this.insertFrm = this.fb.group({
      id:['',Validators.required], 
      ten:['',[Validators.required]],
      gia:['',[Validators.required]],
      mota:['',[Validators.required]],
      ngaysanxuat:['',[Validators.required]],
    }); 
  }
  updateFirebase(){
    try{
      let it : Item = {};
      it.Id=this.insertFrm.controls['id'].value;
      it.Ten = this.insertFrm.controls['ten'].value;
      it.Gia =  this.insertFrm.controls['gia'].value;
      it.MoTa =  this.insertFrm.controls['mota'].value;
      it.NgaySanXuat =  this.insertFrm.controls['ngaysanxuat'].value;
      let docid = this.param;
      this.itemsCollection.doc(docid).set(Object.assign({}, it));
      alert('Success');
      this.routernav.navigate(["admin"]);
    }
    catch{
      alert('Error')
    }
  }
}
