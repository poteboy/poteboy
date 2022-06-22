import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ValidationInput as _ValidationInput, ValidationInputProps } from './ValidationInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().trim().required('This field is required'),
});

type Schema = { name: string };

const ValidationInput: React.FC = () => {
  const form = useForm<Schema>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  return <_ValidationInput name='name' {...form} />;
};

export default {
  title: 'ValidationInput',
  component: ValidationInput,
} as ComponentMeta<typeof ValidationInput>;

export const Default = <ValidationInput />;
