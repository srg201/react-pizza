import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.root}>
        <img
          width={250}
          src="https://dodopizza.by/404/dodo-logo-ru.svg"
          alt="404"
        />
        <h1>Страница не найдена, либо еще не создана</h1>
        <a href="/" className="button">
          На главную
        </a>
      </div>
    </div>
  );
};

export default NotFoundBlock;
