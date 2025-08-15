export interface ProjectImage {
  src: string
  alt: string
  caption: string
}

export interface ProjectDetails {
  location: string
  size: string
  year: string
  style: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  story: string
  images: ProjectImage[]
  details: ProjectDetails
}

export const projects: Project[] = [
  {
    id: "serene-living",
    title: "Serene Living Space",
    subtitle: "Modern boho meets minimalism",
    description:
      "A harmonious blend of natural textures, warm earth tones, and contemporary furniture creating a peaceful retreat.",
    story: `This project began with a client's desire to create a sanctuary within their urban apartment. The challenge was to balance the clean lines of modern design with the warmth and texture that defines bohemian style.

We started by establishing a neutral palette of warm whites and soft beiges, then layered in natural materials like jute, rattan, and reclaimed wood. The centerpiece is a custom-built sectional sofa in organic linen, surrounded by vintage Moroccan rugs and handcrafted ceramic accessories.

The lighting design was crucial - we installed dimmable pendant lights with woven shades and added floor lamps with natural fiber lampshades to create multiple layers of warm, ambient lighting. Plants were strategically placed to bring life and color into the space, including a statement fiddle leaf fig and trailing pothos.

The result is a living room that feels both sophisticated and relaxed, where our clients can unwind after busy days while entertaining friends in a space that reflects their values of sustainability and mindful living.`,
    images: [
      {
        src: "/modern-boho-living-room.png",
        alt: "Main living room view",
        caption: "The main seating area with custom sectional and vintage rugs",
      },
      {
        src: "/boho-living-room-corner-plants.png",
        alt: "Plant corner",
        caption: "Reading nook with abundant greenery",
      },
      {
        src: "/boho-living-room-lighting.png",
        alt: "Lighting detail",
        caption: "Layered lighting creates warm ambiance",
      },
    ],
    details: {
      location: "Downtown Loft, Portland",
      size: "450 sq ft",
      year: "2024",
      style: "Modern Bohemian",
    },
  },
  {
    id: "dreamy-bedroom",
    title: "Dreamy Bedroom Retreat",
    subtitle: "Cozy textures and warm lighting",
    description:
      "Layered textiles, handcrafted elements, and soft lighting create an intimate sanctuary for rest and reflection.",
    story: `The vision for this bedroom was to create a cocoon-like retreat that would promote deep rest and peaceful mornings. Our clients, a young couple, wanted a space that felt like a luxury hotel but with personal, bohemian touches.

We began with a statement headboard crafted from reclaimed teak, then built layers of texture through carefully selected textiles. The bed features organic cotton sheets in warm ivory, topped with a vintage suzani throw and an assortment of pillows in natural linen and hand-blocked prints.

The color palette draws from desert sunsets - soft terracotta, warm sand, and deep sage green accents. We installed brass sconces for reading and added a vintage Moroccan pendant light as a focal point. The flooring features a large Persian rug in muted tones that grounds the entire space.

Storage was cleverly integrated through a custom bench at the foot of the bed and floating nightstands that maintain the room's airy feel. The final touch was a collection of plants and handmade ceramics that add life and personality to this serene retreat.`,
    images: [
      {
        src: "/bohemian-bedroom.png",
        alt: "Main bedroom view",
        caption: "The bedroom with custom teak headboard and layered textiles",
      },
      { src: "/boho-reading-corner.png", alt: "Reading corner", caption: "Cozy reading nook with vintage chair" },
      {
        src: "/boho-bedroom-lighting.png",
        alt: "Evening lighting",
        caption: "Warm evening ambiance with brass fixtures",
      },
    ],
    details: {
      location: "Craftsman Home, Seattle",
      size: "280 sq ft",
      year: "2024",
      style: "Bohemian Retreat",
    },
  },
  {
    id: "gathering-space",
    title: "Gathering Space",
    subtitle: "Natural materials and organic forms",
    description:
      "A dining area that celebrates connection through natural materials, flowing forms, and abundant greenery.",
    story: `This dining room transformation was inspired by the client's love of entertaining and their commitment to sustainable living. They wanted a space that would encourage long conversations over home-cooked meals while showcasing their collection of handmade pottery and vintage finds.

The centerpiece is a live-edge walnut dining table that seats eight comfortably. We paired it with a mix of vintage Danish modern chairs and handwoven rattan seats, creating an eclectic yet cohesive look. Above, a cluster of pendant lights made from natural materials provides both task and ambient lighting.

The walls feature a gallery of botanical prints and family photographs in vintage brass frames. We created a living wall with trailing plants and installed floating shelves to display the client's pottery collection. The space is anchored by a vintage Persian runner that adds warmth and pattern.

What makes this space special is how it flows seamlessly into the kitchen and living areas, creating one large space for gathering while maintaining distinct zones for different activities. The result is a dining room that feels both formal enough for dinner parties and casual enough for everyday family meals.`,
    images: [
      {
        src: "/boho-dining-room.png",
        alt: "Main dining room",
        caption: "Live-edge walnut table with mixed vintage seating",
      },
      {
        src: "/boho-dining-room-plant-wall.png",
        alt: "Plant wall detail",
        caption: "Living wall with trailing plants and pottery display",
      },
      {
        src: "/boho-dining-room-evening.png",
        alt: "Evening dining",
        caption: "Warm evening atmosphere perfect for entertaining",
      },
    ],
    details: {
      location: "Victorian Home, San Francisco",
      size: "320 sq ft",
      year: "2023",
      style: "Organic Modern",
    },
  },
  {
    id: "culinary-haven",
    title: "Culinary Haven",
    subtitle: "Function meets bohemian style",
    description:
      "A kitchen that balances modern functionality with bohemian warmth through natural wood and brass accents.",
    story: `This kitchen renovation challenged us to maintain the home's bohemian character while creating a highly functional cooking space for serious home chefs. The clients wanted professional-grade appliances without sacrificing the warm, lived-in feel they loved.

We kept the existing layout but completely reimagined the materials and finishes. The cabinets are custom-built from reclaimed oak with brass hardware that develops a beautiful patina over time. Open shelving displays handmade ceramics and vintage glassware, while closed storage keeps everyday items organized.

The backsplash features handmade zellige tiles in a soft sage green that complements the warm wood tones. We installed a large farmhouse sink and brass faucet that serves as both functional and decorative elements. The island, topped with butcher block, provides additional prep space and casual seating.

Lighting was key to creating the right atmosphere - we installed pendant lights over the island and under-cabinet LED strips for task lighting. Plants throughout the space, including herbs growing on the windowsill, bring life and freshness to the cooking environment. The result is a kitchen that feels like the heart of the home.`,
    images: [
      {
        src: "/modern-boho-kitchen.png",
        alt: "Main kitchen view",
        caption: "Reclaimed oak cabinets with brass hardware and zellige backsplash",
      },
      {
        src: "/boho-kitchen-island-detail.png",
        alt: "Kitchen island",
        caption: "Butcher block island with casual seating",
      },
      { src: "/placeholder-tx9qs.png", alt: "Herb garden", caption: "Window herb garden adds fresh greenery" },
    ],
    details: {
      location: "Farmhouse, Sonoma County",
      size: "240 sq ft",
      year: "2023",
      style: "Rustic Bohemian",
    },
  },
  {
    id: "creative-workspace",
    title: "Creative Workspace",
    subtitle: "Inspiring productivity through design",
    description:
      "A home office that nurtures creativity with natural light, organic textures, and inspiring botanical elements.",
    story: `Designing a home office during the remote work revolution required rethinking what a productive workspace could be. Our client, a graphic designer, needed a space that would inspire creativity while maintaining the bohemian aesthetic of their home.

We positioned the desk to take advantage of the room's large windows, providing natural light throughout the day. The custom desk, built from reclaimed wood with hairpin legs, offers ample workspace while maintaining visual lightness. Storage is handled through a combination of open shelving and vintage filing cabinets painted in soft sage green.

The seating area features a comfortable reading chair with a vintage Moroccan pouf for additional seating during client meetings. We created a gallery wall featuring the client's own work alongside vintage botanical prints and inspirational quotes in beautiful typography.

Plants play a crucial role in this space - from the large monstera in the corner to the collection of small succulents on the desk. We also installed a pegboard wall system that allows for flexible organization of supplies and inspiration boards. The result is a workspace that feels more like a creative studio than a traditional office.`,
    images: [
      {
        src: "/boho-home-office.png",
        alt: "Main office view",
        caption: "Custom reclaimed wood desk with abundant natural light",
      },
      {
        src: "/boho-office-gallery-wall.png",
        alt: "Gallery wall",
        caption: "Inspirational gallery wall with botanical prints",
      },
      {
        src: "/boho-office-reading-corner.png",
        alt: "Reading corner",
        caption: "Comfortable seating area for client meetings",
      },
    ],
    details: {
      location: "Converted Garage, Austin",
      size: "180 sq ft",
      year: "2024",
      style: "Creative Bohemian",
    },
  },
  {
    id: "spa-sanctuary",
    title: "Spa-Like Sanctuary",
    subtitle: "Natural materials and tranquil vibes",
    description: "A bathroom transformed into a wellness retreat with natural stone, warm wood, and calming greenery.",
    story: `This bathroom renovation transformed a cramped, outdated space into a spa-like sanctuary that promotes daily wellness rituals. The clients wanted to create a space where they could truly unwind and practice self-care.

We started by opening up the space, removing a wall to create room for a freestanding soaking tub positioned beneath a large window. The tub, carved from natural stone, serves as the room's centerpiece and provides a connection to nature even while bathing indoors.

The materials palette focuses on natural elements - travertine floors, teak vanity, and a living moss wall that serves as both art and air purification. We installed a rainfall shower with multiple body sprays, enclosed in glass to maintain the open feel while containing steam.

Lighting design was crucial for creating the right mood. We installed dimmable LED strips behind the mirror and added candle-like sconces that can be adjusted for different activities. The vanity features integrated storage for toiletries and towels, keeping the space clutter-free.

The final touches include carefully selected plants that thrive in humid environments, handmade ceramic accessories, and organic cotton towels in natural tones. The result is a bathroom that feels more like a luxury spa retreat.`,
    images: [
      {
        src: "/bohemian-bathroom.png",
        alt: "Main bathroom view",
        caption: "Freestanding stone tub with natural materials throughout",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Shower area",
        caption: "Rainfall shower with natural stone and glass",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Vanity detail",
        caption: "Teak vanity with integrated storage and plants",
      },
    ],
    details: {
      location: "Mid-Century Home, Palm Springs",
      size: "120 sq ft",
      year: "2024",
      style: "Spa Bohemian",
    },
  },
]
