import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  loginflag : boolean = false ;
  dashflag : boolean = false ;
  
  constructor(private router : Router)
  {

  }

  loginclick()
  {
     this.loginflag = true;
     this.dashflag = false;
     this.router.navigate(['login']);
  }
  
  dashboardclick()
  {
     this.loginflag = false;
     this.dashflag = true;
     this.router.navigate(['dashboard']);
  }
 
}
