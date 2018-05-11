import fetchJSonp from 'fetch-jsonp';

export const FETCH_PICTURES = 'FETCH_PICTURES';

export const fetchPictures = (search_term) => {
  return (dispatch) => {
    const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${search_term}&format=json`;
    fetchJSonp(url, { jsonpCallbackFunction: 'jsonFlickrFeed'})
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch({
          type: FETCH_PICTURES,
          payload: json.items
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}
