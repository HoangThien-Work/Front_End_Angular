import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { SharingService } from '../services/sharing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
//dung de tat popup navbar khi log out
@ViewChild('closebutton') closebutton;
//hung gia tri ten nguoi dung
displayName:string="";
constructor(
            private userService:UserService,
            private logoutauth: FirebaseAuthService,
            private sharingService : SharingService,
            private router : Router) { 



 //Chỉ thực hiện kiểm tra khi sharing service emit một sự kiện trả về giá trị true
 this.sharingService.isUserLoggedIn
 .subscribe(value => {
           if(value){
             this.userService.getCurrentUser()
               .then(user => {
                       this.displayName = user.displayName!=null? user.displayName: user.email   
                       console.log(this.displayName);} 
                 ).catch(e => {console.log(e);}
               );										
           }else{
                      this.displayName="";
                      console.log(this.displayName);		   
                    }
                  })
  this.userService.getCurrentUser()
  			.then(user=>{
          if(user != null){
            this.displayName = user.displayName!=null? user.displayName: user.email;
            console.log(this.displayName);		  
          }else{
            this.displayName="";
            console.log(this.displayName);		   
          }
        })

                                            }


ngOnInit(): void {
}

//dinh nghia ham logout:
Logout(){
this.logoutauth.logout().then(res=>{
  //khi damg xuat load toan trang ve url "" trong routing 
  // location.href = ""
  this.closebutton.nativeElement.click();
  //load lai component tren mainpage chu khong load lai nguyen trang
  this.router.navigate([""])
})
}

}