import './category.css'

export default function Category({info}) {
   return (
    <div className="category-card">
      <div className="category-id">ID: {info.id}</div>
      <img src={info.image} alt={info.name} className="category-image" />
      <div className="category-name">{info.name}</div>
    </div>
  );
}
