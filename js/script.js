window.addEventListener('scroll',function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;

    parallax.style.transform = 'transalteY(' + scrollPosition *0.1 + 'px)';
    console.log(scrollPosition);
});
const word = "Web Developer";
let timer;

function typingEffect() {
    let summary = word.split('');
    var loopTyping = function () {
        if (summary.length > 0) {
            document.getElementById('summary').innerHTML += summary.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
};


function deletingEffect(){
    let summary = word.split('');
    var loopDeleting = function () {
        if (summary.length > 0) {
            summary.pop()
            document.getElementById('summary').innerHTML = summary.join("");
        } else {
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};
typingEffect();
