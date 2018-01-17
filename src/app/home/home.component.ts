import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputMsg = ''; // text entered by user
  conversation = ["hi", "hello"]; // hold all msg of user and bot

  constructor(private http: Http) { }

  ngOnInit() {
    //this.login();
  }

  dataObj = {}; // hold username and pwd
  
  //login user for first time
  login(){  
                console.log("inside login");
                this.dataObj['userName']='';
                this.dataObj['password']='';

                let headers = new Headers({ 'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' });
                let options = new RequestOptions({ headers: headers });
                let url: "https://csva-pension-bot-controller-dot-acn-csva-project.appspot.com/login/";                         
                let data = this.dataObj;                                

                let res = this.http.post(url, data, options).map((res: Response) => res.json());
                console.log(JSON.stringify(res));
                
  }

  keypressed($event){
    if($event.keyCode == 13) {
      this.addMsg();
      // this.login();
    }
  }

  addMsg(){
    this.conversation.push(this.inputMsg);
    this.callHttp();
    this.inputMsg = '';
    console.log(this.conversation);
  }

  contextsvalue = {};
  callHttp(){
    // this.http.post()
  }
}
