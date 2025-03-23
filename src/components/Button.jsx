import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Define the props type explicitly for TypeScript
/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Content inside the button
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [swit=false] - Toggle background styles
 * @property {React.MouseEventHandler<HTMLElement>} [onClick] - Click event handler
 * @property {'div' | 'button' | 'a'} [as='div'] - Element type to render
 * @property {string} [href] - URL for anchor links
 * @property {boolean|string} [download] - Download attribute
 * @property {string} [target] - Target attribute
 * @property {string} [rel] - Rel attribute
 * @property {string} [ariaLabel] - Accessibility label
 * @property {"button" | "submit" | "reset"} [type="button"] - Button type attribute
 */

/**
 * Button component that renders as different elements based on props
 * @type {React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>}
 */
const Button = forwardRef(/** @type {(props: ButtonProps, ref: React.Ref<HTMLElement>) => React.ReactElement} */ ((props, ref) => {
  const { 
    children, 
    className = '', 
    swit = false,
    onClick,
    as = 'div',
    href,
    download,
    target,
    rel,
    ariaLabel,
    type = 'button' // Default to 'button' type
  } = props;

  const background = swit;
  const baseClasses = `${background ? 'dark:bg-lightdawn/10 bg-title/80':''} dark:text-lightdawn text-dawn w-fit h-fit px-4 py-2 rounded-md ${className} transition-all duration-300 hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-lightdawn/50 focus-visible:outline-none`;
  
  // Determine if we should render a button, a div, or an anchor
  if (as === 'button' || onClick || type) {
    return (
      <button 
        ref={/** @type {React.Ref<HTMLButtonElement>} */ (ref)}
        className={baseClasses}
        onClick={/** @type {React.MouseEventHandler<HTMLButtonElement>} */ (onClick)}
        // Ensure type is one of the valid button types
        type={/** @type {"button" | "submit" | "reset"} */ (type || 'button')}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  } else if (as === 'a' || href) {
    return (
      <a 
        ref={/** @type {React.Ref<HTMLAnchorElement>} */ (ref)}
        className={baseClasses}
        href={href || '#'}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <div 
      ref={/** @type {React.Ref<HTMLDivElement>} */ (ref)}
      className={baseClasses}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={/** @type {React.MouseEventHandler<HTMLDivElement>} */ (onClick)}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}));

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  swit: PropTypes.bool,
  onClick: PropTypes.func,
  as: PropTypes.oneOf(['div', 'button', 'a']),
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  target: PropTypes.string,
  rel: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;