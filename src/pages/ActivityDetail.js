import { useParams } from 'react-router-dom';
import ActivityDetails from '../components/Activity/ActivityDetails';

const ActivityDetail = ({ activities }) => {
    const params = useParams();
    const activity = activities.find(activity => activity.id === params.activityId);

    return (
        <section>
            <ActivityDetails day={activity.day} text={activity.text} author={activity.author}></ActivityDetails>
        </section>
    );
};

export default ActivityDetail;