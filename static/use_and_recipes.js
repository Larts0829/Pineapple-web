// Recipe data
const recipes = {
  "pineapple-fruit-salad": {
      title: "Pineapple Fruit Salad",
      image: "/static/recipes/pineapple_fruit_salad.jpg",
      prepTime: "15 mins",
      cookTime: "0 mins",
      servings: "4",
      ingredients: [
          "2 cups fresh pineapple chunks",
          "1 cup strawberries, halved",
          "1 cup blueberries",
          "1 banana, sliced",
          "2 kiwis, peeled and sliced",
          "2 tablespoons honey",
          "1 tablespoon lime juice",
          "Fresh mint leaves for garnish"
      ],
      instructions: [
          "Wash all fruits thoroughly and pat dry.",
          "Cut pineapple into bite-sized chunks if not already done.",
          "Combine all fruits in a large bowl.",
          "In a small bowl, whisk together honey and lime juice.",
          "Pour the honey-lime mixture over the fruit and toss gently to coat.",
          "Refrigerate for at least 30 minutes before serving to allow flavors to meld.",
          "Garnish with fresh mint leaves before serving."
      ],
      tips: "For best results, use a ripe pineapple that has been detected as perfect by RipenScan. You can add a sprinkle of chia seeds or a dollop of yogurt for extra nutrition."
  },
  "coconut-delight": {
      title: "Coconut Delight with Pineapples",
      image: "/static/recipes/coconut_delight.jpg",
      prepTime: "20 mins",
      cookTime: "5 mins",
      servings: "6",
      ingredients: [
          "2 cups fresh pineapple chunks",
          "1 cup coconut cream",
          "1/2 cup coconut milk",
          "1/4 cup honey or maple syrup",
          "1 teaspoon vanilla extract",
          "1/4 cup toasted coconut flakes",
          "1/4 cup chopped macadamia nuts",
          "Mint leaves for garnish"
      ],
      instructions: [
          "In a saucepan, combine coconut cream and coconut milk. Heat gently until warm but not boiling.",
          "Remove from heat and stir in honey and vanilla extract. Let cool to room temperature.",
          "Place pineapple chunks in serving glasses or bowls.",
          "Pour the coconut mixture over the pineapple.",
          "Refrigerate for at least 2 hours or overnight.",
          "Before serving, top with toasted coconut flakes, chopped macadamia nuts, and mint leaves."
      ],
      tips: "For an adult version, add a splash of rum to the coconut mixture. You can also freeze this mixture in popsicle molds for a refreshing frozen treat."
  },
  "pineapple-ice-cream": {
      title: "Homemade Pineapple Ice Cream",
      image: "/static/recipes/pineapple_ice_cream.jpg",
      prepTime: "30 mins",
      cookTime: "4 hours",
      servings: "8",
      ingredients: [
          "2 cups fresh pineapple chunks",
          "1 cup pineapple juice",
          "2 cups heavy cream",
          "1 cup whole milk",
          "3/4 cup granulated sugar",
          "1/4 cup honey",
          "1 teaspoon vanilla extract",
          "1/4 teaspoon salt"
      ],
      instructions: [
          "Blend 1 cup of pineapple chunks with pineapple juice until smooth.",
          "In a large bowl, whisk together heavy cream, milk, sugar, honey, vanilla extract, and salt until sugar is dissolved.",
          "Stir in the blended pineapple mixture.",
          "Chop the remaining pineapple chunks into smaller pieces and fold into the cream mixture.",
          "Pour into an ice cream maker and churn according to manufacturer's instructions.",
          "Transfer to a freezer-safe container and freeze for at least 4 hours or until firm.",
          "Let sit at room temperature for 5-10 minutes before scooping."
      ],
      tips: "No ice cream maker? No problem! Pour the mixture into a shallow dish and freeze. Every 30 minutes for 2-3 hours, take it out and whisk vigorously to break up ice crystals."
  },
  "pineapple-pie": {
      title: "Pineapple Pie",
      image: "/static/recipes/pineapple_pie.jpg",
      prepTime: "25 mins",
      cookTime: "45 mins",
      servings: "8",
      ingredients: [
          "For the crust:",
          "1 1/2 cups all-purpose flour",
          "1/2 cup cold butter, cubed",
          "1/4 cup granulated sugar",
          "1/4 teaspoon salt",
          "3-4 tablespoons ice water",
          "For the filling:",
          "3 cups fresh pineapple, finely chopped",
          "3/4 cup granulated sugar",
          "3 tablespoons cornstarch",
          "1/4 teaspoon salt",
          "1 tablespoon lemon juice",
          "1 teaspoon vanilla extract",
          "1 egg (for egg wash)",
          "1 tablespoon water (for egg wash)"
      ],
      instructions: [
          "For the crust: In a food processor, pulse flour, sugar, and salt. Add butter and pulse until mixture resembles coarse crumbs.",
          "Add ice water one tablespoon at a time, pulsing until dough comes together.",
          "Divide dough in half, shape into disks, wrap in plastic, and refrigerate for at least 1 hour.",
          "For the filling: In a saucepan, combine pineapple, sugar, cornstarch, salt, and lemon juice.",
          "Cook over medium heat, stirring constantly, until mixture thickens (about 5-7 minutes).",
          "Remove from heat, stir in vanilla, and let cool completely.",
          "Preheat oven to 375°F (190°C).",
          "Roll out one disk of dough and place in a 9-inch pie dish. Add filling.",
          "Roll out second disk and cut into strips for lattice top or place whole on top with slits cut for venting.",
          "Whisk egg with water and brush over top crust.",
          "Bake for 40-45 minutes until crust is golden brown and filling is bubbly.",
          "Let cool completely before serving."
      ],
      tips: "For a tropical twist, add 1/2 cup toasted coconut flakes to the filling. Serve warm with a scoop of vanilla ice cream for an extra indulgent dessert."
  },
  "pineapple-smoothie": {
      title: "Smoothie with Pineapples & Ginger",
      image: "/static/recipes/pineapple_smoothie.jpg",
      prepTime: "10 mins",
      cookTime: "0 mins",
      servings: "2",
      ingredients: [
          "2 cups fresh pineapple chunks",
          "1 banana, frozen",
          "1 inch piece fresh ginger, peeled and grated",
          "1 cup coconut water",
          "1/2 cup Greek yogurt",
          "1 tablespoon honey or maple syrup (optional)",
          "1 tablespoon chia seeds",
          "Ice cubes (optional)"
      ],
      instructions: [
          "Add pineapple chunks, frozen banana, grated ginger, coconut water, Greek yogurt, and honey to a blender.",
          "Blend on high speed until smooth and creamy.",
          "Add ice cubes if you prefer a colder smoothie and blend again.",
          "Stir in chia seeds.",
          "Pour into glasses and let sit for 2-3 minutes to allow chia seeds to expand slightly.",
          "Garnish with a pineapple wedge and mint leaf before serving."
      ],
      tips: "This smoothie is perfect for breakfast or as a post-workout refreshment. For added protein, include a scoop of your favorite protein powder. The ginger adds a nice zing and has anti-inflammatory properties."
  },
  "pineapple-cocktail": {
      title: "Fresh Pineapple Cocktail with Lime",
      image: "/static/recipes/pineapple_cocktail.jpg",
      prepTime: "10 mins",
      cookTime: "0 mins",
      servings: "2",
      ingredients: [
          "1 cup fresh pineapple juice",
          "3 oz white rum",
          "1 oz triple sec",
          "1 oz lime juice",
          "1 tablespoon simple syrup",
          "Ice cubes",
          "Pineapple wedges for garnish",
          "Lime wheels for garnish"
      ],
      instructions: [
          "Fill a cocktail shaker with ice.",
          "Add pineapple juice, rum, triple sec, lime juice, and simple syrup.",
          "Shake vigorously for about 15 seconds until well chilled.",
          "Strain into glasses filled with ice.",
          "Garnish with pineapple wedges and lime wheels."
      ],
      tips: "For a non-alcoholic version, replace the rum and triple sec with coconut water and a splash of orange juice. For the best flavor, use freshly squeezed pineapple juice from a ripe pineapple."
  }
};

