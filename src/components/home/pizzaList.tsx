'use client'

import { Product } from "@/generated/prisma/client"
import { PizzaItem } from "./PizzaItem"

type Props = {
    pizzas: Product[]
}

export const PizzaList = ({ pizzas }: Props) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pizzas.map((pizza: Product) => (
                <PizzaItem
                    key={pizza.id}
                    data={pizza}
                />
            ))}
        </div>
    )
}