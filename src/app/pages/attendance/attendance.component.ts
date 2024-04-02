import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import * as moment from "moment";
import { Router } from '@angular/router';

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
  leaders: any[] = [];
  activateRegisterVip: boolean = false;
  summary: {} = {};
  submitted: boolean = false;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { 
    this.bsConfig = {
      dateInputFormat: 'DD/MM/YYYY', // Formato de fecha deseado
      // Otros parámetros de configuración opcionalmente
    };
  }
  ngOnInit(): void {
    this.loadJSON();
    const fechaHoy = new Date();
    this.registerForm = new FormGroup({
      pastor: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      lider: new FormControl('', [Validators.required]),
      fecha: new FormControl(moment().format('DD/MM/YYYY'), [Validators.required]),
      hombres: new FormControl('', [Validators.required]),
      mujeres: new FormControl('', [Validators.required]),
      somosHombres: new FormControl('', [Validators.required]),
      somosMujeres: new FormControl('', [Validators.required]),
      rocasHombres: new FormControl('', [Validators.required]),
      rocasMujeres: new FormControl('', [Validators.required]),
      teensHombres: new FormControl('', [Validators.required]),
      teensMujeres: new FormControl('', [Validators.required]),
      kidsHombres: new FormControl('', [Validators.required]),
      kidsMujeres: new FormControl('', [Validators.required]),
      vipHombres: new FormControl('', [Validators.required]),
      vipMujeres: new FormControl('', [Validators.required]),
      vipSomosHombres: new FormControl('', [Validators.required]),
      vipSomosMujeres: new FormControl('', [Validators.required]),
      vipRocasHombres: new FormControl('', [Validators.required]),
      vipRocasMujeres: new FormControl('', [Validators.required]),
      vipTeensHombres: new FormControl('', [Validators.required]),
      vipTeensMujeres: new FormControl('', [Validators.required]),
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

  setPastor() {
    const pastor = this.registerForm.get('pastor')?.value
    console.log('pastor seleccionado:', pastor)
    this.data.forEach((elements) => {
      if (elements.name === pastor) {
        this.teams = elements.teams;
      }
    });
  }

  getLeader() {
    const team = this.registerForm.get('team')?.value
    console.log('Team Seleccionado', team)
    console.log(this.teams)
    this.teams.forEach((elements) => {
      if (elements.name === team) {
        this.leaders = elements.members
      }
    })
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return this.submitted && (field?.invalid ?? false);
  }


  onSubmit() {
    this.submitted = true;
    console.log('Formulario:', this.registerForm)
    if (this.registerForm.valid) {
        const formData = this.registerForm.value;
        // Formatear la fecha antes de asignarla
        formData.fecha = moment(formData.fecha, 'DD/MM/YYYY').format('DD/MM/YYYY');
        localStorage.setItem('attendance', JSON.stringify(formData));
        const attendance = formData;
        this.getResumeAttendance(attendance);
        this.router.navigate(['/summary']);
    } else {
        console.log('Formulario inválido');
    }
}

  getResumeAttendance(attendance: any) {
    const totalFamilies = attendance.hombres + attendance.mujeres
    const totalSomos = attendance.somosHombres + attendance.somosMujeres
    const totalRocas = attendance.rocasHombres + attendance.rocasMujeres
    const totalTeens = attendance.teensHombres + attendance.teensMujeres
    const totalKids = attendance.kidsHombres + attendance.kidsMujeres
    const totalAttendance = totalFamilies + totalSomos + totalRocas + totalTeens + totalKids

    const totalVipFamilies = attendance.vipHombres + attendance.vipMujeres
    const totalVipSomos = attendance.vipSomosHombres + attendance.vipSomosMujeres
    const totalVipRocas = attendance.vipRocasHombres + attendance.vipRocasMujeres
    const totalVipTeens = attendance.vipTeensHombres + attendance.vipTeensMujeres
    const totalVip = totalVipFamilies + totalVipSomos + totalVipRocas + totalVipTeens

    const total = totalAttendance + totalVip

    const summary = {
      totalFamilies,
      totalSomos,
      totalRocas,
      totalTeens,
      totalKids,
      totalAttendance,
      totalVipFamilies,
      totalVipSomos,
      totalVipRocas,
      totalVipTeens,
      totalVip,
      total
    }
    localStorage.setItem('summary', JSON.stringify(summary))
    this.summary = summary
    return summary
  }

}
