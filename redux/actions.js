import { API_KEY } from "../secret";

export const TO_TESTING = "TO_TESTING";
export const toTesting = () => ({
  type: TO_TESTING
});

export const SET_STORIES = "SET_STORIES";
export const setStories = stories => ({
  type: SET_STORIES,
  stories
});

export const fetchNews = publication => dispatch => {
  fetch(
    `https://newsapi.org/v1/articles?source=${publication}&apiKey=${API_KEY}`
  )
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
        return;
      }
      return response.json();
    })
    .then(json => {
      console.log("response from server: ", json.articles);
      dispatch(setStories(json.articles));
    });
};
