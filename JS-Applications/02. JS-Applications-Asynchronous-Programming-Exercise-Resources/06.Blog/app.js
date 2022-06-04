function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    const viePostBtn = document.getElementById('btnViewPost').addEventListener('click', displayPost);


    getAllPosts()
}

attachEvents();

async function displayPost(postId) {

    const selectedId = document.getElementById('posts').value;
    const post = await getPostById(selectedId);
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-body').textContent = post.body;

}

async function getAllPosts() {

    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const res = await fetch(url);
    const data = await res.json();
    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren()

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    })
}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;
    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}