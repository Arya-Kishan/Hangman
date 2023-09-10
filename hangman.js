let letterbox = document.querySelector(".letterbox");
let dash = document.querySelector(".dash")
const optionbutton = document.querySelectorAll(".option-button")
const newgame = document.getElementById("newgame");
const section4 = document.querySelector(".section4");
section4.classList.add("hide");
const section4middle = document.getElementById("section4middle");
const section4top = document.getElementById
    ("section4top");
const start = document.querySelector(".start");
const canvas = document.getElementById("canvas");
const smile = document.getElementById("smile");
const sad = document.getElementById("sad");

let object = {
    fruits: ["APPLE", "MANGO", "GUAVA", "POMOGRENATE"],
    animals: ["TIGER", "LION", "LEOPARD", "PANTHER"],
    country: ["SRIKANT", "PRIYASHEEL", "KARUNA", "NIDHI", "MURALI", "PUNIT", "UJJWAL", "ANAND", "ADITYA", "BHASKAR", "HARSHIT", "KHUSHI", "SHREYANSH", "RUDRANSH"]
}

const initial = () => {


    optionbutton.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (e.target.innerText == "ANIMALS") {
                let a = object.animals;
                generateword(a);
            }
            else if (e.target.innerText == "FRUITS") {
                a = object.fruits;
                generateword(a);
            }
            else {
                a = object.country;
                generateword(a);
            }
            e.target.className = "active";
            optionbutton.forEach((a) => {
                a.disabled = true;
            })
        })
    })



    const generateword = (a) => {

        let arr = a;
        let chooseword = arr[Math.floor(Math.random
            () * arr.length)]

        let split = chooseword.split("");
        split.forEach(element => {
            let div = document.createElement('div');
            div.innerText = element;
            div.classList = "overflow-hidden";
            dash.append(div)
        });


        for (i = 65; i < 91; i++) {
            let button = document.createElement
                ('button');
            button.className = "letterbutton";
            button.innerText = String.fromCharCode
                (i);
            letterbox.append(button);
            button.addEventListener("click", (e) => {
                check(e.target.innerText, chooseword);
                e.target.disabled = true;
            })
        }


    }

    let losecount = 0;
    let wincount = 0;
    const check = (buttoninnertext, choosenword) => {


        if (choosenword.includes(buttoninnertext)) {
            let letterbtn = document.querySelectorAll(".overflow-hidden");
            letterbtn.forEach((e) => {
                if (e.innerText == buttoninnertext) {
                    e.className = "overflow-visible";
                    wincount++;
                    end(losecount, choosenword, wincount);
                }
            })
        }
        else {
            losecount++;
            hangman(losecount);
            end(losecount, choosenword, wincount);

        }
    }

    const abcd = () => {

        let canvas = document.getElementById
            ("canvas");
        let cxt = canvas.getContext("2d");
        cxt.styleStroke = "black";
        cxt.lineWidth = 2;
        let drawline = (fromX, fromY, toX,
            toY) => {
            cxt.moveTo(fromX, fromY);
            cxt.lineTo(toX, toY);
            cxt.stroke();
        }
        drawline(10, 130, 150, 130)
        drawline(10, 130, 10, 20)
        drawline(10, 20, 80, 20)
        drawline(80, 20, 80, 55)
    }
    abcd();





    function hangman(losecount) {
        hangman_main(losecount);
        function canvas() {
            let canvas = document.getElementById
                ("canvas");
            let cxt = canvas.getContext("2d");
            cxt.styleStroke = "black";
            cxt.lineWidth = 2;
            let drawline = (fromX, fromY, toX,
                toY) => {
                cxt.moveTo(fromX, fromY);
                cxt.lineTo(toX, toY);
                cxt.stroke();
            }
            let head = () => {
                cxt.beginPath();
                cxt.arc(80, 60, 5, 0, 2 * Math.
                    PI);
                cxt.stroke();
            }
            let body = () => {
                drawline(80, 65, 80, 100)
            }
            let rightarm = () => {
                drawline(80, 70, 90, 80)
            }
            let leftarm = () => {
                drawline(80, 70, 70, 80)
            }
            let rightleg = () => {
                drawline(80, 100, 90, 110)
            }
            let leftleg = () => {
                drawline(80, 100, 70, 110)
            }
            return {
                head, body, rightarm,
                leftarm, rightleg, leftleg
            }
        }
        function hangman_main(count) {
            let { head, body, rightarm, leftarm,
                rightleg, leftleg } = canvas();
            switch (count) {
                case 1:
                    head();
                    break;
                case 2:
                    body();
                    break;
                case 3:
                    rightarm();
                    break;
                case 4:
                    leftarm();
                    break;
                case 5:
                    rightleg();
                    break;
                case 6:
                    leftleg();
                    break;
                default:
                    break;
            }
        }
    }


}
initial();


















let section = document.querySelector(".container");
section.className = "container hide";

const begin = () => {

    let button = document.getElementById("btn2");
    button.addEventListener("click", () => {
        section.className = "container show";
        start.className = "hide";

    })
}
begin();





const end = (losecount, choosenword, wincount) => {

    console.log(choosenword)
    console.log("LOSECOUNT : " + losecount + "  WINCOUNT : " + wincount + " WORD-LENGTH : " + choosenword.length)
    if (losecount == 6) {
        smile.className = "hide";
        canvas.className = "zoom";
        canvas.style.backgroundColor = "red";
        canvas.style.borderWidth = "6px";
        setTimeout(() => {
            section.className = "container hide";
            section4.className = "show section4";
            section4top.innerText = `YOU LOSE THE GAME`;
            section4middle.innerText = `THE WORD WAS " ${choosenword} "`;
            newgame.addEventListener("click", () => {
                location.reload();
            })
        }, 500);

    }

    if (wincount == choosenword.length) {
        sad.className = "hide";
        setTimeout(() => {
            section.className = "container hide";
            section4.className = "show section4";

            section4top.innerText = `YOU WIN THE GAME`;
            section4middle.innerText = `THE WORD WAS " ${choosenword} "`;
            newgame.addEventListener("click", () => {
                location.reload();
            })
        }, 500);
    }
}


