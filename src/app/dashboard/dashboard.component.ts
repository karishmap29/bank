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
 
  // acno1: any
  // psw1: any
  // amnt1: any

  // acno2: any
  // psw2: any
  // amnt2: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user = this.ds.currentUser
    //access date
    this.datedetails= new Date()

  }
  
  ngOnInit(): void {
     if(!localStorage.getItem("currentAcno")){
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


      const result = this.ds.deposit(acno1, psw1, amnt1)
      if (result) {
        alert(`Your ac has been credited with amount ${amnt1} and the current balance is ${result}`)
      }
      else {
        alert('acno or password is wrong!!')
      }
    }
    else {
      alert('invalid form')
    }
    console.log(this.ds.userDetails);


  }
  withdrawForm = this.fb.group({
    acno2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw2: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt2: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdraw() {
    var acno2 = this.withdrawForm.value.acno2
    var psw2 = this.withdrawForm.value.psw2
    var amnt2 = this.withdrawForm.value.amnt2
    if (this.withdrawForm.valid) {


      const result = this.ds.withdraw(acno2, psw2, amnt2)
      if (result) {
        alert(`Your ac has been debited with amount ${amnt2} and the current balance is ${result}`)
      }
    }
    else {
      alert('invalid form')
    }
  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
 deleteParent(){
 this.acno= JSON.parse(localStorage.getItem("currentAcno") || "")
 }

cancel(){
  this.acno=''
}

}

