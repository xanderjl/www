const { MODE, PRIVATE_BASE_URL } = import.meta.env;

const baseUrl =
  MODE === 'development' ? 'http://localhost:3000' : PRIVATE_BASE_URL;

export default baseUrl;
