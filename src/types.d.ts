declare module '@mui/material' {
  export function useMediaQuery(query: string): boolean;
  // Add other components you use from MUI as needed
}

declare module 'framer-motion' {
  import React from 'react';
  export const motion: any;
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: 'sync' | 'wait' | 'popLayout';
  }>;
  // Add other framer-motion exports as needed
}

declare module 'react-slick/lib/slider' {
  import Slider from 'react-slick';
  export default Slider;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      // Add other HTML elements you use
    }
  }
}
