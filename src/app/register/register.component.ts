import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  [x: string]: any;
 acno=''
 uname=''
 psw=''
  
 constructor(private ds:DataService,private router:Router){

 }
 ngOnInit():void{
  
 }

  register(){

    var uname=this.uname
    var acno=this.acno
    var psw=this.psw
   //console.log(uname,acno,psw);
    const result=this.ds.register(uname,acno,psw)
    
    if(result){
      alert('registered')
      this.router.navigateByUrl("")
    }
    else{
      alert("acno already registered")
    }
    }
    
}




