import { Pipe, PipeTransform } from '@angular/core';
import { getWeekDayName, isToday, isTomorrow } from '../utils';

@Pipe({
  name: 'appointmentHeaderDate',
  standalone: true,
})
export class AppointmentHeaderDatePipe implements PipeTransform {
  transform(date: string) {
    return isToday(new Date(date), new Date())
      ? 'Today'
      : isTomorrow(new Date(date))
      ? 'Tomorrow'
      : getWeekDayName(new Date(date)).substring(0, 3);
  }
}
