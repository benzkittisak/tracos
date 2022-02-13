import axios from "axios";

const apiKey = 'Bearer Gcj63FQ3yW0r(nMfyXTAnRm8iCJieEvD5)05vLxnYXFpZfI2u5RdjGN42Wla6GH4Ovg2o)pU9gtAAxDQrRbpyXm=====2';


export const getEventList = (setData) => {
  let api = axios({
    method: "GET",
    url: "https://tatapi.tourismthailand.org/tatapi/v5/events?numberOfResult=10&pagenumber=1&filterByUpdateDate=2021/01/30-2022/01/05",
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api.then((res) => {
    setData(res.data.result);
  });
};

export const getRecommandedRouteList = (setData) => {
  let api = axios({
    method: "GET",
    url: "https://tatapi.tourismthailand.org/tatapi/v5/routes?region=C",
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api.then((res) => {
    setData(res.data.result);
  });
};

export const getPlaceSearch = (
  setData,
  category = "",
  keyword = "",
  provincename = ""
) => {
  let api = axios({
    method: "GET",
    url: `https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=${keyword}&categorycodes=${category.toUpperCase()}&provinceName=${provincename}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api
    .then((res) => {
      return setData(res.data.result);
    })
    .catch((error) => console.log(error));

  return [];
};


export const getAccommodationDetail = (setData , placeType ,  placeID) => {
  let api = axios({
    method: "GET",
    url: `https://tatapi.tourismthailand.org/tatapi/v5/${placeType}/${placeID}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api
    .then((res) => {
      return setData(res.data.result);
    })
    .catch((error) => console.log(error));

  return [];
}

export const getEventDetali = (setData ,  eventID) => {
  let api = axios({
    method: "GET",
    url: `https://tatapi.tourismthailand.org/tatapi/v5/events/${eventID}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api
    .then((res) => {
      return setData(res.data.result);
    })
    .catch((error) => console.log(error));

  return [];
}

export const getRouteDetail = (setData ,  routeID) => {
  let api = axios({
    method: "GET",
    url: `https://tatapi.tourismthailand.org/tatapi/v5/routes/${routeID}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:apiKey,
      "Accept-Language": "TH",
    },
  });

  api
    .then((res) => {
      return setData(res.data.result);
    })
    .catch((error) => console.log(error));

  return [];
}