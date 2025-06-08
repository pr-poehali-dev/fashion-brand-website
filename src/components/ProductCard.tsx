import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-0 shadow-sm">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500 text-white">Новинка</Badge>}
          {isSale && <Badge className="bg-red-500 text-white">Скидка</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
          >
            <Icon name="Heart" size={18} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
          >
            <Icon name="Eye" size={18} />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {brand}
          </p>
          <p className="text-xs text-gray-400">{category}</p>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {price.toLocaleString()} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString()} ₽
              </span>
            )}
          </div>

          <Button
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
