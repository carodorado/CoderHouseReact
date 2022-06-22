import { useParams } from "react-router-dom";
import { useContext } from "react";

import ItemList from "../ItemList/ItemList.js";
import { CartContext } from "../../context/CartContext.js";

import "./ItemListContainer.css";

function ItemListContainer() {

  const { categoryId } = useParams();
  const { productList, loading } = useContext(CartContext);
  
  return (
    <div>
      <ItemList
        loading={loading}
        items={
          categoryId === undefined
            ? productList
            : productList.filter((element) => element.category === categoryId)
        }
      />
    </div>
  );
}

export default ItemListContainer;
