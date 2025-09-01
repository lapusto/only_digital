import { ReactElement, useState } from "react";
import { Vectors } from "../vectors/vectors";
import { Years } from "../years/years";
import { angles, items } from "../../utils/consts";
import  styles from "./Home.module.css";

export const Home = (): ReactElement => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  const currentItems = items[activeIndex ?? 0];

  const handleClick = (index: number): void => {
    setIsTextVisible(false);
    setActiveIndex(index);
    setRotationAngle(-angles[index]);

    setTimeout(() => setIsTextVisible(true), 1000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.heading_wrapper}>
        <h1 className={styles.main_heading}>
          Исторические
          <br />
          даты
        </h1>
      </div>
      <Years currentItems={currentItems} />
      <Vectors
        rotationAngle={rotationAngle}
        activeHoverIndex={activeHoverIndex}
        activeIndex={activeIndex}
        setActiveHoverIndex={setActiveHoverIndex}
        handleClick={handleClick}
        isTextVisible={isTextVisible}
      />
    </main>
  );
};
