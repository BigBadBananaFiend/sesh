/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";
import styled from "@emotion/styled";
import { IBoxProps, StyledBox } from "./Box";

interface IStackProps
  extends Pick<
    IBoxProps,
    "gap" | "justifyContent" | "alignItems" | "children" | "width" | "height"
  > {}

const StyledStack = styled(StyledBox)<IStackProps>`
  display: flex;
`;

const StyledVStack = styled(StyledStack)`
  flex-direction: column;
`;

const StyledHStack = styled(StyledStack)`
  flex-direction: row;
`;

export const VStack: FC<IStackProps> = ({
  gap,
  children,
  ...props
}: IStackProps) => (
  <StyledVStack gap={gap ?? "12px"} {...props}>
    {children}
  </StyledVStack>
);

export const HStack: FC<IStackProps> = ({
  gap,
  children,
  ...props
}: IStackProps) => (
  <StyledHStack gap={gap ?? "12px"} {...props}>
    {children}
  </StyledHStack>
);
