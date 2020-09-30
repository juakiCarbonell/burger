import * as actionTypes from "../actions/actionsTypes";

const initalState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const ING_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1,
        },
        totalPrice: state.totalPrice + ING_PRICES[action.payload],
        building: true
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1,
        },
        totalPrice: state.totalPrice - ING_PRICES[action.payload],
        building: true
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.payload.salad,
          bacon: action.payload.bacon,
          cheese: action.payload.cheese,
          meat: action.payload.meat,
        },
        error: false,
        totalPrice: 4,
        building: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }

    default:
      return state;
  }
};

export default reducer;
