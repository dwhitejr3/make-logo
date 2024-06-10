const fs = require('fs');
const inquirer = require('inquirer');
// const circleSvg = require('./examples/circle.svg');


inquirer
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Type 3 letters you want to appear on logo',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color you want the logo to be',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape you want your logo to be',
            choices: ['circle', 'triangle', 'square'],
        }

    ]);
    


//  .then((response) {
//     if(response.shape === 'circle')
//     fs.writeFile('index.html', circleSvg);
//      })
// class Circle {
//     constructor(text, color) {
//         this.text = text;
//         this.color = color;
//     }
   
// class Square extends Circle {
//     constructor(text,color) {
//         super(text,color);
//     }
// }

// class Triangle extends Circle {
//     constructor(text,color) {
//         super(text,color);
//     }
// }