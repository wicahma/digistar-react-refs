export const dateTimeFormatter = (date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const phoneNumberFormatter = (number) => {
  return number.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
};
