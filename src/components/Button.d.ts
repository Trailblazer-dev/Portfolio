import { MouseEvent, ReactNode, RefObject } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  swit?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  as?: 'div' | 'button' | 'a';
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
>;

export default Button;
