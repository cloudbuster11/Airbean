import { useDispatch } from 'react-redux';

import { addProduct, removeProduct } from '../../actions/cartActions'

export default function Index() {
  const dispatch = useDispatch();

  const click = (productId) => {
    console.log('add ' + productId)
    dispatch(addProduct(productId));
  }

  const click2 = (productId) => {
    console.log('rem ' + productId)
    dispatch(removeProduct(productId));
  }


  return (
    <>
      <p>tt</p>
      <p>tt</p>
      <button onClick={() => click(1)}>add product 1</button>
      <button onClick={() => click2(1)}>remove product 1</button>
      <p>tt</p>
      <button onClick={() => click(2)}>add product 2</button>
      <button onClick={() => click2(2)}>remove product 2</button>
    </>
  );
}
