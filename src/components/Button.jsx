
import PropTypes from 'prop-types'

const Button = ({children,className, swit}) => {
  let background = swit;
  return (
    <div className={`${background ? 'bg-lightdawn/10':''} text-lightdawn w-fit h-fit px-2 py-1 rounded-md ${className}`}>
        {children}

    </div>
  )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    swit: PropTypes.bool
}