import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Normal = () => <Input placeholder="Hello" />;
export const Search = () => <Input search placeholder="search" />;
