type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Viewing article: {slug}</h1>
      <p>This is the dynamic article route.</p>
    </div>
  );
}
