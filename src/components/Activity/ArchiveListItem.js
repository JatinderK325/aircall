import classes from './ArchiveListItem.module.css';
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const ArchiveListItem = (props) => {
    return (
        <div>
            <div className={classes.fig}>.......... {props.day} .........</div>
            <div className={classes.item}>
                <BsFillTelephoneInboundFill style={{ color: 'black', fontSize: '24px' }} />
                <figure>
                    <blockquote>
                        <p>{props.text}<span className={classes.badge}>3</span></p>
                    </blockquote>
                    <figcaption>{props.author}</figcaption>
                </figure>
                <figcaption><span className={classes.time}>9:40 am</span></figcaption>
            </div>
        </div>
    );
};

export default ArchiveListItem;
