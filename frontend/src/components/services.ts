import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

export const fetchCitiesByCountry = async (country: string) => {
  let param;
  if (country === "") {
    param = {};
  } else {
    param = {
      country: country,
    };
  }
  const response = await axios({
    url: BASE_URL + "/cities",
    method: "GET",
    params: param,
  });
  return response;
};

export const fetchCountries = async () => {
  const response = await axios({
    url: BASE_URL+"/countries",
    method: "GET",
  })
  return response;
}
