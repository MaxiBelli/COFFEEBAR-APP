import Image from "next/image";
import useCoffeeBar from "@/hooks/useCoffeeBar";

const Category = ({ category }) => {

  const { currentCategory, handleClickCategory } = useCoffeeBar();

  const { name, icon, id } = category;

  return (
    <div
      className={`${
        currentCategory?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icon_${icon}.svg`}
        alt="Icon Image" 
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
