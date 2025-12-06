'use client';

import { Product } from "@/generated/prisma/client";
import Image from "next/image";
import { Button } from "../ui/button";
import { decimalToMoney } from "@/lib/utils";

type Props = {
    data: Product;
}

export const PizzaItem = ({ data }: Props) => {

    const handleAddtoCart = () => {}

    return <div className="text-sm bg-secondary p-4 rounded-md">
        <Image
            src={data.image}
            alt={data.name}
            width={200}
            height={200}
            className="w-full mb-3"
        />
        <div className="text-lg font-bold">{data.name}</div>
        <div>{decimalToMoney(data.price)}</div>
        <div className="truncate">{data.ingredients}</div>
        <div>
            <Button onClick={handleAddtoCart} className="w-full mt-4 cursor-pointer">Adicionar ao carrinho</Button>
        </div>
    </div>;
}