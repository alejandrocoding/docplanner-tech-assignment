import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AppointmentHeaderDatePipe,
  AppointmentHeaderWeekdayPipe,
  AppointmentSelectedDatePipe,
  TimeAvailable,
  getNextDays,
} from '@doctoralia/ui-data';

@Component({
  selector: 'doctoralia-appointment-time-picker',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentHeaderDatePipe,
    AppointmentHeaderWeekdayPipe,
    AppointmentSelectedDatePipe,
  ],
  templateUrl: './appointment-time-picker.component.html',
  styleUrl: './appointment-time-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentTimePickerComponent {
  isExpanded = false;

  @Input({ required: true })
  timeSelected!: WritableSignal<TimeAvailable | null>;
  @Input({ required: true }) availabilities?: Map<
    string,
    { times: TimeAvailable[] }
  >;
  @Output() updateAppointmentEvt = new EventEmitter<TimeAvailable>();

  nextDays = getNextDays(15, new Date());

  selectTime(availability: TimeAvailable) {
    if (availability.taken) {
      return;
    }
    this.timeSelected.set(availability);
  }

  updateAppointment() {
    if (this.timeSelected()) {
      this.updateAppointmentEvt.emit(this.timeSelected() as TimeAvailable);
    }
  }
}
