import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { Heading, Text } from "../../components/Typography";
import { getProductById } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <Container className="py-20">
        <Heading as="h1" size="lg">Producto no encontrado</Heading>
        <Text muted className="mt-2">Bu məhsul mövcud deyil.</Text>
        <Button as={Link} to="/" variant="outline" className="mt-6">
          Ana səhifəyə qayıt
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <Link to="/" className="text-xs text-neutral-500 hover:text-black">
        ← Geri
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <Heading as="h1" size="md">{product.name}</Heading>
          <Text muted className="mt-3 text-xs">{product.subtitle}</Text>
          <p className="mt-4 text-sm font-medium">{product.price.toFixed(2)} $</p>
          <Text muted className="mt-4 text-xs">{product.description}</Text>
          <Button fullWidth size="sm" className="mt-6">
            Añadir al carrito
          </Button>
        </div>
      </div>
    </Container>
  );
}
