import { Card } from "@/components/ui/card";

const brands = [
  {
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Just Do It",
    products: "2,500+ товаров",
  },
  {
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Impossible is Nothing",
    products: "1,800+ товаров",
  },
  {
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Forever Faster",
    products: "1,200+ товаров",
  },
  {
    name: "Under Armour",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "I Will",
    products: "800+ товаров",
  },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные бренды
          </h2>
          <p className="text-xl text-gray-600">
            Выбирайте среди лучших спортивных брендов мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={brand.name}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-white border-0 shadow-md"
            >
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 mb-2">{brand.description}</p>
                <p className="text-sm text-purple-600 font-medium">
                  {brand.products}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
