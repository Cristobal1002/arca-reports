import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  data: any[] = [];
  pastors: any[] = [];
  teams: any[] = [];
  leaders: any[] =[];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.loadJSON();

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      pastor: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      lider: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    });
  }

  loadJSON() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      this.data = data.pastors
      this.pastors = data.pastors;
      console.log('Datos cargados correctamente:', this.pastors);
    }, error => {
      console.error('Error al cargar los datos:', error);
    });
  }

  setPastor(){
    const pastor = this.registerForm.get('pastor')?.value
    console.log('pastor seleccionado:', pastor)
    this.data.forEach((elements) => {
      if (elements.name === pastor){
        this.teams = elements.teams;
      }
    })
  }

  getLeader(){
    const team = this.registerForm.get('team')?.value
    console.log(this.teams)
    this.teams.forEach((elements) => {
      if(elements.name === team){
        this.leaders = elements.members
      }
    })
    console.log(this.leaders)
  }

  onSubmit(){
    console.log(this.registerForm)
  }

}
