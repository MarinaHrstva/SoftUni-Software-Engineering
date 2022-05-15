function loadRepos() {
	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	let list = document.getElementById('repos')

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`)
			}

			return res.json();
		})
		.then(handleResponse)
		.catch(handleError)


	function handleResponse(data) {
		list.innerHTML = '';
		for (const repo of data) {
			let liElement = document.createElement('li');
			liElement.innerHTML = `  <a href="${repo.html_url}">
					${repo.full_name}
				</a>`

			list.appendChild(liElement)
		}

	}

	function handleError(error) {
		list.innerHTML = '';
		list.textContent = `${error.message}`;
	}
}