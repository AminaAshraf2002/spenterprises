import heroPng from '../assets/hero.png';
import galleryImg from '../assets/gallery.jpg';
import gallery1Img from '../assets/gallery1.jpg';
import gallery2Img from '../assets/gallery2.jpg';
import gallery3Img from '../assets/gallery3.jpg';
import gallery4Img from '../assets/gallery4.jpg';
import gallery5Img from '../assets/gallery5.jpg';
import oilsImg from '../assets/oils.png';
import fruitsImg from '../assets/fruits.png';
import vegImg from '../assets/veg.png';
import oilPng from '../assets/oil.png';
import coffeePng from '../assets/coffee.png';
import teaPng from '../assets/tea.png';
import cardmonPng from '../assets/cardmon.png';
import kasmmiriPng from '../assets/kasmmiri.png';
import bananaPng from '../assets/banana.png';

// SP Enterprises & LanSpice Canonical Data Repository

export const COMPANY_INFO = {
  name: "SP Enterprises",
  foundedYear: 2017,
  tagline: "Bringing nature's best from our farm to your doorstep — fresh, sustainable, and trusted.",
  address: "S P Enterprises, B M Road, Kundanahalli Circle, Nandinadapura Post, Periyapatina TQ, Mysuru District, Karnataka, 571107",
  locationShort: "Periyapatna, Mysuru District, Karnataka, India",
  phones: [
    "+91 7090709039",
    "+91 7090709007",
    "+91 7090709095"
  ],
  whatsapp: "+91 7090709042",
  whatsappLink: "https://wa.me/917090709042?text=Hello%20SP%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20farm%20produce%20and%20export%20options.",
  email: "spe.sg.ind@gmail.com",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};

export const HERO_CONTENT = {
  eyebrow: "Pure • Potent • Direct Farm Exporter • Mysuru",
  headline: "Fresh from Our Fields to Your Home",
  subtext: "Discover the essence of authentic flavor with our handpicked, farm-fresh spices and cold-pressed organic oils. Crafted with nature's finest harvest from our Karnataka fields for discerning global kitchens.",
  primaryCta: "Explore Products",
  secondaryCta: "Export Inquiries",
  heroImages: [
    {
      url: "/plantation-luxury.jpg",
      caption: "Lush Periyapatna Cardamom & Palm Plantations, Mysuru",
      badge: "Direct Farm Cultivation"
    },
    {
      url: "/hero-luxury.jpg",
      caption: "Cold-Pressed Coconut Oil & Pure Indian Spices",
      badge: "Pure Organic Harvest"
    },
    {
      url: heroPng,
      caption: "Direct Sea-Port Container Dispatch & Global Cargo",
      badge: "Global Port Export"
    }
  ]
};

export const ABOUT_TEASER = {
  eyebrow: "About Us",
  headline: "Rooted in Nature, Driven by Taste",
  body: "At SP Enterprises, we bring you the finest, farm-fresh spices—pure, aromatic, and full of flavor. Sourced from trusted growers and crafted with care, our spices add a touch of authenticity to every meal.",
  cta: "Read Our Story"
};

export const FEATURED_PRODUCTS = [
  {
    id: "coconut-oil",
    title: "Cold-Pressed Coconut Oil",
    category: "Oils",
    description: "From everyday essentials to exotic blends, our cold-pressed coconut oil is packed with bold flavors and natural goodness—perfect for elevating any dish, hair care, and wellness.",
    tag: "Signature Export",
    moq: "500 Liters / 1 FCL",
    image: oilsImg
  },
  {
    id: "fruits",
    title: "Farm-Fresh Fruits",
    category: "Fruits",
    description: "Fresh, juicy, and naturally sweet—our handpicked fruits are bursting with flavor and packed with vital vitamins and hydration for an energized, healthy lifestyle.",
    tag: "High Demand",
    moq: "2 Metric Tons",
    image: fruitsImg
  },
  {
    id: "vegetables",
    title: "Wholesome Farm Vegetables",
    category: "Vegetables",
    description: "Crisp, farm-fresh, and nutrient-dense—our handpicked vegetables are harvested daily to bring pure, wholesome quality, exceptional taste, and natural freshness to every kitchen.",
    tag: "Daily Harvest",
    moq: "3 Metric Tons",
    image: vegImg
  }
];

