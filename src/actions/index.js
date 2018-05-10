import axios from 'axios';

export const FETCH_PICTURES = 'FETCH_PICTURES';
'https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json'

export const fetchPictures = (search_term) => {
  const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${search_term}&format=json`
  const data = axios.get(url);
  return {
    type: FETCH_PICTURES,
    payload: data
  }
}
