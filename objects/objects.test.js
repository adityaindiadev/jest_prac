describe("Testing Objects", () => {
    test("Object not Equality", () => {
        const data = { alpha: 'A' }
        data.beta = "B"
        expect(data).not.toBe({ alpha: 'A', beta: "B" }) //not deep equal
    })
    // test("Object Equality", () => {
    //     const data = { alpha: 'A' }
    //     data.beta = "B"
    //     expect(data).toBe({ alpha: 'A', beta: "B" }) // deep equal ===
    // })

    test("Object Equality", () => {
        const data = { alpha: 'A' }
        data.beta = "B"

        const data2 = data
        expect(data2).toBe(data) // shallow equal or reference equal
    })

    test("Object Equality with toEqual", () => {
        const data = { alpha: 'A' }
        data.beta = "B"
        expect(data).toEqual({ alpha: 'A', beta: "B" }) // structure equal
    })


})