import { Pipe, PipeTransform } from '@angular/core';
import { getDateDDMMM } from '../utils';

@Pipe({
  name: 'appointmentHeaderWeekday',
  standalone: true,
})
export class AppointmentHeaderWeekdayPipe implements PipeTransform {
  transform(date: string) {
    return getDateDDMMM(new Date(date));
  }
}
