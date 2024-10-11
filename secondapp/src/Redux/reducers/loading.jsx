const initialState = {
    isLoading:true // spinner state
  };
  export default function loadingReducer(state = initialState,action) {
    switch (action.type) {
      case "set_isLoading":
        return{
          ...state,
          isLoading:action.payload,
        }
      default:
          return state;
    }
  }
  