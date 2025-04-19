import styled from 'styled-components';

export const FormCartWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-dark);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
  height: auto;
  width: 100%;

  @media screen and (min-width: 1024px) {
    min-width: 320px;
    max-width: 400px;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-text-and-icon);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: var(--color-filter-field);
  font-size: 14px;
  font-weight: 400;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-button);
  }

  &:invalid {
    border-color: #ff6b6b;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 45px;
  }
`;
