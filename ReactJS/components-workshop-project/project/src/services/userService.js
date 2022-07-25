
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

export const create = async (userData) => {
	const response = await fetch(baseURL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(userData)
	})

	const result = await response.json();

	return result.user;
}

