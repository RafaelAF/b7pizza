"use client"

import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"

export const  CartEmpty = () => {
    const { setOpen } = useCart()

    return (
        <div className="text-center text-gray-500 my-10">
            <p className="mb-4">Seu carrinho está vazio.</p>
            <Button onClick={()=>setOpen(false)}>Fechar</Button>
        </div>
    )
}