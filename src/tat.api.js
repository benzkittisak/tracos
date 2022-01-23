import axios from "axios";

export const getEventList = (setData) => {
  let api = axios({
    method: "GET",
    url: "https://tatapi.tourismthailand.org/tatapi/v5/events?numberOfResult=10&pagenumber=1&filterByUpdateDate=2021/01/30-2022/01/05",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer Gcj63FQ3yW0r(nMfyXTAnR)DP2TZlmeNiTIWnamyKcfWWSI7lB2dLRpw1iS6dd6jAaTlE1eXwYFItfXLK6TeEOm=====2",
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
      Authorization:
        "Bearer Gcj63FQ3yW0r(nMfyXTAnR)DP2TZlmeNiTIWnamyKcfWWSI7lB2dLRpw1iS6dd6jAaTlE1eXwYFItfXLK6TeEOm=====2",
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
      Authorization:
        "Bearer Gcj63FQ3yW0r(nMfyXTAnR)DP2TZlmeNiTIWnamyKcfWWSI7lB2dLRpw1iS6dd6jAaTlE1eXwYFItfXLK6TeEOm=====2",
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
      Authorization:
        "Bearer Gcj63FQ3yW0r(nMfyXTAnR)DP2TZlmeNiTIWnamyKcfWWSI7lB2dLRpw1iS6dd6jAaTlE1eXwYFItfXLK6TeEOm=====2",
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