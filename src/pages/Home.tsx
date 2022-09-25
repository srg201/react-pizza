import React from "react";
import Categories from "../components/Categories";
import { useSelector, useDispatch } from "react-redux";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { selectFilter } from "../redux/slices/filterSlice";
import { fetchPizzas, PizzaItem, selectPizza } from "../redux/slices/pizzaSlice";

const Home: React.FC = () => {
  const { categoryId, search, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);
  const dispatch = useDispatch();
  const category = categoryId > 0 ? `&category=${categoryId}` : "";
  const sortValue = sort.sortProperty ? `&sortBy=${sort.sortProperty}` : "";
  const searchStr = search ? `&search=${search}` : "";

  React.useEffect(() => {
    window.scrollTo(0, 0);
    function getPizzas() {
      // @ts-ignore
      dispatch(fetchPizzas({ category, sortValue, searchStr }));
    }
    getPizzas();
  }, [category, sortValue, searchStr]);

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((pizza: PizzaItem) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <h1>
            Произошла ошибка получения пицц. Попробуйте повторить попытку позже
          </h1>
        ) : status === "loading" ? (
          skeletons
        ) : (
          pizzas
        )}
      </div>
    </div>
  );
};

export default Home;