export const IMPORT_EXPORT_CONTENT = {
  eyebrow: "Import and Export",
  headline: "Connecting Our Farm to the World",
  body: "We proudly export fresh, high-quality farm products to global markets while also importing specialized farming essentials to enhance our production. Whether you're a distributor, wholesaler, or retailer, our streamlined logistics and strict quality standards ensure timely delivery and trusted partnerships across borders.",
  cta: "Get in Touch",
  stats: [
    { value: "15+", label: "Countries Served" },
    { value: "100%", label: "Temperature Controlled Reefer Shipments" },
    { value: "48h", label: "From Harvest to Port Dispatch" },
    { value: "APEDA & FSSAI", label: "Accredited Export Protocols" }
  ]
};

export const EXPORT_CATEGORIES = [
  {
    name: "Coconut Oil",
    subtitle: "Cold-Pressed & Virgin Grades",
    desc: "100% natural, unrefined, edible and cosmetic grade packaging in flexi-tanks and food drums.",
    route: "Oils"
  },
  {
    name: "Coconut",
    subtitle: "Whole Mature & Semi-Husked",
    desc: "Selected for high water content and dense white meat, packed in 25/50kg PP mesh bags.",
    route: "Oils"
  },
  {
    name: "Essential Oil",
    subtitle: "Aromatic & Therapeutic",
    desc: "Steam-distilled extracts retaining authentic volatile terpenes from fresh spices.",
    route: "Oils"
  },
  {
    name: "Spices",
    subtitle: "Sun-Dried & Whole",
    desc: "Premium Malabar black pepper, ginger, and red chillies with high volatile oil metrics.",
    route: "Vegetables"
  },
  {
    name: "Vegetables",
    subtitle: "Root Tubers & Fresh Greens",
    desc: "Starchy tubers, yams, ginger, and corn conditioned for sea-freight shelf life.",
    route: "Vegetables"
  }
];

// Interactive Timeline Milestones for GSAP Section
export const TIMELINE_MILESTONES = [
  {
    year: "2017",
    badge: "Foundation",
    title: "The Farm Beginnings",
    desc: "SP Enterprises was founded in Periyapatna, Mysuru District, with a commitment to sustainable traditional farming on natural fertile Karnataka soil.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    stats: "Initial 25 Acres Under Drip Irrigation"
  },
  {
    year: "2019",
    badge: "Expansion",
    title: "Cold-Pressing & Oil Mills",
    desc: "Invested in hygienic copra drying yards and wood-pressed oil units, launching commercial production of pure, additive-free coconut oil.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=700&q=80",
    stats: "50,000 Liters Annual Capacity"
  },
  {
    year: "2021",
    badge: "LanSpice Launch",
    title: "LanSpice Consumer Brand",
    desc: "Established the sister brand LanSpice to bring authentic Kerala plantation spices, cardamom, and essential oils directly to retail and consumer households.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80",
    stats: "Retail Packaging in 100g to 1kg"
  },
  {
    year: "2023",
    badge: "Certification",
    title: "APEDA & Global Port Routes",
    desc: "Accredited under APEDA and FSSAI, establishing cold-chain reefer export routes through Cochin and New Mangalore ports to the UAE and Europe.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80",
    stats: "Direct Reefer Container Logistics"
  },
  {
    year: "2025 - Present",
    badge: "Global Reach",
    title: "15+ International Markets",
    desc: "Surpassed 1,450 metric tons of agricultural produce delivered worldwide with 2,400+ satisfied clients across wholesale and retail partnerships.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    stats: "2,400+ Happy Clients Globally"
  }
];

