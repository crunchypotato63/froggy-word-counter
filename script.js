//todo:
//recolor froggy to fix fade 
//celebratory froggy message + again/back
//live word count
//hovering froggy + message (still gonna think abt this)
//toggles for live word count, froggy fade, hovering
//save/copy to clipboard option

$(document).ready(()=> {
    $("#submit").on('click', () => {
        var goal = $("#answer").val();
        let message = document.getElementById("prompt");
        
        message.innerHTML = "Got it! *ribbit* <br> Let's do this!";
        message.style.right = "11%";
        message.style.bottom = "65%";

        let textbox = document.getElementById("answer");
        textbox.remove();

        let confirm = document.createElement("button");
        confirm.setAttribute("id", "confirm");
        confirm.innerHTML = ("Yeah!");

        let cancel = document.createElement("button");
        cancel.setAttribute("id", "cancel");
        cancel.innerHTML = ("Cancel");

        let submit = document.getElementById("submit");

        submit.parentNode.insertBefore(confirm, submit.nextSibling);
        confirm.parentNode.insertBefore(cancel, confirm.nextSibling);

        submit.remove();

        confirm.style.position = "fixed";
        confirm.style.right = "21%";
        confirm.style.bottom = "60%";

        cancel.style.position = "fixed";
        cancel.style.right = "11%";
        cancel.style.bottom = "60%";

        cancel.onclick = function(){
            
            message.innerHTML = "hello! *ribbit* <br> how many words <br> do you need to write? <br> *ribbit*";
            message.style.right = "8%";
            message.style.bottom = "57%";

            cancel.remove();
            confirm.remove();

            message.parentNode.insertBefore(textbox, message.nextSibling);
            textbox.parentNode.insertBefore(submit, textbox.nextSibling);
        }

        confirm.onclick = function(){

            var subBubble = document.getElementsByClassName("bubble");
            for(var i in subBubble){
                if(subBubble.hasOwnProperty(i)){
                    subBubble[i].className = 'no-bubble';
                }
            }

            document.getElementById("frog_pic").src="img/phrog_0.png";

            document.querySelector("#frog_words").addEventListener("input", function countWord(){
                let res = [];
                let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
                str.map((s) => {
                    let trimStr = s.trim();
                        if (trimStr.length > 0) {
                            res.push(trimStr);
                        }
                });

                if(res.length >= goal){
                    document.getElementById("frog_pic").src="img/king_phrog.png";
                }
                else if(res.length >= goal*0.75 && res.length < goal){
                    document.getElementById("frog_pic").src="img/phrog_75.png";
                }
                else if(res.length >= goal*0.5 && res.length < goal*0.75){
                    document.getElementById("frog_pic").src="img/phrog_50.png";
                }
                else if(res.length >= goal*0.25 && res.length < goal*0.5){
                    document.getElementById("frog_pic").src="img/phrog_25.png";
                }
                   
                
            });
        }
    });
});