import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">sapovalov.com</h3>
            <p className="text-gray-400 mb-4">
              Ваш надежный партнер в мире спортивной одежды и обуви. Официальные
              товары от ведущих брендов.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Instagram"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Twitter"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Youtube"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мужская одежда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Женская одежда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Детская одежда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обувь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Бренды</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nike
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Adidas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Puma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Under Armour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reebok
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Размерная сетка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка и возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Способы оплаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 sapovalov.com. Все права защищены.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
