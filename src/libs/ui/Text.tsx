import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

export interface ITextProps {
  children: ReactNode;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: 400 | 700;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
}

const StyledText = styled.div<ITextProps>`
  font-weight: ${(props) => props.fontWeight ?? 400};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color ?? "black"};
  line-height: ${(props) => props.lineHeight};
`;

export const Text: FC<ITextProps> = ({
  as,
  fontWeight,
  fontSize,
  color,
  lineHeight,
  children,
}: ITextProps) => {
  const component = as ?? "span";

  return (
    <StyledText
      as={component}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </StyledText>
  );
};
