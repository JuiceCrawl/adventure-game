"use strict";

var inquirer = require('inquirer');

var game = require('./game.source');

function play(node){
  if(node.connections.length === 0){
    console.log(node.text);
    console.log('game over - play again!');
    play(game.startingPoint);
  //   inquirer.prompt([
  //   { name: 'playAgain',
  //     message: ,
  //     type: 'list',
  //     choices: node.connections,
  //   }
  // ]).then(function(answers) {   
  //     play(answers.choice);
  // })
    return;
  }

  inquirer.prompt([
    { name: 'choice',
      message: node.text,
      type: 'list',
      choices: node.connections,
    }
  ]).then(function(answers) {   
      play(answers.choice);
  })

}

play(game.startingPoint)


/**

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:

https://gist.github.com/queerviolet/7d9fb275b292b062fa5b9b4c99eda77d

**/



// function runGame(step){
//   inquirer.prompt([
//     { name: "choice",
//     message: items.text,
//     type: "list",
//     choices: [

//     ]
//     }
//     ]).then(function(answers){
//     return runGame(answers.choice);
//   });
// }
// inquirer.prompt([
    //     { name: 'choice',
    //       message: items.text,
    //       type: 'list',
    //       choices: [
    //         {name: "left", value:
    //  { title: 'leftResp',
    //    text: 'Ah, good choice. Good choice. Now what color is the best?',
    //    connections: [Object],
    //    conditions: [Object] }},
    //    {name: "right", value:{ title: 'rightResp',
    //    text: 'There be dragons there.',
    //    connections: [],
    //    conditions: {} }}
    //       ]
    //    }
        
    // ]).then(function(answers) {
    //     fnc(answers.choice)
    // })


    // inquirer.prompt([
    //     { name: 'choice',
    //       message: 'Pick a color',
    //       type: 'list',
    //       choices: [
    //           {name: 'Red', value: '#ff0000'},
    //           {name: 'Green', value: '#00ff00'},
    //           {name: 'Fuchsia', value: '#ff00ff'},
    //       ]
    //     }
    // ]).then(function(answers) {
    //     console.log(answers.choice)
    // })