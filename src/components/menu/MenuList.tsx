import DishImage from '@/components/ui/DishImage';

// Agregado tipo para el parámetro dishes
interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId?: string;
}

interface MenuListProps {
  dishes: Dish[];
}

export default function MenuList({ dishes }: MenuListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dishes.map(dish => (
        <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <DishImage
            cloudinaryId={dish.imageId}
            name={dish.name}
            height={240}
            width={400}
            className="w-full h-60"
          />
          <div className="p-4">
            <h3 className="font-bold">{dish.name}</h3>
            <p className="text-gray-600 mt-1">{dish.description}</p>
            <div className="mt-2 text-amber-600 font-medium">S/. {dish.price.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
