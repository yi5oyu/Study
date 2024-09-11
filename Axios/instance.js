// axios.create([config])
// axios에서 사용되는 옵션

const apiClient = axios.create({
  // 모든 요청에 대한 기본 URL 설정
  baseURL: 'https://api.example.com',  

  // 모든 요청에 대헤 시간 초과 설정 (설정된 시간보다 오래 걸리면 자동으로 중단됨)
  timeout: 5000, 

  // 모든 요청과 함께 전송될 사정자 정의 헤더 정의
  headers: {
    // Bearer 토큰과 함께 Authorization 헤더 추가
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    // 콘텐츠 유형 설정
    'Content-Type': 'application/json',
    // 사용자 정의 헤더
    'Custom-Header': 'CustomValue'
  },

  // 모든 요청 URL에 추가되는 기본 쿼리 매개변수
  params: {
    // 요청 인증 API키
    apiKey: 'YOUR_API_KEY',
    // 로케일 지정
    locale: 'en_US'
  },

  // HTTP 기본 인증 자격 증명 제공 (자동으로 포함 시킴)
  auth: {
    username: 'yourUsername',
    password: 'yourPassword'
  },

  // 서버에서 예상되는 데이터 유형 지정
  responseType: 'json',  

  // XSRF(교차 사이트 요청 위조) 보호에 사용됨
  // XSRF 토큰이 포함된 쿠키의 이름
  xsrfCookieName: 'XSRF-TOKEN', 
  // XSRF 토큰과 함께 전송될 HTTP 헤더의 이름
  xsrfHeaderName: 'X-XSRF-TOKEN',  

  // HTTP 응답 콘텐츠/바디 최대 크기를 2000바이트로 설정 (응답 내용이 이 제한을 초과하면 Axios에서 오류가 발생)
  maxContentLength: 2000,
  maxBodyLength: 2000,

  // 상태 코드가 200에서 299 사이인 경우에만 약속을 해결
  validateStatus: function (status) {
    return status >= 200 && status < 300; 
  },

  // Axios가 크로스 사이트 요청과 함께 쿠키 및 HTTP 기본 인증 헤더를 보낼 수 있음 (자격 증명이 필요한 교차 원본 요청에 필요)
  withCredentials: true,

  // 사용자 지정 어댑터를 지정 (브라우저: XMLHttpRequest, Node.js: http)
  adapter: function (config) {
    return axios.defaults.adapter(config);
  },

  // 업로드되는 요청의 진행 상황을 모니터링하는 콜백 함수
  onUploadProgress: function (progressEvent) {
    console.log('Upload Progress:', Math.round((progressEvent.loaded * 100) / progressEvent.total));
  },
  
  // 응답의 다운로드 진행률을 모니터링
  onDownloadProgress: function (progressEvent) {
    console.log('Download Progress:', Math.round((progressEvent.loaded * 100) / progressEvent.total));
  },

  // 요청 데이터를 서버로 보내기 전에 수정할 수 있는 함수 배열
  transformRequest: [function (data, headers) {
    console.log('Transforming Request:', data);
    return data;  
  }],

   // .then 또는 .catch 메서드에 전달되기 전에 수정할 수 있는 함수 배열
  transformResponse: [function (data) {
    console.log('Transforming Response:', data);
    return data;  
  }],

  // 모든 요청이 라우팅될 프록시 서버를 정의할 수 있음
  proxy: {
    host: '127.0.0.1', 
    port: 9000, 
    auth: {
      username: 'proxyUser',
      password: 'proxyPass'
    }
  },

  // 요청을 취소하는 데 사용할 수 있는 취소 토큰을 만드는 데 사용 (요청이 너무 오래 걸리거나 다른 조건이 충족되는 경우)
  cancelToken: source.token
});
