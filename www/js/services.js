angular.module('starter.services', [])
.factory('MenuService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menuData = [{
    id: 0,
    name: 'breakfast',
    title: 'Breakfast',
    date: 'Thursday, March 18th 2015',
    image: 'img/breakfast.jpg',
    content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
  {
    id: 1,
    name: 'lunch',
    title: 'Lunch',
    date: 'Thursday, March 18th 2015',
    image: 'img/lunch.jpg',
    content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'dinner',
    title: 'Dinner',
    date: 'Thursday, March 18th 2015',
    image: 'img/dinner.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'foss',
    title: 'Foss',
    date: 'Thursday, March 18th 2015',
    image: 'img/foss.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'dana',
    title: 'Dana',
    date: 'Thursday, March 18th 2015',
    image: 'img/dana.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'bobs',
    title: 'Bobs',
    date: 'Thursday, March 18th 2015',
    image: 'img/bobs.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'take4',
    title: 'Take 4',
    date: 'Thursday, March 18th 2015',
    image: 'img/take4.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  },
{
    id: 2,
    name: 'spa',
    title: 'The Spa',
    date: 'Thursday, March 18th 2015',
    image: 'img/spa.jpg',
     content: '<div class="span3"><h3>Breakfast <span class="dining-hours">(8:00 a.m.-11:00 a.m.)</span></h3><p>Fresh Fruit &amp; Yogurt Bar</p><p>Hot Cereal w/Toppings</p><p><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Scrambled Tofu<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Hard Cooked Eggs<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Home Fries<br/>Blueberry Pancakes<br/><span class="containsPork" title="Contains Pork">(P)</span>  Sausage Patty</p><p>Bagel Bar</p></div><div class="span3"><h3>Lunch <span class="dining-hours">(11:00 a.m.-5:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Omelet Bar</p><p><strong>Simple Serving<br/></strong><span class="glutenFree" title="Gluten Free">(GF)</span>  Beef  Salpicon<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Cilantro Lime Basmati Rice</p><p><strong>International </strong><br/>Waffle Bar</p><p><strong>Deli</strong> <strong>&amp; Salad Bar</strong><br/>Egg Salad<br/>Chicken Caesar Wrap<br/>Potato Chips &amp; Dill Pickle Spears</p><p><strong>Pizza &amp; Pasta</strong> <em><br/></em><span class="vegetarian" title="Vegetarian">(V)</span>  Fresh Dough Cheese Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  Fresh Dough Pepperoni Pizza<br/><span class="containsPork" title="Contains Pork">(P)</span>  BLT Pizza<br/>Cinnamon Sugar Breadsticks</p><p>Macaroni<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Jalapeno Cheese Sauce<br/>Fresh Broccoli Florets</p></div><div class="span3"><h3>Dinner <span class="dining-hours">(5:00 p.m.-9:00 p.m.)</span></h3><p><strong>Soup<br/></strong>Cream of Broccoli</p><p><strong>Grill</strong><br/>Classic Cheeseburger on a Toasted Bun<br/><span class="vegetarian" title="Vegetarian">(V)</span>  Garden Burger<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  French Fries</p><p><strong>Simple Servings</strong><br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Ancho Lime Chicken<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Aztec Corn<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Spanish Rice</p><p><strong>International<br/></strong>Grilled Fiesta Lime Ground Turkey Fajita</p><p><strong>Pizza &amp; Pasta<br/></strong><span class="containsPork" title="Contains Pork">(P)</span>  Awesome Potato Skin Bar <strong><br/></strong></p><p>Pasta<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Bolognese Sauce<br/><span class="glutenFree" title="Gluten Free">(GF)</span>  Marinara Sauce</p></div>  </ion-content></ion-view>'
  }
  ];

  return {
    all: function() {
      return menuData;
    },
    get: function(menuName) {
      for (var i = 0; i < menuData.length; i++) {
        if (menuData[i].name == menuName) {
          return menuData[i];
        }
      }
      return null;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
