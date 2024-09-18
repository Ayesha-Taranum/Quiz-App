// Function to fetch questions from the Open Trivia Database API
async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
        const data = await response.json();

        // Mapping API data to the structure of your "questions" object
        const questions = data.results.map(item => ({
            question: item.question,
            choices: [
                { text: item.correct_answer, answer: true },
                ...item.incorrect_answers.map(answer => ({ text: answer, answer: false }))
            ].sort(() => Math.random() - 0.5) // Randomize the order of the choices
        }));

        return questions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

// Immediately fetch questions and export as a module
const questions = await fetchQuestions();
export default questions;
