import { Component,Input,Output,EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {
  @Input() item:string | undefined
  @Output() oncancel =new EventEmitter();
  @Output() ondelete =new EventEmitter

  constructor(private ds:DataService, private r:Router){

  }

  cancel(){
    this.oncancel.emit();
  }

  // deleteacc(){
  //   let res = this.ds.deleteAcc(this.item)
  //   if(res==true){
  //     localStorage.removeItem("currentUser")
  //     localStorage.removeItem("acno")
  //     this.r.navigateByUrl("")
  //   }
  //   else{
  //     alert("account deleting Failed")
  //   }

  deleteacc(){
    this.ondelete.emit(this.item)
  }

  }

  


