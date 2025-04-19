import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 80px;
  }
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: var(--color-text-main);
  margin: 0 auto;
  padding: 40px 20px;

  a {
    color: var(--color-button);
    text-decoration: underline;
    margin-left: 5px;

    &:hover {
      color: var(--color-button-hover);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const PharmacyMedicineWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const CartPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text-and-icon);
    align-self: flex-end;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }
  }

  button {
    align-self: center;
    width: 100%;
    max-width: 300px;

    @media screen and (min-width: 768px) {
      align-self: flex-end;
      width: auto;
    }
  }
`;
