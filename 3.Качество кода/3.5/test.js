// it("Возводит x в степень n", function() {
//     let x = 5;
  
//     let result = x;
//     assert.equal(pow(x, 1), result);
  
//     result *= x;
//     assert.equal(pow(x, 2), result);
  
//     result *= x;
//     assert.equal(pow(x, 3), result);
//   });

// Если ошибка происходит посередине сложного потока выполнения, то нам придётся выяснять, какие данные были в этом месте. 
// По сути, придётся отлаживать тест.
// Гораздо лучше разбить тест на несколько блоков it и ясно описать входные и ожидаемые на выходе данные.

describe("Возводит x в степень n", function() {
    it("5 в степени 1 будет 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 в степени 2 будет 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 в степени 3 будет 125", function() {
      assert.equal(pow(5, 3), 125);
    });
});