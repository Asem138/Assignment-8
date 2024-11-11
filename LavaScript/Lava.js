var quotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
    { text: "Little things make big days.", author: "Isabel Marant" },
    { text: "Don`t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you want to fly, give up everything that weighs you down.", author: "Buddha" },
    { text: "If it doesn`t challenge you, it won`t change you.", author: "Fred DeVito" },
    { text: "Great things never come from comfort zones.", author: "Roy T. Bennett" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "A little progress each day adds up to big results.", author: "Satya Nani" },
    { text: "Don`t quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Believe you can and you`re halfway there.", author: "Theodore Roosevelt" },
    { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Opportunities don`t happen. You create them.", author: "Chris Grosser" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Hard work beats talent when talent doesn`t work hard.", author: "Tim Notke" }
];

function addCard() {
    var prev;

    do {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (prev == randomQuote);


    document.getElementById("addQ").innerHTML = `<p class="p-3 h6">${randomQuote.text}</p>`;
    document.getElementById("addA").innerHTML = `<p class="p-3 h6">${randomQuote.author}</p>`;

    prev = randomQuote;
}