const articles = [
  { id: 1, title: "記事1" },
  { id: 2, title: "記事2" },
  { id: 3, title: "記事3" },
];

async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
//   throw new Error("エラー発生");
  return articles;
}

export default async function page() {
  const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>title:{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
