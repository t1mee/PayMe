const getValidateDate = (value) => {
  if (!(value.length === 7)) return true;

  const [_, month, year] = value.match(/(\d{2})\/(\d{4})/);
  const isMonthValid = +month <= 12 && +month > 0;
  const isValidYear = +year <= 2030 && +year >= 2022;

  return !(isValidYear && isMonthValid);
};

const useValidate = (name, formState) => {
  const {
    [name]: { value },
  } = formState;

  switch (name) {
    case "cardNum":
      return !(value.length === 19);
    case "date":
      return getValidateDate(value);
    case "cvv":
      return !(value.length === 3);
    case "amount":
      return !value.length;
  }
};

export default useValidate;
