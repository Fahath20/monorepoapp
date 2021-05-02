// inspired by https://leanpub.com/redux-book
import axios from "axios";
import { API } from "../actionTypes/apiActionTypes";
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/apiActions";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    inputData,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
    })
    .then(({ data }) => {

      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
