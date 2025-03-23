import { ReactNode, ForwardRefExoticComponent, RefAttributes, MouseEventHandler } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  swit?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  as?: 'div' | 'button' | 'a';
  ariaLabel?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsAnchor extends BaseButtonProps {
  as: 'a';
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

interface ButtonAsDiv extends BaseButtonProps {
  as?: 'div';
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsDiv;

declare const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLElement>
>;

export default Button;
