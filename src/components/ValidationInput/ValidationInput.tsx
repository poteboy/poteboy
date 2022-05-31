import React from 'react';
import { Input, InputProps, Box, FormErrorMessage } from '@chakra-ui/react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Spacer } from '../Spacer/Spacer';

type ValidationInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T>;

export const ValidationInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  defaultValue,
  rules,
}: ValidationInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur }, formState: { errors } }) => {
        return (
          <Box width="100%">
            <Input
              placeholder={placeholder}
              {...control?.register(name)}
              fontSize="16px"
              onBlur={onBlur}
              onChange={onChange}
            />
            <Spacer size={8} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Box>
        );
      }}
    />
  );
};
