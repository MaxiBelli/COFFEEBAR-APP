import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CoffeeBarContext = createContext();

const CoffeeBarProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const router = useRouter();

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
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      // Update quantity
      const updatedOrder = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(updatedOrder);
      toast.success("Successfully Saved");
    } else {
      setOrder([...order, product]);
      toast.success("Added to the Order");
    }
    setModal(false);
  };

  const handleEditQuantities = (id) => {
    const productUpdate = order.filter((product) => product.id === id);
    setProduct(productUpdate[0]);
    setModal(!modal);
  };

  const handleRemoveProduct = (id) => {
    const updatedOrder = order.filter((product) => product.id !== id);
    setOrder(updatedOrder);
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
        handleChangeModal,
        handleOrder,
        order,
        handleEditQuantities,
        handleRemoveProduct

      }}
    >
      {children}
    </CoffeeBarContext.Provider>
  );
};

export { CoffeeBarProvider };
export default CoffeeBarContext;
