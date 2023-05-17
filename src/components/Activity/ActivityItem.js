import { NavLink } from 'react-router-dom';
import classes from './ActivityItem.module.css';
import { BsFillTelephoneInboundFill } from "react-icons/bs";

// component for single call item of a calls' list
const ActivityItem = (props) => {
  return (
    <div>
      <div className={classes.fig}>................................... {props.day} .................................</div>
      <NavLink className={classes.item} to={`/activity/${props.id
        }`} key={props.id}>
        <BsFillTelephoneInboundFill style={{ color: 'black', fontSize: '24px' }} />
        <figure>
          <blockquote>
            <p>{props.text}<span className={classes.badge}>3</span></p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>
        <figcaption><span className={classes.time}>9:40 am</span></figcaption>
      </NavLink>
    </div>
  );
};

export default ActivityItem;
