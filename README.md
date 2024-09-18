# Quiz Quest: Test Your Knowledge

## Overview

Quiz Quest is a web application designed to challenge your knowledge with trivia questions on various topics. It fetches quiz questions from the Open Trivia Database API and presents them in a user-friendly and engaging format.

## Features

- Fetches quiz questions from the Open Trivia Database API
- Displays questions with multiple-choice answers
- Highlights correct and incorrect answers
- Responsive design suitable for different screen sizes

## Installation

To get started with Quiz Quest, follow these steps:

### Prerequisites

- Node.js (recommended version: 16.x or later)
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```
## Install Dependencies
Install the required npm packages:

```bash
npm install
```
# API Configuration

The app uses the Open Trivia Database API to fetch quiz questions. You do not need an API key for this API.

## Update questions.js

The `questions.js` file contains the code to fetch quiz questions. It uses Axios to make an HTTP request and format the data. Here’s the updated code for `questions.js`:

```javascript
const axios = require('axios');

async function fetchQuestions() {
  const options = {
    method: 'GET',
    url: 'https://opentdb.com/api.php',
    params: {
      amount: 10, // Number of questions
      category: 9, // Example category (General Knowledge)
      difficulty: 'easy', // Difficulty level
      type: 'multiple' // Type of questions (multiple choice)
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data.results;

    const questions = data.map(item => ({
      question: item.question,
      choices: [
        { text: item.correct_answer, answer: true },
        ...item.incorrect_answers.map(answer => ({ text: answer, answer: false }))
      ].sort(() => Math.random() - 0.5) // Randomize the choices
    }));

    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
}

module.exports = fetchQuestions;
```
## Usage

### Running the App

To start the development server:

```bash
npm start
```
This command will start the app and open it in your default web browser. You can now access Quiz Quest and start taking quizzes.

## Fetching Questions

The `questions.js` file handles fetching quiz questions from the Open Trivia Database API. You can customize the `amount`, `category`, `difficulty`, and `type` parameters in the options object to suit your needs.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue on the GitHub repository.
