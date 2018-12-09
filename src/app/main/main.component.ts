import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public readonly http: HttpClient
  ) { }

  ngOnInit() {
  }


  public submmitWithdraw(): void {

  }
}
