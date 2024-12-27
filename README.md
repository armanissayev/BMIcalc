# Back-End logic of BMI Calculator
This is the assignment project made by Arman Issayev, Alikhan Kassymbekov and Mertay Merekeyev.

## How to install
In order to install this repo to your machine, you can download the zip file and unpack it, or use `git clone` command as follows:

```bash
  git clone https://github.com/armanissayev/BMIcalc.git
```

## Install dependencies
After you install this repo, you need to install all Node.js modules so it can be run successfully. In order to do so, paste this into your terminal in the repo directory:
```
  npm install
```

## Go to Project Directory
Before running the server, navigate to the project directory. Use the following command in your terminal:
```
  cd BMIcalc
```
If this command doesn't work, locate the folder where the project was unpacked, copy its full path, and use the following command instead:
```
  cd [full_path_to_project]
```
Replace [full_path_to_project] with the actual path you copied.


## Run server
In order to run the server on your localhost you neeed to run this command in your terminal
```
  node index.js
```
If command runs successfully you will see the message `Server is running on http://localhost:3000`.

## Routes
There are 2 implemented endpoints:
- `localhost:3000/` - GET request, sends you a HTML file to render the page of the website.
- `localhost:3000/bmicalculator` - POST request, client sends information about height, weight and extra information (optional ones) and get the value of their BMI and some recommendation.
  
