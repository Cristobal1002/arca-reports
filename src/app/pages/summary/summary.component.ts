import { Component, OnInit } from '@angular/core';
import {GoogleApiServiceService} from "../../services/google-api-service.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  report: any;
  attendance: any;
  constructor(private googleService: GoogleApiServiceService) {
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

  async onSubmit(){
    const data = [this.attendance.fecha, this.attendance.pastor, this.attendance.team, this.attendance.lider,
    this.attendance.hombres, this.attendance.mujeres, this.attendance.somosHombres,
    this.attendance.somosMujeres, this.attendance.rocasHombres, this.attendance.rocasMujeres,
    this.attendance.teensHombres, this.attendance.teensMujeres, this.attendance.kidsHombres, this.attendance.kidsMujeres,
    this.attendance.vipHombres, this.attendance.vipMujeres, this.attendance.vipSomosHombres, this.attendance.vipSomosMujeres,
    this.attendance.vipRocasHombres, this.attendance.vipRocasMujeres, this.attendance.vipTeensHombres, this.attendance.vipTeensMujeres
    ]

    this.googleService.sendDataForm(data).subscribe(
      response => {
        console.log('Datos enviados con éxito:', response);
      },
      error => {
        console.error('Error al enviar datos:', error);
      }
    )

  }

}
