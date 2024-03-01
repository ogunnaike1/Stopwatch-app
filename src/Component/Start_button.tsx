import PropTypes from "prop-types";

const Start_button = (props: any) => {
  return (
    <button onClick={props.onClick}>Start</button>
  )
}
Start_button.propTypes = {
    onClick: PropTypes.func,
}
export default Start_button