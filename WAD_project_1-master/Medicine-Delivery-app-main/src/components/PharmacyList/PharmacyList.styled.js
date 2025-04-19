import styled from 'styled-components';

export const PharmacyBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--color-background-dark);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px;
  width: 100%;

  h2 {
    font-size: 20px;
    margin: 0;
    color: var(--color-text-and-icon);
    font-weight: 600;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 22px;
      text-align: left;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    flex: 1;
    max-width: 280px;
  }
`;

export const PharmacyListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: center;

  @media screen and (min-width: 480px) {
    gap: 15px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 12px;
    justify-content: flex-start;
  }
`;

export const PharmacyItem = styled.li`
  display: flex;
  align-items: center;
  width: auto;
`;

export const Button = styled.button`
  display: flex;
  width: auto;
  min-width: 120px;
  height: 40px;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  &:hover,
  &:focus {
    background: var(--color-button-hover);
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;
  }

  &:active {
    transform: translateY(0);
  }
`;
