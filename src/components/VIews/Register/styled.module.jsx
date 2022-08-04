import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & button {
    padding: 5px 20px;
    border-radius: 5px;

    background-color: #acacac;
    color: white;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 1px;

    border: none;
    cursor: pointer;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    text-shadow: 0 0 10px #ffffff;
  }

  & .error {
    margin-top: 20px;

    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 300;
    color: red;

    text-decoration: inherit;

    text-shadow: 1px 1px 0 white;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const LabelName = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #5f5f5f;

  text-decoration: inherit;

  text-shadow: 1px 1px 0 #7a7a7a;
`;
