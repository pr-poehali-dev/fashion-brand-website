import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 12990,
    originalPrice: 15990,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кроссовки",
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 14990,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кроссовки",
    isNew: true,
  },
  {
    id: "3",
    name: "Puma RS-X",
    brand: "Puma",
    price: 8990,
    originalPrice: 11990,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кроссовки",
    isSale: true,
  },
  {
    id: "4",
    name: "Under Armour HOVR",
    brand: "Under Armour",
    price: 9990,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кроссовки",
  },
  {
    id: "5",
    name: "Nike Dri-FIT",
    brand: "Nike",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Футболка",
    isNew: true,
  },
  {
    id: "6",
    name: "Adidas 3-Stripes",
    brand: "Adidas",
    price: 7990,
    originalPrice: 9990,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Спортивный костюм",
    isSale: true,
  },
  {
    id: "7",
    name: "Puma Essentials",
    brand: "Puma",
    price: 4990,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Худи",
  },
  {
    id: "8",
    name: "Reebok Classic",
    brand: "Reebok",
    price: 6990,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кроссовки",
    isNew: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600">
            Откройте для себя самые востребованные модели
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">
            Показать больше товаров
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
