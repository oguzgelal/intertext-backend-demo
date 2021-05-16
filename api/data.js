const users = [
  {
    id: 1,
    name: "Oguz Gelal",
    email: "oguz@test.com",
    password: "123123",
    token: "123123123_user_1",
  },
  {
    id: 2,
    name: "Beat Signer",
    email: "beat@test.com",
    password: "123123",
    token: "123123123_user_2",
  },
];

const recipes = [
  {
    id: 1,
    image: "/images/r1.png",
    title: "Pressure Cooker Cajun-Spiced Stuffed Peppers",
    description: [
      "These Cajun-Spiced Stuffed Peppers are packed with ground beef, onion, rice, and corn, and spices! This meal is ready in the pressure cooker in a half an hour.",
    ],
    prepTimeMins: 10,
    cookTimeMins: 30,
    timeMins: 40,
    servings: 4,
    rating: 7, // over 10
    difficulty: "Medium",
    tags: [
      "Lunch",
      "Dinner",
      "Rice",
      "Pepper",
      "Beef",
      "Corn",
      "Onion",
      "Pepper",
    ],
    ingredients: [
      "4 small- to medium-sized bell peppers, any color",
      "3/4 pound 93% to 96% lean ground beef",
      "3/4 cup corn kernels (fresh or frozen)",
      "1 cup cooked rice (any variety)",
      "3/4 cup diced red onion",
      "1 1/2 teaspoons Cajun seasoning blend",
      "1/2 teaspoon dried oregano leaves",
      "1/2 teaspoon paprika",
      "3/4 teaspoon kosher salt",
    ],
    recipe: [
      "Cut off the tops of the bell peppers and discard (or save for another purpose). Use your hands to remove any seeds and white membranes so the peppers are clean and ready for stuffing.",
      "In a mixing bowl, combine the beef, corn, rice, red onion, and seasonings. Use your hands to mix everything together well, and then spoon the filling into the peppers, packing it in firmly. As you stuff the peppers, place them next to each other in the cake pan, sitting upright like cups.",
      "Pour a cup of water into the inner pot of a 6-quart electric pressure cooker. Use the wire metal trivet to lower the cake pan into the pot. It should be resting on top of the trivet, a little bit above the water. Secure the lid on the pressure cooker and make sure the lid is set to its “Sealing” position. Select the “Manual” or “Pressure Cook” setting, and set the time to 15 minutes at high pressure. The pot will take about 10 minutes to come up to pressure, and then the cooking time will begin.",
      "When the cooking program ends, perform a quick pressure release by moving the pressure vent to its “Venting” position. When the pressure has fully released, open the pot and sprinkle the peppers with the cheese and chopped fresh herbs.",
      "Wearing a pair of heatproof mitts, lift the trivet with the cake pan out of the pot. Don’t worry if some liquid has settled in the cake pan. Use a pair of serving spoons to remove the peppers from the pan and transfer to individual plates. Serve hot.",
    ],
    createdAt: 1620554347004, // Date.now
    updatedAt: 1620554347004, // Date.now
    author: 1,
  },
  {
    id: 2,
    image: "/images/r2.png",
    title: "Oven-Roasted Salmon, Asparagus and New Potatoes",
    description: [
      "Oven Roasted Salmon, Asparagus & New Potatoes are quick, EASY, and delicious! Make everything in one sheet pan, easy clean-up, perfect for a midweek dinner",
    ],
    prepTimeMins: 10,
    cookTimeMins: 32,
    timeMins: 42,
    servings: 4,
    rating: 9, // over 10
    difficulty: "Easy",
    tags: [
      "Lunch",
      "Dinner",
      "Salmon",
      "Potatoes",
      "Asparagus",
      "Olives",
      "Easy",
      "Healthy",
    ],
    ingredients: [
      "1 pound (450 g) small new potatoes, scrubbed clean and halved",
      "2 tablespoons extra virgin olive oil",
      "1/2 teaspoon salt",
      "1/2 pound (225 g) medium asparagus, trimmed and sliced on the diagonal, 1-inch long pieces",
      "1 tablespoon chopped fresh dill",
      "1 strip of lemon zest",
      "1 small garlic clove, coarsely chopped",
      "Freshly ground pepper",
      "1 1/2 pounds (680 g) of salmon fillets or salmon steaks cut about 1-inch thick",
      "1 lemon, cut into large wedges",
    ],
    recipe: [
      "Preheat oven to 400°F (205°C). In a sheet pan, or a large, shallow roasting pan (not glass, as it might break in an oven that hot) toss the potatoes with olive oil and sprinkle all over with salt. Place the potatoes cut side down in the roasting pan and cook for 10-12 minutes, until the potatoes begin to brown on the bottom.",
      "In a medium bowl, toss the asparagus with the chopped dill, lemon zest, garlic, about 1/2 teaspoon of salt and a little olive oil. Add the asparagus mixture to the potatoes and stir to combine.",
      "Push the vegetables to the side of the dish to make room for the salmon. If you are using fillets, put them skin side down. Salt the salmon well and return the baking dish to the oven. Roast the salmon and asparagus for 10 minutes, or until the fish is just cooked through. If you want, remove the skin and center bones (if you are using steaks), and arrange on individual plates before serving. Garnish with fresh dill and lemon wedges.",
    ],
    createdAt: 1620554347004, // Date.now
    updatedAt: 1620554347004, // Date.now
    author: 1,
  },
  {
    id: 3,
    image: '/images/r3.png',
    title: 'Green Gumbo',
    description: ['A traditional Louisiana gumbo served during Lent that is based on loads of greens such as collards, kale, turnip greens and spinach.'],
    prepTimeMins: 30,
    cookTimeMins: 120,
    timeMins: 150,
    servings: 12,
    rating: 8, // over 10
    difficulty: "Hard",
    tags: [
      'Lunch',
      'Dinner',
      'Celery',
      'Onion',
    ],
    ingredients: [
      '1 cup peanut oil, lard or other vegetable oil',
      '1 1/4 cup flour',
      '2 cups chopped onion',
      '1 cup chopped green bell pepper',
      '1 cup chopped celery',
      '4 cloves garlic',
      '2 bay leaves',
      '1 Tbsp Cajun seasoning',
      '1 ham hock (optional)',
      '10 cups water',
      '3 pounds assorted greens',
      'Salt',
      '1 pound smoked andouille sausage (optional)',
      'File powder to taste (optional)',
    ],
    recipe: [
      'Start the gumbo by making a roux, which will add a lot of flavor and thicken the gumbo. Heat the cup of peanut oil or lard (both are traditional roux ingredients) over medium heat for a minute or two and then stir in the flour. Mix so there are no lumps.',
      'Cook the roux over medium-low heat until it is the color of chocolate. It is your choice how dark you let your roux go. The darker it is, the better, but once the roux gets dark it can burn easily, so you must stir constantly and keep and eye on it.',
      'While the roux is cooking, bring the 10 cups of water to a simmer.',
      'When the roux is dark enough, mix in the chopped onions, celery and green pepper and turn the heat to medium. Let this cook, stirring occasionally, until the vegetables soften. Add the garlic and cook another 1-2 minutes.',
      'Add the bay leaves, the Cajun spice and slowly stir in the hot water. The roux will seize up at first, but keep stirring and it will all come together in a silky broth.',
      'Add the ham hock and all the greens. Taste for salt, but remember the ham hock will be salty, so let the broth be a little under-salted for now. If you want to add more Cajun spice, do so now. Cover the pot and simmer gently for 1 hour and 15 minutes.',
      'Check the ham hock. If the meat is falling off the bone, remove it, discard the bones, chop the meat and return it to the pot. If the hock is not ready, keep simmering the gumbo; ham hocks dont always cook at the same rate.',
      'Once the hock is ready, add the andouille sausage and cook for another 15 minutes. Serve with file powder at the table.',
    ],
    createdAt: 1620554347004, // Date.now
    updatedAt: 1620554347004, // Date.now
    author: 1,
  },
];

module.exports = {
  users,
  recipes,
};

// https://www.simplyrecipes.com

// {
//   id: 0,
//   image: '/images/',
//   title: '',
//   description: [''],
//   prepTimeMins: 0,
//   cookTimeMins: 0,
//   timeMins: 0,
//   servings: 0,
//   rating: 0, // over 10
//   difficulty: "Easy",
//   tags: [
//     '',
//   ],
//   ingredients: [
//     '',
//   ],
//   recipe: [
//     '',
//   ],
//   createdAt: 1620554347004, // Date.now
//   updatedAt: 1620554347004, // Date.now
//   author: 1,
// },
