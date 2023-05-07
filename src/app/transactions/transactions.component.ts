import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transact:any
  constructor(private ds:DataService){

    let currentAcno=localStorage.getItem('currentAcno')
    this.ds.getTransactions(currentAcno).subscribe((data:any)=>{
      console.log(data);
      this.transact=data.data

      
      
    })
  }
}
