import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Nike",
    logo: "/logo-nike.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "/logo-adidas.svg",
  },
  {
    id: 3,
    name: "Puma",
    logo: "/logo-puma.svg",
  },
  {
    id: 4,
    name: "New Balance",
    logo: "/logo-newbalance.svg",
  },
];

const BrandList = () => {
    return (
      <div className="space-y-6">
        <h3 className="px-5 font-semibold">Marcas parceiras</h3>
        <div className="grid grid-cols-4 gap-4 px-5">
          {brands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-2xl border border-gray-200 p-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="mt-4 text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };    

export default BrandList;
