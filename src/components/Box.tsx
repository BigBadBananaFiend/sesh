import { FC, ReactElement } from "react";
import styled from "@emotion/styled";

export interface IBoxProps {
  display?: "flex" | "block" | "inline";
  margin?: number;
  padding?: number;
  backgroundColor?: string;
  gap?: number;
  justifyContent?: "start" | "center" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "start" | "end";
  children: ReactElement;
}

export const StyledBox = styled.div<IBoxProps>`
  display: ${(props) => props.display ?? "block"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  gap: ${(props) => `${props.gap}px`};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const Box: FC<IBoxProps> = ({ children, ...props }: IBoxProps) => (
  <StyledBox {...props}>{children}</StyledBox>
);
