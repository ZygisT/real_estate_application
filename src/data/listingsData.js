const listingsData = [
  {
    address: "23-34 Grand Avenue",
    city: "Ridgewood",
    state: "NY",
    homeType: "Single-Family House",
    description: 'Fantastic home. This property is well taken care of and boasts many amenities and features. These include 4 bedrooms, 3 bathrooms, wood laminate flooring,arched entry ways, hard wood flooring, spacious lining room, classic brick exterior and so much more.',
    bedrooms: 4,
    bathrooms: 3,
    price: 220000,
    floorSpace: 185,
    image: "./house-images/listing-images/house-1.jpg",
    imageLg: "./house-images/lg-img/house-1-lg.jpg",
    status: 'Sale'
  },
  {
    address: "10 Cherry Hill",
    city: "Camden",
    state: "NJ",
    homeType: "Apartment",
    description: 'This well maintained, unique home has 3 bedrooms a well sized living room with a high ceiling on the lower level. The master and 2nd bedroom are on the upper level while the 3rd bedroom is on the lower level near the rear entrance.',
    bedrooms: 3,
    bathrooms: 2,
    price: 1800,
    floorSpace: 191,
    image: "./house-images/listing-images/house-2.jpg",
    imageLg: "./house-images/lg-img/house-2-lg.jpg",
    status: 'Rent'
  },
  {
    address: "40 Soy Street",
    city: "Soy Hills",
    state: "FL",
    homeType: "Ranch",
    description: 'Home features a great room, formal dining room, kitchen, 2 bedrooms, 1 bath and basement. With a little imagination, you can make this home your own. Close to all major roadways and public transportation.',
    bedrooms: 2,
    bathrooms: 1,
    price: 175600,
    floorSpace: 122,
    image: "./house-images/listing-images/house-3.jpg",
    imageLg: "./house-images/lg-img/house-3-lg.jpg",
    status: 'Sale'
  },
  {
    address: "50 Ocean Blvd",
    city: "Palm Beach",
    state: "FL",
    homeType: "Villa",
    description: 'Beautiful spacious villa with 4 bedrooms and 2 bathrooms in a quite neighborhood, large kitchen with a dining room, huge backyard.',
    bedrooms: 4,
    bathrooms: 2,
    price: 140500,
    floorSpace: 205,
    image:
      "./house-images/listing-images/house-4.jpg",
    imageLg: "./house-images/lg-img/house-4-lg.jpg",
    status: 'Sale'

  },
  {
    address: "114 Willson Street",
    city: "Woodvale",
    state: "NB",
    homeType: "Apartment",
    description: 'This 188 square metre appartment has 2 bedrooms and 1 bathroom. It is located at 144 Willson Street, Woodvale, NB.',
    bedrooms: 2,
    bathrooms: 1,
    price: 2850,
    floorSpace: 188,
    image:
      "./house-images/listing-images/house-5.jpg",
    imageLg: "./house-images/lg-img/house-5-lg.jpg",
    status: 'Rent'

  },
  {
    address: "55-60 Saint Peter Avenue",
    city: "Maryland",
    state: "CA",
    homeType: "Villa",
    description: 'Beautiful 5 bedroom villa in excellent condition. Home has new windows, wall to wall carpeting, and eat-in kitchen.  Great home for the first time homebuyer or an investor.',
    bedrooms: 5,
    bathrooms: 4,
    price: 316000,
    floorSpace: 245,
    image:
      "./house-images/listing-images/house-6.jpg",
    status: 'Sale'
  },
  {
    address: "99-101 Malcom Street",
    city: "Ridgewood",
    state: "NY",
    homeType: "Apartment",
    description: 'Huge Two bedrooms apartment. Newly Renovated. Brand new kitchen, hardwood floors, stainless steel appliances. Very Well maintained building.',
    bedrooms: 2,
    bathrooms: 1,
    price: 1590,
    floorSpace: 120,
    image:
      "./house-images/listing-images/house-7.jpg",
    status: 'Rent'

  },
  {
    address: "99-105 Malcom Street",
    city: "Ridgewood",
    state: "NY",
    homeType: "Single-Family House",
    description: 'Well kept single-family house. Open floor plan with hardwood floors. and ceramic tile. Kitchen has oak cabinets and corian counters. Full baths on both floors. Finished basement includes large family room, bonus room and a cedar closet. Other highlights include new carpeting, central air and a fenced yard.',
    bedrooms: 5,
    bathrooms: 3,
    price: 189000,
    floorSpace: 231,
    image:
      "./house-images/listing-images/house-8.jpg",
    status: 'Sale'

  },
  {
    address: "88 Saint Louis Avenue",
    city: "Woodvale",
    state: "NB",
    homeType: "Condo",
    description: 'This house featuring hard wood floors thru-out, expansive family room, eat in kitchen and large fully fenced yard! Interior lay out is very spacious. Located on a dead end street makes this home truly peaceful. There is a wood burning fireplace in front living room and also a gas burning wall fireplace in family room.',
    bedrooms: 3,
    bathrooms: 3,
    price: 85000,
    floorSpace: 185,
    image:
      "./house-images/listing-images/house-9.jpg",
    status: 'Sale'

  },
  {
    address: "125 Jade Street",
    city: "Maryland",
    state: "CA",
    homeType: "Ranch",
    description: 'This is a must see 4 bedroom home featuring privacy and mountain views. This home also offers the convenient country location but only a short drive to shopping, restaurants, golf, skiing, farmers markets and much more.',
    bedrooms: 4,
    bathrooms: 2,
    price: 109000,
    floorSpace: 192,
    image:
      "./house-images/listing-images/house-10.jpg",
    status: 'Sale'

  },
  {
    address: "45 Sunflower Street",
    city: "Soy Hills",
    state: "FL",
    homeType: "Single-Family House",
    description: 'Very unique 2 bedroom home. Lots of space inside, 2 bedrooms and 2 baths on upper level. 1st floor master, full bath and laundry. Kitchen with eat in, formal dining and large living room.',
    bedrooms: 1,
    bathrooms: 1,
    price: 1500,
    floorSpace: 140,
    image:
      "./house-images/listing-images/house-11.jpg",
    status: 'Rent'

  },
  {
    address: "10-11 Kings Street",
    city: "Ridgewood",
    state: "NY",
    homeType: "Apartment",
    description: 'Beautiful apartment maintaining its charm, featuring authentic kitchen with walk-in pantry, gleaming hardwood floors throughout, original crown moldings, new bathroom, library or office with french doors, dining room with arched doorways, 1 bedroom and 1 bathroom.',
    bedrooms: 1,
    bathrooms: 2,
    price: 2200,
    floorSpace: 119,
    image:
      "./house-images/listing-images/house-12.jpg",
    status: 'Rent'

  },
];

export default listingsData;
