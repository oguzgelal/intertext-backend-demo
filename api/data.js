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
];

module.exports = {
  users,
  recipes,
};

// https://www.simplyrecipes.com

// {
//   id: 0,
//   image: '',
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
