import { Pipe, PipeTransform } from '@angular/core';
import { getSelectedDateString } from '../utils';
import { TimeAvailable } from '../interfaces';

@Pipe({
  name: 'appointmentSelectedDate',
  standalone: true,
})
export class AppointmentSelectedDatePipe implements PipeTransform {
  transform(selectedTime: TimeAvailable) {
    if (!selectedTime || !selectedTime.date || !selectedTime.start) {
      return '';
    }
    return getSelectedDateString(
      new Date(`${selectedTime.date}T${selectedTime.start}`)
    );
  }
}
