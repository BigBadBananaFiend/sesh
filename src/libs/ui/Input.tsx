import { FC, ReactElement, useState } from "react";
import { Box, HStack, VStack } from ".";
import styled from "@emotion/styled";
import { colors } from "..";
import React from "react";

interface IInputProps extends React.ComponentProps<"input"> {
  label?: string;
  id?: string;
  startAddon?: ReactElement;
}

interface IInputStyleProps {
  isFocused: boolean;
}

const UnstyledInput = styled.input`
  all: unset;
  width: 100%;
`;

const StyledOuterInput = styled.div<IInputStyleProps>`
  border: ${(props) =>
    props.isFocused
      ? `2px solid ${colors.blue.dark}`
      : `2px solid ${colors.blue.light}`};
  border-radius: 12px;
  padding: 10px;
`;

export const Input: FC<IInputProps> = ({
  name,
  label,
  startAddon,
  onBlur,
  onFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const addon = () => {
    if (!startAddon) {
      return;
    }
    return React.cloneElement(startAddon, {
      color: isFocused ? colors.blue.dark : colors.blue.regular,
    });
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <VStack width="100%">
      <label htmlFor={name}>{label}</label>
      <StyledOuterInput isFocused={isFocused}>
        <HStack>
          {startAddon && (
            <Box display="flex" justifyContent="center" alignItems="center">
              {addon()}
            </Box>
          )}
          <UnstyledInput
            onBlur={(e) => handleOnBlur(e)}
            onFocus={(e) => handleOnFocus(e)}
            name={name}
            {...props}
          />
        </HStack>
      </StyledOuterInput>
    </VStack>
  );
};
