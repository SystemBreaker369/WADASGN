import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/hero-background.jpg';

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    margin-right: 10px;
  }
`;

export const AppName = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: ${props => (props.center ? 'center' : 'center')};
  margin-top: ${props => (props.center ? '2rem' : '0')};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  min-width: 150px;
  text-align: center;

  ${props =>
    props.primary
      ? css`
          background-color: var(--color-button);
          color: white;

          &:hover {
            background-color: var(--color-button-hover);
            transform: translateY(-2px);
          }
        `
      : css`
          background-color: transparent;
          color: white;
          border: 2px solid white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }
        `}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FeaturesSection = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text-and-icon);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-text-and-icon);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-button-hover);
`;

export const FeatureDescription = styled.p`
  color: var(--color-text-and-icon);
  line-height: 1.6;
`;

export const TestimonialCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-and-icon);
  font-style: italic;
  margin-bottom: 1rem;
`;

export const TestimonialAuthor = styled.p`
  font-weight: 600;
  text-align: right;
  color: var(--color-button-hover);
`;
