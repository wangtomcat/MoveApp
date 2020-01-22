import Http from '../../util/Http'
import api from '../../util/api'

const initialState = {

};

// 同步action 

//异步action

export default (state = initialState, action)=>{
  // console.log(action)
  switch (action.type) {
    case 'setMessageList':
      return {
        
      }
    default:
      return state;
  }
}