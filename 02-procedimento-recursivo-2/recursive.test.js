const recursive = require('./rescursive')

test("Entrada 4", () => {
    expect(recursive(4)).toMatch('chuck-chuck-chuck-chuck')
})
test("Entrada 1", () => {
    expect(recursive(1)).toMatch('chuck')
})
test("Entrada 8", () => {
    expect(recursive(8)).toMatch('chuck-chuck-chuck-chuck-chuck-chuck-chuck-chuck')
})
test("Entrada 2", () => {
    expect(recursive(2)).toMatch('chuck-chuck')
})