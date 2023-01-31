import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  data="your perfect banking partner"
  inputplaceholder="account number"
  
  // acno=''
  // or acno:any
  // psw=''

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"arun",password:"abc123",balance:0},
    1003:{acno:1003,username:"akil",password:"abc123",balance:0},

  }

  constructor(){}
  
  ngOnInit(): void {

  }

  // login(){
  //   //  alert('login clicked')
  //   var acnum=this.acno //to make the code shorter
  //   var psw=this.psw
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

//   acnoChange(event:any){
//   this.acno=event.target.value;
//   //console.log(this.acno);
//    }
//    pswrdChange(event:any){
//     this.psw=event.target.value
//     //console.log(this.psw);
    
//    }
 // }

 login(a:any,b:any){
 // console.log(a.value);
 var acnum=a.value
 var psw=b.value
  
  var userDetails=this.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){  //acnum is a variable. so no quotes. but password is a keyword. so give in quotes.
    alert("login success")
    }
    else{
      alert("incorrect password!")
    }
  }
  else{
 alert("acno incorrect or not registered yet!")
  }                                             
}
}
