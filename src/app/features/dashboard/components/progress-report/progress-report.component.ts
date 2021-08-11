import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  ProgressData,
  ReportsService,
} from 'src/app/shared/services/reports.service';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressReportComponent implements OnInit {
  loading = false;
  values: ProgressData | null = null;

  constructor(
    private reportsService: ReportsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.reportsService
      .getProgressData()
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
