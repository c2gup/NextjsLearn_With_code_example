export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  rating: number;
  gradient: string;
  cost: string;
  duration: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    description: "Experience ancient temples, golden pavilions, and serene bamboo groves.",
    longDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its thousands of classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    rating: 4.9,
    gradient: "from-amber-500 to-rose-600",
    cost: "$1,800",
    duration: "5 Days",
    highlights: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)"],
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Soak in stunning caldera views and legendary sunset panoramas.",
    longDescription: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.8,
    gradient: "from-blue-500 to-cyan-600",
    cost: "$2,200",
    duration: "7 Days",
    highlights: ["Sunset in Oia", "Red Beach", "Akrotiri Archaeological Site"],
  },
  {
    id: "reykjavik",
    name: "Reykjavík",
    country: "Iceland",
    description: "Discover the dramatic volcanic terrain, hot springs, and Northern Lights.",
    longDescription: "Reykjavík, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrímskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s geothermal activity is the nearby Blue Lagoon spa.",
    rating: 4.7,
    gradient: "from-emerald-500 to-teal-700",
    cost: "$2,500",
    duration: "4 Days",
    highlights: ["Blue Lagoon Spa", "Golden Circle Tour", "Hallgrímskirkja Church"],
  },
  {
    id: "petra",
    name: "Petra",
    country: "Jordan",
    description: "Walk through the Siq to explore the breathtaking rose-red desert city.",
    longDescription: "Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the 'Rose City.' Perhaps its most famous structure is 45m-high Al Khazneh, a temple with an ornate, Greek-style facade.",
    rating: 4.9,
    gradient: "from-orange-500 to-amber-700",
    cost: "$1,600",
    duration: "3 Days",
    highlights: ["Al-Khazneh (The Treasury)", "The Siq Gorge", "Ad Deir (The Monastery)"],
  },
];
