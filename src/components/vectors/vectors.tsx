import { FC } from "react";
import styles from "./vectors.module.css";

interface VectorsProps {
  rotationAngle: number;
  activeHoverIndex: number | null;
  activeIndex: number | null;
  setActiveHoverIndex: (index: number | null) => void;
  handleClick: (index: number) => void;
  isTextVisible: boolean;
}

export const Vectors: FC<VectorsProps> = ({
  rotationAngle,
  activeHoverIndex,
  activeIndex,
  setActiveHoverIndex,
  handleClick,
  isTextVisible,
}) => {
  const titles: string[] = [
    "Космические открытия",
    "Моменты, меняющие восприятие Вселенной",
    "Прорыв в освоении Марса",
    "Важные миссии в изучении Солнечной системы",
    "Будущее исследований",
    "Прорывы в исследовании космоса",
  ];

  console.log(styles)

  return (
    <>
      <div className={styles.circle_wrapper}>
        <div
          className={styles.centr_circle}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          {titles.map((_, index) => (
            <div
              key={index}
              className={`${styles[`circle_item_${index + 1}`]} ${
                activeHoverIndex === index || activeIndex === index
                  ? styles.circle_item_active
                  : ""
              }`}
              onMouseEnter={() => setActiveHoverIndex(index)}
              onClick={() => handleClick(index)}
              onMouseLeave={() => setActiveHoverIndex(null)}
            >
              <div className={styles.circle_dot}></div>
              {(activeHoverIndex === index || activeIndex === index) && (
                <p
                  style={{
                    transform: `rotate(${-rotationAngle}deg)`,
                    opacity: isTextVisible ? 1 : 0,
                  }}
                  className={styles.circle_item_index}
                >
                  {index + 1}
                </p>
              )}
            </div>
          ))}
        </div>

        <p
          className={`${styles.circle_item_heading}`}
          style={{ opacity: isTextVisible ? 1 : 0 }}
        >
          {activeIndex !== null ? titles[activeIndex] : ""}
        </p>
      </div>

      <div className={styles.horizontal_stick}></div>
      <div className={styles.vertical_stick}></div>
    </>
  );
};
