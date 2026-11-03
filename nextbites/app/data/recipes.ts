// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "paneer-tikka", title: "Paneer Tikka", emoji: "🧆", minutes: 45, difficulty: "Medium", cuisine: "Indian" },
  { id: "cold-brew", title: "Cold Brew Coffee", emoji: "☕", minutes: 720, difficulty: "Easy", cuisine: "Global" },
  { id: "street-tacos", title: "Street Tacos", emoji: "🌮", minutes: 20, difficulty: "Easy", cuisine: "Mexican" }
];