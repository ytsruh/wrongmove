export const formatPrice = (price) => {
  const first = price.toString().charAt(0);
  if (first === "£") {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "£" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const parsePropertyType = (text) => {
  const first = text.toString().charAt(0).toUpperCase();
  const remainder = text.substring(1);
  return first + remainder;
};

export const thousandsFormatting = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncate = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

export const formatCreatedAt = (date) => {
  const slice = date.slice(0, 10);
  let r = slice.replaceAll("-", "/");
  let [yyyy, mm, dd] = r.split("/");
  return `${dd}/${mm}/${yyyy}`;
};

export const capitaliseEachWord = (string) => {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};
