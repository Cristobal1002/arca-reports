import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";

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
  activateRegisterVip: boolean = false;

  defaultDate: Date = new Date();
  bsConfig: Partial<BsDatepickerConfig> = {
    dateInputFormat: 'DD/MM/YYYY'
  };

  constructor(private http: HttpClient, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loadJSON();
    setTimeout(() => {
      this.defaultDate = new Date();
    });
    this.registerForm = new FormGroup({
      pastor: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      lider: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hombres: new FormControl('', [Validators.required]),
      mujeres: new FormControl('', [Validators.required]),
      somosHombres: new FormControl('', [Validators.required]),
      somosMujeres: new FormControl('', [Validators.required]),
      rocasHombres: new FormControl('', [Validators.required]),
      rocasMujeres: new FormControl('', [Validators.required]),
      teensHombres: new FormControl('', [Validators.required]),
      teensMujeres: new FormControl('', [Validators.required]),
      kidsHombres: new FormControl('', [Validators.required]),
      kisdMujeres: new FormControl('', [Validators.required]),
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

  activateVip(){
    this.activateRegisterVip = true
  }
  onSubmit(){
    console.log(this.registerForm)
  }

}
