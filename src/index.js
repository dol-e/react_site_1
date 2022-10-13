import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

SSR(Service Side Rendering) - 메뉴 링크를 클릭할 때 마다 브라우저가 서버에 각각의 html 파일을 요청해서 화면을 랜딩하는 것
- 장점: 초기 로딩속도 빠른 편
- 단점: 페이지 이동시 화면이 깜빡이면서 서브페이지를 서버쪽에 요청해
- 단점: 페이지 이동시 화면에서 변경될 필요가 없는 공통영역까지 모조리 변경함

CSR(Client Side Rendering)
- 모든 컴포넌트들을 jsx 자바스크립트 파일형태로 초기 초딩시 모두 불러옴
- 초기 로딩속도가 비교적 느림(단점)
- 메뉴 이동시 부드럽게 실시간으로 서브 컨텐츠를 보여준다.(서버 쪽에 요청을 원한다)
- 메뉴 이동시 변경될 부분만 실시간으로 바꿔준다(컴포넌츠 때문에)
= 뭔가 화면의 변화가 많은 동적인 UI 구현시 속도가 빠르기 때문에 훌륭하다


DOM - html, css 문법들으 브라우저가 해석을 해서 자바스크립트가 제어가능한 객체 형태로 변환해서 화면에 출력하는 요소
cf) DOM(브라우저) - 해석된 내용이 출력되는 대상

Real DOM
- html 파일에 입력 내용을 토애도 화면에 출력된 DOM
Virtual DOM
- JSX 문법을 통해서 실제 브라우저에 realDOM으로 출력되기 전 메모리상에서 빠르게 만들어지는 가상 DOM

JSX - HTML 태그는 아니지만 자바스크립트 virtual DOM을 쉽게 만들기 위한 문법체계



*/

