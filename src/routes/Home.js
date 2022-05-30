import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2 className="container-title">Home</h2>
      <div className="contents">
        <div className="home-list">
          <ul>
            <li>
              <Link to="/usereducer">useReducer</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
