import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Hanoi Food', '#f5428d'),
    new Category('c2', 'Saigon Food', '#f54242'),
    new Category('c3', 'Danang Food', '#f5a442'),
    new Category('c4', 'Western Food', '#f5d142'),
    new Category('c5', 'Noodles', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
    new Meal(
      'm1',
      ['c4'],
      'Mì spaghetti',
      'affordable',
      'simple',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Cơm tấm',
      'affordable',
      'simple',
      'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2022/quan-com-tam-o-ha-noi-.jpg',
      20,
      [
        '2 cups broken rice',
        '300g pork shoulder or pork chops',
        '100g shredded pork skin',
        '2 eggs',
        'Cooking oil'
      ],
      [
        'Preheat a grill or a pan over medium-high heat. Grill the marinated pork until cooked through and slightly charred. Set aside',
        'Layer ham, the pineapple and cheese on the white bread',
        'Cook the egg until the white is fully set, and the edges are crispy. Season with salt and pepper',
        'Add a bit of oil and the shredded pork skin. Stir-fry until crispy'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c4'],
      'Classic Hamburger',
      'pricey',
      'simple',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      45,
      [
        '300g Cattle Hack',
        '1 Tomato',
        '1 Cucumber',
        '1 Onion',
        'Ketchup',
        '2 Burger Buns'
      ],
      [
        'Form 2 patties',
        'Fry the patties for c. 4 minutes on each side',
        'Quickly fry the buns for c. 1 minute on each side',
        'Bruch buns with ketchup',
        'Serve burger with tomato, cucumber and onion'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Wiener Schnitzel',
      'luxurious',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
      60,
      [
        '8 Veal Cutlets',
        '4 Eggs',
        '200g Bread Crumbs',
        '100g Flour',
        '300ml Butter',
        '100g Vegetable Oil',
        'Salt',
        'Lemon Slices'
      ],
      [
        'Tenderize the veal to about 2–4mm, and salt on both sides.',
        'On a flat plate, stir the eggs briefly with a fork.',
        'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
        'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
        'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
        'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
        'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c3', 'c10'],
      'Phá Lấu',
      'affordable',
      'simple',
      'https://cdn.tgdd.vn/Files/2021/09/13/1382372/cach-nau-pha-lau-trieu-chau-ngon-chuan-vi-nguoi-hoa-202109132003180655.jpg',
      30,
      [
        '500g mixed organ meats',
        "200g pork belly, sliced",
        '1 teaspoon five-spice powder',
        '4 cloves garlic, minced',
        '400ml coconut milk',
        'Balsamic Vinegar',
        'Olive Oil',
        'Salt and Pepper'
      ],
      [
        'Clean the organ meats, remove any excess fat or membrane',
        'Heat the vegetable oil in a small saucepan. Add annatto seeds and cook over low heat',
        'Add the sliced onion and minced garlic',
        'Add the sliced pork belly to the pot. Cook until the pork belly is slightly browned and crispy on the edges.',
        'Add the cleaned organ meats to the pot. Stir and cook for a few minutes until they start to firm up.'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Delicious Orange Mousse',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel'
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c4'],
      'Pancakes',
      'affordable',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1 1/2 Cups all-purpose Flour',
        '3 1/2 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
        '1 Tablespoon White Sugar',
        '1 1/4 cups Milk',
        '1 Egg',
        '3 Tablespoons Butter, melted'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Creamy Indian Chicken Curry',
      'pricey',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Chocolate Souffle',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c4'],
      'Salad',
      'Cheap',
      'simple',
      'https://cdn.tgdd.vn/2021/07/CookProduct/805-1200x676.jpg',
      20,
      [
        '2 large potatoes, boiled, peeled, and diced',
        '1 cup cooked chicken or ham, diced',
        '1/2 cup mayonnaise',
        '1/2 cup cooked carrots, diced',
        '1/4 cup diced onion'
      ],
      [
        'Boil the potatoes until they are fork-tender. Let them cool, then peel and dice them into small cubes',
        'Boil the peas and carrots until tender, then drain and let them cool. Dice the cooked carrots',
        'In a large mixing bowl, combine the diced potatoes, cooked chicken or ham, peas, carrots, pickles, diced onion, and corn kernels.',
        'In a separate bowl, whisk together the mayonnaise, sour cream, and Dijon mustard',
        'Season the salad with salt and pepper to taste',
        'Cover the bowl with plastic wrap or a lid and refrigerate the Salad Nga for at least a few hours or overnight',
        'Salad Nga is typically served cold as a side dish or appetizer. Its often accompanied by bread or crackers.'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm11',
      ['c1'],
      'Phở Bò',
      'Cheap',
      'simple',
      'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg',
      120,
      [
        '2 kg beef bones',
        '1 kg beef brisket or beef shank',
        '1 onion, halved and charred',
        '3-4 inches of ginger, charred',
        '1 teaspoon coriander seeds',
        '400g dried pho rice noodles',
        '200g beef sirloin or eye of round, thinly sliced'
      ],
      [
        'Prepare the Broth',
        'Cook the dried pho rice noodles according to the package instructions. Drain and rinse them under cold water to prevent sticking',
        'Thinly slice the beef sirloin or eye of round. The beef slices will cook in the hot broth when the dish is served',
        'Before serving, strain the broth to remove the solid ingredients. The broth should be clear and flavorful.',
        'Season the salad with salt and pepper to taste',
        'To serve, place a portion of cooked noodles in a bowl. Arrange the thinly sliced beef on top of the noodles',
        'Diners can customize their pho by adding herbs, bean sprouts, and a squeeze of lime to their bowls. Some might also add thinly sliced chili peppers for heat.'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm12',
      ['c5'],
      'Penne Bacon with pecream',
      'Pricy',
      'complex',
      'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/5-CYNKJT3VEJCJTA-CYNKJT3WRYNCME/detail/menueditor_item_ac072eeb0df643adaead76065d0a0ebe_1680107714923475950.webp',
      60,
      [
        '2 kg beef bones',
        '1 kg beef brisket or beef shank',
        '1 onion, halved and charred',
        '3-4 inches of ginger, charred',
        '1 teaspoon coriander seeds',
        '400g dried pho rice noodles',
        '200g beef sirloin or eye of round, thinly sliced'
      ],
      [
        'Prepare the Broth',
        'Cook the dried pho rice noodles according to the package instructions. Drain and rinse them under cold water to prevent sticking',
        'Thinly slice the beef sirloin or eye of round. The beef slices will cook in the hot broth when the dish is served',
        'Before serving, strain the broth to remove the solid ingredients. The broth should be clear and flavorful.',
        'Season the salad with salt and pepper to taste',
        'To serve, place a portion of cooked noodles in a bowl. Arrange the thinly sliced beef on top of the noodles',
        'Diners can customize their pho by adding herbs, bean sprouts, and a squeeze of lime to their bowls. Some might also add thinly sliced chili peppers for heat.'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm13',
      ['c1'],
      'Bún chả',
      'Cheap',
      'simple',
      'https://monngonbamien.org/wp-content/uploads/2019/10/cach-lam-bun-cha-ha-noi-tai-nha-ngon-nhat.jpg',
      60,
      [
        '300g ground pork',
        '100g minced pork belly',
        '2 cloves garlic, minced',
        '1 tablespoon soy sauce',
        '1 teaspoon sugar',
        '1/2 teaspoon black pepper',
        '1 tablespoon vegetable oil',
        '200g rice vermicelli noodles',
        'Sliced cucumber'
      ],
      [
        'Prepare the Grilled Pork Patties (Chả)',
        'Prepare the Dipping Sauce: whisk together fish sauce, water, sugar, lime juice, minced garlic, and minced chili peppers.',
        'Cook the rice vermicelli noodles according to the package instructions. Drain and rinse them under cold water to prevent sticking',
        'Arrange fresh lettuce leaves, bean sprouts, sliced cucumber, and a mix of fresh herbs on a serving plate.',
        'Serve the noodle bowl with a side of the dipping sauce for drizzling over the grilled pork and noodles',
        'To serve, place a portion of cooked noodles in a bowl. Arrange the thinly sliced beef on top of the noodles',
        'Diners can customize their pho by adding herbs, bean sprouts, and a squeeze of lime to their bowls. Some might also add thinly sliced chili peppers for heat.'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm14',
      ['c1'],
      'Bún đậu mắm tôm',
      'Cheap',
      'simple',
      'https://vcdn-giadinh.vnecdn.net/2021/01/15/bun-1-5687-1610696220.jpg',
      30,
      [
        '300g ground pork',
        '100g minced pork belly',
        '2 cloves garlic, minced',
        '1 tablespoon soy sauce',
        '1 teaspoon sugar',
        '1/2 teaspoon black pepper',
        '1 tablespoon vegetable oil',
        '200g rice vermicelli noodles',
        'Sliced cucumber'
      ],
      [
        'Prepare the Grilled Pork Patties (Chả)',
        'Prepare the Dipping Sauce: whisk together fish sauce, water, sugar, lime juice, minced garlic, and minced chili peppers.',
        'Cook the rice vermicelli noodles according to the package instructions. Drain and rinse them under cold water to prevent sticking',
        'Arrange fresh lettuce leaves, bean sprouts, sliced cucumber, and a mix of fresh herbs on a serving plate.',
        'Serve the noodle bowl with a side of the dipping sauce for drizzling over the grilled pork and noodles',
        'To serve, place a portion of cooked noodles in a bowl. Arrange the thinly sliced beef on top of the noodles',
        'Diners can customize their pho by adding herbs, bean sprouts, and a squeeze of lime to their bowls. Some might also add thinly sliced chili peppers for heat.'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm15',
      ['c1'],
      'Bánh mì',
      'Cheap',
      'simple',
      'https://ticotravel.com.vn/wp-content/uploads/2022/05/Banh-mi-Ha-Noi-2.jpg',
      5,
      [
        '300g ground pork',
        '100g minced pork belly',
        '2 cloves garlic, minced',
        '1 tablespoon soy sauce',
        '1 teaspoon sugar',
        '1/2 teaspoon black pepper',
        '1 tablespoon vegetable oil',
        '200g rice vermicelli noodles',
        'Sliced cucumber'
      ],
      [
        'Prepare the Grilled Pork Patties (Chả)',
        'Prepare the Dipping Sauce: whisk together fish sauce, water, sugar, lime juice, minced garlic, and minced chili peppers.',
        'Cook the rice vermicelli noodles according to the package instructions. Drain and rinse them under cold water to prevent sticking',
        'Arrange fresh lettuce leaves, bean sprouts, sliced cucumber, and a mix of fresh herbs on a serving plate.',
        'Serve the noodle bowl with a side of the dipping sauce for drizzling over the grilled pork and noodles',
        'To serve, place a portion of cooked noodles in a bowl. Arrange the thinly sliced beef on top of the noodles',
        'Diners can customize their pho by adding herbs, bean sprouts, and a squeeze of lime to their bowls. Some might also add thinly sliced chili peppers for heat.'
      ],
      true,
      true,
      true,
      true
    ),


  ];