import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
 // acno=''
  // or acno:any
 // psw=''

 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {}
  
  //model form

  loginForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]  
  })  //+ used for min 1 and max any      *used when min 0
  ngOnInit(): void {

  }

  login(){
    //  alert('login clicked')
    var acnum=this.loginForm.value.acno //to make the code shorter
    var psw=this.loginForm.value.psw 
    if(this.loginForm.valid){
    this.ds.login(acnum,psw).subscribe((result:any)=>{
      
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser) )
      localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno) )
      localStorage.setItem("token",JSON.stringify(result.token) )

      alert(result.message)
      this.router.navigateByUrl('dashboard')
    },
    result =>{
      alert(result.error.message)
    }
    )
   
  }
  else{
    alert('invalid form')
  }
                                         
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

