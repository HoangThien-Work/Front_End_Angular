import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffDescription } from '../Models/Mat_Hang';
import { StaffsService } from '../services/staffs.service';

@Component({
  selector: 'app-insertstaff-nodejs',
  templateUrl: './insertstaff-nodejs.component.html',
  styleUrls: ['./insertstaff-nodejs.component.scss']
})
export class InsertstaffNodejsComponent implements OnInit {

  constructor(private fb : FormBuilder, private stfservice : StaffsService) { }
  insertFrm : FormGroup
  ngOnInit(): void {
    this.insertFrm = this.fb.group({
      id:['',Validators.required], 
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      role:['',[Validators.required]],
    });
}

onSubmitNode(){
let staff = new StaffDescription();
staff.id = this.insertFrm.controls['id'].value;
staff.name = this.insertFrm.controls['name'].value;
staff.age = this.insertFrm.controls['age'].value;
staff.role = this.insertFrm.controls['role'].value;

this.stfservice.insertStaff(staff).subscribe(data=>{console.log(data)})
}



}
