import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import {
  Availability,
  AvailabilityResponse,
  TimeAvailable,
} from '../interfaces';
import { getDateYYYYMMDD, getPrevMonday } from '../utils';

@Injectable({ providedIn: 'root' })
export class AvailabilityService {
  private readonly BASE_URL =
    'https://draliatest.azurewebsites.net/api/availability';

  constructor(private readonly _http: HttpClient) {}

  getAvailabilitiesByDate(date: Date) {
    const formattedDate = getDateYYYYMMDD(getPrevMonday(date));
    return this._http
      .get<AvailabilityResponse[]>(
        `${this.BASE_URL}/GetWeeklySlots/${formattedDate}`
      )
      .pipe(
        map((availabilities) =>
          this._fromAvailabilityResponseToMap(availabilities)
        )
      );
  }

  updateAppointment(timeSelected: TimeAvailable) {
    return this._http.post<void>(`${this.BASE_URL}/BookSlot`, {
      Start: `${timeSelected.date} ${timeSelected.start}`,
      End: `${timeSelected.date} ${timeSelected.end}`,
      Comments: 'this is a comment',
      Patient: {
        Name: 'Alex',
        SecondName: 'Lora',
        Email: 'alejandrofpo@gmail.com',
        Phone: '666999666',
      },
    });
  }

  private _fromAvailabilityResponseToMap(res: AvailabilityResponse[]) {
    const transformedMap = new Map<string, { times: Availability['times'] }>();
    res.forEach((r) => {
      const [key, start] = r.Start.split('T');
      const end = r.End.split('T')[1];
      const availability = {
        times: [
          { date: key, start, end, taken: r.Taken ?? false } as TimeAvailable,
        ],
      } as Availability;

      transformedMap.set(key, {
        times: [
          ...(transformedMap.get(key)?.times ?? []),
          ...availability.times,
        ],
      });
    });
    return transformedMap;
  }
}
