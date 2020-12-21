![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Stranger Invaders

![screenshot of project](https://i.imgur.com/MaEFw0S.png)

### Play the game [here](https://lauracharvey.github.io/GA-Project-1/).

For instructions click the "How to Play" button.

## Overview

This is my first General Assembly project, completed in week 4 of the Software Engineering Immersive course. This was a 1 week, individual project in order to showcase our HTML, CSS & vanilla JavaScript knowledge and skills.

In the brief we were given a list of logic and interval based games to choose from. The games were ranked from 1-3 in complexity of implementation. Originally I was thinking I would only be able to chose a level 1 game but after having a chat with my tutor, I decided I would aim for a level 2 game.

I chose Space Invaders as it was the one I found most fun and logical.

##Brief 


* Render a game in the browser
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Use **Javascript** for DOM manipulation
* Deploy your game online, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)

####Requirements

* The player should be able to clear at least one wave of aliens
* The player's score should be displayed at the end of the game

##Tech Stack

* HTML
* CSS
* JavaScript

##Approach

I knew I had to implement a grid for my Space Invaders style game, I used JavaScript to implement my grid squares so my game was easily scalable.

![screenshot of code showing logic for building my grid](https://i.imgur.com/lAYks66.png)

There were then 4 other main strands of logic:

* Player placement and movement
* The players laser and collison with aliens/bombs
* The 'invaders' and their movement
* The intermittent dropping of bombs

#### Player Placement

![screenshot of code used for moving the player across the grid on key press](https://i.imgur.com/THLi44H.png)

I gave my player a fixed number on the grid to indicate the starting position.

I then used a 'key press' event listener and if statements with mathematical logic to move the player left & right without going off the edge of the grid.

#### Player 'Shooter'

![screenshot of JavaScript function created for the 'shooter' logic](https://i.imgur.com/kVYl1nW.png)

Once I had implemented the player logic, the laser was much easier, I used a function to identify the player position and then send the 'shooter' from that position, adding the grid width each time to move it up the board.

I used a set interval to control the laser movement.

#### 'Invader' Movement

![screenshot of JavaScript used for invader movement](https://i.imgur.com/ofcwV7h.png)

I originally had a single 'invader' who I got moving around the board however, when I attempted to move to an array of aliens I had a lot of difficulty.

It took me a long time to get my head around implementing the different array methods but I now have an array of 21 aliens that move around the board in sync.

I used nested if/else statements to implement the left and right movement across the grid and to ensure that when the aliens reached either edge they moved down a row before moving in the opposite direction.

I also used an if statement to end the game if the aliens reached the bottom row (or top row in the Upside Down).


#### Bomb Drop

![screenshot of JavaScript used for bomb movement and bomb interval](https://i.imgur.com/xzyRwxF.png)

I built the bomb movement in two parts, first the logic and then the set interval to call the function.

I again used nested if/else statements in my function to remove lives of the player and the laser classes if they collide with one.

## Conclusion

I am really proud of this project because I found vanilla JavaScript a challenge at the time of building. It helped me gain and understanding and appreciation for certain array methods and their uses.
