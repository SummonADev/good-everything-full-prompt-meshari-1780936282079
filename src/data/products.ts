import type { ProductCategory } from '@/types';

export const productCategories: ProductCategory[] = [
  {
    id: 'truffles',
    title: 'Truffles & Chocolates',
    emoji: '🍫',
    products: [
      {
        name: 'Chocolate Truffle Gift Box',
        description: 'Our signature gift boxes are filled with handcrafted truffles in rotating seasonal flavors. Perfect for gifting, celebrating, or treating yourself.',
        badge: 'Bestseller',
      },
      {
        name: 'Salted Caramel Truffle',
        description: 'Our most-requested flavor. Rich chocolate meets perfectly balanced salted caramel.',
        badge: 'Fan Favorite',
      },
      {
        name: 'Espresso Truffle',
        description: 'For the coffee lover. Deep, bold espresso wrapped in smooth chocolate.',
      },
      {
        name: 'Dark Chocolate Espresso Beans',
        description: 'A classic done right.',
      },
      {
        name: 'Dubai Chocolate',
        description: 'The viral sensation everyone\'s talking about — now available in Occoquan. Rich, layered, and unforgettable.',
        badge: 'As Seen Everywhere',
      },
      {
        name: 'Chocolate Turtles',
        description: 'Pecans, caramel, and premium chocolate. Reviewers call these addictive.',
      },
      {
        name: 'Pecan Clusters',
        description: "\'The best I\'ve ever had\' — voted so by more than one customer.",
      },
      {
        name: 'White Chocolate',
        description: 'A newer addition to our lineup — rich, creamy, and not too sweet.',
        badge: 'New',
      },
    ],
  },
  {
    id: 'covered',
    title: 'Chocolate-Covered Fruits & Nuts',
    emoji: '🫐',
    products: [
      {
        name: 'Chocolate-Covered Almonds',
        description: 'Crunchy, roasted almonds cloaked in premium chocolate.',
      },
      {
        name: 'Chocolate-Covered Cherries',
        description: 'Our most addictive item. Fair warning.',
        badge: 'Most Addictive',
      },
      {
        name: 'Chocolate-Covered Blueberries',
        description: 'A NazBro specialty — unique, fresh, and surprisingly wonderful.',
        badge: 'NazBro Specialty',
      },
      {
        name: 'Chocolate-Covered Peanuts',
        description: 'Simple, satisfying, and deeply snackable.',
      },
      {
        name: 'Chocolate-Covered Cashews',
        description: 'Buttery cashews meet rich chocolate — an irresistible pairing.',
      },
      {
        name: 'Chocolate-Covered Oreos',
        description: 'Customers call these super. We just call them part of the regular rotation.',
      },
      {
        name: 'Chocolate Graham Crackers',
        description: 'A crowd favorite with loyal fans who come back for these specifically.',
      },
      {
        name: 'Chocolate Blueberry Bites',
        description: 'Concentrated blueberry goodness wrapped in smooth chocolate.',
      },
    ],
  },
  {
    id: 'fudge',
    title: 'Fudge',
    emoji: '🟫',
    products: [
      {
        name: 'Chocolate Walnut Fudge',
        description: 'A classic combination of rich chocolate and toasted walnuts.',
      },
      {
        name: 'Peanut Butter Fudge',
        description: 'Creamy peanut butter in fudge form. It\'s as good as it sounds.',
      },
      {
        name: 'Maple Walnut Fudge',
        description: 'Real maple sweetness with hearty walnuts. A true New England-style classic.',
      },
      {
        name: 'Penuche Fudge',
        description: 'Old-fashioned brown sugar fudge with a deep, caramelized flavor.',
      },
      {
        name: 'Heath Bar Toffee Fudge',
        description: 'Ribbons of crunchy toffee run through every bite of this fan favorite.',
      },
      {
        name: 'Rotating Seasonal Flavors',
        description: 'Ask us what\'s in the case today. We rotate flavors to keep things interesting.',
        badge: 'Ask In Store',
      },
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Treats',
    emoji: '✨',
    products: [
      {
        name: 'Marshmallow Pops',
        description: 'Dipped in chocolate and perfect for kids and adults alike.',
      },
      {
        name: 'Chocolate-Dipped Oreos',
        description: 'A beloved classic — we make ours right.',
      },
      {
        name: 'House-Made Gummy Bears',
        description: 'Yes, we make those too. Customers absolutely love them.',
      },
      {
        name: 'Chocolate-Covered Strawberries',
        description: 'Seasonal and available by order only. Call ahead to reserve yours.',
        badge: 'Seasonal / Order Only',
      },
    ],
  },
];
