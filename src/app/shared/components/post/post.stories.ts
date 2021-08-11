import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { PostComponent } from './post.component';

export default {
  title: 'Mixins - PostComponent',
  component: PostComponent,
} as Meta<PostComponent>;

const Template: Story<PostComponent> = (args: PostComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  //   template: `
  //   <app-post
  //   [entityId]="entityId"
  //   [content]="content"
  //   [isLiked]="isLiked"
  //   [isClapped]="isClapped"
  //   [likes]="likes"
  //   [claps]="claps"
  //   (like)="like($event)"
  //   (unlike)="unlike($event)"
  //   (clap)="clap($event)"
  // ></app-post>
  // `,
});

export const Basic = Template.bind({});
Basic.args = {
  entityId: '1',
  content: 'My Post content',
  isLiked: false,
  isClapped: true,
  likes: 100,
  claps: 200,
};
