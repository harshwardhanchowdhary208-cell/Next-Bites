import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card" style={{ border: '1px solid #eaeaea', padding: '16px', borderRadius: '12px' }}>
      <div className="card-art" style={{ fontSize: '2.5rem' }}>{recipe.emoji}</div>
      <h3 style={{ margin: '12px 0 8px 0' }}>{recipe.title}</h3>
      <div className="card-meta" style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: '#666' }}>
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}