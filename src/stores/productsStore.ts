import { create } from 'zustand'

interface State {
  fetchProducts: () => void
  products: Product[];
  isLoading: boolean;
  error: string | null;
}


export const useProductsStore = create<State>((set) => ({
  fetchProducts: async () => {
    try {
      set({ isLoading: true })
      const jRes = await fetch('https://dummyjson.com/products')
      const res = await jRes.json()
      set({ products: res.products })
    } catch (err) {
        set({ error: 'Oops! Something Went Wrong!' })
    } finally {
      set({ isLoading: false })
    }
  },
  products: [],
  isLoading: false,
  error: null
}))
