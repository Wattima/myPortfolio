function myPosts() {
  let baseURL = "https://jsonplaceholder.typicode.com";
  let postsEndpoint = "/posts";

  let url = `${baseURL}${postsEndpoint}`;

  fetch(url)
    .then((resp) => resp.json())
    .then(renderPosts);
}
myPosts();

function renderPosts(users) {
  users.forEach(renderTitles);
}

const titles = document.getElementById('parentList');

function renderTitles(posts) {
  let li = document.createElement("li");
  li.innerText = posts.title;
  titles.appendChild(li);
}
renderTitles(posts);
