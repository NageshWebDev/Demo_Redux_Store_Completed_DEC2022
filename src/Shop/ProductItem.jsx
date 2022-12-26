import { useDispatch } from 'react-redux';
import style from './ProductItem.module.css';
import { cartItemsActions } from '../ReduxStore/ReduxStore';

const ProductItem = (props) => {
  const { id, title, price, description, icon, quantity } = props;
  const dispatch = useDispatch() 

  function onClickHandler(){
    dispatch(cartItemsActions.addToCart({id,title,price,icon, quantity}))
  }

  return (
    <li className={style.item}>
      <main>
        <header>
          <h3><i className={icon} style={{color: 'lightseagreen'}}></i> {title}</h3>
          <div className={style.price}><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> {price.toFixed(1)}</div>
        </header>
        <p>{description}</p>
        <div className={style.actions}>
          <button onClick={onClickHandler} className={style.btn}>Add to Cart</button>
        </div>
      </main>
    </li>
  );
};

export default ProductItem;