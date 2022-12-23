import React, { useEffect } from "react";
import {
  Input,
  InputProps,
  FormLabel,
  FormErrorMessage,
  Text,
  FormControl,
  FormLabelProps,
} from "@chakra-ui/react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Spacer } from "../Spacer/Spacer";

export type TextInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T> & {
    label?: string;
  };

export const TextInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  defaultValue,
  rules,
  value,
  label,
  ...style
}: TextInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => {
        const errorMessage = (() => {
          const _message = errors[name]?.message;
          if (typeof _message === "string") return _message;
        })();
        const isInvalid = !!errors[name]?.message;
        return (
          <FormControl w="100%" isInvalid={isInvalid}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input
              placeholder={placeholder}
              {...control?.register(name)}
              fontSize="16px"
              onBlur={onBlur}
              onChange={onChange}
              {...style}
              isInvalid={isInvalid}
              id={name}
            />
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
