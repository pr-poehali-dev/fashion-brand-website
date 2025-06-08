import BrandCard from "./BrandCard";

const brands = [
  {
    name: "Nike",
    founded: "1964",
    founder: "Билл Бауэрман и Фил Найт",
    headquarters: "Бивертон, Орегон, США",
    keyFact: "Название Nike происходит от имени греческой богини победы Ники",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    timeline: [
      "1964 - Основание компании Blue Ribbon Sports",
      "1971 - Создание логотипа 'Swoosh' за $35",
      "1972 - Переименование в Nike",
      "1988 - Запуск слогана 'Just Do It'",
    ],
  },
  {
    name: "Adidas",
    founded: "1949",
    founder: "Адольф Дасслер",
    headquarters: "Херцогенаурах, Германия",
    keyFact:
      "Три полоски стали символом после покупки дизайна у финской компании Karhu за две бутылки виски",
    logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    timeline: [
      "1920 - Адольф начинает делать обувь в доме матери",
      "1949 - Официальная регистрация Adidas AG",
      "1954 - Сборная ФРГ выигрывает ЧМ в бутсах Adidas",
      "1970 - Первый мяч для ЧМ Telstar",
    ],
  },
  {
    name: "Puma",
    founded: "1948",
    founder: "Рудольф Дасслер",
    headquarters: "Херцогенаурах, Германия",
    keyFact:
      "Puma основал брат основателя Adidas после их ссоры, разделившей целый город на два лагеря",
    logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    timeline: [
      "1948 - Рудольф основывает Puma Schuhfabrik Rudolf Dassler",
      "1958 - Пеле выигрывает ЧМ в бутсах Puma",
      "1968 - Томми Смит поднял кулак в кедах Puma",
      "1970 - Пеле повязывает шнурки Puma перед финалом ЧМ",
    ],
  },
  {
    name: "Under Armour",
    founded: "1996",
    founder: "Кевин Планк",
    headquarters: "Балтимор, Мэриленд, США",
    keyFact:
      "Компания началась с продажи футболок из багажника автомобиля студентом университета",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    timeline: [
      "1996 - Кевин Планк создает первую футболку из синтетики",
      "1999 - Первый контракт с командой NFL",
      "2005 - IPO на Нью-Йоркской бирже",
      "2014 - Покупка приложения MyFitnessPal за $475 млн",
    ],
  },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Легендарные бренды
          </h2>
          <p className="text-xl text-gray-600">
            Узнайте удивительные истории создания спортивных империй
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
