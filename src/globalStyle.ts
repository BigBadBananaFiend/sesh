import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const globalStyle = css`
  ${emotionReset},

  p, span, input, button, text {
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    line-height: 1.75;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: 1.5;
  }

  h1 {
    font-size: 48.83px;
  }

  h2 {
    font-size: 39.06px;
  }

  h3 {
    font-size: 31.25px;
  }

  h4 {
    font-size: 25px;
  }

  h5 {
    font-size: 20px;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
