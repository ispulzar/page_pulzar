import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export function CardH({item}) {
    return (
    <div className="p-6">
      <Card className="p-4 grid grid-cols-2 max-w-52 sm:max-w-2xl">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={item.img}
        />
        <CardBody className="py-2">
          <h4 className="font-bold text-large">{item.title}</h4>
          <p className="text-tiny uppercase font-bold">{item.description}</p>
          <small className="text-default-500">{item.price}</small>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardH;
