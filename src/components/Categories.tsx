import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setCategoryId } from "../redux/slices/filterSlice";

const categories = [ "Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые", ];

const Categories: React.FC = () => {
  const {categoryId: value} = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChangeCategory = (id: number): void => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
