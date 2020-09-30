const useCurrencyMasked: (value: number) => string = (value: number) => {
  const valueStr = value.toString();
  const decimals = valueStr.slice(valueStr.length - 2);
  const full = valueStr
    .slice(0, valueStr.length - 2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.');

  return `R$ ${full},${decimals}`;
};

export default useCurrencyMasked;
