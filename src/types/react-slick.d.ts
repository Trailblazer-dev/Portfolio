declare module 'react-slick' {
  import React from 'react';
  
  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    initialSlide?: number;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings;
    }>;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    afterChange?: (currentSlide: number) => void;
    // Add other settings as needed
    children?: React.ReactNode; // Add this to fix the error
  }

  export default class Slider extends React.Component<Settings> {
    slickNext(): void;
    slickPrev(): void;
    slickGoTo(slideNumber: number, dontAnimate?: boolean): void;
    innerSlider: {
      list: Element;
    };
  }
}

declare module 'react-slick/lib/slider' {
  import Slider from 'react-slick';
  export default Slider;
}
