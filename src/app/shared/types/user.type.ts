export interface User {
  email: string;
  name: string;
  dashboardSetting: WidgetTypes[];
}

export type WidgetTypes = 'table' | 'progress';
