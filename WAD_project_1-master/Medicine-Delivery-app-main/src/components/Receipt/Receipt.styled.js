import styled from 'styled-components';

export const ReceiptOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ReceiptContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const ReceiptHeader = styled.div`
  padding: 20px;
  background-color: var(--color-button);
  color: var(--color-text-button-and-back);
  text-align: center;
`;

export const ReceiptTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

export const OrderNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const ReceiptDate = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

export const ReceiptBody = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

export const CustomerInfo = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--color-button-hover);
  }

  div {
    display: flex;
    margin-bottom: 5px;
  }
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  min-width: 130px;
`;

export const InfoValue = styled.span`
  flex: 1;
`;

export const PharmacyInfo = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--color-button-hover);
  }

  div {
    margin-bottom: 5px;
  }
`;

export const ItemList = styled.div`
  margin: 15px 0;
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const ItemName = styled.div`
  flex: 3;
  font-weight: 500;
`;

export const ItemQuantity = styled.div`
  flex: 1;
  text-align: center;
`;

export const ItemPrice = styled.div`
  flex: 1;
  text-align: right;
  font-weight: 600;
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid var(--color-button);
`;

export const ReceiptFooter = styled.div`
  padding: 15px 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
`;

export const ReceiptActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DownloadButton = styled.button`
  background-color: var(--color-button);
  color: var(--color-text-button-and-back);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export const CloseButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
