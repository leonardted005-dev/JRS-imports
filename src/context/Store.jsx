import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "../data/products";

const StoreContext = createContext(null);
const CART_KEY = "jrs-cart";
const PROFILE_KEY = "jrs-profile";
const ORDERS_KEY = "jrs-orders";

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => readJson(CART_KEY, []));
  const [profile, setProfile] = useState(() => readJson(PROFILE_KEY, null));
  const [orders, setOrders] = useState(() => readJson(ORDERS_KEY, []));
  const [toast, setToast] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const api = useMemo(() => {
    const count = cart.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = cart.reduce((sum, line) => {
      const product = getProduct(line.id);
      return sum + (product ? product.price * line.qty : 0);
    }, 0);

    function notify(message) {
      setToast({ id: Date.now(), message });
    }

    function addToCart(id, qty = 1) {
      setCart((current) => {
        const existing = current.find((line) => line.id === id);
        if (existing) {
          return current.map((line) =>
            line.id === id ? { ...line, qty: line.qty + qty } : line
          );
        }
        return [...current, { id, qty }];
      });
      const product = getProduct(id);
      notify(`${product?.name ?? "Item"} added to cart`);
    }

    function updateQty(id, qty) {
      setCart((current) =>
        qty <= 0
          ? current.filter((line) => line.id !== id)
          : current.map((line) => (line.id === id ? { ...line, qty } : line))
      );
    }

    function removeFromCart(id) {
      setCart((current) => current.filter((line) => line.id !== id));
    }

    function clearCart() {
      setCart([]);
    }

    function placeOrder(details) {
      const lines = cart
        .map((line) => {
          const product = getProduct(line.id);
          if (!product) return null;
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: line.qty,
            image: product.image,
          };
        })
        .filter(Boolean);
      const order = {
        id: `JRS-${Date.now().toString().slice(-8)}`,
        placedAt: new Date().toISOString(),
        lines,
        subtotal,
        shipping: subtotal >= 800 ? 0 : 90,
        details,
      };
      order.total = order.subtotal + order.shipping;
      setOrders((current) => [order, ...current]);
      setProfile({
        name: details.name,
        email: details.email,
        phone: details.phone,
        city: details.city,
        region: details.region,
        address: details.address,
      });
      setCart([]);
      return order;
    }

    return {
      cart,
      count,
      subtotal,
      shipping: subtotal === 0 ? 0 : subtotal >= 800 ? 0 : 90,
      profile,
      orders,
      toast,
      menuOpen,
      setMenuOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      placeOrder,
      saveProfile: setProfile,
      dismissToast: () => setToast(null),
    };
  }, [cart, profile, orders, toast, menuOpen]);

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
}
