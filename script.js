const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")


function random(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}

soundBtn.addEventListener("click", () => {
    // Web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`) 

    // method to speak the speechsynthesis
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
    swal("Copied!", "Quote has been copied!", "success");
})



quoteBtn.addEventListener("click", random);