import React from "react";
import Button from "../Button";
import style from "./styles.module.scss";

const FiltersTab = () => {
  return (
    <>
      <div className={style.filters}>
        <div className={style.categories}>
          <Button className={style.button} text="ALL" />
          <Button className={style.button} text="DOCUMENTARY" />
          <Button className={style.button} text="COMEDY" />
          <Button className={style.button} text="HORROR" />
          <Button className={style.button} text="CRIME" />
        </div>
        <div className="sorts">
          <Button className={style.sortByButton} text="SORT BY" />
          <Button className={style.sortOptions} text="RELEASE DATE" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default FiltersTab;
