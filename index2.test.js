const multiply = require("./index")

//Test Suite
test("2 and multiply not equal 10", () => {
    expect(multiply(2, 5)).not.toBe(4) // exact equality
})