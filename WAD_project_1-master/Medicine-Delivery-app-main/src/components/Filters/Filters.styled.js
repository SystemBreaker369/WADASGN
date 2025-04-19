import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const FilterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;
