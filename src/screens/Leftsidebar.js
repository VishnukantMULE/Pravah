import recommendedIcon from '../utils/icons/star.png';
import historyIcon from '../utils/icons/history.png';
import savedIcon from '../utils/icons/save.png';
import settingsIcon from '../utils/icons/user.png';
import '../css/Movies.css';
export default function Leftsidebar({ selected, handleSelect }) {
    return (
        <div className="sidebar-container">
          <ul className="sidebar-list">
            <li>
              <button className={selected === 'rcm' ? 'selected' : ''} onClick={() => handleSelect('rcm')}>
                <img src={recommendedIcon} alt="Recommended" width="35" height="35" />
              </button>
            </li>
            <li>
              <button className={selected === 'history' ? 'selected' : ''} onClick={() => handleSelect('history')}>
                <img src={historyIcon} alt="History" width="35" height="35" />
              </button>
            </li>
            <li>
              <button className={selected === 'saved' ? 'selected' : ''} onClick={() => handleSelect('saved')}>
                <img src={savedIcon} alt="Saved" width="35" height="35" />
              </button>
            </li>
            <li>
              <button className={selected === 'settings' ? 'selected' : ''} onClick={() => handleSelect('settings')}>
                <img src={settingsIcon} alt="Settings" width="35" height="35" />
              </button>
            </li>
          </ul>
        </div>
      );
}
