import React, { useEffect } from 'react';
import { Input, InputProps, Box, FormErrorMessage, Text, FormControl } from '@chakra-ui/react';
import { Controller, FieldValues, UseControllerProps, UseFormSetValue } from 'react-hook-form';
import { Spacer } from '../Spacer/Spacer';
import { colors } from '@src/styles';

type ValidationInputProps<T extends FieldValues> = InputProps & UseControllerProps<T>;

export const ValidationInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  defaultValue,
  rules,
  value,
  ...style
}: ValidationInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
        return (
          <Box width='100%'>
            <Input
              placeholder={placeholder}
              {...control?.register(name)}
              fontSize='16px'
              onBlur={onBlur}
              onChange={onChange}
              {...style}
              isInvalid={errors[name]?.message}
            />
            <Spacer size={8} />
            <Text color={colors.Danger.Main} fontSize='14px'>
              {errors[name]?.message}
            </Text>
          </Box>
        );
      }}
    />
  );
};
