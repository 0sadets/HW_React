import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import { ItemContext } from "../contexts/item-context";

export default function ItemCard(props) {
  const { setChosed } = useContext(ItemContext);
  const { id, title, author, cost, photo, isChosed } = props;
  const {
    handleSubmit,
  } = useForm();

  const AddToBasket = (item) => {
    const newItem={
        id: id,
        title: title,
        author: author,
        cost: cost,
        photo: photo
    }
    setChosed(newItem);
    console.log(newItem);
  };

  return (
    <div className="itemcard">
      <img src={photo} />
      <p>
        {title}, {author}
      </p>
      <p>{cost} грн.</p>
      <button onClick={handleSubmit(AddToBasket)}>Замовити</button>
    </div>
  );
}
