import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

interface IIconButton {
  icon: ReactElement;
  onClick?: () => void;
}

const StyledButton = styled.button`
  all: unset;
  padding: 12px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 15px;
  }
`;

export const IconButton: FC<IIconButton> = ({ icon, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {icon}
    </StyledButton>
  );
};