// LanSpice eCommerce Store Products (sourced directly from lanspice.com)
export const LANSPICE_PRODUCTS = [
  {
    id: "ls-coconut-oil",
    name: "Pure Cold-Pressed Coconut Oil",
    category: "Pure Oils",
    price: "₹420",
    weight: "500ml / 1 Liter",
    description: "100% pure cold-pressed virgin coconut oil extracted from fresh sun-dried copra. Rich in authentic aroma and lauric acid.",
    image: oilPng,
    url: "https://lanspice.com/product-category/coconut-oil/"
  },
  {
    id: "ls-coffee",
    name: "Premium Estate Roast Coffee",
    category: "Beverages",
    price: "₹320",
    weight: "250g / 500g",
    description: "Finest shade-grown Arabica & Robusta beans handpicked from Western Ghats plantations, slow-roasted for rich aroma and golden crema.",
    image: coffeePng,
    url: "https://lanspice.com/product-category/coffee/"
  },
  {
    id: "ls-tea",
    name: "Kerala High-Grown Pure Tea",
    category: "Beverages",
    price: "₹240",
    weight: "250g / 500g",
    description: "Handpicked tender tea leaves from pristine high-altitude plantations, delivering an invigorating brisk cup with natural freshness.",
    image: teaPng,
    url: "https://lanspice.com/product-category/tea/"
  },
  {
    id: "ls-cardamom",
    name: "Green Cardamom (8mm Bold)",
    category: "Whole Spices",
    price: "₹650",
    weight: "100g / 250g",
    description: "Handpicked from high-altitude Wayanad plantations. Plump, intensely aromatic pods packed with natural volatile essential oils.",
    image: cardmonPng,
    url: "https://lanspice.com/product-category/spices/"
  },
  {
    id: "ls-kashmiri-chilli",
    name: "Pure Kashmiri Chilli Powder",
    category: "Ground Spices",
    price: "₹220",
    weight: "250g / 500g",
    description: "Vibrant deep natural crimson colour with mild gentle heat, finely stone ground without artificial colours or adulterants.",
    image: kasmmiriPng,
    url: "https://lanspice.com/product-category/spice-powders/"
  },
  {
    id: "ls-banana-chips",
    name: "Crispy Kerala Banana Chips",
    category: "Traditional Snacks",
    price: "₹180",
    weight: "200g / 400g",
    description: "Fresh authentic raw Nendran bananas thinly sliced and crisped in pure cold-pressed coconut oil, seasoned with natural sea salt.",
    image: bananaPng,
    url: "https://lanspice.com/product-category/nendran-banana-powder/"
  }
];

export const LANSPICE_BANNER = {
  headline: "LanSpice",
  tagline: "Experience The Essence Of Nature",
  body: "Premium Kerala spices, cold-pressed coconut oil, essential oils and organic products. Sourced directly from nature's finest plantations for retail and online ordering.",
  ctaText: "Shop eCommerce on LanSpice.com",
  link: "https://lanspice.com"
};

