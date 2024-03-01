import PropTypes from "prop-types";

const Reset_button = (props:any) => {
  return (
    <button onClick={props.onClick}>
      Reset
    </button>
  )
}
Reset_button.propTypes = {
    onClick: PropTypes.func,
}
export default Reset_button