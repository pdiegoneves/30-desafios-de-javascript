const media = require('./media')

test('Entrada 10,9,6,8,9,1,5,7', () => {
    expect(media(10,9,6,8,9,1,5,7)).toBe(6.875)
})
test('Entrada 2,5,7,1,-2', () => {
    expect(media(2,5,7,1,-2)).toBe(2.6)
})
test('Entrada 10,10,10,10,9', () => {
    expect(media(10,10,10,10,9)).toBe(9.8)
})
test('Entrada 25,75', () => {
    expect(media(25,75)).toBe(50)
})