import { Link } from "react-router-dom";
import { Heading, Text } from "./Typography";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <Heading as="h3" size="sm" className="mt-3">
        {product.title}
      </Heading>
      <Text muted className="mt-1 text-xs">
        {product.excerpt}
      </Text>
    </Link>
  );
}