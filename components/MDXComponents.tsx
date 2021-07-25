import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { CodeBlock } from './CodeBlock';

const MDXComponents = {
  a: Link,
  button: Button,
  code: CodeBlock
};

export default MDXComponents;
