import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from './CartItems.module.css'
import { ItemLayout } from './ItemLayout';
import { specialProductStatue } from '../ReduxStore/Thunk';

export default function CartItems() {

    const toggleCart = useSelector(state => state.cartState.showCart);
    const cartItems = useSelector(state => state.cartItems.cartItemArray);
    const totalAmount = useSelector(state => state.cartItems.totalAmount);

    const [spProduct, setSpProduct] = useState()
    const [isDataFetched, setisDataFetched] = useState(false)
    const [showProduct, setShowProduct] = useState(false)

    const dispatch = useDispatch();

    function onClickSpecialProduct() {
        setShowProduct(true)
        dispatch(specialProductStatue());
    }

    function onClickClose(){
        setShowProduct(false)
    }

    const message = useSelector(state => state.specialProduct.message)
    const specialProductDetails = useSelector(state => state.specialProduct.product)

    useEffect(() => {
        console.log(specialProductDetails);
        setSpProduct(specialProductDetails)
        if (message === 'Special Product Data Fetched') {
            setisDataFetched(true)
        }
    }, [specialProductDetails, message])

    return (
        <React.Fragment>
            {
                toggleCart &&
                < main className={style.main} >
                    <section className={style.section}>
                        <h1 className={style.h1}>Your Shopping Cart</h1>
                        {
                            (cartItems.length <= 0) &&
                            <div className={style.ECDiv}>
                                <h1 className="display-6"> <i className={`fa-solid fa-cart-shopping ${style.cart}`}></i> Your Cart is Empty</h1>
                            </div>
                        }
                        {
                            (cartItems.length > 0) &&
                            cartItems.map((item) => {
                                return <ItemLayout key={item.id} id={item.id} title={item.title} price={item.price} icon={item.icon} quantity={item.quantity} />
                            })
                        }
                        <div className={style.div}>
                            <span className={style.span}>Total Amount</span>
                            <span className={style.span}><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> {totalAmount}</span>
                        </div>

                        {
                            (cartItems.length > 0) &&
                            <button className={style.btn} ><i className="fa-solid fa-credit-card fa-sm"></i> Order it</button>
                        }
                        <button onClick={onClickSpecialProduct} className={style.btn} ><i className={`fa-solid fa-star ${style.star}`}></i> Special Product</button>

                        {
                            showProduct &&
                            <div className={style.spProduct}>
                                {
                                    !isDataFetched &&
                                    <p className={style.message}><i className={`fa-solid fa-spinner ${style.loading}`}></i> {message}</p>
                                }
                                {
                                    isDataFetched &&
                                    <>
                                        <img src={spProduct.image} alt="SSD" className={style.img}></img>
                                        <p className={style.title}> {spProduct.title} </p>
                                        <p className={style.price}><i className="fa-solid fa-indian-rupee-sign fa-sm"></i> {spProduct.price * 100}</p>
                                        <p className={style.close} onClick={onClickClose}><i className="fa-solid fa-circle-xmark "></i></p>
                                    </>
                                }

                            </div>
                        }

                    </section>
                </main >
            }
        </React.Fragment>
    )
}