const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Tiramisu',
    ingredients: 'For the cream: 4 large egg yolks, ½ cup/100 grams granulated sugar, divided, ¾ cup heavy cream, 1 cup/227 grams mascarpone (8 ounces); For the assembly: 1 ¾ cups good espresso or very strong coffee, 2 tablespoons rum or cognac, 2 tablespoons unsweetened cocoa powder, About 24 ladyfingers (from one 7-ounce/200-gram package), 1 to 2 ounces bittersweet chocolate, for shaving (optional)',
    directions: 'Using an electric mixer in a medium bowl, whip together egg yolks and 1/4 cup/50 grams sugar until very pale yellow and about tripled in volume. A slight ribbon should fall from the beaters (or whisk attachment) when lifted from the bowl. Transfer mixture to a large bowl, wiping out the medium bowl used to whip the yolks and set aside. In the medium bowl, whip cream and remaining 1/4 cup/50 grams sugar until it creates soft-medium peaks. Add mascarpone and continue to whip until it creates a soft, spreadable mixture with medium peaks. Gently fold the mascarpone mixture into the sweetened egg yolks until combined. Combine espresso and rum in a shallow bowl and set aside. Using a sifter, dust the bottom of a 2-quart baking dish (an 8x8-inch dish, or a 9-inch round cake pan would also work here) with 1 tablespoon cocoa powder. Working one at a time, quickly dip each ladyfinger into the espresso mixture -- they are quite porous and will fall apart if left in the liquid too long -- and place them rounded side up at the bottom of the baking dish. Repeat, using half the ladyfingers, until you’ve got an even layer, breaking the ladyfingers in half as needed to fill in any obvious gaps (a little space in between is O.K.). Spread half the mascarpone mixture onto the ladyfingers in one even layer. Repeat with remaining espresso-dipped ladyfingers and mascarpone mixture. Dust top layer with remaining tablespoon of cocoa powder. Top with shaved or finely grated chocolate, if desired. Cover with plastic wrap and let chill in the refrigerator for at least 4 hours (if you can wait 24 hours, all the better) before slicing or scooping to serve.',
    user_id: 1
    
  },
  {
    title: 'Carrot Cake',
    ingredients: '2 cups (260g) chopped pecans (1 cup for cake, 1 cup for garnish. Nuts are optional), 1 and 1/2 cups (300g) packed light or dark brown sugar, 1/2 cup (100g) granulated sugar, 1 cup (240ml) vegetable oil or canola oil (or melted coconut oil), 4 large eggs, 3/4 cup (133g) smooth unsweetened applesauce, 1 teaspoon pure vanilla extract, 2 and 1/2 cups (312g) all-purpose flour (spoon & leveled), 2 teaspoons baking powder, 1 teaspoon baking soda, 1/2 teaspoon salt, 1 and 1/2 teaspoons ground cinnamon, 1 teaspoon ground ginger, 1/4 teaspoon ground nutmeg, 1/4 teaspoon ground cloves, 2 cups (260g) grated carrots (about 4 large), Cream Cheese Frosting, 16 ounces (450g) full-fat block cream cheese, softened to room temperature, 1/2 cup (115g) unsalted butter, softened to room temperature, 4 and 1/2 cups (540g) confectioners’ sugar, 1 Tablespoon (15ml) heavy cream or milk, 1 and 1/2 teaspoons pure vanilla extract, pinch of salt, to taste',
    directions: 'Adding all the directions here.',
    user_id: 2
    
  },
  {
    title: 'Lasagna',
    ingredients: 'For the meat sauce: Extra virgin olive oil, 1 pound lean ground beef (chuck), 1/2 onion, diced (about 3/4 cup), 1/2 large bell pepper (green, red, or yellow), diced (about 3/4 cup), 2 cloves garlic, minced, 1 28-ounce can good quality tomato sauce, 3 ounces (half a 6-oz can) tomato paste, 1 14-ounce can crushed tomatoes, 2 tablespoons chopped fresh oregano, or 2 teaspoons dried oregano, 1/4 cup chopped fresh parsley (preferably flat leaf), packed, 1 tablespoon Italian Seasoning, Pinch of garlic powder and/or garlic salt, 1 tablespoon red or white wine vinegar, 1 tablespoon to 1/4 cup sugar (to taste, optional), Salt; To assemble the lasagna: 1/2 lb dry lasagna noodles (requires 9 lasagna noodles - unbroken), 15 ounces Ricotta cheese, 1 1/2 lb (24 ounces) Mozzarella cheese, grated or sliced, 1/4 lb (4 ounces) freshly grated Parmesan cheese',
    directions: 'For this recipe, we are essentially making a thick, meaty tomato sauce and layering that with noodles and cheese into a casserole. Here’s the run-down: Start by making the sauce with ground beef, bell peppers, onions, and a combo of tomato sauce, tomato paste, and crushed tomatoes. The three kinds of tomatoes gives the sauce great depth of flavor. Let this simmer while you boil the noodles and get the cheeses ready. We’re using ricotta, shredded mozzarella, and parmesan — like the mix of tomatoes, this 3-cheese blend gives the lasagna great flavor! From there, it’s just an assembly job. A cup of meat sauce, a layer of noodles, more sauce, followed by a layer of cheese. Repeat until you have three layers and have used up all the ingredients. Bake until bubbly and you’re ready to eat!',
    user_id: 3
    
  },
  {
    title: 'Blackened Salmon Fillets',
    ingredients: '2 tablespoons ground paprika, 1 tablespoon ground cayenne pepper, 1 tablespoon onion powder, 2 teaspoons salt, ½ teaspoon ground white pepper, ½ teaspoon ground black pepper, ¼ teaspoon dried thyme, ¼ teaspoon dried basil, ¼ teaspoon dried oregano, 4 (6 ounce) fillet BLANKS salmon fillets, skin and bones removed, ½ cup unsalted butter, melted',
    directions: 'Step 1: In a small bowl, mix paprika, cayenne pepper, onion powder, salt, white pepper, black pepper, thyme, basil and oregano, Step 2: Brush salmon fillets on both sides with 1/4 cup butter, and sprinkle evenly with the cayenne pepper mixture. Drizzle one side of each fillet with 1/2 remaining butter, Step 3: In a large, heavy skillet over high heat, cook salmon, butter side down, until blackened, 2 to 5 minutes. Turn fillets, drizzle with remaining butter, and continue cooking until blackened and fish is easily flaked with a fork.',
    user_id: 1
  },
  {
    title: 'Simple Cottage Cheese Pancakes',
    ingredients: '1 cup cottage cheese, 3 eggs, ¼ cup all-purpose flour, 2 tablespoons melted butter, ¼ teaspoon salt, 1 teaspoon butter, or as needed, ¼ cup blueberries, or to taste',
    directions: 'Step 1: Strain cottage cheese in a sieve fitted over a bowl, pressing down occasionally, until cottage cheese has dried out, about 1 hour; Step 2: Beat eggs in a medium bowl; add cottage cheese, flour, melted butter, and salt. Mix until just blended; Step 3. Heat butter in a frying pan over medium-high heat; drop large spoonfuls of batter into the melted butter. Sprinkle blueberries into batter. Cook until lightly browned, 2 to 3 minutes per side.',
    user_id: 2
  },
  {
    title: "Chef John's Strawberry Semifreddo",
    ingredients: '1 pound fresh strawberries, ½ cup white sugar, ¾ cup full-fat Greek yogurt, lemon, zested, 2 teaspoons fresh lemon juice, ⅛ teaspoon vanilla extract, 1 teaspoon aged balsamic vinegar (optional), 1 pinch salt, 1 ¾ cups cold heavy cream; For the Crust: 6 shortbread cookies, 3 tablespoons melted butter; For the Garnish: 1 ½ cups diced fresh strawberries, 2 tablespoons white sugar, or more to taste',
    directions: 'Step 1: Line 10 ramekins with plastic wrap and place them onto a baking sheet; Step 2:  Hull strawberries with the tip of a knife. Place strawberries in a food processor. Add sugar, Greek yogurt, lemon zest, lemon juice, vanilla extract, and balsamic vinegar. Sprinkle in a tiny pinch of salt. Pulse on and off to combine; finish pureeing on high until smooth; Step 3: Whisk heavy cream in a bowl until soft peaks form. Add the strawberry puree. Stir and fold with a spatula until most of the major streaks disappear. Fill ramekins 1/4 to 1/8 inch from the top with the strawberry mixture. Tap baking sheet against the counter to settle the tops. Cover ramekins in plastic wrap and freeze until mostly firm, about 1 1/2 hours; Step 4: Meanwhile, place cookies in a resealable plastic bag. Seal; crush cookies through with a rolling pin to get 1 1/2 cups of crumbs. Place crumbs into a bowl; add butter and mix well; Step 5: Divide the cookie crumb mixture among the ramekins and smooth out with the back of a spoon. Cover again and freeze until completely frozen, about 2 hours; Step 6: Toss diced strawberries with sugar in a bowl. Let rest at room temperature until a syrup forms below the strawberries, about 1 hour; Step 7: Warm up each ramekin in your hands to help unmold the semifreddo; invert onto a plate. Top with the strawberries in syrup. Thaw for 10 to 15 minutes before serving.',
    user_id: 3
  }

];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;