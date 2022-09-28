import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseTemplate, { IBaseInterface } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/CatCard',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseInterface;
