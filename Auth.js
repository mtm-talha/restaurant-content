let authToken = '6a9cc7d4b3d68ab38d81bcb606861888fa38a9b41240f2f33947634f6ae34b82d9d230f7f218052a00d8dce162797d65a5ac702ecc06849c765db740ab9ee6c07c3ab5bd01a3b919c820c5672d44e3593a4af6e1f9ce2b2540ccc7c42036865cf8071d1ee106697dd50c36fb4854f21e21595f7be962001e4c6fb0d8df783800';

export const setAuthToken = (token) => {
  authToken = token;
};

export const getAuthToken = () => {
  return authToken;
};