import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import crispyCorn from "@/assets/dish-crispy-corn.jpg";
import seekhKebab from "@/assets/dish-seekh-kebab.jpg";
import dumAloo from "@/assets/dish-dum-aloo.jpg";
import dalMakhani from "@/assets/dish-dal-makhani.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import roganJosh from "@/assets/dish-rogan-josh.jpg";
import mintCooler from "@/assets/dish-mint-cooler.jpg";
import kahwa from "@/assets/dish-kahwa.jpg";
import phirni from "@/assets/dish-phirni.jpg";
import gulabJamun from "@/assets/dish-gulab-jamun.jpg";
import kulfi from "@/assets/dish-kulfi.jpg";

export type DishCategory = "starters" | "mains" | "beverages" | "desserts";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: DishCategory;
  veg: boolean;
  popular?: boolean;
}

export const MENU_FILTERS = [
  { id: "all", label: "All Items" },
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "nonveg", label: "Non-Vegetarian" },
  { id: "beverages", label: "Beverages" },
  { id: "desserts", label: "Desserts" },
] as const;

export type MenuFilterId = (typeof MENU_FILTERS)[number]["id"];

/**
 * SAMPLE CONTENT — every dish and price below is an illustrative placeholder
 * for the concept demo. Replace with the restaurant's real menu before launch.
 */
export const DISHES: Dish[] = [
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description:
      "Char-grilled cottage cheese with peppers and onion, finished with a fresh mint chutney.",
    price: 249,
    image: paneerTikka,
    category: "starters",
    veg: true,
    popular: true,
  },
  {
    id: "crispy-corn",
    name: "Crispy Corn",
    description:
      "Golden-fried corn kernels tossed with chaat masala, coriander and a squeeze of lime.",
    price: 199,
    image: crispyCorn,
    category: "starters",
    veg: true,
  },
  {
    id: "seekh-kebab",
    name: "Chicken Seekh Kebab",
    description:
      "Minced chicken kebabs chargrilled on skewers, served over onions with mint chutney.",
    price: 289,
    image: seekhKebab,
    category: "starters",
    veg: false,
    popular: true,
  },
  {
    id: "dum-aloo",
    name: "Dum Aloo Kashmiri",
    description:
      "Baby potatoes simmered in a fennel-scented yoghurt gravy with whole spices.",
    price: 239,
    image: dumAloo,
    category: "mains",
    veg: true,
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils finished with cream and a pat of butter. Pairs with naan.",
    price: 269,
    image: dalMakhani,
    category: "mains",
    veg: true,
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description:
      "Tender tandoori chicken in a silky tomato-and-cream gravy, topped with fresh mint.",
    price: 349,
    image: butterChicken,
    category: "mains",
    veg: false,
    popular: true,
  },
  {
    id: "rogan-josh",
    name: "Lamb Rogan Josh",
    description:
      "Slow-braised lamb in a rich Kashmiri chilli gravy, served with saffron rice.",
    price: 399,
    image: roganJosh,
    category: "mains",
    veg: false,
  },
  {
    id: "mint-cooler",
    name: "Fresh Mint Cooler",
    description:
      "Muddled mint and lime over crushed ice — our namesake refresher.",
    price: 129,
    image: mintCooler,
    category: "beverages",
    veg: true,
  },
  {
    id: "kahwa",
    name: "Kashmiri Kahwa",
    description:
      "Saffron green tea with toasted almonds and cardamom, brewed the valley way.",
    price: 99,
    image: kahwa,
    category: "beverages",
    veg: true,
  },
  {
    id: "phirni",
    name: "Kashmiri Phirni",
    description:
      "Ground-rice pudding set in clay bowls with saffron, almonds and dried rose.",
    price: 149,
    image: phirni,
    category: "desserts",
    veg: true,
    popular: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Warm syrup-soaked dumplings topped with crushed pistachio and saffron strands.",
    price: 129,
    image: gulabJamun,
    category: "desserts",
    veg: true,
  },
  {
    id: "kulfi",
    name: "Saffron Kulfi",
    description:
      "Dense saffron ice cream on a stick, rolled in pistachio and almond slivers.",
    price: 179,
    image: kulfi,
    category: "desserts",
    veg: true,
  },
];

export const MENU_NOTE =
  "The dishes and prices shown here are illustrative samples for this concept website only. The final menu, dishes and prices must be confirmed by the restaurant owner before launch.";
