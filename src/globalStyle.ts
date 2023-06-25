import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const globalStyle = css`
  ${emotionReset},

  p, span, input, button, text {
    font-size: 18px;
    font-family: "PT Serif", serif;
    line-height: 1.75;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ultra", serif;
    line-height: 1.5;
  }

  h1 {
    font-size: 54.93px;
  }

  h2 {
    font-size: 43.95px;
  }

  h3 {
    font-size: 35.16px;
  }

  h4 {
    font-size: 28.13px;
  }

  h5 {
    font-size: 22.5px;
  }

  h6 {
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
`;
