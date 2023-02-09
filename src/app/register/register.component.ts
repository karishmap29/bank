import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 
  


 constructor(private ds:DataService,private router:Router,private fb:FormBuilder){

 }

  // create reactive form of register form
  registerForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],     //obj hence key-value pair  //value must be array itself.cant give as any.we can validate using string itself.
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

 ngOnInit():void{
  
 }

  register(){

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw
   //console.log(uname,acno,psw);

   if(this.registerForm.valid){
    const result=this.ds.register(uname,acno,psw)
    
    if(result){
      alert('registered')
      this.router.navigateByUrl("")
    }
    else{
      alert("acno already registered")
    }
    }
    else{
alert('invalid form')
    }
  }

}




 