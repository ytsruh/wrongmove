export const formatPrice = (price) => {
  const first = price.toString().charAt(0);
  if (first === "£") {
    return price.toString();
  }
  return "£" + price.toString();
};

export const parsePropertyType = (text) => {
  const first = text.toString().charAt(0).toUpperCase();
  const remainder = text.substring(1);
  return first + remainder;
};
