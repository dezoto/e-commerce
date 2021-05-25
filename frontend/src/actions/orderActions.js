import * as actions from "../constants/orderContants";
import * as action from "../constants/cartConstants";
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: actions.ORDER_CREATE_REQUEST, payload: order });
  try {
      const {userSignin: { userInfo}} = getState();
      const { data } = await axios.post('/api/orders', order, {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      });
      dispatch({ type: actions.ORDER_CREATE_SUCCESS, payload: data.order})
      dispatch({ type: action.CART_EMPTY})
      localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: actions.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
