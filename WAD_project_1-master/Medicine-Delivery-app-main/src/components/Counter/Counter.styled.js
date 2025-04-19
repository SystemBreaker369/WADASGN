import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 0;

  &:hover {
    background-color: var(--color-button-hover);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const InputQuantity = styled.input`
  width: 50px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  /* Remove arrows from number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    border-color: var(--color-button);
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 35px;
    font-size: 16px;
  }
`;
