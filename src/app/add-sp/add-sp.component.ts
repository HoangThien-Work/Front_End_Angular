import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../Models/Mat_Hang';

@Component({
  selector: 'app-add-sp',
  templateUrl: './add-sp.component.html',
  styleUrls: ['./add-sp.component.scss']
})
export class AddSPComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  //danh sach chứa dữ liệu lấy từ firestore về
  mat_hangs: Observable<Item[]>;

  constructor(private fb: FormBuilder, 
              private readonly afs: AngularFirestore,
              private router : Router) { 
      this.itemsCollection = afs.collection<Item>('Mat_Hang'); //==> tham so truyen vao la ten collection tren firebase
      //kieu lay ve ep thanh 1 Item
      this.mat_hangs = this.itemsCollection.valueChanges( { idField: 'MatHang_ID' }); //chỉ sử dụng cho Angular 8,9
                    // dai dien cho document id
    }
    insertSPFrm: FormGroup;

  ngOnInit(): void {
    this.insertSPFrm = this.fb.group({
      id:['',Validators.required], 
      ten:['',[Validators.required]],
      gia:['',[Validators.required]],
      mota:['',[Validators.required]],
      ngaysanxuat:['',[Validators.required]],
    });
  }

  
  onSubmitFirebase(){
    let it : Item = {};
    it.Id=this.insertSPFrm.controls['id'].value;
    it.Ten = this.insertSPFrm.controls['ten'].value;
    it.Gia =  this.insertSPFrm.controls['gia'].value;
    it.MoTa =  this.insertSPFrm.controls['mota'].value;
    it.NgaySanXuat =  this.insertSPFrm.controls['ngaysanxuat'].value;
   
    
    // tự khởi tạo doc id theo chuỗi mình nhập tay
    // let docid = "id1";
    
    // tạo docid bằng AngularFirestore - tự genarate doc id 
    const docid = this.afs.createId();
    
    //this.itemsCollection.add(it);//thêm với docid tự động tạo
    
    
    //them vao itemsCollection với docid cụ thể
    //Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
    this.itemsCollection.doc(docid).set(Object.assign({}, it));
    alert("add done")
    this.router.navigate(["admin"]);
    }

}
