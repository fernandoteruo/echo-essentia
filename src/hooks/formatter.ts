export const maskedCurrency: (value: number) => string = (value: number) => {
  const valueStr = value.toString();
  const decimals = valueStr.slice(valueStr.length - 2);
  let full = valueStr
    .slice(0, valueStr.length - 2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.');
  full = full || '0';

  return `R$ ${full},${decimals}`;
};

const useCurrencyMasked: (value: number) => string = (value: number) =>
  maskedCurrency(value);

export default useCurrencyMasked;
