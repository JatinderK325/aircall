import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Archieved from './pages/Archived';
import Activity from './pages/Activity';
import ActivityDetail from './pages/ActivityDetail';
import Footer from './components/Footer/Footer';

function App() {
  const ACTIVITIES = [
    { id: 'a1', author: 'tried to call on Xavier', text: '+14581781900', day: 'Aug, 12 2020', archived: false },
    { id: 'a2', author: 'tried to call on Xavier', text: '+14581182223', day: 'Aug, 2 2020', archived: false },
    { id: 'a3', author: 'tried to call on Xavier', text: '+14587993237', day: 'July, 27 2020', archived: false },
    { id: 'a4', author: 'tried to call on Xavier', text: '+14580082056', day: 'July, 20 2020', archived: false },
  ];

  const [activities, setActivities] = useState(ACTIVITIES);
  const [archived, setArchived] = useState([]);
  //const[unArchive, setUnArchive] = useState(archived);

  const onArchiveHandler = () => {
    const updatedActivities = activities.map((activity) => ({
      ...activity,
      archived: true,
    }));
    // setActivities(updatedActivities);
    setActivities([]);
    setArchived(updatedActivities);
  }

  const archivedActivities = archived.filter((activity) => activity.archived);

  const onUnArchiveHandler = () => {
    const updatedActivities = archivedActivities.map((activity) => ({
      ...activity,
      archived: false,
    }));
    setActivities(updatedActivities);
    setArchived([]);
  }

  return (
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/activity' />
          </Route>
          <Route path="/activity" exact>
            <Activity activities={activities} onArchiveHandler={onArchiveHandler} />
          </Route>
          <Route path="/archieved">
            <Archieved archivedActivities={archivedActivities} onUnArchiveHandler={onUnArchiveHandler} />
          </Route>
          <Route path="/activity/:activityId">
            <ActivityDetail activities={activities} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
export default App;
