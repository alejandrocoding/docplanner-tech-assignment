import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

import { AvailabilityService, TimeAvailable } from '@doctoralia/ui-data';
import {
  AppointmentTimeInfoComponent,
  AppointmentTimePickerComponent,
  FooterComponent,
} from '@doctoralia/ui-components';
import { delay, finalize, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AppointmentTimeInfoComponent,
    AppointmentTimePickerComponent,
    FooterComponent,
  ],
  selector: 'doctoralia-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  doctorName = signal('Dr. Simeon Molas');
  isExpanded = signal(false);
  isUpdating = signal(false);
  timeSelected = signal<TimeAvailable>({
    date: '2024-02-21',
    start: '07:00:00',
    end: '07:30:00',
    taken: false,
  });
  highlightedTime = signal<TimeAvailable | null>(null);
  dateToFetch = signal(new Date());
  availabilities$ = toObservable(this.dateToFetch).pipe(
    switchMap((date) => this._availabilityService.getAvailabilitiesByDate(date))
  );

  constructor(private readonly _availabilityService: AvailabilityService) {}

  updateAppointment(timeSelected: TimeAvailable) {
    this.isUpdating.set(true);
    this._availabilityService
      .updateAppointment(timeSelected)
      .pipe(
        delay(3_000), // delay to show the animation, just for demo purposes
        finalize(() => {
          this.isUpdating.set(false);
          this.highlightedTime.set(null);
        })
      )
      .subscribe(() => {
        this.timeSelected.set(timeSelected);
        this.dateToFetch.set(new Date());
      });
  }
}
