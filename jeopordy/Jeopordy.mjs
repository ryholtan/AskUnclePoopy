export class JeopardyButton {
    constructor(value, category=null) {
        this.value = value;
        this.category = category;
        this.question = jeopardyData[category][value].question;
        this.answer = jeopardyData[category][value].answer;
    }

    showQuestion() {
        if (this.category in jeopardyData) {
            document.getElementById("question-text").textContent = this.question;
        } else {
            document.getElementById("question-text").textContent = "This is a demo of the question/answer system.";
        }
        document.getElementById("overlay").style.display = "block";
        document.getElementById("question-box").style.display = "block";
        document.getElementById("question-box").style.cursor = "pointer";

        const showAnswer = () => {
            document.getElementById("question-box").style.cursor = "auto";
            if (this.category in jeopardyData) {
                document.getElementById("question-text").textContent = this.answer;
                document.getElementById("question-image").style.display = "block";
            } 
        };

        document.querySelector(".question-box").addEventListener("click", showAnswer);
        document.getElementById("question-image").style.display = "none";
    }

    cellCreator(target) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.value;
        cell.onclick = () => this.showQuestion();
        target.appendChild(cell);
    } 

}

// export const jeopardyData = {
//     "History": {
//         100: { question: "Who was Joseph Smith, Jr.?", answer: "The founder of the LDS Church" },
//         200: { question: "Where and when was the LDS Church officially organized?", answer: "In Fayette, New York, on April 6, 1830" },
//         300: { question: "What significant event occurred in 1844 that led to the exodus of Latter-day Saints to the West?", answer: "The martyrdom of Joseph Smith" },
//         400: { question: "Who was Brigham Young and what was his role in the Mormon migration to Utah?", answer: "Brigham Young was the second president of the LDS Church and led the Mormon pioneers to Utah" },
//         500: { question: "What was the 'Manifesto' of 1890 and how did it impact the practice of polygamy in the LDS Church?", answer: "The Manifesto was a declaration by Wilford Woodruff, then-president of the LDS Church, that ended the public practice of polygamy in the United States" }
//     },
//     "Beliefs": {
//         100: { question: "What are the four fundamental principles of the LDS Church?", answer: "Faith in the Lord Jesus Christ, Repentance, Baptism, and the Gift of the Holy Ghost" },
//         200: { question: "What is the Mormon belief regarding the nature of God?", answer: "That God the Father, Jesus Christ, and the Holy Ghost are three separate beings, united in purpose" },
//         300: { question: "What is the Mormon belief regarding the pre-existence and the purpose of life?", answer: "That we are eternal beings who existed as spirits before this life and that the purpose of life is to gain a body, learn, grow, and return to our heavenly home" },
//         400: { question: "What is the Mormon belief regarding the afterlife and the plan of salvation?", answer: "That there is a life after death, where spirits await resurrection and judgment, and that the plan of salvation includes the opportunity for all to receive the gospel and be saved" },
//         500: { question: "What is the Mormon belief regarding the Book of Mormon and its role in the restoration of the gospel?", answer: "That the Book of Mormon is another testament of Jesus Christ, written by ancient prophets and translated by Joseph Smith, and that it serves as a companion to the Bible in testifying of the divinity of Christ" }
//     },
//     "Practices": {
//         100: { question: "What is the Sacrament Meeting and what happens during it?", answer: "The Sacrament Meeting is a weekly worship service where members partake of the sacrament (bread and water) in remembrance of Christ's atonement" },
//         200: { question: "What are the responsibilities of a bishop in the LDS Church?", answer: "A bishop oversees the spiritual and temporal needs of the members in his ward, administers the sacrament, performs baptisms, and provides for the poor and needy" },
//         300: { question: "What is the temple and what are the ordinances performed there?", answer: "The temple is a sacred building where Latter-day Saints perform ordinances such as baptisms for the dead, endowments, and sealings, which bind families together for eternity" },
//         400: { question: "What is the Word of Wisdom and what does it prohibit?", answer: "The Word of Wisdom is a health code that prohibits the consumption of tobacco, alcohol, coffee, and tea" },
//         500: { question: "What is the Mormon practice of family history and genealogy, and why is it important?", answer: "Mormons engage in family history and genealogy work to identify their ancestors, perform ordinances for them in temples, and connect with their eternal family" }
//     }
// };

