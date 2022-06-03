function attachEvents() {
    getAllPosts()

}

attachEvents();


async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

