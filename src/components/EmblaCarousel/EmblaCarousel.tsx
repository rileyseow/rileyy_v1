import classNames from "classnames";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode, useEffect } from "react";

import "./EmblaCarousel.scss";

/**
 * For reference @see @link https://www.embla-carousel.com/get-started/react/.
 *
 * @param {ReactNode[]} param0.slides Array of JSX elements to be used as slides.
 * @param {boolean} param0.shouldShowNav Boolean to determine if navigation buttons should be shown.
 *
 * @returns Customized Embla Carousel component.
 */
const EmblaCarousel = ({
  className,
  shouldAutoScroll = false,
  shouldLoop = false,
  shouldShowNav = true,
  slides = [],
}: {
  className?: string;
  shouldAutoScroll?: boolean;
  shouldLoop?: boolean;
  shouldShowNav?: boolean;
  slides: ReactNode[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: shouldLoop }, [
    AutoScroll({ startDelay: 0, speed: 1 }),
  ]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi || !shouldAutoScroll) {
      return;
    }
    emblaApi.plugins().autoScroll?.play();
  }, [emblaApi]);

  return (
    <div className={classNames("EmblaCarousel", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, idx) => (
            <div className="embla__slide" key={idx}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      {shouldShowNav && (
        <>
          <button className="embla__prev" onClick={goToPrev}>
            Scroll to prev
          </button>
          <button className="embla__next" onClick={goToNext}>
            Scroll to next
          </button>
        </>
      )}
    </div>
  );
};

export default EmblaCarousel;
