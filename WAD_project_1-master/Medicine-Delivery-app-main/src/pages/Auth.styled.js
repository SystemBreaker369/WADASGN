import styled from 'styled-components';

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
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
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-button-hover);
`;

export const AuthHeader = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text-and-icon);
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-and-icon);
`;

export const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-button);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.85rem;
  background-color: var(--color-button);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--color-button-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  padding: 0.75rem;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 6px;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  text-align: center;
`;

export const AuthSwitch = styled.p`
  text-align: center;
  font-size: 0.95rem;
  margin-top: 1rem;
  color: var(--color-text-and-icon);

  a {
    color: var(--color-button);
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
