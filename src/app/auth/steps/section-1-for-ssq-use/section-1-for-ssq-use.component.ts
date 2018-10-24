import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section-1-for-ssq-use',
  templateUrl: './section-1-for-ssq-use.component.html',
  styleUrls: ['./section-1-for-ssq-use.component.scss']
})

export class Section1ForSsqUseComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    $('.datepicker').datepicker();      
  }

  constructor() { }

  ngOnInit() {
  }

}
