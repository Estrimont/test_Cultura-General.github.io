const quizData = [
    {
        question: "¿Cuál es la capital de Colombia?",
        choices: ["Bogotá", "Medellín", "Cali", "Cartagena"],
        correct: 0,
        explanation: "Bogotá es la capital de Colombia y la ciudad más grande del país."
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        choices: ["Nilo", "Amazonas", "Yangtsé", "Mississippi"],
        correct: 1,
        explanation: "El Amazonas es considerado el río más largo del mundo, con una longitud aproximada de 7,062 km, superando ligeramente al río Nilo."
    },
    {
        question: "¿En qué año ocurrió la independencia de Colombia?",
        choices: ["1810", "1820", "1830", "1840"],
        correct: 0,
        explanation: "La independencia de Colombia se proclamó el 20 de julio de 1810, marcando el inicio del proceso de independencia de las colonias españolas en América del Sur."
    },
    {
        question: "¿Cuál es el país más grande del mundo?",
        choices: ["China", "Canadá", "Rusia", "Estados Unidos"],
        correct: 2,
        explanation: "Rusia es el país más grande del mundo, cubriendo más de 17 millones de kilómetros cuadrados y abarcando Europa y Asia."
    },
    {
        question: "¿Cuál es el idioma más hablado en el mundo?",
        choices: ["Inglés", "Chino Mandarín", "Español", "Hindú"],
        correct: 1,
        explanation: "El chino mandarín es el idioma más hablado del mundo, con más de 900 millones de hablantes nativos, principalmente en China."
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        choices: ["K2", "Kangchenjunga", "Monte Everest", "Lhotse"],
        correct: 2,
        explanation: "El Monte Everest, ubicado en la cordillera del Himalaya, es la montaña más alta del mundo, con una altura de 8,848 metros sobre el nivel del mar."
    },
    {
        question: "¿Qué país tiene la mayor cantidad de islas en el mundo?",
        choices: ["Suecia", "Noruega", "Filipinas", "Indonesia"],
        correct: 0,
        explanation: "Suecia tiene la mayor cantidad de islas en el mundo, con un estimado de 267,570 islas, muchas de las cuales están deshabitadas."
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        choices: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correct: 3,
        explanation: "El Océano Pacífico es el más grande y profundo del mundo, cubriendo más de 63 millones de millas cuadradas."
    },
    {
        question: "¿Cuál es la capital de Australia?",
        choices: ["Sídney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
        explanation: "Canberra es la capital de Australia. Aunque Sídney y Melbourne son más grandes y conocidas, Canberra fue elegida como un compromiso entre ambas."
    },
    {
        question: "¿Cuál es el animal más rápido del mundo?",
        choices: ["Chita", "Halcón Peregrino", "León", "Caballo"],
        correct: 1,
        explanation: "El halcón peregrino es el animal más rápido del mundo, capaz de alcanzar velocidades de hasta 320 km/h en picada. Aunque la chita es el mamífero terrestre más rápido, el halcón peregrino lo supera en el aire."
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        choices: ["Oxígeno", "Hidrógeno", "Carbono", "Hierro"],
        correct: 0,
        explanation: "El oxígeno es el elemento más abundante en la Tierra, constituyendo aproximadamente el 46% de la corteza terrestre."
    },
    {
        question: "¿En qué continente se encuentra el desierto del Sahara?",
        choices: ["África", "Asia", "Australia", "América del Norte"],
        correct: 0,
        explanation: "El desierto del Sahara se encuentra en África y es el desierto cálido más grande del mundo, cubriendo una gran parte del norte de África."
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        choices: ["Tierra", "Júpiter", "Saturno", "Neptuno"],
        correct: 1,
        explanation: "Júpiter es el planeta más grande del sistema solar, con un diámetro de 139,820 km, más de 11 veces el de la Tierra."
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        choices: ["Mario Vargas Llosa", "Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges"],
        correct: 2,
        explanation: "Gabriel García Márquez, escritor colombiano, escribió 'Cien años de soledad', una de las obras más importantes de la literatura latinoamericana."
    },
    {
        question: "¿Cuál es la fórmula química del agua?",
        choices: ["CO2", "H2O", "O2", "H2"],
        correct: 1,
        explanation: "La fórmula química del agua es H2O, lo que significa que cada molécula de agua está compuesta por dos átomos de hidrógeno y uno de oxígeno."
    },
    {
        question: "¿Qué país es famoso por la Torre Eiffel?",
        choices: ["España", "Italia", "Francia", "Inglaterra"],
        correct: 2,
        explanation: "Francia es famosa por la Torre Eiffel, un ícono mundialmente conocido ubicado en su capital, París."
    },
    {
        question: "¿Cuál es la unidad básica de la vida?",
        choices: ["Átomo", "Molécula", "Célula", "Tejido"],
        correct: 2,
        explanation: "La célula es la unidad básica de la vida. Todos los seres vivos están compuestos de células, que realizan las funciones esenciales para la vida."
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2,
        explanation: "La Mona Lisa fue pintada por Leonardo da Vinci, un artista renacentista italiano, y es una de las pinturas más famosas del mundo."
    },
    {
        question: "¿Qué instrumento mide los terremotos?",
        choices: ["Barómetro", "Sismógrafo", "Termómetro", "Higrómetro"],
        correct: 1,
        explanation: "El sismógrafo es el instrumento utilizado para medir los movimientos de la Tierra, incluyendo los terremotos."
    },
    {
        question: "¿Cuál es la capital de Japón?",
        choices: ["Seúl", "Beijing", "Bangkok", "Tokio"],
        correct: 3,
        explanation: "Tokio es la capital de Japón y una de las ciudades más pobladas del mundo."
    },
    // Puedes seguir agregando más preguntas según sea necesario
];


let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");

    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        choiceBtn.classList.add("choice-btn");
        choiceBtn.onclick = () => selectAnswer(index);
        choicesEl.appendChild(choiceBtn);
    });
}

function selectAnswer(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    document.querySelectorAll(".choice-btn").forEach((btn, index) => {
        if (index === selectedIndex) {
            btn.style.backgroundColor = "#ffc107";
            btn.style.color = "white";
        } else {
            btn.style.backgroundColor = "white";
            btn.style.color = "#007BFF";
        }
    });
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] == null) {
        alert("Por favor selecciona una respuesta antes de continuar.");
        return;
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let resultHTML = "";
    shuffledQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        score += isCorrect ? 1 : 0;
        resultHTML += `<p>${index + 1}. ${question.question}<br> 
                      <strong>Tu respuesta:</strong> ${question.choices[userAnswers[index]]}<br>
                      <strong>Respuesta correcta:</strong> ${question.choices[question.correct]}<br>
                      <strong>Resultado:</strong> ${isCorrect ? "<span style='color:green;'>Correcto</span>" : "<span style='color:red;'>Incorrecto</span>"}<br>
                      <strong>Explicación:</strong> ${question.explanation}</p><hr>`;
    });

    document.getElementById("results").innerHTML = resultHTML;
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
}

function restartQuiz() {
    shuffledQuestions = [...quizData];
    shuffleArray(shuffledQuestions);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    restartQuiz();
});

