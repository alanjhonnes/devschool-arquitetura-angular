import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { NgContentSelectComponent } from './ng-content-select.component';

export default {
  title: 'NgContentSelectComponent',
  component: NgContentSelectComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta<NgContentSelectComponent>;

const Template: Story<NgContentSelectComponent> = (
  args: NgContentSelectComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
<app-ng-content-select>
  <div top-left>TOP LEFT</div>
  <div top-right>TOP RIGHT</div>
  <div bottom-left>BOTTOM LEFT</div>
  <app-pure-component bottom-right></app-pure-component>
</app-ng-content-select>
`,
});

export const Basic = Template.bind({});
Basic.args = {};
