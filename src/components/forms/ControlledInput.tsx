import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { TextInputField } from '@/components/ui/TextInput';

type Props<T extends FieldValues> = TextInputProps & {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export const ControlledInput = <T extends FieldValues>({ control, name, label, ...props }: Props<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
      <TextInputField label={label} value={value ? String(value) : ''} onChangeText={onChange} onBlur={onBlur} error={error?.message} {...props} />
    )}
  />
);
