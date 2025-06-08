import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const timelineEvents = [
  {
    year: "1920",
    title: "Братья Дасслер",
    description:
      "Адольф и Рудольф Дасслер начинают производить спортивную обувь в небольшой мастерской",
    icon: "Users",
  },
  {
    year: "1936",
    title: "Олимпиада в Берлине",
    description:
      "Джесси Оуэнс выигрывает 4 золотые медали в кроссовках Dassler Brothers",
    icon: "Trophy",
  },
  {
    year: "1948-1949",
    title: "Великий раскол",
    description:
      "Братья ссорятся и основывают две конкурирующие компании: Puma и Adidas",
    icon: "Zap",
  },
  {
    year: "1964",
    title: "Рождение Nike",
    description:
      "Билл Бауэрман и Фил Найт основывают Blue Ribbon Sports, будущую Nike",
    icon: "Rocket",
  },
  {
    year: "1970",
    title: "Эра инноваций",
    description:
      "Начинается гонка технологий: от Telstar до Air Max и новых материалов",
    icon: "Lightbulb",
  },
  {
    year: "1996",
    title: "Новое поколение",
    description:
      "Under Armour revolutionizes спортивную одежду с технологичными материалами",
    icon: "Sparkles",
  },
];

const HistoryTimeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            История спортивной индустрии
          </h2>
          <p className="text-xl text-gray-600">
            Ключевые моменты, которые изменили мир спорта навсегда
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <Card
                key={event.year}
                className="relative ml-20 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[68px] top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={event.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-purple-600">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
