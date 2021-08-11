import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Injector,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  addComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      PureComponentComponent
    );
    // const componentRef = factory.create(this.injector);
    // const instance = componentRef.instance;
    // instance.open = Math.random() >= 0.5;
    // instance.count = Math.floor(Math.random() * 1000);
    // this.container.insert(componentRef.hostView);
    this.container.createComponent(factory, undefined, this.injector);
    // this.viewContainerRef.insert(componentRef.hostView);
    // this.viewContainerRef.createComponent(factory, undefined, this.injector);
  }

  removeComponent(): void {
    this.container.remove();
  }
}
