import ProductItem from './ProductItem';
import style from './Products.module.css';

export default function Products(props) {
  return (
    <section className={style.products}>
      <h2 className={style.h2}> <i className="fa-solid fa-bag-shopping fa-lg" style={{ color: 'lightseagreen' }}></i> Buy your favorite products</h2>
      <ul className={style.ul}>

        <ProductItem
          id='HP00'
          title='Headphones'
          icon="fa-solid fa-headphones"
          price={2000}
          description='This is a first product - excited!'
          quantity={1}
        />

        <ProductItem
          id='M00'
          title='Mobile'
          icon="fa-solid fa-mobile"
          price={30000}
          description='This is a first product - amazing!'
          quantity={1}
        />

        <ProductItem
          id='TAB00'
          title='Tablet'
          icon="fa-solid fa-tablet"
          price={35000}
          description='This is a first product - surprising!'
          quantity={1}
        />

        <ProductItem
          id='LAP00'
          title='Laptop'
          icon="fa-solid fa-laptop"
          price={75000}
          description='This is a first product - fascinating!'
          quantity={1}
        />

      </ul>
    </section>
  );
};
