const authToken = import.meta.env.VITE_API_TOKEN;

export const getAuthToken = () => {
  return authToken;
};
