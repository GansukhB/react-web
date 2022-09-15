import axios from "axios";

export const sendRequest = async (url, method, data) => {
  console.log(process.env.REACT_APP_APP_ID);
  const request_url = process.env.REACT_APP_BASE_URL + url;

  const response = await axios({
    url: request_url,
    method,
    headers: {
      "app-id": process.env.REACT_APP_APP_ID,
      "Content-type": "application/json",
    },
    data,
  });

  console.log(response);
};
