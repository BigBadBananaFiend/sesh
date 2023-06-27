import { FC } from "react";
import { Box, HStack, Newspaper, colors } from "../libs";
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
  text-underline-offset: 4px;
  &:hover {
    cursor: pointer;
    color: ${(props) => !props.isActive && colors.red.light};
  }
`;

export const Topbar: FC = () => {
  const matchHeadlines = useMatch(routes.headlines);
  const matchSearch = useMatch(routes.search);
  const matchFavorites = useMatch(routes.favorites);
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

  const handleNavigateToFavs = () => {
    if (!matchFavorites) {
      navigate(routes.favorites);
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
      padding="0px 24px"
      id="topbar"
    >
      <HStack alignItems="center" justifyContent="space-between" width="100%">
        <h4>stale news.</h4>
        <Newspaper size={70} />
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
          <StyledNavBtn
            isActive={Boolean(matchFavorites)}
            onClick={() => handleNavigateToFavs()}
          >
            favs
          </StyledNavBtn>
        </HStack>
      </HStack>
    </Box>
  );
};
