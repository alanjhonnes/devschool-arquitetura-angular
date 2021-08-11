import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TableReportComponent } from './components/table-report/table-report.component';
import { ProgressReportComponent } from './components/progress-report/progress-report.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    TableReportComponent,
    ProgressReportComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
