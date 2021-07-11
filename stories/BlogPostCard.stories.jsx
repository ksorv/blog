import React from 'react';
import BlogPostCard from '../components/BlogPostCard';

export default {
  title: 'Components/BlogPostCard',
  component: BlogPostCard
};

const Template = (args) => <BlogPostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Heya Im the title for this one',
  summary: 'Ad in sunt tempor excepteur qui velit aliquip ipsum aliquip.',
  writtenOn: '2021-06-25',
  slug: 'title-slug'
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Deserunt sunt Lorem veniam officia occaecat.',
  summary:
    'Consequat excepteur voluptate incididunt et veniam id ut velit sit deserunt irure velit veniam.',
  writtenOn: '2021-06-26',
  updatedOn: '2021-06-27',
  slug: 'title-slugs'
};
