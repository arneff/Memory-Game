# Memory Game Project

## Table of Contents

* [Overview](#overview)
* [How it Works](#how-it-works)
* [Star Rating](#star-rating)
* [Contributing](#contributing)
* [Acknowledgements](#acknowledgements)

## Overview

Memory Game is a project associated with Udacity's Front-End Web Development Nanodegree

The starter project presupplied some HTML and CSS styling along with the single JavaScript function shown below.
```
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
```
I have written the rest of the functionality to meet the specifications required to complete to project.

For more information on the Udacity Project, detailed information can be found here: [Udacity Classroom](https://classroom.udacity.com/me).

## How it works

* A new random deck is automatically dealt
* Select two cards
* If the cards match they will remain visible and locked with a green background
* If the cards do not match they will be hidden
* Once all 8 pairs have been matched the game is over

### Star rating

You begin the game with 3 Stars. The more moves you make the lower your star rating will become.

Try and complete the game with as many stars as possible!



## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Acknowledgements

* Udacity Support Team - for timely advice when I find myself stuck.
