const {Square, Triangle, Circle} = require('../lib/shapes')

test('Create a Square', () => {
    const square = new Square('blue')
    expect(square.render()).toBe(`<polygon points="10,10 190,10 190,190 10,190" fill="blue" />`)
})

test('Create a Circle', () => {
    const circle = new Circle('green')
    expect(circle.render()).toBe(`<circle cx="90" cy="90" r="80" fill="green" />`)
})

test('Create a Triangle', () => {
    const triangle = new Triangle('red')
    expect(triangle.render()).toBe(`<polygon points="110,10 210,200 10,200" fill="red" />`)
})
