const responses = {
  "bonjour": "Bonjour! Comment puis-je vous aider?",
  "comment ça va": "Je suis un chatbot, donc je n'ai pas de sentiments, mais merci de demander!",
  "quelle heure est-il": "Je suis désolé, je ne peux pas vous dire l'heure exacte. Veuillez vérifier sur votre appareil.",
  "merci": "De rien! Je suis là pour vous aider.",
  "au revoir": "Au revoir! Passez une bonne journée!",
  "qui est tu": "je suis un model de language v1 developpé par blasterjaxx je suis toujours au stade de developpement 😉 "
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



