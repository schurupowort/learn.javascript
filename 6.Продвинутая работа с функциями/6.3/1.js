function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ?
  alert( counter2() ); // ?

//  Функции counter и counter2 созданы разными вызовами makeCounter.

// Так что у них независимые внешние лексические окружения, у каждого из которых свой собственный count. 