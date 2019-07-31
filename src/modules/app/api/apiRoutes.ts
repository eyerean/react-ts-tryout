const ROOT_URL = 'https://swapi.co/api/'

const apiRoutes = {
  fetchPerson: (id: string) => `${ROOT_URL}people/${id}/`,
};

export default apiRoutes;
