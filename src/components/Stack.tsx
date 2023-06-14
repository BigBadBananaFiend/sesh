/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";
import styled from "@emotion/styled";
import { IBoxProps } from "./Box";

interface IStackProps
  extends Pick<
    IBoxProps,
    "gap" | "justifyContent" | "alignItems" | "children"
  > {}

const StyledStack = styled.div<IStackProps>`
  display: flex;
  gap: ${(props) => `${props.gap}px` ?? "12px"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const StyledVStack = styled(StyledStack)`
  flex-direction: column;
`;

const StyledHStack = styled(StyledStack)`
  flex-direction: row;
`;

export const VStack: FC<IStackProps> = ({
  children,
  ...props
}: IStackProps) => <StyledVStack {...props}>{children}</StyledVStack>;

export const HStack: FC<IStackProps> = ({
  children,
  ...props
}: IStackProps) => <StyledHStack {...props}>{children}</StyledHStack>;
