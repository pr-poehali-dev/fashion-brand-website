import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface BrandCardProps {
  name: string;
  founded: string;
  founder: string;
  headquarters: string;
  keyFact: string;
  logo: string;
  timeline: string[];
}

const BrandCard = ({
  name,
  founded,
  founder,
  headquarters,
  keyFact,
  logo,
  timeline,
}: BrandCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-white border-0 shadow-md">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <Badge variant="secondary" className="mt-1">
              Основан в {founded}
            </Badge>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="User" size={16} className="mr-2" />
            <span>
              <strong>Основатель:</strong> {founder}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="MapPin" size={16} className="mr-2" />
            <span>
              <strong>Штаб-квартира:</strong> {headquarters}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex items-start">
            <Icon
              name="Lightbulb"
              size={16}
              className="mr-2 mt-1 text-blue-600"
            />
            <p className="text-sm text-blue-800">
              <strong>Интересный факт:</strong> {keyFact}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Icon name="Calendar" size={16} className="mr-2" />
            Ключевые даты:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {timeline.slice(0, 3).map((event, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                {event}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
            Узнать больше
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BrandCard;
