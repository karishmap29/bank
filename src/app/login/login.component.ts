import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  data="your perfect banking partner"
  inputplaceholder="account number"
  
  acno=''
  // or acno:any
  psw=''

 

  constructor(private router:Router,private ds:DataService) {}
  
  ngOnInit(): void {

  }

  login(){
    //  alert('login clicked')
    var acnum=this.acno //to make the code shorter
    var psw=this.psw
    var userDetails=this.ds.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){  //acnum is a variable. so no quotes. but password is a keyword. so give in quotes.
      alert("login success")
      this.router.navigateByUrl('dashboard')
      }
      else{
        alert("incorrect password!")
      }
    }
    
    else{
   alert("acno incorrect or not registered yet!")
    }                                             
  }

//   acnoChange(event:any){
//   this.acno=event.target.value;
//   //console.log(this.acno);
//    }
//    pswrdChange(event:any){
//     this.psw=event.target.value
//     //console.log(this.psw);
    
//    }
 // }

//  login(a:any,b:any){
//  // console.log(a.value);
//  var acnum=a.value  //chkd thru console log and understood that .value needs to be added.
//  var psw=b.value
  
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]["password"]){  //acnum is a variable. so no quotes. but password is a keyword. so give in quotes.
//     alert("login success")
//     }
//     else{
//       alert("incorrect password!")
//     }
//   }
//   else{
//  alert("acno incorrect or not registered yet!")
//   }                                             
// }
}
