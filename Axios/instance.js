// axios.create([config])

const apiClient = axios.create({
  baseURL: 'https://api.example.com',  // Base URL for all requests

  timeout: 5000,  // 5 seconds timeout for all requests

  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
    'Custom-Header': 'CustomValue'
  },

  params: {
    apiKey: 'YOUR_API_KEY',
    locale: 'en_US'
  },

  auth: {
    username: 'yourUsername',
    password: 'yourPassword'
  },

  responseType: 'json',  // Expected response type from the server

  xsrfCookieName: 'XSRF-TOKEN',  // Cookie name for XSRF token
  xsrfHeaderName: 'X-XSRF-TOKEN',  // Header name for XSRF token

  maxContentLength: 2000,  // Maximum content length for responses (in bytes)
  maxBodyLength: 2000,  // Maximum body length for request data (in bytes)

  validateStatus: function (status) {
    return status >= 200 && status < 300;  // Resolve only if the status code is in this range
  },

  withCredentials: true,  // Send cookies and auth headers with cross-site requests

  adapter: function (config) {
    // Custom adapter logic, default is XMLHttpRequest for browser, http for Node.js
    return axios.defaults.adapter(config);
  },

  onUploadProgress: function (progressEvent) {
    // Handle upload progress
    console.log('Upload Progress:', Math.round((progressEvent.loaded * 100) / progressEvent.total));
  },

  onDownloadProgress: function (progressEvent) {
    // Handle download progress
    console.log('Download Progress:', Math.round((progressEvent.loaded * 100) / progressEvent.total));
  },

  transformRequest: [function (data, headers) {
    // Modify the request data before sending it to the server
    console.log('Transforming Request:', data);
    return data;  // Must return the transformed data
  }],

  transformResponse: [function (data) {
    // Modify the response data before passing it to then/catch
    console.log('Transforming Response:', data);
    return data;  // Must return the transformed data
  }],

  proxy: {
    host: '127.0.0.1',  // Proxy server address
    port: 9000,  // Proxy server port
    auth: {
      username: 'proxyUser',
      password: 'proxyPass'
    }
  },

  cancelToken: source.token  // Token to cancel the request
});
