import axios from 'axios';

export const FETCH_POSTS="FETCH_POSTS";

const RootUrl = "http://reduxblog.herokuapp.com/api/{route}?key=chrisfcarroll";

export function fetchPosts(){
  return {
    type : FETCH_POSTS,
    payload:axios.get( RootUrl.replace("{route}","posts") )
  }
}