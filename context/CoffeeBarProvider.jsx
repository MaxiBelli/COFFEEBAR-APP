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
  const [orderItems, setOrderItems] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    const newTotal = orderItems.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [orderItems]);

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

  const handleOrderItems = ({ categoryId, ...product }) => {
    if (orderItems.some((productState) => productState.id === product.id)) {
      // Update quantity
      const updatedOrderItems = orderItems.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrderItems(updatedOrderItems);
      toast.success("Successfully Saved");
    } else {
      setOrderItems([...orderItems, product]);
      toast.success("Added to the Order");
    }
    setModal(false);
  };

  const handleEditQuantities = (id) => {
    const productUpdate = orderItems.filter((product) => product.id === id);
    setProduct(productUpdate[0]);
    setModal(!modal);
  };

  const handleRemoveProduct = (id) => {
    const updatedOrderItems = orderItems.filter((product) => product.id !== id);
    setOrderItems(updatedOrderItems);
  };

  const placeOrderItems = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/orders", {
        orderItems,
        name,
        total,
        date: Date.now().toString(),
      });

      // Reset the application
      setCurrentCategory(categories[0]);
      setOrderItems([]);
      setName("");
      setTotal(0);

      toast.success("Order placed successfully");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
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
        handleOrderItems,
        orderItems,
        handleEditQuantities,
        handleRemoveProduct,
        name,
        setName,
        placeOrderItems,
        total
      }}
    >
      {children}
    </CoffeeBarContext.Provider>
  );
};

export { CoffeeBarProvider };
export default CoffeeBarContext;
