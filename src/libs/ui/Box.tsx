import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

export interface IBoxProps {
  display?: "flex" | "block" | "inline" | "inline-block";
  margin?: string;
  padding?: string;
  flexDirection?: "column" | "row";
  backgroundColor?: string;
  gap?: string;
  justifyContent?: "start" | "center" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "start" | "end";
  justifySelf?: "start" | "end" | "center";
  alignSelf?: "start" | "end" | "center";
  children: ReactNode;
  width?: string;
  height?: string;
  position?: "relative" | "absolute" | "sticky" | "fixed";
  overflow?: "auto" | "hidden";
  borderRadius?: string;
  boxShadow?: string;
  id?: string;
}

export const StyledBox = styled.div<IBoxProps>`
  display: ${(props) => props.display ?? "block"};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  overflow: ${(props) => props.overflow};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
  box-sizing: border-box;
`;

export const Box: FC<IBoxProps> = ({ children, ...props }: IBoxProps) => (
  <StyledBox {...props}>{children}</StyledBox>
);
