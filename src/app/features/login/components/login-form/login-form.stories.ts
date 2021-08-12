import { Meta, Story } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../../login.module';
import { LoginFormComponent } from './login-form.component';

export default {
  title: LoginFormComponent.name,
  component: LoginFormComponent,
} as Meta;

const template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [LoginModule],
  },
});

export const Default = template.bind({});