export const jeopardyData = {
    "Writing a Paper": {
        100: { question: "What is the first step in writing a paper?", answer: "Brainstorming and outlining ideas." },
        200: { question: "What is a thesis statement?", answer: "A sentence that summarizes the main point of a paper." },
        300: { question: "How can you avoid plagiarism?", answer: "Cite sources properly using MLA, APA, or Chicago style." },
        400: { question: "What is a peer-reviewed source?", answer: "An article reviewed by experts before publication." },
        500: { question: "What tool can help with grammar and clarity?", answer: "Grammarly or Purdue OWL." }
    },
    // "Making a Picture": {
    //     100: { question: "What free tool can be used for graphic design?", answer: "Canva or GIMP." },
    //     200: { question: "What is resolution in an image?", answer: "The number of pixels per inch (PPI)." },
    //     300: { question: "What is the difference between JPG and PNG?", answer: "PNG supports transparency, JPG is smaller in file size." },
    //     400: { question: "What is vector vs raster graphics?", answer: "Vector graphics scale infinitely, raster graphics do not." },
    //     500: { question: "What is a color palette and why is it important?", answer: "A set of colors used for consistency and aesthetic appeal." }
    // },
    "Friends & Activities": {
        100: { question: "What is the easiest way to meet people in college?", answer: "Join a club or attend campus events." },
        200: { question: "What app can help organize events with friends?", answer: "Google Calendar or GroupMe." },
        300: { question: "What are intramural sports?", answer: "Recreational sports leagues for students." },
        400: { question: "What is a great way to network?", answer: "Attend career fairs and talk to professors." },
        500: { question: "How can you stay safe at social events?", answer: "Go with friends, watch your drink, and have a way home." }
    },
    "Shopping & Cooking": {
        100: { question: "What is a budget-friendly grocery store?", answer: "Aldi or Walmart." },
        200: { question: "What is meal prepping?", answer: "Cooking meals in advance to save time and money." },
        300: { question: "How can you store produce longer?", answer: "Keep veggies in the crisper and freeze excess food." },
        400: { question: "What is the easiest meal for a college student?", answer: "Pasta with canned sauce or a rice bowl." },
        500: { question: "What is a cheap protein source?", answer: "Beans, eggs, and peanut butter." }
    },
    "Dating & Staying Safe": {
        100: { question: "What is a red flag in dating?", answer: "Controlling behavior or lack of respect for boundaries." },
        200: { question: "What is the safest way to meet someone online?", answer: "Meet in a public place and tell a friend where you are." },
        300: { question: "What should you do if someone makes you uncomfortable?", answer: "Trust your instincts and leave the situation." },
        400: { question: "What app can help with safety on a date?", answer: "Noonlight or sharing location with a friend." },
        500: { question: "What is consent in a relationship?", answer: "Freely given, enthusiastic, and reversible agreement." }
    },
    "Studying Tips": {
        100: { question: "What is the Pomodoro Technique?", answer: "Studying in 25-minute blocks with short breaks." },
        200: { question: "How can you improve focus while studying?", answer: "Turn off notifications and find a quiet space." },
        300: { question: "What is active recall?", answer: "Testing yourself rather than just rereading notes." },
        400: { question: "How much sleep should a student get?", answer: "7-9 hours per night for optimal brain function." },
        500: { question: "What is a good tool for flashcards?", answer: "Anki or Quizlet." }
    },
    // "Scam Advice": {
    //     100: { question: "What is phishing?", answer: "A scam where someone tries to steal personal info via email or messages." },
    //     200: { question: "What is the safest way to buy used textbooks?", answer: "Through reputable sites like Chegg or Amazon." },
    //     300: { question: "How can you tell if a job offer is a scam?", answer: "If it asks for upfront payment or personal info right away." },
    //     400: { question: "What is a common online scam?", answer: "Fake rental listings or tech support scams." },
    //     500: { question: "How can you protect your personal information online?", answer: "Use strong passwords and enable two-factor authentication." }
    // },
    "Registering for Classes": {
        100: { question: "When should you register for classes?", answer: "As soon as registration opens to get the best schedule." },
        200: { question: "What is a prerequisite?", answer: "A class you must take before enrolling in another course." },
        300: { question: "How can you find easy electives?", answer: "Check RateMyProfessors or ask upperclassmen." },
        400: { question: "What is the best way to balance a schedule?", answer: "Mix hard and easy classes to avoid burnout." },
        500: { question: "What is waitlisting a class?", answer: "Signing up in case a spot opens later." }
        }
//          ,
//     "Phrases to Understand in Your Area": {
//         100: { question: "What is ‘syllabus week’?", answer: "The first week of class where professors go over expectations." },
//         200: { question: "What does ‘pulling an all-nighter’ mean?", answer: "Staying up all night to study or finish assignments." },
//         300: { question: "What does ‘TA’ stand for?", answer: "Teaching Assistant – a student who helps with a class." },
//         400: { question: "What is a ‘study group’?", answer: "A group of students who study together for exams." },
//         500: { question: "What does ‘gen ed’ mean?", answer: "General education courses required for all students." }
//     },
//     "Religion Information": {
//         100: { question: "What is an interfaith group on campus?", answer: "A club where students from different religions meet and discuss beliefs." },
//         200: { question: "Where can you find a place of worship?", answer: "Check student services or local directories." },
//         300: { question: "How can you practice your faith in college?", answer: "Join campus religious groups or attend services nearby." },
//         400: { question: "What is a faith-based scholarship?", answer: "A scholarship given based on religious involvement or values." },
//         500: { question: "How can you learn about other religions?", answer: "Take a world religions class or attend interfaith events." }
//     },
//     "Website & Internet Information": {
//         100: { question: "What is a secure website?", answer: "A site that uses HTTPS encryption." },
//         200: { question: "What is a VPN and why use one?", answer: "A Virtual Private Network encrypts internet traffic for security." },
//         300: { question: "How can you tell if an email is a scam?", answer: "Check for misspellings, urgent language, and suspicious links." },
//         400: { question: "What is a good way to manage passwords?", answer: "Use a password manager like Bitwarden or LastPass." },
//         500: { question: "What is phishing and how can you avoid it?", answer: "A scam trying to steal personal data; avoid clicking unknown links." }
//     }
};


