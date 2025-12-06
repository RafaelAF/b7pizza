import { CartItem } from "@/types/cartIte"
import { create } from "zustand"

type Store = {
    open: boolean
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (productId: number) => void
    setOpen: (value: boolean) => void
}

export const useCart = create<Store>((set) => ({
    open: false,
    items: [],
    setOpen: (open) => set(state => ({ ...state, open })),
    addItem: (item) => set(state => {
        let clonedItems = [...state.items]
        const itemIndex = clonedItems.findIndex(i => i.productId === item.productId)
        if (itemIndex > -1) {
            clonedItems[itemIndex].quantity += item.quantity
        } else {
            clonedItems.push(item)
        }

        return { ...state, items: clonedItems}
    }),
    removeItem: (productId) => set(state => ({
        ...state,
        items: state.items.filter(item => item.productId !== productId),
    })),
}))