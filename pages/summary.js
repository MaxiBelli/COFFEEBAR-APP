import Layout from "../layout/Layout";
import useCoffeeBar from "@/hooks/useCoffeeBar";
import ProductSummary from "../components/ProductSummary";

export default function Summary() {
  const { orderItems } = useCoffeeBar();
  return (
    <Layout page="Summary">
      <h1 className="text-4xl font-black">Summary</h1>
      <p className="text-2xl my-10">Review Your Order</p>

      {orderItems.length === 0 ? (
        <p className="text-center text-2xl">There are no items in your order</p>
      ) : (
        orderItems.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}

