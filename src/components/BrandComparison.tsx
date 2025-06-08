import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const comparisons = [
  {
    category: "Инновации",
    nike: { score: 95, highlight: "Air Max технология" },
    adidas: { score: 90, highlight: "Boost подошва" },
    puma: { score: 85, highlight: "NITRO пена" },
  },
  {
    category: "Маркетинг",
    nike: { score: 98, highlight: "Just Do It кампания" },
    adidas: { score: 88, highlight: "Impossible is Nothing" },
    puma: { score: 82, highlight: "Forever Faster" },
  },
  {
    category: "Спонсорство",
    nike: { score: 92, highlight: "NBA партнерство" },
    adidas: { score: 95, highlight: "FIFA официальный мяч" },
    puma: { score: 88, highlight: "Формула-1 команды" },
  },
];

const BrandComparison = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Сравнение брендов
          </h2>
          <p className="text-xl text-gray-600">
            Анализ ключевых показателей топ-3 спортивных брендов
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((item) => (
            <Card key={item.category} className="p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                {item.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {item.nike.score}%
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Nike
                    </h4>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4">
                    <Icon
                      name="Star"
                      className="mx-auto mb-2 text-orange-600"
                      size={24}
                    />
                    <p className="text-sm text-gray-700">
                      {item.nike.highlight}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {item.adidas.score}%
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Adidas
                    </h4>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <Icon
                      name="Award"
                      className="mx-auto mb-2 text-blue-600"
                      size={24}
                    />
                    <p className="text-sm text-gray-700">
                      {item.adidas.highlight}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {item.puma.score}%
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Puma
                    </h4>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4">
                    <Icon
                      name="Target"
                      className="mx-auto mb-2 text-purple-600"
                      size={24}
                    />
                    <p className="text-sm text-gray-700">
                      {item.puma.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandComparison;
