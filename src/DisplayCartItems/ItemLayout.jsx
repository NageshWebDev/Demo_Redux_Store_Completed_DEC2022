import { useDispatch } from 'react-redux';
import style from './ItemLayout.module.css';
import { cartItemsActions } from '../ReduxStore/ReduxStore';

export function ItemLayout(props) {
    const { id, title, quantity, price, icon } = props;
    const dispatch = useDispatch()

    function onClickHandlerDec(){
        dispatch(cartItemsActions.decQuantityByOne({id}))
    }

    function onClickHandlerInc(){
        dispatch(cartItemsActions.incQuantityByOne({id}))
    }

    return (
        <li id={id} className={style.item}>
            <header>
                <h3><i className={icon} style={{ color: 'lightseagreen' }}></i> {title}</h3>
                <div>
                    <span><strong style={{color:"lightseagreen"}}>{quantity}</strong> x </span>
                    <span className={style.itemprice}>(<i className="fa-solid fa-indian-rupee-sign fa-sm"></i> <strong>{price.toFixed(2)}</strong>/item)</span>
                </div>
            </header>
            <div className={style.details}>
                <div className={style.actions}>
                    <button onClick={onClickHandlerInc}>+</button>
                    <button onClick={onClickHandlerDec}>-</button>
                </div>
                <div className={style.price}>
                   <h3><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> {quantity*price}</h3> 
                </div>
            </div>
        </li>
    );
}