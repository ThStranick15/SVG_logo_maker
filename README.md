# SVG Logo Maker
## Author: Thomas Stranick

## Description

This SVG logo maker helps the user to create their own logo with just a few questions in the terminal. Using node.js, the user is prompted a few questions about their logo's shape, shape color, text, and text color. After these properties are selected, the respective class for the shape that was picked is used to generate the corresponding shape. The SVG logo is then generated with that shape, and output for the user to utilize.

## Visuals

<img src="./assets/Screenshot 2024-04-15 080303.png" >
<img src="./assets/Screenshot 2024-04-15 080325.png" >

## Deployment

Provided as a link here - [SVG Logo Maker](https://github.com/ThStranick15/SVG_logo_maker)

## Usage

To start, the user can type 'node index.js' in the terminal which will begin the application. The user will be prompted for the four properties listed above, with the shape choices given, and colors that an be inputted with text or hexidecimal. If the user does not input a text of less than 3 characters, the user will be prompted again to input one that is less than 3. After all prompts are completed, the user should recieve a message that the logo has been successfuly generated, and can view the file. Each shape class also has individual tests to make sure that they function as expected.

## Credits

- Node.js
- NPM (Inquirer, Jest)

## License

Please refer to the LICENSE in the repo.