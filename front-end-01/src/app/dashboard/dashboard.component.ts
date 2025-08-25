import { Component } from '@angular/core';
import { AdminPageComponent } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminPageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
