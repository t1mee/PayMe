const useSendData = (data, setMessage) => async () => {
  const cardData = {};
  Object.keys(data).map((key) => (cardData[key] = data[key].value));

  fetch("http://localhost:8080/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(cardData),
  })
    .then((response) => response.json())
    .then((card) => {
      let parseRes = "";
      Object.keys(card).map(
        (key) => (parseRes = parseRes + `${key}: ${card[key]} `),
      );
      setMessage(parseRes);
    });
};

export default useSendData;
