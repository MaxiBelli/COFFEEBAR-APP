import Image from "next/image";
import useCoffeeBar from "@/hooks/useCoffeeBar";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useCoffeeBar();

  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Logo Image"
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;

