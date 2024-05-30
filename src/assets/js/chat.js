const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

// Function to create a chat message element
const createChatLi = (message, messageType) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat");

    if (messageType === "outgoing") {
        chatLi.classList.add("outgoing");
        chatLi.style.backgroundColor = "#724AE8"; // Background color for outgoing messages
        chatLi.textContent = message;
    } else if (messageType === "incoming") {
        chatLi.classList.add("incoming");

        // Add a span element containing the text "Bot" before the message
        const botSpan = document.createElement("span");
        botSpan.textContent = "Bot";
        chatLi.appendChild(botSpan);

        // Add the message text
        const messageText = document.createElement("p");
        messageText.textContent = message;
        chatLi.appendChild(messageText);
    }

    return chatLi;
}


// Function to simulate delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// Variable to track conversation state
var flag = false;
var tempFlag = '1';
var userName = "";
var userLocation = "";

// Function to handle user input
const handleChat = async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Display user message
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    if (flag) {
        // Bot is asking for user's name
        const userResponse = "What is your name?";
        // Simulate bot processing
        await showTypingAnimation();
        chatbox.appendChild(createChatLi(userResponse, "incoming"));
        flag = false; // Reset flag after asking for name
    } else {
        if (!flag) {
            if (tempFlag == '1') {
                // Bot is greeting user and asking for location
                userName = userMessage; // Assign value to userName variable
                const botGreeting = `Hello, ${userName}!`;
                // Simulate bot processing
                await showTypingAnimation();
                chatbox.appendChild(createChatLi(botGreeting, "incoming"));
                await delay(1000); // Simulate bot processing time
                const botMessageLocation = "What is your location?";
                // Simulate bot processing
                await showTypingAnimation();
                chatbox.appendChild(createChatLi(botMessageLocation, "incoming"));
                // flag = true; // Set flag to true to expect location next
                tempFlag = '2';
            } else if (tempFlag == '2') {
                userLocation = userMessage;
                const botMessageAddress = `Thank you. Could you please provide your address at ${userLocation}?`;
                // Simulate bot processing
                await showTypingAnimation();
                chatbox.appendChild(createChatLi(botMessageAddress, "incoming"));
                tempFlag = '3';
            } else if (tempFlag == '3') {
                // Generate a random number between 1000 and 9999
                const randomNumber = Math.floor(Math.random() * 9000) + 1000;

                // Bot displays user information form
                const userAddress = userMessage;
                const formMessage = `Here is the information you provided:\nName: ${userName}\nLocation: ${userLocation}\nAddress: ${userAddress}\nCase No: ${randomNumber}\nOur team will contact you as soon as possible.`;
                // Simulate bot processing
                await showTypingAnimation();
                chatbox.appendChild(createChatLi(formMessage, "incoming"));
                // Disable input field
                chatInput.disabled = true;
            }

        }
    }

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;

    chatInput.value = "";
    chatInput.focus();
}





// Function to handle user pressing enter key
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

// Function to handle user clicking send button
sendChatBtn.addEventListener("click", () => {
    handleChat();
});

// Function to handle user clicking close button
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Function to handle user toggling chatbot visibility
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");

    if (document.body.classList.contains("show-chatbot")) {
        // Bot introduction messages
        const botMessages = [
            "Primarily, what I do is, help businesses across industries engage with their customers better.",
            "I can also provide information about facilities and properties.",
        ];

        const delayBetweenMessages = 1000;

        // Display bot introduction messages with delay
        for (let i = 0; i < botMessages.length; i++) {
            setTimeout(() => {
                chatbox.appendChild(createChatLi(botMessages[i], "incoming"));
                chatbox.scrollTo(0, chatbox.scrollHeight);
            }, delayBetweenMessages * (i + 1));
        }

        setTimeout(() => {
            // Display options and disable input field
            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("option-buttons-container");

            // Create the "Complain" button
            const complainOption = document.createElement("button");
            complainOption.textContent = "Complain";
            complainOption.classList.add("option-button");
            complainOption.addEventListener("click", () => handleOption("complain"));
            buttonsContainer.appendChild(complainOption);

            // Create the "Cancel Report" button
            const cancelOption = document.createElement("button");
            cancelOption.textContent = "Cancel Report";
            cancelOption.classList.add("option-button");
            cancelOption.addEventListener("click", () => handleOption("cancel"));
            buttonsContainer.appendChild(cancelOption);

            chatbox.appendChild(buttonsContainer);
            chatInput.disabled = true;
        }, delayBetweenMessages * (botMessages.length + 1));
    } else {
        chatInput.disabled = false;
    }
});

// Function to handle user selecting options
const handleOption = async (option) => {
    chatInput.disabled = true; // Disable input while processing

    // Simulate bot processing
    await showTypingAnimation();

    if (option === "complain") {
        // User selected complain option
        chatbox.appendChild(createChatLi(`${option}`, "outgoing"));
        // Simulate bot processing
        await showTypingAnimation();
        const complainMessage = "Thanks for reporting a complaint. Please select the complaint type that you would like to report:";
        chatbox.appendChild(createChatLi(complainMessage, "incoming"));

        // Create buttons for each complaint type
        const locations = ["Cleaning", "electrical", "lift/mechanical", "others"];
        for (let i = 0; i < locations.length; i++) {
            setTimeout(() => {
                const locationButton = document.createElement("button");
                locationButton.textContent = locations[i];
                locationButton.classList.add("option-button");
                locationButton.addEventListener("click", () => handleOption(locations[i].toLowerCase()));
                chatbox.appendChild(locationButton);
                // Scroll to the bottom of the chatbox
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 200 * (i + 1));
        }

        chatInput.disabled = true;
    } else if (option === "cancel") {
        // User selected complain option
        chatbox.appendChild(createChatLi(`${option}`, "outgoing"));
        // Simulate bot processing
        await showTypingAnimation();
        const cancelMessage = "You cancelled a report. Thank you.";
        chatbox.appendChild(createChatLi(cancelMessage, "incoming"));
        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    } else {
        // User selected a location option
        const locationMessage = `${option}`;
        chatbox.appendChild(createChatLi(locationMessage, "outgoing"));
        // Simulate bot processing
        await showTypingAnimation();
        if (option === "cleaning", "electrical", "lift/mechanical", "others") {
            const pestControlMessage = "Please describe the complaint in your next message:";
            chatbox.appendChild(createChatLi(pestControlMessage, "incoming"));
            chatInput.disabled = false;
            flag = true;
        }
        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    chatInput.disabled = false; // Enable input after processing
}

// Function to simulate bot typing animation
const showTypingAnimation = async () => {
    // Simulate bot typing animation
    chatbox.appendChild(createChatLi("...", "incoming"));
    await delay(1000); // Simulate typing animation delay
    chatbox.removeChild(chatbox.lastChild); // Remove typing animation
}

