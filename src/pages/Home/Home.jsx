import Button from "../../components/Button";
import Container from "../../components/Container";
import { Heading, Text } from "../../components/Typography";
import ProductGrid from "../../components/ProductGrid";
import { products } from "../../data/products";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Container className="pt-10">
        <div className="max-w-md">
          <Heading as="h1" size="xl">
            Título de la página de inicio
          </Heading>
          <Text muted className="mt-3 text-xs">
            Subtítulo que establece el contexto, comparte más información sobre el
            sitio web o, en general, motiva a la gente a seguir navegando.
          </Text>
          <Button size="sm" className="mt-4">
            Botón
          </Button>
        </div>

        <div className="mt-8 aspect-[2.2/1] overflow-hidden rounded-sm bg-neutral-100">
          <img
            src="https://picsum.photos/seed/hero-banner/1600/730"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </Container>

      {/* Cards */}
      <Container className="py-12">
        <Heading as="h2" size="lg" className="mb-8">
          Encabezado de sección
        </Heading>
        <ProductGrid products={products} />
      </Container>
    </>
  );
}