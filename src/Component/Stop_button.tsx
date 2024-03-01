import PropTypes from "prop-types";

const Stop_button = (props:any) => {
  return (
    <button onClick={props.onClick}>Stop</button>
  )
}
Stop_button.propTypes = {
    onClick: PropTypes.func,
}

export default Stop_button