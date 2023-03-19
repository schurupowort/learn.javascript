let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Шустрый хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // Живот ленивого хомяка пуст
  alert( lazy.stomach ); // <ничего>