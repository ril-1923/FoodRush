import { useNavigate } from "react-router-dom";
import type { Category } from "../types";
import { handleImgError } from "../utils/image";

export default function CategoryCard({ category }: { category: Category }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="fr-category-card"
      onClick={() => navigate(`/restaurants?category=${category.id}`)}
    >
      <div className="fr-category-img-wrap">
        <img src={category.image} alt="" onError={handleImgError} loading="lazy" />
      </div>
      <div className="fr-category-name">{category.name}</div>
    </button>
  );
}
