type Currency = 'USD' | 'EUR' | 'GBP' | 'BDT';

export const formatPrice = (price: number | string, currency: Currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation: 'standard',
  }).format(Number(price));
