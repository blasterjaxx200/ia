const responses = {
  "bonjour": "Bonjour! Comment puis-je vous aider?",
  "comment ça va": "Je suis un chatbot, donc je n'ai pas de sentiments, mais merci de demander!",
  "quelle heure est-il": "Je suis désolé, je ne peux pas vous dire l'heure exacte. Veuillez vérifier sur votre appareil.",
  "merci": "De rien! Je suis là pour vous aider.",
  "au revoir": "Au revoir! Passez une bonne journée!",
  "qui est tu": "je suis un model de language v1 developpé par blasterjaxx je suis toujours au stade de developpement 😉 ",
  "quel sont vos capacités": "je peux répondre à vos questions, traduire des texte écrire differents types de contenus créatifs et vous aider a accomplir de nombreuses autres tâches n'hésitez pas a me mettre a l'épreuve !",
  "quel est la météo aujourd'hui": "je suis un nouveau modèle de language developpé par blasterjaxx et je n'ai actuellement as la capacité a acceder a internet afin d'accomplir cette tache si vous voulez contacter le developpeur veuillez rejoindre le serveur discord ci dessus ;)",
  "raconte moi une blague": "quel genre d'humour ? envoyez humour noir ou humour classic !",
  
};

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const messageText = input.value.toLowerCase().trim();
  if (messageText === '') return;

  addMessage('user', messageText);
  input.value = '';

  showTypingIndicator();

  setTimeout(() => {
      removeTypingIndicator();
      const botResponse = responses[messageText] || "Je suis désolé, mais je ne comprends pas cette question.";
      addMessage('bot', botResponse);
  }, 2000);
});

function addMessage(sender, text) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');
  messageContainer.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');

  const messageText = document.createElement('p');
  messageText.textContent = text;
  messageContainer.appendChild(messageText);

  const chatMessages = document.getElementById('chat-messages');
  chatMessages.appendChild(messageContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('message', 'bot-message');
  typingIndicator.setAttribute('id', 'typing-indicator');

  const dots = document.createElement('div');
  dots.classList.add('typing-indicator');

  for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dots.appendChild(dot);
  }

  typingIndicator.appendChild(dots);

  const chatMessages = document.getElementById('chat-messages');
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
      typingIndicator.remove();
  }
}



