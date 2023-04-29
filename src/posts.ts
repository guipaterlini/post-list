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

async function testPost() {
  const data = await getPosts();
  console.log(data);
}

testPost();
