# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Table of Contents
* [Overview](#project-overview)
* [Specification](#specification)
* [How to see the test](#how-to-see-the-test)
* [Project Instruction](#project-instruction)
* [Note about ES6](#note-about-es6)
* [Updates](#updates)

## Updates
### 6/4/2018
- 624e9b8 feat: Add accessibility to images
- 0a0dc24 docs: Add comments to sw.js
### 6/3/2018
- 0378e20 feat: Add a ServiceWorker script to cache requests
- aadef59 feat: Add accessibility to the webpage
### 6/2/2018
- 03eebba feat: Add my own Google Maps API key to index.html and restaurant.html
- 631a731 fix: Adjust the padding of the filter option header
- 04935f1 feat: Add responsive design on the restaurant detail page
- 560e376 fix: Adjust the filter text and restaurant grid to be always center
- 4b33b10 feat: Add viewpoint on the main page and a breakpoint for the filter option
- e200fca feat: Change on CSS to display restaurant list in flex columns
- 639bb0f feat: First Commit


## Project Overview

For the **Restaurant Reviews** projects, I convert a static webpage to a mobile-ready web application. In **Stage One**, I take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also add a service worker to begin the process of creating a seamless offline experience for my users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### How to see the test
* Download repository to your computer.
* Open file index.html in browser.  
* The test results will be displayed at the bottom of the page

Clone the website from https://github.com/kchan167/mws-restaurant-stage-1

### Project Instruction
- [Project Rubic](https://review.udacity.com/#!/rubrics/1090/view)

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript I write.
 
