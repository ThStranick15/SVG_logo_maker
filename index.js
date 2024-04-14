const fs = require('fs')
const inquirer = require('inquirer')
const {Square, Triangle, Circle} = require('./lib/shapes')

async function getUserInput(){
    const prompt = await inquirer.prompt([
    {
        name: 'text',
        message: 'Please input logo text of no more than 3 characters'
    },

    {
        name:'textColor',
        message: 'Please input a text color in text or hexadecimal'
    },

    {
        name:'shape',
        type:'list',
        message: 'Please select a shape.',
        choices: ['Square', 'Triangle', 'Circle']
    },

    {
        name:'shapeColor',
        message:'Please input a shape color in text or hexadecimal'
    }
])

    while(prompt.text.length > 3 || prompt.text.length == 0){
        const newPrompt = await inquirer.prompt({
            name: 'text',
            message: 'Your logo text can have no more than 3 characters'
        })

        prompt.text = newPrompt.text
    }

    return prompt
}

function generateSVG(input){
    let shape
    if(input.shape == 'Square'){
        shape = new Square(input.shapeColor)
    }
    else if(input.shape == 'Triangle'){
        shape = new Triangle(input.shapeColor)
    }
    else{
        shape = new Circle(input.shapeColor)
    }
    console.log(shape.render())
    console.log(input.textColor)
    console.log(input.text)

    const outputHTML = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="110" y="110" font-size="30" text-anchor="middle" fill="${input.textColor}">${input.text}</text>
    </svg>
    `

    return outputHTML
}

async function outputSVG(genHTML){
    fs.writeFile('logo.svg', genHTML, err =>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Generated SVG')
        }
    })
}


getUserInput()
    .then(generateSVG)
    .then(outputSVG)
    .catch((err)=>{
        console.log(err)
    })

