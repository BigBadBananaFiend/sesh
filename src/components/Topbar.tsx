import { FC } from "react";
import { Box, HStack, VStack, colors } from "../libs";
import styled from "@emotion/styled";
import { useMatch, useNavigate } from "react-router-dom";
import { routes } from "../routes";

interface IStyledNavBtnProps {
  isActive: boolean;
}

const StyledNavBtn = styled("button")<IStyledNavBtnProps>`
  all: unset;
  font-size: 20px;
  color: ${colors.red.regular};
  font-weight: ${(props) => (props.isActive ? 700 : 500)};
  /* text-decoration: ${(props) =>
    props.isActive && `underline 1px ${colors.red.dark}`}; */
  text-underline-offset: 4px;
  &:hover {
    cursor: pointer;
    color: ${(props) => !props.isActive && colors.red.light};
  }
`;

export const Topbar: FC = () => {
  const matchHeadlines = useMatch(routes.headlines);
  const matchSearch = useMatch(routes.search);
  const navigate = useNavigate();

  const handleNavigateToHeadlines = () => {
    if (!matchHeadlines) {
      navigate(routes.headlines);
    }
  };

  const handleNavigateToSearch = () => {
    if (!matchSearch) {
      navigate(routes.search);
    }
  };

  return (
    <Box
      width="100vw"
      height="80px"
      position="fixed"
      overflow="hidden"
      display="flex"
      alignItems="center"
      //boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      padding="0px 24px"
      id="topbar"
    >
      <HStack alignItems="center" justifyContent="space-between" width="100%">
        <h4>stale news.</h4>
        <HStack>
          <StyledNavBtn
            isActive={Boolean(matchHeadlines)}
            onClick={() => handleNavigateToHeadlines()}
          >
            headlines
          </StyledNavBtn>
          <StyledNavBtn
            isActive={Boolean(matchSearch)}
            onClick={() => handleNavigateToSearch()}
          >
            search
          </StyledNavBtn>
        </HStack>
      </HStack>
    </Box>
  );
};
