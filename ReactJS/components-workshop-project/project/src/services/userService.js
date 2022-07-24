
const baseURL = 'http://localhost:3005/api/users'


export const getAll = async () => {
  const response = await fetch(baseURL);
  const result = await response.json();

  return result.users;

}

export const getOne = async (userId) => {
  const response = await fetch(`${baseURL}/${userId}`);
  const result = await response.json();

  return result.user;
}