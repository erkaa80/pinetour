import React from "react";
import { Footer, Header, ProductList } from "../../components";
import { products } from "../../data";
import { useUserContext } from "../../context";

export const Home = () => {
  const { user } = useUserContext();

  return <div>App Component</div>;

  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};
