import Archive from "../components/Activity/Archive";

const Archieved = ({ archivedActivities, onUnArchiveHandler }) => {

    return (
        <section>
            <Archive archivedActivities={archivedActivities} onUnArchiveHandler={onUnArchiveHandler} />
        </section>
    );
};

export default Archieved;