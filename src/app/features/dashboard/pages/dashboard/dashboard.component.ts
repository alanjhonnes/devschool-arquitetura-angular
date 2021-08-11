import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { WidgetService } from '../../services/widget.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private widgetService: WidgetService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.userService
      .getCurrentUserStream()
      .pipe(delay(1), takeUntil(this.destroy$))
      .subscribe((user) => {
        if (!user) {
          this.router.navigateByUrl('/login');
        } else {
          const widgets = user.dashboardSetting.map((widget) =>
            this.widgetService.getWidgetType(widget)
          );
          widgets.forEach((widget) => {
            const componentFactory =
              this.componentFactoryResolver.resolveComponentFactory(widget);
            this.container.createComponent(componentFactory);
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
