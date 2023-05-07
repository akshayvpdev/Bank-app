import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentAcno = '';
  currentUser = '';

  accounts: any = {
    1000: {
      account_no: 100,
      name: 'Jaseel',
      phone: 9485784939,
      balance: 100000,
      password: 'jaseel123',
      transactions: [],
    },
    1001: {
      account_no: 1001,
      name: 'Shani',
      phone: 9485744933,
      balance: 100000,
      password: 'shani123',
      transactions: [],
    },
    1002: {
      account_no: 1002,
      name: 'Sahal',
      phone: 9485784935,
      balance: 100000,
      password: 'sahal123',
      transactions: [],
    },
    1003: {
      account_no: 1003,
      name: 'Suhail',
      phone: 9485784940,
      balance: 100000,
      password: 'suhail123',
      transactions: [],
    },
  };

  constructor(private http: HttpClient) {
    // this.getDetails()
  }

  // getDetails(){
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  //   }
  //   if(localStorage.getItem("accounts")){
  //     this.accounts=JSON.parse(localStorage.getItem("accounts")||'')
  //   }
  //   if(localStorage.getItem("acno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("acno")||'')
  //   }
  // }

  saveDetails() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
    if (this.accounts) {
      localStorage.setItem('accounts', JSON.stringify(this.accounts));
    }
    if (this.currentAcno) {
      localStorage.setItem('acno', JSON.stringify(this.currentAcno));
    }
  }
  // -----------------login----------------------------
  login(acno: any, psw: any) {
    let data = {
      acno,
      password: psw,
    };
    return this.http.post('http://localhost:3000/login', data);
  }
  // -----------------register----------------------------

  register(acno: any, username: any, phone: any, password: any) {
    let data = {
      acno,
      username,
      phone,
      password,
    };

    return this.http.post('http://localhost:3000/register', data);
  }
  // -----------------deposite----------------------------

  deposit(acc: any, password: any, amount: any) {
    let data = {
      acno: acc,
      password,
      amount,
    };
    return this.http.post(
      'http://localhost:3000/deposite',
      data,
      this.getoptions()
    );
  }

  // ----------------------------------------------------------------------------
  getoptions() {
    const token = JSON.parse(localStorage.getItem('token') || '');
    let header = new HttpHeaders();
    if (token) {
      header = header.append('x-access-token', token);
      options.headers = header;
    }
    return options;
  }
  // ------------------------------------------------------------------------------


  

  // -----------------withdrawal----------------------------

  withdrawal(acc: any, password: any, amount: any) {
    let data = {
      acno: acc,
      password,
      amount,
    };
    return this.http.post(
      'http://localhost:3000/withdrawal',
      data,
      this.getoptions()
    );
  }

  // -----------------transaction----------------------------

  getTransactions(acc:any) {
    
    let data={
      acno:acc
    }
    return this.http.post('http://localhost:3000/transaction',data,this.getoptions())
  }

  // -----------------delete account----------------------------

  deleteAcc(acc:any) {
    return this.http.delete("http://localhost:3000/delete/"+acc,this.getoptions())
  }
}
