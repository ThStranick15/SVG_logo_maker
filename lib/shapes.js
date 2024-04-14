class Shape {
    constructor(color){
        this.color = color
    }

    render(){
        throw Error('Please render using a specific shape')
    }
}
class Square extends Shape{
    constructor(color){
        super(color)
    }

    render(){
        return `<polygon points="10,10 210,10 210,210 10,210" fill="${this.color}" />`
    }
}

class Circle extends Shape{
    constructor(color){
        super(color)
    }

    render(){
        return `<circle cx="110" cy="110" r="100" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    constructor(color){
        super(color)
    }

    render(){
        return `<polygon points="110,10 210,200 10,200" fill="${this.color}" />`
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}