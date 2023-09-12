import { styled, createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;

}
`;

export const Box = styled.div`
  margin: 22px auto;
  padding: 40px;
  width: 666px;
  height: 100%;
  border: 4px solid #000;
  border-radius: 13px;
  background-color: lightslategray;
  text-align: center;

  h1,
  h2 {
    color: midnightblue;
    border: 2px solid midnightblue;
    background-color: lightgoldenrodyellow;
    max-width: max-content;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 28px;
  }

  b {
    color: midnightblue;
    font-size: 15px;
  }
`;
