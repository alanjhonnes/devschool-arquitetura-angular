import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ContentTriggerDirective } from './content-trigger.directive';

@Component({
  selector: 'app-content-trigger',
  templateUrl: './content-trigger.component.html',
  styleUrls: ['./content-trigger.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTriggerComponent<T = any> implements AfterViewInit {
  @ViewChild(ContentTriggerDirective)
  triggerDirective!: ContentTriggerDirective;

  triggerSomeEvent(data: T): void {
    console.log('triggered: ', data);
  }

  ngAfterViewInit() {
    console.log(this.triggerDirective);
  }
}
