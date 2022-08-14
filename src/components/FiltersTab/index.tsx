import React from "react";
import Button from "../Button";
import style from "./styles.module.scss";

const FiltersTab = () => {
  return (
    <>
      <div className={style.filters}>
        <div className={style.categories}>
          <Button className={style.button} text="all" />
          <Button className={style.button} text="documentary" />
          <Button className={style.button} text="comedy" />
          <Button className={style.button} text="horroe" />
          <Button className={style.button} text="crime" />
        </div>
        <div className="sorts">
          <Button className={style.sortByButton} text="sort by" />
          <Button className={style.sortOptions} text="release date" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default FiltersTab;
