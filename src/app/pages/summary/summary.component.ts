import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  report: any;
  attendance: any;
  constructor() {
    const data = localStorage.getItem('summary')
    const attendance = localStorage.getItem('attendance')
    if(data){
      this.report = JSON.parse(data);
      console.log(this.report)
    } else {
      console.error('No se encontraron datos de reporte en localStorage.');
    }

    if(attendance){
      this.attendance = JSON.parse(attendance)
    }else{
      console.error('No se encontraron datos de attendance en localStorage.');
    }
  }

  ngOnInit(): void {
  }

}
