function displayJoke(response) {
   const jokeElement = document.querySelector("#joke");
   jokeElement.innerHTML = response.data.answer;

   new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 20,
   });
}

function generateJoke(event) {
   event.preventDefault();

   const apiKey = "297bdob5643aebcfc422bc019b792eta";
   const context =
      "You are a Funny AI Assistant with a great sense of humor that tells jokes about mexican people";
   const prompt = "Write one original joke in English.";
   const apiUrl =
      "https://api.shecodes.io/ai/v1/generate" +
      "?prompt=" +
      encodeURIComponent(prompt) +
      "&context=" +
      encodeURIComponent(context) +
      "&key=" +
      encodeURIComponent(apiKey);

   const jokeElement = document.querySelector("#joke");
   jokeElement.innerHTML = "Genereting a joke for you, please wait";

   axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
