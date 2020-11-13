const formatValue = (value: number): string =>
  Intl.NumberFormat('br-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value); // TODO

export default formatValue;
