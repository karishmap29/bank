import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any

  acno1: any
  psw1: any
  amnt1: any

  acno2: any
  psw2: any
  amnt2: any

  constructor(private ds: DataService) {
    this.user = this.ds.currentUser

  }
  deposit() {
    var acno1 = this.acno1
    var psw1 = this.psw1
    var amnt1 = this.amnt1
    const result = this.ds.deposit(acno1, psw1, amnt1)
    if (result) {
      alert(`Your ac has been credited with amount ${amnt1} and the current balance is ${result}`)
    }
    else {
      alert('acno or password is wrong!!')
    }
  }

  withdraw() {
    var acno2 = this.acno2
    var psw2 = this.psw2
    var amnt2 = this.amnt2
    const result = this.ds.withdraw(acno2, psw2, amnt2)
    if (result) {
      alert(`Your ac has been debited with amount ${amnt2} and the current balance is ${result}`)
    }
    }

  


  ngOnInit(): void {

  }

}

