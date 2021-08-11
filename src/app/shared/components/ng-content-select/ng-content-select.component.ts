import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-ng-content-select',
  template: `
    <div class="top-left">
      <ng-content select="[top-left]"></ng-content>
    </div>
    <div class="top-right">
      <ng-content select="[top-right]"></ng-content>
    </div>
    <div class="bottom-left">
      <ng-content select="[bottom-left]"></ng-content>
    </div>
    <div class="bottom-right">
      <ng-content select="[bottom-right]"></ng-content>
    </div>
  `,
  styleUrls: ['./ng-content-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
