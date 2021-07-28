import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private userService: UserService, private router: Router){}
  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve,reject)=>{
    this.userService.getCurrentUser() //kiem tra có user đang đăng nhập hay không nếu có trả về true, ngược lại trả về false
      .then(user=>{
      resolve(true)
      }, 
      err=>{
        resolve(false);
        this.router.navigate(["/login"]);//nếu chưa đăng nhập chuyển sang trang login
      }
    )

    }) 

   // return true;
  }
}
  

