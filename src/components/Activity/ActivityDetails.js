import classes from './ActivityDetail.module.css';

const ActivityDetails = (props) => {
  return (
    <figure className={classes.activity}>
      <p class="line-spacing">
        You have received a call<br />
        from {props.text}<br />
        on {props.day}.</p>
    </figure>
  );
};

export default ActivityDetails;
