import styled from 'styled-components';

export const MedicineBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: var(--color-background-dark);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    flex: 3;
  }
`;

export const MedicineListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 0 20px 0;
  padding: 0;
  list-style-type: none;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    gap: 25px;
    margin-bottom: 30px;
  }
`;

export const MedicineSectionTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 15px 0;
  color: var(--color-text-and-icon);
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--color-button);
  color: var(--color-text-and-icon);
  font-weight: 600;

  &:first-of-type {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 22px;
    margin: 25px 0 20px;
  }
`;

export const NoResultsMessage = styled.div`
  padding: 30px 20px;
  text-align: center;
  font-size: 16px;
  color: var(--color-text-and-icon);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 40px 20px;
  }
`;
