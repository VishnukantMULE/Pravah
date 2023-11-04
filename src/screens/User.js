import Recommanded from './Recommanded';
import Trending from './Trending';
import History from './History';
import Saved from './Saved';
import Music from './Music';
import Profile from './Profile';
import {  useLocation } from 'react-router-dom';
import ShowAllMovies from './Movies/Show/ShowAllMovies'

function User() {
  const location = useLocation();
 

  let content;

  switch (location.pathname) {
    case "/user":
      content = <Profile />;
      break;
    case "/user/rcm":
      // content = <Recommanded />;
      content=<ShowAllMovies/>
      break;
    case "/user/trend":
      content = <Trending />;
      break;
    case "/user/history":
      content = <History />;
      break;
    case "/user/saved":
      content = <Saved />;
      break;
    case "/user/music":
      content = <Music />;
      break;
    default:
      content = <Recommanded />;
      break;
  }

  return (
    <div>
        {content}
      </div>
  );
}

export default User;
