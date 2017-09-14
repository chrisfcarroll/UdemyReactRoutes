import {FETCH_POSTS} from "../actions/fetch-posts";
import _ from 'lodash';

export default function PostsReducer(state={}, action){

  switch(action.type){
    case FETCH_POSTS :
      let posts = _.mapKeys(action.payload.data, 'id');
      return posts;

    default:
      return state;
  }
}