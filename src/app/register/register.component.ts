import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

 constructor(private ds:DataService){

 }
 ngOnInit():void{
  
 }

  register(){
    
    let userDetails=this.ds.userDetails
    }
    
}




