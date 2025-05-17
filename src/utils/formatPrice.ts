const formatPrice = (price: number, currencyId: string, isUpSize: boolean = false): string => {
  var calculatedPrice = isUpSize ? price + 10 : price
  switch (currencyId) {
    case 'BRL':
      return calculatedPrice.toFixed(2).replace('.', ',');
    default:
      return calculatedPrice.toFixed(2);
  }
};

export default formatPrice;
