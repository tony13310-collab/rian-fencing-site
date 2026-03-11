import { opponents, getOpponentSlug } from "@/data/opponents";
import OpponentDetailClient from "./OpponentDetailClient";

export function generateStaticParams() {
  return Object.keys(opponents).map((name) => ({
    slug: getOpponentSlug(name),
  }));
}

export default function OpponentPage() {
  return <OpponentDetailClient />;
}
