import axios from '../../axios-orders';
import * as actionTypes from './actionsTypes'

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: name
  };
}

export const setIngredients = (ingredeints) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: ingredeints
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data))
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  }
}