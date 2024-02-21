export interface AvailabilityResponse {
  Start: string;
  End: string;
  Taken?: boolean;
}

export interface Availability {
  weekday: string;
  day: string;
  times: TimeAvailable[];
}

export interface TimeAvailable {
  date: string;
  start: string;
  end: string;
  taken: boolean;
}
