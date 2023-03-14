import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading headers as global(outside class)
const option={
  headers:new HttpHeaders( ) 
 }

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) {
    // this.getData()

  }

  currentUser: any
  currentAcno: any
  userDetails: any
  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:"abc123",balance:0,transaction:[]},
  //   1001:{acno:1001,username:"amal",password:"abc123",balance:0,transaction:[]},
  //   1002:{acno:1002,username:"arun",password:"abc123",balance:0,transaction:[]},
  //   1003:{acno:1003,username:"akil",password:"abc123",balance:0,transaction:[]}

  // }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails)) //userdetails is in ts obj.so we have to convert to string
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", this.currentUser)
    }
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
  }

  // getData() {
  //   if (localStorage.getItem("database")) {
  //     this.userDetails = JSON.parse(localStorage.getItem("database") || "")
  //   }
  //   if (localStorage.getItem("currentUser")) {
  //     this.currentUser = localStorage.getItem('currentUser')
  //   }
  //   if (localStorage.getItem("currentAcno")) {
  //     this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || "")
  //   }
  // }

  getToken(){
    //access token
    const token=JSON.parse(localStorage.getItem("token")|| "")
    //generate header
    let headers=new HttpHeaders()
    
    if(token){
      //append token in header
      option.headers=headers.append("access_token",token)
    }
    return option
  }

  register(uname: any, acno: any, psw: any) {
    //create body data
    const data = { uname, acno, psw }     //key from thunderclient & argument of register same
    return this.http.post("http://localhost:3000/register", data)

  }

  login(acno: any, psw: any) {

    const data={acno,psw}
    return this.http.post("http://localhost:3000/login",data)

  }

  deposit(acnum: any, password: any, amount: any) {
   const data={acnum,password,amount}
   return this.http.post("http://localhost:3000/deposit",data,this.getToken()) 


   
  }

  withdraw(acnum: any, password: any, amount: any) {
    const data={acnum,password,amount}
    return this.http.post("http://localhost:3000/withdraw",data,this.getToken()) 
  }
  getTransaction(acno: any) {
    const data={acno}
    return this.http.post("http://localhost:3000/transaction",data,this.getToken()) 
  }
 deleacc(acno:any){
  return this.http.delete("http://localhost:3000/delete/"+acno,this.getToken()) 

 }
}
