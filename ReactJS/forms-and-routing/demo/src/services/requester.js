
export const request = async (method, url, data) => {

    try {
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url)
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequest;
        const result = await response.json()

        return result;

    } catch (error) {
        console.log(error);
    }
}

export const get=request.bind({},'GET');
export const post=request.bind({},'POST');
export const del=request.bind({},'DELETE');
export const put=request.bind({},'PUT');
export const patch=request.bind({},'PATCH');

