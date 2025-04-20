import { JeopardyButton, jeopardyData } from './Jeopordy.mjs';

const categories = Object.keys(jeopardyData);

categories.forEach(category => {
    const h2 = document.createElement("h2");
    h2.classList.add("cell");
    h2.textContent = category;
    document.getElementById("header").appendChild(h2);
});

categories.forEach((category) => {
    Array.from({length: 5}, (_, i) => (i + 1) * 100).forEach(num => {
        const button = new JeopardyButton(num, category);
        button.cellCreator(board);
    })
});

function closeQuestion() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


document.getElementById("overlay").addEventListener("click", closeQuestion);

async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;

    // Replace with your Hugging Face Space name
    const space = "none-yet/Xylaria";
    const endpoint = `https://huggingface.co/${space}/api/predict`;

    // This matches the `/streaming_response_1` API
    const body = {
        fn_index: 6,  // `fn_index` changes based on the function index in the app
        data: [
            userMessage,
            [["Hello!", null]], // example chat history
            null, // placeholder for image 1
            null  // placeholder for image 2
        ]
    };

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    document.getElementById("responseOutput").textContent = JSON.stringify(result.data, null, 2);
}

document.getElementById("sendIT").addEventListener("click", sendMessage);
