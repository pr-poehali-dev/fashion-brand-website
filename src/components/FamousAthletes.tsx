import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const athletes = [
  {
    name: "Майкл Джордан",
    brand: "Nike",
    sport: "Баскетбол",
    achievement: "6 чемпионств NBA",
    impact: "Создал культ Jordan Brand, который приносит миллиарды",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    brandColor: "text-orange-600",
  },
  {
    name: "Лионель Месси",
    brand: "Adidas",
    sport: "Футбол",
    achievement: "8 Золотых мячей",
    impact: "Лицо Adidas в футболе, контракт пожизненно",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    brandColor: "text-blue-600",
  },
  {
    name: "Усэйн Болт",
    brand: "Puma",
    sport: "Легкая атлетика",
    achievement: "8 олимпийских золотых медалей",
    impact: "Самый быстрый человек планеты в экипировке Puma",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    brandColor: "text-purple-600",
  },
];

const FamousAthletes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Легендарные спортсмены
          </h2>
          <p className="text-xl text-gray-600">
            Атлеты, которые изменили историю спортивных брендов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <Card
              key={athlete.name}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{athlete.name}</h3>
                  <p className={`text-lg font-semibold ${athlete.brandColor}`}>
                    {athlete.brand}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Trophy"
                    className={`mr-2 ${athlete.brandColor}`}
                    size={20}
                  />
                  <span className="font-semibold text-gray-800">
                    {athlete.sport}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Достижения:
                  </h4>
                  <p className="text-gray-600">{athlete.achievement}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Влияние на бренд:
                  </h4>
                  <p className="text-gray-600">{athlete.impact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousAthletes;
