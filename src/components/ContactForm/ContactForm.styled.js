import { Form } from 'formik';
import styled from 'styled-components';

export const FormThumb = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 13px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 400px;
  margin: auto;
  border: 4px inset black;
  border-radius: 13px;
  padding: 20px 28px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    margin-bottom: 28px;
    padding: 4px 8px;
    border-radius: 22px;
    text-transform: uppercase;
    background-color: antiquewhite;
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    margin-bottom: 13px;

    b {
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      color: darkred;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 2px 13px;
      border-radius: 13px;
    }
  }
`;
