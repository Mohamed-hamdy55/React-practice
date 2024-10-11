const initialState = {
    lang: "en",
  };
  export default function languageReducer(state = initialState,action) {
    switch (action.type) {
      case "set_language":
        return{
          ...state,
          lang:action.payload,
        }
      default:
          return state;
    }
  }
  