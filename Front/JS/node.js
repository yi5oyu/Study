JavaScript
 - HTML 조작/변경을 위해 사용(HTML을 조작해서 웹페이지를 다이나믹하게 바꿔주는 기능)
 - 브라우저(크롬, 엣지...)가 자바스크립트 해석(브라우저에서만 동작)

node.js
 - 개발자가 웹 브라우저 외부에서 JavaScript 코드를 실행할 수 있는 오픈 소스 크로스 플랫폼 JavaScript 런타임 환경
 - 서버측 스크립팅을 지원하므로 개발자는 페이지가 사용자의 웹 브라우저로 전송되기 전에 동적 웹 페이지 콘텐츠를 만들 수 있음
 - 자바스크립트로 작성한 코드를 컴퓨터가 이해할 수 있도록 하는 변환 프로그램(브라우저를 키지 않아도 자바스크립트를 컴퓨터에서 수행할 수 있음)

1) 비동기식/이벤트 기반
 - Node.js의 모든 API는 비동기식으로 작동(높은 처리량과 효율적인 리소스 사용 가능)
 - 이벤트 기반의 비동기 처리는 입출력 작업을 기다리는 동안 다른 작업을 수행할 수 있기 때문에 CPU 자원을 효율적으로 활용할 수 있음(높은 처리량으로 많은 수의 동시 연결을 처리할 수 있음)

2) 단일 스레드
 - 단일 스레드에서 작동하지만 비동기식 이벤트 루프로 많은 동시 연결을 효율적으로 관리(Non-Blocking을 하나의 스레드로 수행할 수 있음)
  = 보통 스레드 기반 작업은 요청마다 스레드 생성(메모리 소모 크고 병목현상 일어날 수 있음)
  * Non-Blocking: 작업 실행중 다음 작업을 실행해야할때 현재 작업이 끝나지 않더라도 다음 작업 실행할 수 있도록 하는 방식

3) 확장성/경량화/단일 언어
 - 시스템 리소스를 최소화해 서버 확장성 높임
 - FE/BE 모두 JavaScript 기반 언어 사용
 - 병렬 작업과 대용량 데이터를 처리하는데 높은 성능을 보장

npm(Node Package Manager)
 - 다양한 기능을 하는 모듈을 손쉽게 설치하고 관리할 수 있음
 - 패키지 설치, 버전 관리, 종속성 관리
  
npx(Node Package Execute)
 - 로컬이나 원격 저장소에 있는 패키지를 간편하게 실행할 수 있음
 - 패키지 실행 간소화, 특정 버전의 패키지 실행, 버전 충돌 방지