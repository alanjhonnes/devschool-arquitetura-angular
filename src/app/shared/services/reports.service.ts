import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const tableData: TableData[] = [
  {
    bool: true,
    name: 'Alan',
    rating: 5,
  },
  {
    bool: true,
    name: 'Nathan',
    rating: 6,
  },
  {
    bool: true,
    name: 'Carlos',
    rating: 7,
  },
];

export interface TableData {
  name: string;
  rating: number;
  bool: boolean;
}

export interface ProgressData {
  primary: number;
  secondary: number;
}

export const progressData: ProgressData = {
  primary: 100,
  secondary: 50,
};

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  getTableData(): Observable<TableData[]> {
    return of(tableData).pipe(delay(2000));
  }

  getProgressData(): Observable<ProgressData> {
    return of(progressData).pipe(delay(2000));
  }
}
