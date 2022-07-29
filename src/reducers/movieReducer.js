import sortedData from "./utils";

const initialState = {
  movies: false,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, movies: sortedData };
    default:
      return { ...state };
  }
}

export default movieReducer;
