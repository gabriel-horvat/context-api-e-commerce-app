import { createContext } from "react";

const CardContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

export default CartContext;
