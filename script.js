// Validation for details form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("detailsForm");
  if (form) {
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
        alert("Please enter alphabets only for Career Interest");
        return;
      }
      window.location.href = "quiz.html";
    });
  }

  // Quiz Logic
  const quizContainer = document.getElementById("quiz-container");
  if (quizContainer) {
    const questions = [
      { q: "What is the capital of India?", a: "Delhi" },
      { q: "Which planet is known as the Red Planet?", a: "Mars" },
      { q: "Who wrote 'Hamlet'?", a: "Shakespeare" },
      { q: "What is H2O commonly known as?", a: "Water" },
      { q: "Which gas do plants absorb?", a: "Carbon dioxide" },
      { q: "How many continents are there?", a: "7" },
      { q: "Which is the largest ocean?", a: "Pacific" },
      { q: "What is 5 + 3?", a: "8" },
      { q: "Who discovered gravity?", a: "Newton" },
      { q: "What color is the sky?", a: "Blue" },
    ];

    let html = "";
    questions.forEach((item, i) => {
      html += `<p>${i + 1}. ${item.q}</p>
               <input type="text" id="q${i}" placeholder="Your answer"><br>`;
    });
    quizContainer.innerHTML = html;

    document.getElementById("submitQuiz").addEventListener("click", () => {
      let score = 0;
      questions.forEach((item, i) => {
        const ans = document.getElementById(`q${i}`).value.trim().toLowerCase();
        if (ans === item.a.toLowerCase()) score++;
      });
      document.getElementById(
        "quizResult"
      ).textContent = `Your Score: ${score}/10`;
      setTimeout(() => (window.location.href = "guides.html"), 2000);
    });
  }
});