// Canonical 14 Products for Export
export const ALL_PRODUCTS = [
  {
    id: "coconut-oil",
    name: "Cold-Pressed Coconut Oil",
    category: "Oils",
    description: "Pure and natural cold-pressed coconut oil, perfect for cooking, skincare, and hair care.",
    detailedDescription: "Extracted using traditional cold-pressing methods from sun-dried copra sourced directly from our coastal Karnataka & Kerala plantations. Unbleached, unrefined, and chemical-free, retaining rich lauric acid content and authentic tropical aroma.",
    moq: "500 Liters / 1 FCL Container",
    packaging: "200L HDPE Drums, 1000L IBC Totes, or 1L/5L Consumer PET/Glass Bottles",
    shelfLife: "24 Months",
    origin: "Karnataka & Kerala, India",
    grade: "Extra Virgin & Grade 1 Edible Cold-Pressed",
    image: "https://cpimg.tistatic.com/10394205/b/4/Organic-Coconut-Oil-..jpg",
    tags: ["Cold-Pressed", "Export Grade", "Pure Organic"]
  },
  {
    id: "fruits",
    name: "Farm-Fresh Fruits",
    category: "Fruits",
    description: "Fresh, juicy, and naturally sweet—our handpicked fruits are bursting with flavor and packed with vital vitamins and hydration.",
    detailedDescription: "Sun-ripened export-grade fruits including watermelons, premium mangoes, and sweet citrus grown in Karnataka's fertile soils. Harvested at optimal maturity and carefully sorted for global export markets.",
    moq: "2 Metric Tons (Reefer 10°C - 13°C)",
    packaging: "Heavy-duty 5-ply Corrugated Export Cartons (15kg - 20kg net) with protective foam dividers",
    shelfLife: "21 - 30 Days under cold-chain",
    origin: "Periyapatna, Mysuru, Karnataka",
    grade: "Grade A Export Selection",
    image: fruitsImg,
    tags: ["Naturally Sweet", "High Brix", "Cold-Chain Export"]
  },
  {
    id: "vegetables",
    name: "Wholesome Farm Vegetables",
    category: "Vegetables",
    description: "Crisp, farm-fresh, and nutrient-dense—our handpicked vegetables are harvested daily to bring pure, wholesome quality to every kitchen.",
    detailedDescription: "Harvested daily from our nutrient-dense Karnataka farm beds. Conditioned and pre-cooled under stringent APEDA phytosanitary standards to preserve peak garden-freshness during international transit.",
    moq: "3 Metric Tons",
    packaging: "15kg / 25kg Ventilated Wooden Crates or Corrugated Air-Vent Cartons",
    shelfLife: "30 - 45 Days at 8°C - 12°C",
    origin: "Periyapatna, Mysuru, Karnataka",
    grade: "Grade 1 Farm Selection",
    image: vegImg,
    tags: ["Daily Harvest", "Pesticide Monitored", "Export Quality"]
  },
  {
    id: "watermelon",
    name: "Watermelon",
    category: "Fruits",
    description: "Juicy and refreshing watermelon, rich in hydration and packed with essential vitamins.",
    detailedDescription: "Sun-ripened in our well-irrigated black-cotton and loamy soils of Mysuru. Features deep red flesh, minimal seeds, and high brix sweetness index. Pre-cooled and graded for extended sea shipment transit.",
    moq: "5 Metric Tons (Reefer 10°C - 13°C)",
    packaging: "Heavy-duty 5-ply Corrugated Export Cartons (20kg net) with protective paper separators",
    shelfLife: "21 - 28 Days under cold-chain",
    origin: "Periyapatna, Mysuru, Karnataka",
    grade: "Grade A Export (Sugar Baby / Kiran Varieties)",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    tags: ["High Brix Sweetness", "Hydrating", "Reefer Packed"]
  },
  {
    id: "banana",
    name: "Banana",
    category: "Fruits",
    description: "Naturally sweet bananas, full of energy and potassium — perfect for a quick, healthy snack.",
    detailedDescription: "Cultivated on nutrient-rich river-fed soils. Harvested at mature green stage (caliper 39-44) under strict temperature monitoring to ensure uniform ripening upon arrival at destination ports.",
    moq: "1 x 40ft Reefer Container (approx. 20 MT)",
    packaging: "13.5 kg / 18.14 kg Telescopic Corrugated Boxes with Polyfoam cushion lining and vacuum bag",
    shelfLife: "30 - 35 Days at 13.5°C",
    origin: "Mysuru & Chamarajanagar, Karnataka",
    grade: "Cavendish (G9) / Grand Naine & Traditional Robusta",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    tags: ["Cavendish G9", "Controlled Ripening", "Export Standard"]
  },
  {
    id: "potato",
    name: "Potato",
    category: "Vegetables",
    description: "Fresh and versatile potatoes, ideal for boiling, baking, or frying.",
    detailedDescription: "Firm, uniform tubers with smooth skins and shallow eyes. Carefully cured and washed, suited for both fresh culinary tables and high-grade commercial processing/chips.",
    moq: "10 Metric Tons",
    packaging: "25kg / 50kg Heavy Jute Gunny Bags or UV-resistant Leno Mesh Bags",
    shelfLife: "60 - 90 Days under ventilated cool storage (8-10°C)",
    origin: "Karnataka Farm Belts",
    grade: "Table Grade (45mm+ & 55mm+) & Processing Kufri Jyoti",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    tags: ["High Dry Matter", "Cured Skin", "Ventilated Mesh"]
  },
  {
    id: "coconut",
    name: "Coconut (Whole)",
    category: "Oils",
    description: "Whole, mature coconuts with rich water and firm flesh — great for cooking or drinking.",
    detailedDescription: "Hand-harvested from mature tall palm groves. De-husked or semi-husked with intact eye protection. High solid kernel ratio with sweet refreshing electrolyte-rich endosperm water.",
    moq: "1 x 20ft Container (approx. 28,000 - 30,000 nuts)",
    packaging: "PP Mesh Bags containing 25 or 50 pieces (approx. 13-14 kg per bag of 25 nuts)",
    shelfLife: "60 Days at 12°C - 15°C (semi-husked)",
    origin: "Periyapatna, Mysuru, Karnataka",
    grade: "Grade 1 Semi-Husked (550g - 650g / piece)",
    image: "https://www.paperandtea.com/cdn/shop/articles/Kokosnuss_00dc9916-deb3-4cfe-8151-107fc85f6136.jpg?v=1756478271&width=1200",
    tags: ["Semi-Husked", "High Kernel Density", "Long Sea Life"]
  },
  {
    id: "chilli",
    name: "Chilli",
    category: "Vegetables",
    description: "Spicy and flavorful fresh green/red chillies to add heat and zest to your dishes.",
    detailedDescription: "Crisp, pungent chillies grown under monitored pesticide-residue practices. High capsaicin potency and vivid color retention, sorted by length and thickness for international gourmet markets.",
    moq: "2 Metric Tons (Air Freight) / 10 MT (Sea Reefer 8°C)",
    packaging: "4kg / 5kg / 10kg Corrugated Boxes with perforations or mesh net bags",
    shelfLife: "18 - 25 Days at 8°C - 10°C",
    origin: "Karnataka Agricultural Belts",
    grade: "G4 Green / Teja / Byadgi Dried Red Chilli",
    image: "https://bloomica.in/cdn/shop/files/biggreenchilliseeds.jpg?v=1752689927",
    tags: ["High Pungency", "Air & Sea Freight", "Export Inspected"]
  },
  {
    id: "ginger",
    name: "Ginger",
    category: "Vegetables",
    description: "Fresh, aromatic ginger root with a bold flavor — perfect for teas, cooking, and immunity boosts.",
    detailedDescription: "Plump, fibrous rhizomes with spicy zesty essential gingerol oils. Washed and air-dried to prevent mold formation, ideal for international supermarket shelves and pharmaceutical processing.",
    moq: "5 Metric Tons",
    packaging: "10kg / 13.5kg / 30kg Ventilated Plastic Crates or Mesh Bags",
    shelfLife: "45 - 60 Days at 12°C - 14°C, 85-90% RH",
    origin: "Wayanad-Mysuru Border Plantations",
    grade: "Fresh Washed Ginger & Dried Split Ginger",
    image: "https://cdn1.healthians.com/blog/wp-content/uploads/2026/01/Ginger-Benefits-1024x683.webp",
    tags: ["Aromatic Gingerol", "Clean Washed", "Export Crated"]
  },
  {
    id: "sweet-potato",
    name: "Sweet Potato",
    category: "Vegetables",
    description: "Nutritious and sweet, these tubers are rich in fiber and beta-carotene.",
    detailedDescription: "Naturally sweet tubers with vibrant orange/purple-flushed flesh and firm skin. Grown in well-drained sandy loam soil without heavy metals or chemical accelerants.",
    moq: "3 Metric Tons",
    packaging: "10kg / 15kg Corrugated Export Boxes",
    shelfLife: "60 Days at 13°C - 16°C",
    origin: "Karnataka Farms",
    grade: "Premium Export Grade (150g - 400g uniform size)",
    image: "https://t4.ftcdn.net/jpg/21/76/30/93/360_F_2176309323_1buQZFhMAYvDqTPRmv3nWPMO5Oq2hdCo.jpg",
    tags: ["Beta-Carotene Rich", "Smooth Skin", "Uniform Tubers"]
  },
  {
    id: "corn",
    name: "Corn",
    category: "Grains",
    description: "Sweet and tender corn — great for boiling, grilling, or adding to salads and soups.",
    detailedDescription: "Tender golden yellow cobs with plump kernels filled with natural sugars. Harvested in early morning hours to lock in freshness, immediately hydro-cooled to prevent sugar conversion.",
    moq: "3 Metric Tons",
    packaging: "10kg / 15kg Perforated Carton Boxes or Wirebound Crates",
    shelfLife: "21 Days at 0°C - 2°C with high humidity",
    origin: "Mysuru Agricultural Valley",
    grade: "Super Sweet Hybrid Yellow & White Corn",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    tags: ["Hydro-Cooled", "Tender Kernels", "High Sugar Index"]
  },
  {
    id: "elephant-yam",
    name: "Elephant Yam",
    category: "Vegetables",
    description: "Firm and earthy elephant yam, ideal for traditional curries and stir-fry dishes.",
    detailedDescription: "Hardy corms with dense dark flesh, low acridity, and exceptional cooking texture. Cured naturally in shaded barns to build a sturdy protective skin for deep sea container shipment.",
    moq: "5 Metric Tons",
    packaging: "25kg / 40kg Jute Gunny Bags or Wooden Crates",
    shelfLife: "90 - 120 Days under well-ventilated dry conditions",
    origin: "Periyapatna, Karnataka",
    grade: "Gajendra Variety (1.5kg - 5kg corms)",
    image: "https://www.bbassets.com/media/uploads/p/l/10000379_14-fresho-yam-elephant-foot.jpg",
    tags: ["Cured Corms", "Extended Shelf Life", "Low Acridity"]
  },
  {
    id: "chembu",
    name: "Chembu (Taro Root)",
    category: "Vegetables",
    description: "Starchy and creamy taro root, great for curries, fries, and traditional recipes.",
    detailedDescription: "Nutrient-dense subterranean tubers with creamy textured flesh. Carefully hand-harvested to prevent bruising, sorted by size and brushed clean of excess surface loam.",
    moq: "3 Metric Tons",
    packaging: "15kg / 20kg Corrugated Boxes with air vents or Mesh Bags",
    shelfLife: "30 - 45 Days at 10°C - 13°C",
    origin: "Karnataka & Malabar Plantation Regions",
    grade: "Selected Medium-Large Taro Tubers",
    image: "https://admin.abemart.in/storage/products/64f59b92a273b1693817746.jpg",
    tags: ["Creamy Starch", "Hand-Sorted", "Traditional Crop"]
  },
  {
    id: "ragi",
    name: "Ragi (Finger Millet)",
    category: "Grains",
    description: "Highly nutritious whole grain rich in calcium and fiber — perfect for porridge, rotis, or baking.",
    detailedDescription: "Superfood whole grain cultivated under rainfed organic agro-climatic conditions of Karnataka. Machine cleaned, de-stoned, and moisture-controlled to under 11% for superior longevity.",
    moq: "5 Metric Tons / 1 FCL",
    packaging: "25kg / 50kg Multi-wall Paper Bags or PP Woven Bags with Inner Liner",
    shelfLife: "24 Months under dry, pest-free storage",
    origin: "Mandya & Mysuru Millet Corridors, Karnataka",
    grade: "Grade 1 Machine Cleaned Whole Grain (Sortexed)",
    image: "https://zamaorganics.com/cdn/shop/files/Untitleddesign_26_84dd5ee9-62a2-4e49-b9fb-aee7263ed36f.png?v=1756459744&width=1080",
    tags: ["Calcium Superfood", "Sortex Cleaned", "Moisture Controlled"]
  },
  {
    id: "naadan-kozhi",
    name: "Naadan Kozhi (Country Chicken)",
    category: "Poultry",
    description: "Fresh, farm-raised country chicken — flavorful and perfect for homestyle meals.",
    detailedDescription: "Naturally raised indigenous breed free-range chickens. Raised on natural grains, green pastures, and clean water with zero antibiotic growth promoters. Meat has authentic deep flavor and firm texture.",
    moq: "Inquire for Regional Batch Orders / Blast Frozen Air Cargo",
    packaging: "Vacuum Sealed Food-Grade Pouches (Dressed & Diced / Whole Bird) with Insulated Dry-Ice Boxes",
    shelfLife: "Fresh Chilled: 4 Days (0-2°C) | IQF Blast Frozen: 12 Months (-18°C)",
    origin: "SP Enterprises Farm Grounds, Mysuru",
    grade: "Free-Range Naadan Country Breed",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
    tags: ["Free-Range", "Zero Antibiotics", "Authentic Naadan Flavor"]
  },
  {
    id: "naadan-mutta",
    name: "Naadan Mutta (Farm Eggs)",
    category: "Poultry",
    description: "Farm-fresh eggs, rich in protein and perfect for boiling, frying, or baking.",
    detailedDescription: "Brown-shelled free-range eggs laid by pasture-grazing indigenous poultry. Rich golden-orange yolk with thick albumen, high omega-3 fatty acids, and unadulterated farm taste.",
    moq: "5,000 Eggs (Regional Dispatch) / Air Freight Master Cartons",
    packaging: "Molded Pulp Trays (30 eggs/tray) packed inside shock-absorbent corrugated master cartons (360 eggs/box)",
    shelfLife: "30 Days at 10°C - 15°C",
    origin: "SP Enterprises Farm Grounds, Mysuru",
    grade: "Grade AA Fresh Brown Farm Eggs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8QwscKVH3ZrnN8mNtDhTfo35H5aBExhf3ea6UufCBKjEixxCqmkTBe0&s=10",
    tags: ["Golden Orange Yolk", "Pasture-Raised", "Rich in Omega-3"]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "harvest-1",
    category: "Harvest",
    title: "Fresh Coconut Harvest Sorting",
    caption: "Mature coconuts collected and sorted by diameter and kernel weight ready for semi-husking and export packing.",
    image: galleryImg
  },
  {
    id: "land-1",
    category: "Land & Farm",
    title: "Mulched Bed System & Field Layout",
    caption: "Water-conserving drip irrigation pipelines running beneath protective mulch in Periyapatna.",
    image: gallery1Img
  },
  {
    id: "harvest-2",
    category: "Harvest",
    title: "Farm-Fresh Coconut Harvest",
    caption: "Hand-picked farm coconuts collected directly across our groves, sorted and prepped for dispatch.",
    image: gallery2Img
  },
  {
    id: "land-2",
    category: "Land & Farm",
    title: "Sprawling Farm Land & Homestead",
    caption: "Panoramic view of our sprawling crop fields and homestead backed by lush Karnataka coconut groves.",
    image: gallery3Img
  },
  {
    id: "process-1",
    category: "Farming Process",
    title: "Precision Power Tiller in Use",
    caption: "Deep soil aeration and organic mulch incorporation across vegetable crop beds in Periyapatna.",
    image: gallery4Img
  },
  {
    id: "process-2",
    category: "Farming Process",
    title: "Field Cultivation & Soil Preparation",
    caption: "Mechanical tillage and soil preparation ensuring optimal aeration and organic fertility for sustainable yields.",
    image: gallery5Img
  }
];

