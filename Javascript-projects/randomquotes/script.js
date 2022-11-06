
function generate() {
    var quotes = {
        "-Maya Angelou": '"The truth is, no one of us can be free until everybody is free "',
        "-Denis Diderot": '"Man will never be free until the last king is strangled with the entrails of the last priest."',
        "-Bob Dylan": 'No one is free, even the birds are chained to the sky."'
    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}