export const categories = [
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    blurb: "Just landed from workshops across India.",
  },
  {
    slug: "india-collection",
    name: "India Collection",
    blurb: "Handicrafts, textiles, and pieces made by hand.",
  },
  {
    slug: "tech-gadgets",
    name: "Tech Gadgets",
    blurb: "Compact accessories chosen for everyday carry.",
  },
  {
    slug: "phones",
    name: "Phones",
    blurb: "iPhone and Samsung, priced in Namibian dollars.",
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    blurb: "Oxidized silver and enamel, finished by hand.",
  },
];

function phone(id, model, ram, storage, price, image) {
  return {
    id,
    name: `${model} ${ram} / ${storage}`,
    price,
    image,
    categories: ["phones"],
    trending: false,
    madeInIndia: false,
    summary: `${ram} RAM and ${storage} storage.`,
    description: `${model} with ${ram} of RAM and ${storage} of storage. Priced in Namibian dollars and packed for delivery from Windhoek.`,
    details: [`${ram} RAM`, `${storage} storage`, "Unlocked handset", "Ships from our Windhoek hub"],
  };
}

const phoneProducts = [
  phone("iphone-15-128", "iPhone 15", "6GB", "128GB", 9999, "/images/iphone-15.png"),
  phone("iphone-15-256", "iPhone 15", "6GB", "256GB", 10500, "/images/iphone-15.png"),
  phone("iphone-15-512", "iPhone 15", "6GB", "512GB", 10999, "/images/iphone-15.png"),
  phone("iphone-14-128", "iPhone 14", "6GB", "128GB", 7500, "/images/iphone-14.png"),
  phone("iphone-13-256", "iPhone 13", "4GB", "256GB", 7200, "/images/iphone-13.png"),
  phone("iphone-13-128", "iPhone 13", "4GB", "128GB", 6500, "/images/iphone-13.png"),
  phone("iphone-16-pro-max-256", "iPhone 16 Pro Max", "8GB", "256GB", 19999, "/images/iphone-16-pro-max.png"),
  phone("iphone-16-pro-max-1tb", "iPhone 16 Pro Max", "8GB", "1TB", 24999, "/images/iphone-16-pro-max.png"),
  phone("iphone-15-pro-max-256", "iPhone 15 Pro Max", "8GB", "256GB", 15999, "/images/iphone-15-pro-max.png"),
  phone("iphone-15-pro-max-512", "iPhone 15 Pro Max", "8GB", "512GB", 17200, "/images/iphone-15-pro-max.png"),
  phone("iphone-17-256", "iPhone 17", "8GB", "256GB", 16999, "/images/iphone-17.png"),
  phone("iphone-17-512", "iPhone 17", "8GB", "512GB", 18999, "/images/iphone-17.png"),
  phone("iphone-17-pro-256", "iPhone 17 Pro", "12GB", "256GB", 20999, "/images/iphone-17-pro.png"),
  phone("iphone-17-pro-max-512", "iPhone 17 Pro Max", "12GB", "512GB", 28999, "/images/iphone-17-pro-max.png"),
  phone("s24-ultra-256", "Samsung Galaxy S24 Ultra", "12GB", "256GB", 15500, "/images/s24-ultra.png"),
  phone("s24-ultra-512", "Samsung Galaxy S24 Ultra", "12GB", "512GB", 15999, "/images/s24-ultra.png"),
  phone("s25-ultra-256", "Samsung Galaxy S25 Ultra", "12GB", "256GB", 16999, "/images/s25-ultra.png"),
  phone("s25-ultra-512", "Samsung Galaxy S25 Ultra", "12GB", "512GB", 17800, "/images/s25-ultra.png"),
  phone("s23-ultra-256", "Samsung Galaxy S23 Ultra", "12GB", "256GB", 13500, "/images/s23-ultra.png"),
  phone("s23-ultra-512", "Samsung Galaxy S23 Ultra", "12GB", "512GB", 13999, "/images/s23-ultra.png"),
];

