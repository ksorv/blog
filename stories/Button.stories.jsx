import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  onClick: {
    action: 'clicked'
  },
  loading: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: {
    action: 'clicked'
  },
  loading: true
};
