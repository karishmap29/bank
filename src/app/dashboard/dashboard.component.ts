import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any
  acno:any
  datedetails:any
 
  

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
   if(localStorage.getItem("currentUser")){
    this.user = JSON.parse(localStorage.getItem("currentUser")|| "")
  }
    //access date
    this.datedetails= new Date()

  }
  
  ngOnInit(): void {
     if(!localStorage.getItem("token")){
      alert("please login")
      this.router.navigateByUrl("") //redirecting to login page| login-logout-then if we press back this alert will come
     }
  }

  depositForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  deposit() {
    var acno1 = this.depositForm.value.acno1
    var psw1 = this.depositForm.value.psw1
    var amnt1 = this.depositForm.value.amnt1
    if (this.depositForm.valid) {


      this.ds.deposit(acno1, psw1, amnt1).subscribe((result:any)=>{
        alert(result.message)
      },
       result=>{
        alert(result.error.message)
       }
      )
      
    }
    else {
      alert('invalid form')
    }
  }
  withdrawForm = this.fb.group({
    acno2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw2: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt2: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdraw() {
    var acno = this.withdrawForm.value.acno2
    var psw = this.withdrawForm.value.psw2
    var amnt = this.withdrawForm.value.amnt2
    if (this.withdrawForm.valid) {
    
      this.ds.withdraw(acno, psw, amnt).subscribe((result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      })}
      
    else {
      alert('invalid form')
    }
  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
 deleteParent(){
 this.acno= JSON.parse(localStorage.getItem("currentAcno") || "")
 }

cancel(){
  this.acno=''
}
Delete(event:any){
  //alert(event)
  this.ds.deleacc(event).subscribe((result:any)=>{
    alert(result.message)
    this.logout()
  })
}

}

