import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div id="home-container">
      <h1>Implementation Challenges</h1>
      <div className="project-list subjective">
        <div className="list-wrapper">
          <h2>주관식 문제</h2>

          <details>
            <summary>1.1 CSR vs SSR 차이를 설명하고, 각각의 장단점을 기술하세요.</summary>
            <br />
            <p>CSR과 SSR의 가장 큰 차이점은 배포된 HTML과 CSS, JavaScript 파일의 렌더링 위치입니다.</p>
            <p>
              CSR은 Client Side Rendering으로 말 그대로 렌더링 해야 할 파일들이 클라이언트단에서 렌더링되는 것을 의미합니다. SSR은 Server Side
              Rendering으로 CSR과는 다르게 서버단에서 렌더링되어 클라이언트에게 제공됩니다. 이 외 그 밖의 차이점들로는 ①로딩되는 시간,
              ②SEO(검색엔진최적화) 효율, ③서버 자원 소모량 등의 차이가 있습니다.
            </p>
            <br />
            <br />
            <h3>CSR의 단점</h3>
            <br />
            <dl>
              <dt>
                <strong>1. 초기 로딩 시간이 오래 걸립니다.</strong>
              </dt>
              <dd>HTML, CSS, JavaScript 등 화면 렌더링에 필요한 모든 정적 파일들을 한 번에 불러오기 때문에 로딩 시간이 오래 걸립니다.</dd>
              <br />
              <dt>
                <strong>2. SEO(검색엔진최적화)에 취약합니다.</strong>
              </dt>
              <dd>
                크롤링하기 위해서는 HTML 문서의 matadata 정보가 필요한데, CSR의 경우 초기 로딩 단계에서 빈 HTML만 전달되어 온 후 Javascript로 페이지를
                그리기 때문에 크롤러가 이를 판단할 수 없어 SEO에 취약합니다.
              </dd>
            </dl>
            <br />
            <br />
            <h3>CSR의 장점</h3>
            <br />
            <dl>
              <dt>
                <strong>1. 빠른 페이지 전환이 가능합니다.</strong>
              </dt>
              <dd>브라우저에서 동적으로 페이지를 업데이트하여 빠른 페이지 전환을 제공합니다.</dd>
              <br />
              <dt>
                <strong>2. 높은 사용자 경험을 제공합니다.</strong>
              </dt>
              <dd>초기 페이지 로딩 이후 클라이언트에서 데이터를 가져와 동적으로 렌더링하기 때문에 사용자 경험이 향상됩니다.</dd>
            </dl>
            <br />
            <br />
            <h3>SSR의 단점</h3>
            <br />
            <dl>
              <dt>
                <strong>1. 서버 부하 및 그에 따른 사용 요금 증대 우려</strong>
              </dt>
              <dd>렌더링이 서버에서 이루어지기 때문에 개발 방식에 따라 서버 과부하 및 서버 사용 요금이 과중될 우려가 있습니다.</dd>
              <br />
              <dt>
                <strong>2. 렌더링된 HTML 파일에 Javascript 파일이 연동되기 전까지 상호작용 핸들러가 반응하지 않을 수 있습니다.</strong>
              </dt>
              <dd>
                화면 렌더링 이후 Javascript 파일이 아직 연동되지 않은 단계라면 사용자가 버튼을 클릭했다 하더라도 아무런 반응이 이루어지지 않기 때문에
                사용자에게 사용자 친화적이지 못한 경험을 제공하게 됩니다.
              </dd>
            </dl>
            <br />
            <br />
            <h3>SSR의 장점</h3>
            <br />
            <dl>
              <dt>
                <strong>1. 빠른 화면 로딩이 가능합니다.</strong>
              </dt>
              <dd>
                Javascript 의존도가 낮은 화면인 경우 사용자에게 빠른 정보 제공이 가능하고, 필요한 부분만 렌더링하여 클라이언트에게 제공되기 때문에
                초기 구동 속도가 빠르다는 장점이 있습니다.
              </dd>
              <br />
              <dt>
                <strong>2. SEO 최적화</strong>
              </dt>
              <dd>서버단에서 HTML에 이미 렌더링된 채로 브라우저에 전달되기 때문에 SEO에 유리합니다.</dd>
            </dl>
            <br />
          </details>
          <br />
          <details>
            <summary>
              1.2 CORS에러에 대해서 설명하고, 프론트엔드 웹앱이, CORS에러를 방지하기 위해 서버단과 구현해야할 사항들을 기술하세요. HTTP 통신의 기본
              원리를 단계적으로 설명해 주세요.
            </summary>
            <br />
            <h3>CORS 에러란</h3>
            <br />
            <p>
              접근자가 권한이 없는 영역에 접근을 시도할 경우 발생하는 에러입니다. CORS 에러를 통해 에러 메세지를 확인할 수 있고, 발생 원인을 파악할 수
              있습니다.
            </p>
            <br />
            <p>
              CORS 에러를 방지하기 위해서는 서버단에서 허용하고자 하는 도메인의 주소를 미리 Orgin 설정 해둘 수 있습니다. 이를 통해 필요로 하는
              도메인에게는 유동적으로 권한을 줄 수 있고 서버단에서 허용하는 도메인들 외에는 접근을 차단하여 서버 자원을 보호할 수 있습니다.
            </p>
            <br />
            <br />
            <h3>HTTP 통신의 기본 원리</h3>
            <br />
            <p>HTTP 통신은 기본적으로 요청(Request)과 응답(Response) 단계로 구분지을 수 있습니다.</p>
            <br />
            <br />
            <dl>
              <dt>
                <strong>요청 단계 (Request)</strong>
              </dt>
              <dd>
                서버에 정보를 요청하기 위해 클라이언트에서 요청 메세지를 생성하여 요청합니다. 필요에 따라 요청 메세지의 인자인 options 설정값으로
                헤더에 정보를 추가하여 요청합니다. 헤더 정보로는 Content-type이나 Accept, Access-Control-Request-Method 등의 많은 정보들을 추가하여
                요청할 수 있습니다.
              </dd>
              <br />
              <br />
              <dt>
                <strong>응답 단계 (Response)</strong>
              </dt>
              <dd>
                클라이언트로부터의 요청 메세지가 접근을 허용한 도메인에서의 요청이라면 서버단에서 일련의 과정을 거친 후 응답 메세지를 반환합니다.
                클라이언트는 서버로부터의 응답을 수신하고 필요한 처리를 할 수 있습니다.
              </dd>
            </dl>
            <br />
          </details>
          <br />
          <details>
            <summary>
              1.3 NextJS를 이용해서, SSR, CSR의 하이브리드형태를, 구현하려고 합니다. 일부 API와 통신해서 데이터를 받아와서 렌더링해주는 예제를 작성해
              주세요. 간단한 샘플 Page js 파일을 생성해서 설명해 주세요. 조건은 로딩 타임이 짧고, 번쩍거리는 등의 효과를 방지하고 페이지를 표현하는
              예제 코드와 각 파트 역할을 설명해 주세요.
            </summary>
            <p>구현하지 못했습니다. 😥</p>
          </details>
        </div>
      </div>

      <div className="project-list">
        <div className="list-wrapper">
          <h2>구현 문제</h2>
          <ul>
            <li>
              <Link to="/todo">Todo List Infinite Scrolling Page</Link>
            </li>
            <li>
              <Link to="/sign-up">Signup Module Page</Link>
            </li>
            <li>
              <Link>The current assignment is not ready yet. 😥</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
