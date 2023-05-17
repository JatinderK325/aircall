import ActivityList from "../components/Activity/ActivityList";

const Activity = ({ activities, onArchiveHandler }) => {
    return (
        <section>
            <ActivityList activities={activities} onArchiveHandler={onArchiveHandler}></ActivityList>
        </section>
    );
};

export default Activity;