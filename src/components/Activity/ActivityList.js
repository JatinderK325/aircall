import { Fragment } from 'react';
import React from "react";
import classes from './ActivityList.module.css';
import ActivityItem from './ActivityItem';
import { BsFillArchiveFill } from "react-icons/bs";

// component for list of calls
const ActivityList = ({ activities, onArchiveHandler }) => {
    // calling function to archive calls on button click
    const archiveActivitiesHandler = () => {
        onArchiveHandler();
    }

    return (
        <div>
            <Fragment>
                <div className={classes.item} >
                    < BsFillArchiveFill style={{ marginLeft: "15px", fontSize: '30px' }} />
                    <button className={classes.btn} onClick={archiveActivitiesHandler}>Archive all calls</button>
                </div>
                <ul className={classes.list}>
                    {activities.map((activity) => (
                        <ActivityItem
                            key={activity.id}
                            id={activity.id}
                            author={activity.author}
                            text={activity.text}
                            day={activity.day}
                        />
                    ))}
                </ul>
            </Fragment>
        </div>
    );
}

export default ActivityList;