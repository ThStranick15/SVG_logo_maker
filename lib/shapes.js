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
        return `<polygon points="10,10 190,10 190,190 10,190" fill="${this.color}" />`
    }
}

class Circle extends Shape{
    constructor(color){
        super(color)
    }

    render(){
        return `<circle cx="90" cy="90" r="80" fill="${this.color}" />`
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