import { Injectable } from '@angular/core';
//adding by auth function
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import  firebase from 'firebase';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
// login by google gmail
constructor(private afAuth: AngularFireAuth,
// login by firebase account
private fauth: AngularFireAuth,
private router:Router,
private dataSharingService: SharingService,
                                          ) {}
        
async signinGmail(){
var provider = new firebase.auth.GoogleAuthProvider();
return await  this.afAuth.signInWithPopup(provider)
      .then(res=>{
        console.log("da dang nhap thanh cong");
        this.dataSharingService.isUserLoggedIn.next(true);
                  })

}
//login by firebase account                    
siginFirebase(email: string, password:string){
  return new Promise<any>((resolve, reject) => {
    this.fauth.signInWithEmailAndPassword(email, password)
    .then(res => {       
    resolve(res);
    //this.sharingService.isUserLoggedIn.next(true);
    this.dataSharingService.isUserLoggedIn.next(true);
                  }, err => reject(err))
                                                })
}

//sign_up firebase account
doRegister(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      resolve(res);
    }, err => reject(err))
  })
}


logout(){
  return new Promise<any>((resolve,reject)=>{
    if (this.afAuth.currentUser){      
    this.afAuth.signOut();
    this.dataSharingService.isUserLoggedIn.next(false);
    resolve("log out");
    }else{
      reject();
    }
  })
}

}
        