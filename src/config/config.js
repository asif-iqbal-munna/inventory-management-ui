const appConfig = () => {
  const result = {
    appUrl: 'http://localhost:3000',
    backendUrl: 'http://localhost:4000',
  };
  if (process.env.REACT_APP_ENVIRONMENT === 'PROD') {
    result.appRepoLocation = 'https://inventory-management-dev.vercel.app/';
    result.backendUrl = 'http://localhost:4000';
  }
  return result;
};
export default appConfig;