export const products = [
  {
    id: "blockprinted-kurta",
    name: "Blockprinted cotton kurta",
    price: 450,
    image: "/images/kurta.png",
    categories: ["new-arrivals", "india-collection"],
    trending: true,
    madeInIndia: true,
    summary: "Indigo and saffron block print on soft cotton.",
    description:
      "A lightweight cotton kurta printed by hand with indigo, saffron, and cream florals. The cut is easy through the body, with a modest neckline and a length that works over trousers or on its own. Each piece carries small variations from the wooden block.",
    details: ["100% cotton", "Hand block printed", "Relaxed fit", "Ships from our Windhoek hub"],
  },
  {
    id: "oxidized-jhumkas",
    name: "Handmade silver plated oxidized jhumkas",
    price: 280,
    image: "/images/jhumkas.png",
    categories: ["new-arrivals", "jewelry"],
    trending: true,
    madeInIndia: true,
    summary: "Bell-shaped jhumkas with filigree and tiny drops.",
    description:
      "Classic jhumka earrings in silver-plated brass, oxidized for a soft charcoal finish. The domes are openwork, and a row of tiny bells moves when you walk. Light enough for a full day.",
    details: ["Silver-plated brass", "Oxidized finish", "Hook fastening", "Pair"],
  },
  {
    id: "teal-speaker",
    name: "Wireless Bluetooth speaker",
    price: 620,
    image: "/images/speaker.png",
    categories: ["new-arrivals", "tech-gadgets"],
    trending: true,
    madeInIndia: true,
    summary: "A compact matte teal speaker for desk or travel.",
    description:
      "A rounded portable speaker in matte teal. It pairs over Bluetooth, sits flat on a table, and is sized to tuck into a basket or weekender. Clear mids for playlists, podcasts, and calls.",
    details: ["Bluetooth 5.3", "Up to 10 hours playback", "USB-C charging", "Matte teal finish"],
  },
  {
    id: "indigo-dupatta",
    name: "Indigo block-print dupatta",
    price: 320,
    image: "/images/dupatta.png",
    categories: ["india-collection"],
    trending: false,
    madeInIndia: true,
    summary: "A long cotton scarf in indigo and rust print.",
    description:
      "Woven cotton, printed with a dense indigo and rust motif. Drape it over a shoulder, use it as a light wrap, or fold it at the foot of a bed. The edges are finished with a narrow hem.",
    details: ["Cotton", "Hand block printed", "Approx. 2.2 m", "Unlined"],
  },
  {
    id: "cushion-covers",
    name: "Block-print cushion covers",
    price: 390,
    image: "/images/cushions.png",
    categories: ["india-collection", "new-arrivals"],
    trending: false,
    madeInIndia: true,
    summary: "A pair of printed cotton covers, 45 cm.",
    description:
      "Two square cushion covers in the same indigo and saffron block print as our textiles. A concealed zip keeps the insert tidy. Inserts are not included.",
    details: ["Set of 2", "45 × 45 cm", "Cotton", "Hidden zip"],
  },
  {
    id: "brass-diyas",
    name: "Polished brass diya trio",
    price: 260,
    image: "/images/diyas.png",
    categories: ["india-collection"],
    trending: false,
    madeInIndia: true,
    summary: "Three small brass lamps for a table or shelf.",
    description:
      "A set of three hand-finished brass diyas. They catch warm light and sit comfortably together on a tray. Wipe with a soft cloth; a little polish brings the shine back.",
    details: ["Solid brass", "Set of 3", "For oil or tea lights", "Wipe clean"],
  },
  {
    id: "spice-box",
    name: "Sheesham spice box",
    price: 410,
    image: "/images/spicebox.png",
    categories: ["india-collection"],
    trending: false,
    madeInIndia: true,
    summary: "A lidded wooden box with small compartments.",
    description:
      "Turned from sheesham, this square box holds everyday spices in fitted rounds under a snug lid. The grain is warm and the corners are eased so it sits flush in a drawer or on a counter.",
    details: ["Sheesham wood", "Removable compartments", "Hand finished", "Food-safe oil"],
  },
  {
    id: "silver-bangles",
    name: "Oxidized silver bangle pair",
    price: 340,
    image: "/images/bangles.png",
    categories: ["jewelry"],
    trending: false,
    madeInIndia: true,
    summary: "Wide engraved bangles with a charcoal finish.",
    description:
      "A pair of wide bangles in oxidized silver plate. Floral engraving runs around the outer face, and the interior is smooth. They are open slightly at the back so they slip on without a clasp.",
    details: ["Silver-plated brass", "Pair", "Engraved", "Adjustable opening"],
  },
  {
    id: "temple-necklace",
    name: "Temple coin necklace",
    price: 520,
    image: "/images/necklace.png",
    categories: ["jewelry", "new-arrivals"],
    trending: false,
    madeInIndia: true,
    summary: "A coin pendant on a fine bead chain.",
    description:
      "An antique gold-tone necklace with a round temple-style coin pendant and a strand of small beads. The chain sits at the collarbone. The clasp is a simple lobster.",
    details: ["Gold-tone alloy", "Pendant necklace", "Lobster clasp", "Approx. 42 cm"],
  },
  {
    id: "meenakari-studs",
    name: "Meenakari stud earrings",
    price: 210,
    image: "/images/studs.png",
    categories: ["jewelry"],
    trending: false,
    madeInIndia: true,
    summary: "Teal enamel studs with a gold-tone rim.",
    description:
      "Small round studs filled with teal meenakari enamel and edged in gold tone. They are the everyday pair: light, close to the ear, and finished with a butterfly back.",
    details: ["Enamel on metal", "Stud with butterfly back", "Pair", "Nickel-safe plating"],
  },
  {
    id: "power-bank",
    name: "Compact 10,000 mAh power bank",
    price: 480,
    image: "/images/powerbank.png",
    categories: ["tech-gadgets"],
    trending: false,
    madeInIndia: true,
    summary: "A slim charcoal bank for phones and earbuds.",
    description:
      "A pocket power bank with 10,000 mAh capacity and USB-C in and out. The shell is matte charcoal with rounded corners so it does not catch in a bag.",
    details: ["10,000 mAh", "USB-C", "Matte shell", "Airline friendly"],
  },
  {
    id: "usbc-cable",
    name: "Braided USB-C cable",
    price: 150,
    image: "/images/cable.png",
    categories: ["tech-gadgets"],
    trending: false,
    madeInIndia: true,
    summary: "A sand-coloured braided cable, one metre.",
    description:
      "One metre of braided USB-C to USB-C in a warm sand colour. The braid resists tangling, and the connectors are snug without being stiff.",
    details: ["1 metre", "USB-C to USB-C", "Braided", "60W charging"],
  },
  {
    id: "phone-stand",
    name: "Walnut phone stand",
    price: 180,
    image: "/images/stand.png",
    categories: ["tech-gadgets", "india-collection"],
    trending: false,
    madeInIndia: true,
    summary: "A solid wood wedge for a phone or small tablet.",
    description:
      "A single piece of walnut, cut into a low wedge that holds a phone at a comfortable angle. No screws, no finish smell — just oiled wood and a groove that keeps the device steady.",
    details: ["Walnut", "Oiled finish", "Fits most phones", "Passive stand"],
  },
  ...phoneProducts,
];


export function formatPrice(amount) {
  return `N$ ${amount.toLocaleString("en-NA")}`;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

export function productsInCategory(slug) {
  return products.filter((product) => product.categories.includes(slug));
}

export function searchProducts(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return products.filter((product) => {
    const haystack = [
      product.name,
      product.summary,
      product.description,
      ...product.categories,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export const regions = [
  "Erongo",
  "Hardap",
  "Karas",
  "Kavango East",
  "Kavango West",
  "Khomas",
  "Kunene",
  "Ohangwena",
  "Omaheke",
  "Omusati",
  "Oshana",
  "Oshikoto",
  "Otjozondjupa",
  "Zambezi",
];
