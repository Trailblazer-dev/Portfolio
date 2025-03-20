import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  className, 
  swit,
  onClick,
  as = 'div',
  href,
  download,
  target,
  rel,
  ariaLabel,
  type
}, ref) => {
  const background = swit;
  const baseClasses = `${background ? 'bg-lightdawn/10':''} text-lightdawn w-fit h-fit px-4 py-2 rounded-md ${className} transition-all duration-300 hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-lightdawn/50 focus-visible:outline-none`;
  
  // Determine if we should render a button, a div, or an anchor
  if (as === 'button' || onClick || type) {
    return (
      <button 
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        type={type || 'button'}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  } else if (as === 'a' || href) {
    return (
      <a 
        ref={ref}
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
      ref={ref}
      className={baseClasses}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
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
});

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
  type: PropTypes.string
};

export default Button;