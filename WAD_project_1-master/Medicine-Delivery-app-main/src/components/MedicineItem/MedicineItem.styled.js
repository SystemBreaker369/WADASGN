import styled from 'styled-components';

export const MedicineItemStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 0 100%;
  max-width: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px;
  background-color: var(--color-background-light);
  transition: all 0.3s ease;

  @media screen and (min-width: 480px) {
    flex: 1 0 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    flex: 1 0 calc(33.33% - 20px);
    max-width: calc(33.33% - 20px);
  }

  @media screen and (min-width: 1200px) {
    flex: 1 0 calc(25% - 23px);
    max-width: calc(25% - 23px);
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px;
    transform: translateY(-2px);
  }
`;

export const CategoryBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  background-color: var(--color-button);
  color: var(--color-text-button-and-back);
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
  align-self: center;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${MedicineItemStyle}:hover & {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    height: 120px;
    width: 120px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  & > h3 {
    color: var(--color-button-hover);
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.3;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  & > p {
    color: var(--color-text-and-icon);
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      font-size: 13px;
    }
  }
`;

export const PriceQuantityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-and-icon);
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
