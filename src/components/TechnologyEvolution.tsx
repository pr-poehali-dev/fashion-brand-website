import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const technologies = [
  {
    year: "1987",
    brand: "Nike",
    tech: "Air Max 1",
    description: "Первая видимая воздушная подушка в подошве",
    impact: "Революция в амортизации и дизайне",
    icon: "Wind",
  },
  {
    year: "2013",
    brand: "Adidas",
    tech: "Boost",
    description: "Технология с тысячами энергетических капсул",
    impact: "Новый стандарт возврата энергии",
    icon: "Zap",
  },
  {
    year: "2016",
    brand: "Nike",
    tech: "Flyknit",
    description: "Бесшовная вязаная конструкция верха",
    impact: "Снижение отходов на 60% при производстве",
    icon: "Layers",
  },
  {
    year: "2019",
    brand: "Puma",
    tech: "NITRO",
    description: "Азотная пена для максимального отклика",
    impact: "Легчайшая амортизация для бега",
    icon: "Feather",
  },
];

const TechnologyEvolution = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Эволюция технологий</h2>
          <p className="text-xl text-gray-300">
            Инновации, которые изменили спортивную индустрию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <Card
              key={tech.year}
              className="bg-gray-800 border-gray-700 p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon
                      name={tech.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl font-bold text-purple-400">
                      {tech.year}
                    </span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-semibold">
                      {tech.brand}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {tech.tech}
                  </h3>
                  <p className="text-gray-300 mb-3">{tech.description}</p>

                  <div className="flex items-center space-x-2">
                    <Icon
                      name="TrendingUp"
                      size={16}
                      className="text-green-400"
                    />
                    <span className="text-green-400 font-semibold text-sm">
                      {tech.impact}
                    </span>
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

export default TechnologyEvolution;
