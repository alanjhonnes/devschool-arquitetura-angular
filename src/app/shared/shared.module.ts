import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecursiveComponent } from './components/recursive/recursive.component';
import { PureComponentComponent } from './components/pure-component/pure-component.component';
import { PostComponent } from './components/post/post.component';
import { NgContentSimpleComponent } from './components/ng-content-simple/ng-content-simple.component';
import { NgContentSelectComponent } from './components/ng-content-select/ng-content-select.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { CustomTemplateComponent } from './components/custom-template/custom-template.component';
import { ContentTriggerComponent } from './components/content-trigger/content-trigger.component';
import { ContentTriggerDirective } from './components/content-trigger/content-trigger.directive';

const sharedModules = [
  CommonModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTooltipModule,
  FormsModule,
  ReactiveFormsModule,
];

export const sharedComponents = [
  RecursiveComponent,
  PureComponentComponent,
  PostComponent,
  NgContentSimpleComponent,
  NgContentSelectComponent,
  DynamicComponent,
  CustomTemplateComponent,
  ContentTriggerComponent,
  ContentTriggerDirective,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule {}
