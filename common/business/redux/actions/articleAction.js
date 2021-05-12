import { SET_ARTICLE_DETAILS, FETCH_ARTICLE_DETAILS } from "../actionTypes/articleActionTypes";
import {  API } from "../actionTypes/apiActionTypes";
import config from "../../../configuration/allPlatform"
export function fetchArticleDetails() {
  console.log("baseurl:", config.api.baseURL)
  return apiAction({
    url: config.api.baseURL + config.api.userPath,
    onSuccess: setArticleDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_ARTICLE_DETAILS
  });
}

export function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
