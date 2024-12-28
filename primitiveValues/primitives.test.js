describe("Testing Primitives", () => {

    const val1 = null
    let val2
    const val3 = true

    it("Test Null, true false and undefined values", () => {
        expect(val1).toBeNull()
        expect(val2).toBeUndefined()
        expect(val3).toBeDefined()
        expect(val3).toBeTruthy()
        expect(val2).not.toBeTruthy()
        expect(val2).toBeFalsy()
        expect(0).toBeFalsy()
    })

    test('Number Comparison', () => {
        const value = 3 + 3
        expect(value).toBeGreaterThan(5)
    })

})