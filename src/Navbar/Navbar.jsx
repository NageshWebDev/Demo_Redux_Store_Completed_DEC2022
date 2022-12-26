import style from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { toggleCartActions } from '../ReduxStore/ReduxStore';

export default function Navbar() {

    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cartItems.totalQuantity);

    function onClickHandler() {
        dispatch(toggleCartActions.toggle())
    }

    return (
        <nav className={style.navbar}>
            <h1 className={style.h1}><span className={style.span}>R</span>edux <span className={style.span}>S</span>tore</h1>
            <button onClick={onClickHandler} className={style.cartTotal}>
                <i className={`fa-solid fa-cart-shopping fa-xl ${style.cart}`}></i>
                <h4 className={style.h4}>MyCart</h4>
                <div className={style.total}>{totalQuantity}</div>
            </button>
        </nav>
    )
}