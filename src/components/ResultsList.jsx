import Card from "./Card";

export default function ResultsList({ category, list }) {
  if (!list || list.length === 0) return null;

  return (
    <div className="row mt-4">
      <h2>{category}</h2>
      {list
        .filter((item) => item.img !== null)
        .map((item) => (
          <Card key={item.id} element={item}></Card>
        ))}
    </div>
  );
}
