export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Viewing article: {params.slug}</h1>
    </div>
  );
}
