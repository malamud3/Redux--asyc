import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData,fetchCartData } from './slice/cart-actions';

let isIntial = true;

function App() {
  const showCart = useSelector((state) => state.ui.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

useEffect(() =>{
  dispatch(fetchCartData());
},[dispatch])

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'panding',
  //         title: 'Sending...',
  //         message: 'Sending cart data!',
  //       })
  //     );
  //     const res = await fetch(
  //       'https://redux-ayc-default-rtdb.firebaseio.com/cart.json',
  //       {
  //         method: 'PUT',
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!res.ok) {
  //       throw new Error('Sending cart data failed');
  //     }

  //     // const resData = await res.json();
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'success',
  //         title: 'Success!',
  //         message: 'Sending cart data successfully!',
  //       })
  //     );
  //   };

  //   if (isIntial) {
  //     isIntial = false;
  //     return;
  //   }

  //   sendCartData().catch((err) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: `error`,
  //         title: 'Error!',
  //         message: 'Sending cart data failed!',
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
