import {useMemo, useCallback, useState, useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./styles";
import ListView from "./ListView";

const slideItemId = (index) => `slide${index}`;

function Slideshow({slideItems}) {
  const usableSlideItems = useMemo(() => slideItems.map((item, i) => ({...item, guid: slideItemId(i)})), [slideItems]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({startIndex: 0}, [Autoplay({stopOnInteraction: false})]);

  const onClickSlide = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const onChangeSlide = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSlideIndex(emblaApi.selectedScrollSnap());
    emblaApi.plugins().autoplay.reset();
  }, [emblaApi, setSlideIndex]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onChangeSlide();
    emblaApi.on("select", onChangeSlide);
    emblaApi.on("reInit", onChangeSlide);
  }, [emblaApi, onChangeSlide]);

  // reInit embla to avoid incorrect slide width
  const [slideViewRef, setSlideViewRef] = useState(null);
  useEffect(() => {
    if (!emblaApi || !slideViewRef) {
      return;
    }
    const slideViewResizeObserver = new ResizeObserver(entries => entries.length > 0 && emblaApi.reInit());
    slideViewResizeObserver.observe(slideViewRef);
    return () => slideViewResizeObserver.disconnect();
  }, [emblaApi, slideViewRef]);

  return (
    <div style={styles.slideShowContainer} ref={setSlideViewRef}>
      <div style={styles.slideView} ref={emblaRef}>
        <div style={styles.innerSlideView}>
          {usableSlideItems.map((slide, i) => (
            <a style={styles.slide} href={slide.link} target="_blank" rel="noreferrer" key={slideItemId(i)}>
              {slide.imgSrcs.map((imgSrc, i) => <div key={`slideImage${i}`} style={styles.slideImageContainer}>
                <img style={styles.slideImage} src={require(`../../../assets/images/projects/${imgSrc}`)} alt={slide.caption}/>
              </div>)}
              <div style={styles.slideCaption}>{slide.caption}</div>
            </a>
          ))}
        </div>
      </div>

      <ListView renderer={barRenderer}
                listViewStyle={styles.barView}
                innerListViewStyle={styles.innerBarView}
                itemList={usableSlideItems}
                itemId={slideItemId(slideIndex)}
                itemIdProperty="guid"
                onClick={onClickSlide}/>
    </div>
  );
}

const barRenderer = (item, {isLast, isSelected, index}, onClick) => {
  const barStyle = {...styles.bar};
  isSelected && Object.assign(barStyle, styles.selectedBar);
  isLast && Object.assign(barStyle, styles.lastItem);
  return (
    <button key={item.guid} style={barStyle} onClick={() => onClick && onClick(index)}/>
  )
};

export default Slideshow;
