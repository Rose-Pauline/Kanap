import { renderCartPage } from "./render.js";
import { order } from "./handleOrder.js";
import { renderEmptyCart } from "./render.js";

renderCartPage();
order();
renderEmptyCart();
