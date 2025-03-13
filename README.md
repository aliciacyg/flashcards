# Web Development Project 3 - *Flashcards! Pt 2*

Submitted by: **Alicia Nash**

This web app: **This is a simple flashcard webapp that helps you learn Mandarin**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
- [X] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/aliciacyg/flashcards/blob/main/gif/gifdemo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

This part of the project was a lot of fun to work on, figuring out how to implement the form without sacrificing in smoothness. I focused on making the app very responsive to changes. For instance:
    - Form is disabled after a guess is made or if the user has seen the answer. 
    - Streak is reset if user flips a card to see the answer.
    - User cannot make a guess, even if they flip the card back to the front
I put a lot of attention into details like this to make the application feel clean and responsive. 

## License

    Copyright 2025 Alicia Nash

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.