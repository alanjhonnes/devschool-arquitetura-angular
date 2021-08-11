import { Injectable } from '@angular/core';
import { Constructor } from 'src/app/shared/mixins/constructor.type';
import { WidgetTypes } from 'src/app/shared/types/user.type';
import { ProgressReportComponent } from '../components/progress-report/progress-report.component';
import { TableReportComponent } from '../components/table-report/table-report.component';
import { WidgetType } from '../widget.type';

export const widgetTypeToWidgetComponent: Record<
  WidgetTypes,
  Constructor<WidgetType>
> = {
  progress: ProgressReportComponent,
  table: TableReportComponent,
};

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  getWidgetType(widget: WidgetTypes): Constructor<WidgetType> {
    return widgetTypeToWidgetComponent[widget];
  }
}
