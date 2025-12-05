import { getAllProducts } from "@/services/products";
import { NextResponse } from "next/server";

export async function GET() {
    const pizzas = await getAllProducts()
    const formatedPizzas = pizzas.map(pizza => ({
        ...pizza,
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${pizza.image}`
    }))
    return NextResponse.json({formatedPizzas});
}