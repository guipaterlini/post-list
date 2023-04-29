type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function getPosts(): Promise<Post[]> {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

function adicionarNoRoot(conteudo: string) {
  const root = document.getElementById("root");

  if (root) {
    root.innerHTML = root.innerHTML + conteudo;
  }
}

async function adicionarPostsNaPagina() {
  const data = await getPosts();

  data.forEach((post) => {
    const conteudo = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `;
    adicionarNoRoot(conteudo);
  });
}

adicionarPostsNaPagina();
