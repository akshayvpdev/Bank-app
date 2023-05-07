import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acc:any=""
  // password:any=""
  // amount:number=0
  cuser:any=""
  dd=new Date;
  acno=''

  constructor( private ds:DataService,private fb:FormBuilder, private router:Router){
    this.cuser=localStorage.getItem("currentUser")
  }

dform = this.fb.group({
  dacc:['',[Validators.required,Validators.pattern("[0-9]+")]],
  dpassword:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]],
  damount:['',[Validators.required,Validators.pattern("[0-9]+")]]
})

wform = this.fb.group({
  wacc:['',[Validators.required,Validators.pattern("[0-9]+")]],
  wpassword:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]],
  wamount:''
})
  
  
  clicked(){

    console.log(this.dform.value.damount);
    let acc =this.dform.value.dacc
    let password =this.dform.value.dpassword
    let amount =this.dform.value.damount
    let res=this.ds.deposit(acc,password,amount)

    res.subscribe((res:any)=>{
      alert(res.message)
    },
    (err:any)=>{
      alert(err.error.message)
    })

  }
  

  clicked1(){

    let acc =this.wform.value.wacc
    let password =this.wform.value.wpassword
    let amount =this.wform.value.wamount
    if(this.wform.valid){
      let res=this.ds.withdrawal(acc,password,amount)

      res.subscribe((res:any)=>{
        alert(res.message)
      },
      (err:any)=>{
        alert(err.error.message)
      })
    }  
 }

 logout(){
  this.router.navigateByUrl("")
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("token")
 }

 deleteacc(){
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  console.log(this.acno)
 }
 canceldelete(){
  this.acno=''
 }

 deleteaccount(event:any){
  console.log(event);
  this.ds.deleteAcc(event).subscribe(res=>{
    if(res){
      localStorage.removeItem("currentUser")
      localStorage.removeItem("currentAcno")
      localStorage.removeItem("token")
      this.router.navigateByUrl("")
    }
  },err=>{
    alert(err.error.message)
  })
  
 }




}
