import { useCarContext } from "../context/CarState";
import { CardH } from "../molecules/CardH";
function ShopCar() {
  const img = "https://nextui.org/images/hero-card-complete.jpeg";
  const data = [
    {
      img,
      title:"Articulo 1",
      description: "esta es una descriot",
      price: 2.5,
    },
    {
      img,
      title:"Articulo 2",
      description: "esta es una descriot",
      price: 2.5,
    },
    {
      img,
      title:"Articulo 3",
      description: "esta es una descriot",
      price: 2.5,
    },
  ];
  const { toggleCar } = useCarContext();
  if (toggleCar) {
    return (
      <div className="max-w-xl h-96 overflow-auto">
        <h2>ARTICULOS</h2>
     {data.map((item, index)=><CardH key={`${index}-${item}`} item={item}/>)}
      </div>
    );}
}

export default ShopCar;
