export const products = [
  {
    id: "meyve-desti",
    title: "Subtítulo",
    subtitle: "Subtítulo",
    name: "Nombre del producto",
    price: 10.99,
    excerpt: "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo.",
    description:
      "Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.",
    image: "/card1.jpg",
  },
  {
    id: "yay-natureti",
    title: "Subtítulo",
    subtitle: "Subtítulo",
    name: "Nombre del producto",
    price: 12.5,
    excerpt: "Cuerpo del texto para lo que desees ampliar sobre el tema principal.",
    description:
      "Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.",
    image: "/card2.jpg",
  },
  {
    id: "serin-desert",
    title: "Subtítulo",
    subtitle: "Subtítulo",
    name: "Nombre del producto",
    price: 8.75,
    excerpt: "Cuerpo del texto para lo que desees compartir adicionalmente.",
    description:
      "Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.",
    image: "/card3.jpg",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);