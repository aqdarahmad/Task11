import './category.css';
import {
  Smartphone,
  Shirt,
  Book,
  Home,
  Sparkles,
  ToyBrick,
  Dumbbell,
  Car,
  Briefcase,
  HeartPulse
} from "lucide-react";

export default function Category({ info }) {

  const categoryIcons = {
    Electronics: Smartphone,
    Clothing: Shirt,
    Books: Book,
    "Home & Kitchen": Home,
    Beauty: Sparkles,
    Toys: ToyBrick,
    Sports: Dumbbell,
    Automotive: Car,
    "Office Supplies": Briefcase,
    Health: HeartPulse
  };


  const IconComponent = categoryIcons[info.name] || Briefcase;

  return (
    <div className="category-card">
      <div className="category-id">ID: {info.id}</div>
      <IconComponent size={40} color="blue" />
      <div className="category-name">{info.name}</div>
    </div>
  );
}
