import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CoffeeBarContext = createContext();

const CoffeeBarProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  const fetchCategories = async () => {
    const { data } = await axios("/api/categories");
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <CoffeeBarContext.Provider
      value={{
        categories,
        handleClickCategory,
        currentCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal
       
      }}
    >
      {children}
    </CoffeeBarContext.Provider>
  );
};

export { CoffeeBarProvider };
export default CoffeeBarContext;
