import hero from "@/assets/hero.jpg";
import interior from "@/assets/about-interior.jpg";
import table from "@/assets/gallery-table.jpg";
import spices from "@/assets/gallery-spices.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import seekhKebab from "@/assets/dish-seekh-kebab.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import dumAloo from "@/assets/dish-dum-aloo.jpg";
import phirni from "@/assets/dish-phirni.jpg";
import mintCooler from "@/assets/dish-mint-cooler.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

/**
 * SAMPLE CONTENT — temporary photography standing in for authentic
 * Mint Leaves photos, which the restaurant owner should supply before launch.
 */
export const GALLERY: GalleryImage[] = [
  { src: hero, alt: "Overhead table spread of Indian dishes on a dark green surface", caption: "The table, set for sharing" },
  { src: interior, alt: "Restaurant interior with green walls, arched booths and warm lanterns", caption: "Inside the dining room" },
  { src: table, alt: "Candlelit table with brass lantern and mint sprigs in a green vase", caption: "Evenings by lantern light" },
  { src: paneerTikka, alt: "Char-grilled paneer tikka skewers with mint chutney", caption: "Paneer tikka, fresh off the grill" },
  { src: seekhKebab, alt: "Chicken seekh kebabs on skewers with onions and lemon", caption: "Seekh kebabs with mint chutney" },
  { src: butterChicken, alt: "Butter chicken in a brass bowl with a cream swirl", caption: "Slow-simmered classics" },
  { src: dumAloo, alt: "Kashmiri dum aloo in a copper bowl", caption: "A taste of the valley" },
  { src: spices, alt: "Flat-lay of saffron, cardamom, star anise and chillies in brass bowls", caption: "Whole spices and saffron" },
  { src: phirni, alt: "Kashmiri phirni topped with nuts and rose petals", caption: "Phirni, set in clay" },
  { src: mintCooler, alt: "Tall glass of mint cooler with lime and crushed ice", caption: "The fresh mint cooler" },
];
