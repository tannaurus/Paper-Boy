import { API_KEY } from "../secret";

export const HANDLE_LOADING = "HANDLE_LOADING";
export const handleLoading = () => ({
  type: HANDLE_LOADING
});

export const HANDLE_REFRESH = "HANDLE_REFRESH";
export const handleRefresh = () => ({
  type: HANDLE_REFRESH
});

export const SET_STORIES = "SET_STORIES";
export const setStories = (stories, publication) => ({
  type: SET_STORIES,
  stories,
  publication
});

export const SET_HEADLINES = "SET_HEADLINES";
export const setHeadlines = headlines => ({
  type: SET_HEADLINES,
  headlines
});

export const SET_PUBLICATIONS = "SET_PUBLICATIONS";
export const setPublications = publications => ({
  type: SET_PUBLICATIONS,
  publications
});

export const fetchHeadlines = () => dispatch => {
  fetch(
    `https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
        return;
      }
      return response.json();
    })
    .then(json => {
      dispatch(setHeadlines(json));
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchNews = (publicationId, publication) => dispatch => {
  dispatch(handleLoading());
  fetch(
    `https://newsapi.org/v1/articles?source=${publicationId}&apiKey=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
        return;
      }
      return response.json();
    })
    .then(json => {
      dispatch(setStories(json.articles, { publication, publicationId }));
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchPublications = () => dispatch => {
  dispatch(handleLoading());
  fetch("https://newsapi.org/v1/sources?sortBy=popular")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
        return;
      }
      return response.json();
    })
    .then(json => {
      dispatch(setPublications(json.sources));
    });
};
