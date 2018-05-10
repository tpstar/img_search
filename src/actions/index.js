import fetchJSonp from 'fetch-jsonp';

export const FETCH_PICTURES = 'FETCH_PICTURES';

export const fetchPictures = (search_term) => {
  const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${search_term}&format=json`
  let pictures;
  fetchJSonp(url, {
    jsonpCallbackFunction: 'jsonFlickrFeed'
  })
    .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log(json.items);
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
  // console.log(data);
  return {
    type: FETCH_PICTURES,
    payload: pictures
  }
}