export const ABOUT_STORY = {
  headline: "Our Journey Since 2017",
  storyParagraphs: [
    "Founded in 2017, our farm began with a simple vision — to grow fresh, sustainable, and quality produce while staying rooted in traditional farming values. Over the years, we've blossomed into a trusted name in both local and international markets, delivering hand-picked goodness straight from our fields to your home.",
    "With a passion for nature and a commitment to excellence, our dedicated team continues to cultivate crops with care, embrace eco-friendly practices, and build lasting relationships with customers and partners around the world. From humble beginnings to global connections — we're proud of the journey and excited for what lies ahead."
  ],
  missions: {
    mission: "Our mission is to grow and deliver farm-fresh products with a strong focus on quality, sustainability, and community. We aim to use eco-friendly practices that not only nourish the land but also support the lives of those who depend on it — from our farmers to our customers. Every product we offer reflects our dedication to transparency, health, and trust.",
    vision: "Our vision is to become a globally recognized farm brand known for ethical agriculture and responsible trade. We strive to bridge the gap between nature and people by making clean, healthy produce accessible to all, while continuously innovating to create a greener, more sustainable future for the generations to come."
  },
  stats: [
    { value: "2,400+", label: "Happy Clients" },
    { value: "1,450+", label: "Metric Tons Delivered" },
    { value: "200+", label: "Verified Ratings" },
    { value: "8+", label: "Years of Excellence" }
  ],
  certifications: [
    {
      name: "APEDA Registered",
      org: "Agricultural & Processed Food Products Export Development Authority",
      badge: "Govt. of India",
      desc: "Accredited for commercial international agricultural exports adhering to international phyto-sanitary standards."
    },
    {
      name: "FSSAI Certified",
      org: "Food Safety and Standards Authority of India",
      badge: "Food Safety Grade",
      desc: "Licensed handling, sorting, cold-pressing and hygienic packaging operations."
    },
    {
      name: "Spices Board of India",
      org: "Ministry of Commerce & Industry",
      badge: "Spice Quality Council",
      desc: "Verified purity, moisture parameters, and essential volatile oil standards."
    },
    {
      name: "Global G.A.P. Compliant",
      org: "Good Agricultural Practices",
      badge: "Sustainable Farming",
      desc: "Traceable farm-to-shipment cultivation protocols with minimal ecological impact."
    }
  ]
};
