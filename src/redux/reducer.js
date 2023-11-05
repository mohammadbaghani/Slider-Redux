import {
  counterIncrement,
  counterDecrement,
  counterRestart,
} from "./actionTypes";

const reducer = (state = 0, action) => {


  if(state===3){
    return 0;
  }
  if(state<-1){
    return 0;
  }


  switch (action.type) {
    case counterIncrement: {
      return state + 1;
    }
    case counterDecrement: {
      return state - 1;
    }
    case counterRestart: {
      return 0;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
