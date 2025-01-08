import { useSelector } from 'react-redux';
import { uiActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://redux-ayc-default-rtdb.firebaseio.com/cart.json'
      );
      if (!res.ok) {
        throw Error('Could not get data!');
      }
      const data = await res.json();

      return data;
    };
    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: `error`,
          title: 'Error!',
          message: 'Geting cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'panding',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendReq = async () => {
      const res = await fetch(
        'https://redux-ayc-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error('Sending cart data failed');
      }
    };
    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: `error`,
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
