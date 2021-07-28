import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff, StaffDescription } from '../Models/Mat_Hang';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {

  constructor(private http: HttpClient) { }

		  getStaff():Observable <Staff[]>{
			return this.http.get<Staff[]>('http://localhost:8000/api/staff/'); 
		  }

      insertStaff(staff:StaffDescription): Observable<StaffDescription> {
        return this.http.post<StaffDescription>('http://localhost:8000/api/insertstaff/', staff);
    }

      deleteStaff(id : string) :  Observable<Staff[]>{
    		return this.http.delete<Staff[]>('http://localhost:8000/api/deletestaff/'+ id); 
      }

       updatestaff(id : string):  Observable<Staff[]>{
        const body = { title: 'Angular PUT Request Example'};
        return this.http.put<Staff[]>('http://localhost:8000/api/updatestaff'+ id, body,);
    }

     

  
}