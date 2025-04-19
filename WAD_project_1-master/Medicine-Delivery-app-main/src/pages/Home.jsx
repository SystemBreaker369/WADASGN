import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  ButtonLink,
  FeaturesSection,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  TestimonialsSection,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  SectionTitle,
  SectionDescription,
  LogoContainer,
  AppName,
  ButtonContainer,
} from './Home.styled';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
              alt="MediDelivery logo"
              width="60"
              height="60"
            />
            <AppName>MediDelivery</AppName>
          </LogoContainer>

          <h1>Your Health, Delivered</h1>
          <p>
            Get medicines from your favorite pharmacies delivered right to your
            doorstep. Fast, reliable, and secure.
          </p>

          <ButtonContainer>
            {currentUser ? (
              <ButtonLink to="/pharmacies" primary>
                Shop Now
              </ButtonLink>
            ) : (
              <>
                <ButtonLink to="/login" primary>
                  Sign In
                </ButtonLink>
                <ButtonLink to="/register">Register</ButtonLink>
              </>
            )}
          </ButtonContainer>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose MediDelivery?</SectionTitle>
        <SectionDescription>
          We make it easy to get the medication you need, when you need it.
        </SectionDescription>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>🏪</FeatureIcon>
            <FeatureTitle>Multiple Pharmacies</FeatureTitle>
            <FeatureDescription>
              Choose from a wide range of pharmacies in your area to find the
              best prices and availability.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🚚</FeatureIcon>
            <FeatureTitle>Fast Delivery</FeatureTitle>
            <FeatureDescription>
              Get your medications delivered quickly and securely to your
              doorstep within hours.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>💊</FeatureIcon>
            <FeatureTitle>Wide Selection</FeatureTitle>
            <FeatureDescription>
              Find all types of medicines for different health conditions in one
              convenient place.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>Secure Ordering</FeatureTitle>
            <FeatureDescription>
              Your personal information and medical history are always protected
              with our secure platform.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <TestimonialsSection>
        <SectionTitle>What Our Customers Say</SectionTitle>
        <SectionDescription>
          Thousands of people have trusted MediDelivery for their medication
          needs.
        </SectionDescription>

        <FeatureGrid>
          <TestimonialCard>
            <TestimonialText>
              "MediDelivery has been a lifesaver for me. As someone with chronic
              health issues, getting my medications delivered regularly has made
              my life so much easier."
            </TestimonialText>
            <TestimonialAuthor>- Sarah M.</TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "The app is incredibly easy to use, and the delivery is always on
              time. I've recommended MediDelivery to all my family members."
            </TestimonialText>
            <TestimonialAuthor>- John D.</TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "Being able to compare prices across different pharmacies has
              saved me a lot of money. The service is reliable and the customer
              support is excellent."
            </TestimonialText>
            <TestimonialAuthor>- Rachel T.</TestimonialAuthor>
          </TestimonialCard>
        </FeatureGrid>

        <ButtonContainer center>
          <ButtonLink to={currentUser ? '/pharmacies' : '/register'} primary>
            {currentUser ? 'Start Shopping' : 'Join Now'}
          </ButtonLink>
        </ButtonContainer>
      </TestimonialsSection>
    </HomeContainer>
  );
};

export default Home;