// DOM Elements
const recipeCards = document.querySelectorAll('.recipe-card');
const recipeModal = document.getElementById('recipeModal');
const closeModal = document.getElementById('closeModal');
const recipeTitle = document.getElementById('recipeTitle');
const recipeImage = document.getElementById('recipeImage');
const prepTime = document.getElementById('prepTime');
const cookTime = document.getElementById('cookTime');
const servings = document.getElementById('servings');
const ingredientsList = document.getElementById('ingredientsList');
const instructionsList = document.getElementById('instructionsList');
const recipeTips = document.getElementById('recipeTips');

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Trigger animations for elements in viewport on load
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-up, .pop-in');
  
  function checkIfInView() {
      animatedElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              // Add delay if specified
              const delay = element.getAttribute('data-delay');
              if (delay) {
                  setTimeout(() => {
                      element.classList.add('active');
                  }, delay * 1000);
              } else {
                  element.classList.add('active');
              }
          }
      });
  }
  
  // Check if elements are in view on load
  checkIfInView();
  
  // Check if elements are in view on scroll
  window.addEventListener('scroll', checkIfInView);
  
  // Recipe Card Click Event
  recipeCards.forEach(card => {
      card.addEventListener('click', function() {
          const recipeId = this.getAttribute('data-recipe');
          const recipe = recipes[recipeId];
          
          // Populate modal with recipe data
          recipeTitle.textContent = recipe.title;
          recipeImage.src = recipe.image;
          recipeImage.alt = recipe.title;
          prepTime.textContent = `Prep: ${recipe.prepTime}`;
          cookTime.textContent = `Cook: ${recipe.cookTime}`;
          servings.textContent = `Serves: ${recipe.servings}`;
          
          // Clear and populate ingredients list
          ingredientsList.innerHTML = '';
          recipe.ingredients.forEach(ingredient => {
              const li = document.createElement('li');
              li.textContent = ingredient;
              ingredientsList.appendChild(li);
          });
          
          // Clear and populate instructions list
          instructionsList.innerHTML = '';
          recipe.instructions.forEach((instruction, index) => {
              const li = document.createElement('li');
              li.textContent = instruction;
              instructionsList.appendChild(li);
          });
          
          // Set tips
          recipeTips.textContent = recipe.tips;
          
          // Show modal
          recipeModal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
  });
  
  // Close modal
  closeModal.addEventListener('click', () => {
      recipeModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable background scrolling
  });
  
  // Close modal when clicking outside content
  recipeModal.addEventListener('click', (e) => {
      if (e.target === recipeModal) {
          recipeModal.classList.remove('active');
          document.body.style.overflow = ''; // Re-enable background scrolling
      }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && recipeModal.classList.contains('active')) {
          recipeModal.classList.remove('active');
          document.body.style.overflow = ''; // Re-enable background scrolling
      }
  });
});
