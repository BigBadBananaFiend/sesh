import * as RadixDialog from "@radix-ui/react-dialog";
import { FC, ReactElement, ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";
import { colors } from "../colors";

interface IDialogProps {
  trigger: ReactElement;
  children: ReactNode;
}

const StyledOveray = styled(RadixDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
`;

const StyledTrigger = styled(RadixDialog.Trigger)`
  all: unset;
`;

const StyledContent = styled(RadixDialog.Content)`
  background-color: ${colors.base.regular};
  border-radius: 12px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  max-height: 85vh;
  padding: 45px 55px;
  overflow-x: hidden;
`;

const StyledClose = styled(RadixDialog.Close)`
  all: unset;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 6px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 15px;
  }
`;

export const Dialog: FC<IDialogProps> = ({ trigger, children }) => (
  <RadixDialog.Root>
    <StyledTrigger>{trigger}</StyledTrigger>
    <RadixDialog.Portal>
      <StyledOveray />
      <StyledContent>
        <StyledClose>
          <AiOutlineClose color={colors.red.light} />
        </StyledClose>
        {children}
      </StyledContent>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
