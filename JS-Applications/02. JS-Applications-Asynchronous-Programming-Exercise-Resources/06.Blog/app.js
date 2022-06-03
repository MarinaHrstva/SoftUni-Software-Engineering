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

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;
    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts` + postId;
    const res = await fetch(url);
    const data = await res.json();
}