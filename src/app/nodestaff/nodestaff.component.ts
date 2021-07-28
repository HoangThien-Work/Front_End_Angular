import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff, StaffDescription } from '../Models/Mat_Hang';
import { StaffsService } from '../services/staffs.service';

@Component({
  selector: 'app-nodestaff',
  templateUrl: './nodestaff.component.html',
  styleUrls: ['./nodestaff.component.scss']
})
export class NodestaffComponent implements OnInit {

  constructor(private service : StaffsService) { }
  stafflist:Observable<Staff[]>;
  ngOnInit(): void {
    this.stafflist =  this.service.getStaff()
  }

  delete(id: string){
    this.service
      .deleteStaff(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => alert('staff deleted')
      );
     }
  
  update(id:string){
    this.service
    .updatestaff(id)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
      () => alert('staff updated')
    );
   }
  
  
}


