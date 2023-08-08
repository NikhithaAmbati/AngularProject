import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users=[
    {Username:'Nikhi',Email:'nikhi@123',Contact:'1111',Role:'User'},
    {Username:'Deepu',Email:'deepu@3213',Contact:'2222',Role:'User'},
    {Username:'Teja',Email:'teja@1123',Contact:'3333',Role:'User'},
    {Username:'Ammu',Email:'ammu@0123',Contact:'4444',Role:'User'},
    {Username:'Ayesha',Email:'ayesha@11023',Contact:'5555',Role:'User'},
  ];

}
