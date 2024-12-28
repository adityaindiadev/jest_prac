const multiply = require("./index")


describe("Multiple Test Suit in one file", () => {

    test("2 and multiply equal 10", () => {
        expect(multiply(2, 5)).toBe(10) // exact equality
    })

    // You can also use it instead of test
    it("2 and multiply not equal 10", () => {
        expect(multiply(2, 5)).not.toBe(4) // exact equality
    })
})



describe("Test Null and undefined values", () => {

    it("2 and multiply equal 10", () => {
        
    })

    // You can also use it instead of test
    it("2 and multiply not equal 10", () => {
        expect(multiply(2, 5)).not.toBe(4) // exact equality
    })
})