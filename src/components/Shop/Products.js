import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODACTS = [
  {
    id: 'p1',
    price: 6,
    title: 'First',
    discription: 'first',
  },
  {
    id: 'p2',
    price: 9,
    title: 'Sec',
    discription: 'sec',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODACTS.map((prodact) => (
          <ProductItem
            key={prodact.id}
            id={prodact.id}
            title={prodact.title}
            price={prodact.price}
            description={prodact.discription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
