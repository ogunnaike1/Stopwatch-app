import PropTypes from "prop-types";

const Watch = (props:any) => {
  return (
    <div className='div-stopwatch'>
        <span>{props.hoursValue}</span>
        <span>:</span>
        <span>{props.minutesValue}</span>
        <span>:</span>
        <span>{props.secondsValue}</span>
        <span>:</span>
        <span>{props.milliSecondValue}</span>
    </div>
  )
}
Watch.propTypes = {
    secondsValue: PropTypes.string,
    minutesValue: PropTypes.string,
    hoursValue: PropTypes.string,
    milliSecondValue: PropTypes.string
}

export default Watch