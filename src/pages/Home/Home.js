import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div id="home-container">
      <h1>레드블루 제출 과제</h1>
      <div className="project-list">
        <ul>
          <li>
            <Link to="/todo">
              2.1 100개 이상의 리스트 데이터를 선언하고, 이를 모바일 환경에서, Infinite scrolling 형태로 리스트 목록으로 출력하는 웹앱으로 구현해
              주세요.
            </Link>
          </li>
          <li>
            <Link to="/todo">Go todo list</Link>
          </li>
          <li>
            <Link to="/todo">Go todo list</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
