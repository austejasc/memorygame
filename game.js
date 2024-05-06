const emojis = ["🌸","🌸","🐰","🐰","💖","💖","✨","✨","🐹","🐹","⭐","⭐","🐲","🐲","🌷","🌷"];

shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for(i = 0; i < emojis.length; i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

    box.onclick = function() {
        var openBoxes = document.querySelectorAll('.boxOpen');
        if (openBoxes.length < 2) {
            this.classList.add('boxOpen');
            setTimeout(function() {
                var openBoxes = document.querySelectorAll('.boxOpen');
                if (openBoxes.length == 2) {
                    if (openBoxes[0].innerHTML == openBoxes[1].innerHTML) {
                        openBoxes.forEach(function(box) {
                            box.classList.add('boxMatch');
                            box.classList.remove('boxOpen');
                        });
                        if (document.querySelectorAll('.boxMatch').length == emojis.length * 2) {
                            alert('win');
                        }
                    } else {
                        openBoxes.forEach(function(box) {
                            box.classList.remove('boxOpen');
                        });
                    }
                }
            }, 500);
        }
    };
    

    document.querySelector('.game').appendChild(box);
}