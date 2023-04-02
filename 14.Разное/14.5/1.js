alert( 123 ^ 0 ); // 123
alert( 0 ^ 123 ); // 123
alert( ~~123 ); // 123

// Операция a^b ставит бит результата в 1, если на соответствующей битовой позиции в a или b (но не одновременно) стоит 1.

// Так как в 0 везде стоят нули, то биты берутся в точности как во втором аргументе.

// Первое побитовое НЕ ~ превращает 0 в 1, а 1 в 0. А второе НЕ превращает ещё раз, в итоге получается как было.