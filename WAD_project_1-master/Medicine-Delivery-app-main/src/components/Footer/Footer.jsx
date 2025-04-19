import {
  FooterStyle,
  LinkStyle,
  FooterContainer,
  FooterSection,
  FooterHeading,
  FooterLinks,
  FooterLink,
  FooterBottom,
  SocialLinks,
  SocialIcon,
  FooterLegal,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContainer>
        <FooterSection>
          <FooterHeading>MediDelivery</FooterHeading>
          <FooterLinks>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/blog">Health Blog</FooterLink>
            <FooterLink href="/partners">Pharmacy Partners</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Customer Service</FooterHeading>
          <FooterLinks>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/faq">FAQs</FooterLink>
            <FooterLink href="/shipping">Shipping Policy</FooterLink>
            <FooterLink href="/returns">Returns & Refunds</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Health Resources</FooterHeading>
          <FooterLinks>
            <FooterLink href="/medication-guide">Medication Guide</FooterLink>
            <FooterLink href="/interactions">Drug Interactions</FooterLink>
            <FooterLink href="/reminders">Medication Reminders</FooterLink>
            <FooterLink href="/consult">Ask a Pharmacist</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Download Our App</FooterHeading>
          <FooterLinks>
            <FooterLink href="/app/ios">iOS App</FooterLink>
            <FooterLink href="/app/android">Android App</FooterLink>
          </FooterLinks>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank">
              FB
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank">
              TW
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank">
              IG
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContainer>

      <FooterBottom>
        <FooterLegal>
          © 2025 MediDelivery. All rights reserved. |
          <FooterLink href="/privacy">Privacy Policy</FooterLink> |
          <FooterLink href="/terms">Terms of Service</FooterLink>
        </FooterLegal>
        <p>
          Developed by{' '}
          <LinkStyle href="https://github.com/raj562004" target="_blank">
            Raj Waingankar
          </LinkStyle>
        </p>
      </FooterBottom>
    </FooterStyle>
  );
};

export default Footer;
