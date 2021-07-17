import { FC } from 'react';
import Helmet from 'react-helmet';

export const Meta: FC<{ title: string }> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);
