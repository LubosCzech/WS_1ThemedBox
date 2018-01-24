import React from 'react';
import styled, { ThemeProvider,css } from 'styled-components';
import theme from 'styled-theming';

const white = "#fff";
const black = "#000";

const boxStyles = theme('mode', {
  light: css`
    background: ${white};
    color: ${black};
  `,
  dark: css`
    background: ${black};
    color: ${white};
  `,
});

const fontSize = theme('size', {
  normal: '1em',
  large: '2em',
});

const Box = styled.div`
  ${boxStyles};
  font-size: ${fontSize};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2px 16px;
  border-radius: 5px;
  width:300px;
  margin:auto;
  position:relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Hello = ({ name }) =>{
  return (
    <ThemeProvider theme={{ mode: 'dark', size:'large' }}>
      <Box>
        Hello {name}!
      </Box>
    </ThemeProvider>
  );
}