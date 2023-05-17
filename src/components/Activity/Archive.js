import React from "react";
import classes from './Archive.module.css';
import ArchiveListItem from "./ArchiveListItem";
import { BsFillArchiveFill } from "react-icons/bs";

const Archive = ({ archivedActivities, onUnArchiveHandler }) => {
    // calling function to unarchive calls on button click
    const unArchiveHandler = () => {
        onUnArchiveHandler();
    }

    return (
        <div>
            <div className={classes.item} >
                < BsFillArchiveFill style={{ marginLeft: "15px", fontSize: '30px' }} />
                <button className={classes.btn} onClick={unArchiveHandler}>Unarchive all calls</button>
            </div>
            <ul className={classes.list}>
                {archivedActivities.map((activity) => (
                    <ArchiveListItem
                        key={activity.id}
                        id={activity.id}
                        author={activity.author}
                        text={activity.text}
                        day={activity.day}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Archive;