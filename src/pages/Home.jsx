import products from "../data";
import ItemCards from "../components/ItemCards";
import styled from 'styled-components'

const HomeScreen = () => {

  return (
    <Products>
      {products.map((product) => (
        <ItemCards key={product.id} product={product} />
      ))}
    </Products>
  );
};

export default HomeScreen;


const Products = styled.div`
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1024px;
    width: 80%;
    margin: 70px auto 0;
    gap: 12px;
`
