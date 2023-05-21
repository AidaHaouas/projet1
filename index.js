const newQuoteButton = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const authortext = document.getElementById("author");
const tweet_quote = document.getElementById("tweet-quote")
const tumblr_quote = document.getElementById("tumblr-quote")
const fa_quote = document.getElementsByClassName("fa-quote-left")[0]
async function getQuote (){
    
    const response = await (await fetch("http://api.quotable.io/random")).json();
    const { content, author } = response;
    console.log("content is : ", content);
    console.log("author is : ", author);
    
    const color =`rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() * 255)})`;
    document.body.style.backgroundColor = color;
    newQuoteButton.style.background = color;
    quoteText.style.color = color;
    quoteText.style.opacity=0
    authortext.style.opacity=0
    setTimeout(function(){
        quoteText.textContent = content;
        authortext.textContent = author;
        quoteText.style.opacity = 1;
        authortext.style.opacity = 1;
    }, 500);
    
    authortext.style.color = color;
    tweet_quote.style.background = color;
    tumblr_quote.style.background = color;
    fa_quote.style.color = color;
    document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		quoteText
	)}"${encodeURIComponent(" " + authortext)}`;

    
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		authortext
	)}&content=${encodeURIComponent(
		quoteText
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;



}
getQuote();
newQuoteButton.addEventListener("click", getQuote);
