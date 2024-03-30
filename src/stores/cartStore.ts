import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const randomId = () => crypto.randomUUID();

type CartItem = {
    id: string;
    item: Product;
    qty: number;
};

interface State {
    cart: CartItem[];
    addToCart: (item: Product) => void;
}

// helper
const adder = (state: State, item: Product): State => {
    const foundItemIndex = state.cart.findIndex(el => el.item.id === item.id);
    if (foundItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[foundItemIndex].qty++;
        return { ...state, cart: updatedCart };
    } else {
        return { ...state, cart: [...state.cart, { id: randomId(), item, qty: 1 }] };
    }
};

export const useCartStore = create<State>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (item) => set((state) => adder(state, item))
        }),
        {
            name: 'cart-storage',
        },
    ),
);
