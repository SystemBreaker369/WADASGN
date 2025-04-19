import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: var(--color-button);
  color: var(--color-text-button-and-back);
  padding: 40px 0 20px;
  font-size: 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
`;

export const FooterHeading = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterLink = styled.a`
  color: var(--color-text-button-and-back);
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const SocialIcon = styled.a`
  color: var(--color-text-button-and-back);
  text-decoration: none;
  font-size: 16px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--color-text-button-and-back);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-text-button-and-back);
    color: var(--color-button);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 20px 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-size: 14px;
`;

export const FooterLegal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const LinkStyle = styled.a`
  text-decoration: underline;
  color: var(--color-text-button-and-back);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
