import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  try {
    React.useEffect(() => {
      async function fetchPizza(id: string) {
        const { data } = await axios.get(
          "https://62b21a94c7e53744afc7aab0.mockapi.io/items/" + id
        );
        setPizza(data);
      }

      if (id) {
        fetchPizza(id);
      }
    }, []);
  } catch (error) {
    alert("Произошла ошибка! Повторите попытку позже");
    navigate("/");
  }

  if (!pizza) {
    return (
      <div className="cent">
        <span>Загрузка... </span>
      </div>
    );
  }
  return (
    <div className="pizza-block pizza-block-full">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <p>
        Пицца {pizza.title} по выгодной цене! Всего от {pizza.price} ₽
      </p>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {pizza.price} ₽</div>
        <Link to="/" className="button button--outline button--add">
          <span>На главную</span>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
