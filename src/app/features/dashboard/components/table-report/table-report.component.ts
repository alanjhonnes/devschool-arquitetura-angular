import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  ReportsService,
  TableData,
} from 'src/app/shared/services/reports.service';

@Component({
  selector: 'app-table-report',
  templateUrl: './table-report.component.html',
  styleUrls: ['./table-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableReportComponent implements OnInit {
  loading = false;
  values: TableData[] = [];

  displayedColumns: Array<keyof TableData> = ['name', 'rating', 'bool'];
  constructor(
    private reportsService: ReportsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.reportsService
      .getTableData()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (values) => {
          this.values = values;
          this.changeDetectorRef.markForCheck();
        },
      });
  }
}
