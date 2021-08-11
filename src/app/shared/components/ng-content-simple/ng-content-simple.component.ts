import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-ng-content-simple',
  template: `
    <div>ng-content-simple works!</div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./ng-content-simple.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSimpleComponent {}
