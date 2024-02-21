import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AppointmentSelectedDatePipe,
  TimeAvailable,
} from '@doctoralia-ui/ui-data';

@Component({
  selector: 'doctoralia-appointment-time-info',
  standalone: true,
  imports: [CommonModule, AppointmentSelectedDatePipe],
  templateUrl: './appointment-time-info.component.html',
  styleUrl: './appointment-time-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentTimeInfoComponent {
  @Input({ required: true }) isUpdating = false;
  @Input({ required: true }) timeSelected!: TimeAvailable;
}
