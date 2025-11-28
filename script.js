// SHOW SECTION
function showSection(sectionId) {
  document.querySelectorAll(".container, header")
    .forEach(sec => sec.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");

  if (sectionId === "quiz") loadQuiz();
}

// FORM VALIDATION
const form = document.getElementById("detailsForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const interest = document.getElementById("interest").value.trim();

  if (!/^[A-Za-z\s]+$/.test(name)) {
    alert("Please enter alphabets only for Name");
    return;
  }
  if (!/^\d+$/.test(age)) {
    alert("Please enter numbers only for Age");
    return;
  }
  if (!/^[A-Za-z\s]+$/.test(interest)) {
    alert("Please enter alphabets only for Career Interests");
    return;
  }

  showSection("quiz");
});

// QUIZ DATA
const quizData = [
  { q: "What is the capital of India?", a: "Delhi" },
  { q: "Which planet is known as the Red Planet?", a: "Mars" },
  { q: "Who wrote 'Hamlet'?", a: "Shakespeare" },
  { q: "What is H2O commonly known as?", a: "Water" },
  { q: "Which gas do plants absorb?", a: "Carbon dioxide" },
  { q: "How many continents are there?", a: "7" },
  { q: "Which is the largest ocean?", a: "Pacific" },
  { q: "What is 5 + 3?", a: "8" },
  { q: "Who discovered gravity?", a: "Newton" },
  { q: "What color is the sky?", a: "Blue" }
];

// LOAD QUIZ
function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");

  quizContainer.innerHTML = quizData
    .map((item, i) => `
      <div class="quiz-question">
        <p><b>${i + 1}. ${item.q}</b></p>
        <input type="text" id="q${i}" placeholder="Your answer">
      </div>
    `)
    .join("");
}

// SUBMIT QUIZ
document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;

  quizData.forEach((item, i) => {
    const ans = document.getElementById(`q${i}`).value.trim().toLowerCase();
    if (ans === item.a.toLowerCase()) score++;
  });

  document.getElementById("quizResult").textContent = `Your Score: ${score}/10`;

  setTimeout(() => showSection("guides"), 2000);
});

// ROADMAP
function showRoadmap(field) {
  let html = "";

  if (field === "science") {
    html = `
      <h3>Science Roadmap</h3>
      <p>1️⃣ Focus on PCM/PCB.<br>
      2️⃣ Prepare for JEE/NEET.<br>
      3️⃣ Explore Engineering, Medicine, Research.</p>`;
  } else if (field === "arts") {
    html = `
      <h3>Arts Roadmap</h3>
      <p>1️⃣ Study Humanities, Psychology, Literature.<br>
      2️⃣ Build creativity & critical thinking.<br>
      3️⃣ Careers in Journalism, Design, Law.</p>`;
  } else {
    html = `
      <h3>Commerce Roadmap</h3>
      <p>1️⃣ Study Business, Accounting, Economics.<br>
      2️⃣ Explore CA, MBA, Finance.<br>
      3️⃣ Build leadership & analytical skills.</p>`;
  }

  document.getElementById("roadmapContent").innerHTML = html;
}

// INITIAL PAGE
document.getElementById("home").classList.add("active");

