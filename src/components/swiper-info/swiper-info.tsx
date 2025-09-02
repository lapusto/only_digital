import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import  styles from "./swiper-info.module.css";

interface Item {
  id: number;
  year: number;
  content: string;
}

interface Items {
  [key: number]: Item[];
}

interface SwiperInfoProps {
  index: number | null;
  onNext: () => void;
  onPrev: () => void;
  items: Items;
}

export const SwiperInfo = ({
  index,
  onNext,
  onPrev,
  items,
}: SwiperInfoProps): ReactElement => {
  const activeItems = items[index ?? 0];
  return (
    <article className={styles.swiper}>
      <div className={styles.swiper_pagination_dots_wrapper}>
        <ul className={styles.swiper_pagination_list}>
          {Object.keys(items).map((item) => {
            const itemIndex = Number(item);
            const defaultIndex = index ?? 0;
            return (
              <li
                key={item}
                className={
                  itemIndex === defaultIndex
                    ? `${styles.swiper_pagination_dots} ${styles.swiper_pagination_dot_active}`
                    : styles.swiper_pagination_dots
                }
              ></li>
            );
          })}
        </ul>
      </div>
      <div className={styles.swiper_navigation_wrapper}>
        <div className={styles.swiper_pagination}>
          {index ? index + 1 : 1}/{Object.keys(items).length}
        </div>
        <div className={styles.swiper_navigation}>
          <div
            onClick={onPrev}
            className={`${styles.swiper_navigation_prev} ${
              (index ?? 0) === 0 ? styles.swiper_button_disabled : ""
            }`}
          >
            <div className={styles.swiper_navigation_button_circle}>
              <span className={styles.swiper_navigation_arrow_left}></span>
            </div>
          </div>
          <div
            onClick={onNext}
            className={`${styles.swiper_navigation_next} ${
              index === Object.keys(items).length - 1
                ? styles.swiper_button_disabled
                : ""
            }`}
          >
            <div className={styles.swiper_navigation_button_circle}>
              <span className={styles.swiper_navigation_arrow_right}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.swiper_wrapper}>
        <Swiper
          modules={[Navigation, FreeMode, Mousewheel]}
          spaceBetween={80}
          slidesPerGroup={3}
          mousewheel={{
            invert: true,
            enabled: true,
          }}
          freeMode={{
            enabled: true,
          }}
          navigation={{
            nextEl: `.${styles.swiper_slide_next}`,
            prevEl: `.${styles.swiper_slide_prev}`,
            disabledClass: `${styles.swiper_button_disabled}`,
          }}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
          }}
        >
          {activeItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <article className={styles.info_item}>
                  <h2 className={styles.info_heading}>{item.year}</h2>
                  <p className={styles.info_paragraph}>{item.content}</p>
                </article>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};
