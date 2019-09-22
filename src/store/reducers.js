const intialState = {
  count: 0
};

export const todo = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};
