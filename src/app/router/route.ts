export const ROUTES = {
  HOME: "/",
  
  USERS: "/users",

  TRANSFERS: "/transfers",

  TRANSFERS_DETAIL: (
    id: string | number
  ) => `/transfers/${id}`,

  USERS_DETAIL: (
      id: string | number
  ) => `/users/${id}`,

  LOGIN: "/login",

  CARDS: "/cards",

  CARDS_DETAIL: (
    id: number | string
) => `/cards/${id}`,

  PRODUCTS: "/products",

  KYC: "/kyc",

  LIMITS: "/limits",

  WALLETS: "/wallets",
};