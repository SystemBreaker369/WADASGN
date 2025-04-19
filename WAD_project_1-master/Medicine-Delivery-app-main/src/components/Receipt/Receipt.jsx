import React, { useRef } from 'react';
import {
  ReceiptContainer,
  ReceiptHeader,
  ReceiptBody,
  ReceiptFooter,
  ReceiptTitle,
  CustomerInfo,
  InfoLabel,
  InfoValue,
  ItemList,
  ItemRow,
  ItemName,
  ItemPrice,
  TotalAmount,
  ReceiptActions,
  DownloadButton,
  CloseButton,
  OrderNumber,
  ReceiptDate,
  ReceiptOverlay,
  ItemQuantity,
  PharmacyInfo,
} from './Receipt.styled';

export const Receipt = ({ order, onClose }) => {
  const receiptRef = useRef(null);

  const { inBasket, user, createDate } = order;
  const orderDate = new Date(createDate);
  const formattedDate = orderDate.toLocaleDateString();
  const formattedTime = orderDate.toLocaleTimeString();

  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0')}`;

  // Calculate total price
  const totalPrice = inBasket?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Get unique pharmacies
  const pharmacies = [...new Set(inBasket.map(item => item.pharmacy))];

  const handleDownload = () => {
    const content = document.getElementById('receipt-content');

    // Create styles for the PDF
    const style = document.createElement('style');
    style.textContent = `
            body { font-family: Arial, sans-serif; }
            .receipt { padding: 20px; max-width: 400px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 20px; }
            .title { font-size: 24px; font-weight: bold; }
            .order-number { margin-top: 10px; }
            .date { margin-top: 5px; color: #666; }
            .customer { margin: 15px 0; }
            .info-row { margin: 5px 0; }
            .label { font-weight: bold; }
            .items { margin: 20px 0; }
            .item { display: flex; justify-content: space-between; margin: 8px 0; }
            .item-name { flex: 2; }
            .item-qty { flex: 1; text-align: center; }
            .item-price { flex: 1; text-align: right; }
            .pharmacy { margin-top: 5px; font-style: italic; }
            .total { display: flex; justify-content: space-between; font-weight: bold; margin-top: 15px; padding-top: 10px; border-top: 1px solid #ccc; }
            .footer { margin-top: 30px; text-align: center; font-size: 14px; color: #666; }
        `;

    // Create print window
    const printWindow = window.open('', '_blank');
    printWindow.document.write(
      '<html><head><title>MediDelivery Receipt</title></head><body>'
    );
    printWindow.document.write('<div class="receipt">');
    printWindow.document.write(content.innerHTML);
    printWindow.document.write(
      '<div class="footer">Thank you for shopping with MediDelivery!</div>'
    );
    printWindow.document.write('</div></body></html>');

    // Add styles
    printWindow.document.head.appendChild(style);

    // Print
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <ReceiptOverlay>
      <ReceiptContainer ref={receiptRef}>
        <div id="receipt-content">
          <ReceiptHeader>
            <ReceiptTitle>MediDelivery Receipt</ReceiptTitle>
            <OrderNumber>Order: {orderNumber}</OrderNumber>
            <ReceiptDate>
              Date: {formattedDate} {formattedTime}
            </ReceiptDate>
          </ReceiptHeader>

          <ReceiptBody>
            <CustomerInfo>
              <h3>Customer Information</h3>
              <div>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>{user.name}</InfoValue>
              </div>
              <div>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{user.email}</InfoValue>
              </div>
              <div>
                <InfoLabel>Phone:</InfoLabel>
                <InfoValue>{user.tel}</InfoValue>
              </div>
              <div>
                <InfoLabel>Delivery Address:</InfoLabel>
                <InfoValue>{user.address}</InfoValue>
              </div>
            </CustomerInfo>

            <PharmacyInfo>
              <h3>Purchased From:</h3>
              {pharmacies.map(pharmacy => (
                <div key={pharmacy}>{pharmacy}</div>
              ))}
            </PharmacyInfo>

            <h3>Order Items</h3>
            <ItemList>
              {inBasket.map(item => (
                <ItemRow key={item.id}>
                  <ItemName>{item.medicine}</ItemName>
                  <ItemQuantity>x{item.quantity}</ItemQuantity>
                  <ItemPrice>
                    {(item.price * item.quantity).toFixed(2)} €
                  </ItemPrice>
                </ItemRow>
              ))}
            </ItemList>

            <TotalAmount>
              <span>Total:</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </TotalAmount>
          </ReceiptBody>
        </div>

        <ReceiptFooter>
          <ReceiptActions>
            <DownloadButton onClick={handleDownload}>
              Download Receipt
            </DownloadButton>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </ReceiptActions>
        </ReceiptFooter>
      </ReceiptContainer>
    </ReceiptOverlay>
  );
};
