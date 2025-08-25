import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientDashboardComponent } from '../patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from '../doctor-dashboard/doctor-dashboard.component';
import { VisitDashboardComponent } from '../visit-dashboard/visit-dashboard.component';
import { FeeDashboardComponent } from '../fee-dashboard/fee-dashboard.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [PatientDashboardComponent,DoctorDashboardComponent,VisitDashboardComponent,FeeDashboardComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
