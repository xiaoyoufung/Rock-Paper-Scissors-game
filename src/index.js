const rule = document.getElementById("rule");
const rulePage = document.getElementById("rule-page");
const closeRulePage = document.getElementById("close-rule");
const closeBtn = document.getElementById('close-btn');
const icon = document.getElementById('icon');
let score = 0;

closeRule(rule);
closeRule(closeRulePage);
closeRule(closeBtn);

// open rule's page

function closeRule(e) {
    e.addEventListener('click', () => {
        if(rulePage.classList.contains('hidden')){
            rulePage.classList.remove('hidden');
        } else {
            rulePage.classList.add('hidden');
        }
    })
}

// icon

const GameOption = [
    {
        icon: "paper",
        color: "PG",
    },
    {
        icon: "scissors",
        color: "SG",
    },
    {
        icon: "rock",
        color: "RG",
    }
]

const showScore = document.getElementById('score');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const rock = document.getElementById('rock');
const selectIcon = document.getElementById('select-icon');
const ourPickedIcon = document.getElementById('our-picked-icon');
const ourPickedIconShadow = document.getElementById('our-picked-icon-shadow');
const ourPickedIconImg = document.getElementById('our-picked-icon-img');
const emptyPick = document.getElementById('pick-empty');
const housePicked = document.getElementById('house-picked');
const housePickedIcon = document.getElementById('house-pick-icon');
const housePickedImg = document.getElementById('house-pick-img');
const housePickedShadow = document.getElementById('house-pick-shadow');
const showResult = document.getElementById('show-result');
const showResultText = document.getElementById('show-result-text');
const ourWinShd = document.getElementById('our-win-shadow');
const houseWinShd = document.getElementById('house-win-shadow');

function clickIcon(icon) {
    icon.addEventListener('click', (e)=> {
        let playerSelect = e.target.closest('button').value;
        startGame(playerSelect)
    })
}

clickIcon(paper);
clickIcon(scissor);
clickIcon(rock);

showScore.textContent = score;

function startGame(select) {
    icon.classList.add('hidden');
    playerSelectIcon(select);
    houseSelectIcon(select);
}

function playerSelectIcon(playerSelect) {

    if(selectIcon.classList.contains('hidden')){
        selectIcon.classList.remove('hidden');
    } else {
        selectIcon.classList.add('hidden');
    }

    ourPickedIconImg.src = "./img/icon-" + GameOption[playerSelect].icon + ".svg";
    ourPickedIcon.classList.add("from-primary-" + GameOption[playerSelect].color + "1");
    ourPickedIcon.classList.add("to-primary-" + GameOption[playerSelect].color + "2");
    ourPickedIconShadow.classList.add("bg-primary-" + GameOption[playerSelect].color + "1");


}

function houseSelectIcon(playerSelect) {

    
    // remove empty option
    setTimeout(() => {
        emptyPick.classList = "hidden";
        housePicked.classList.remove('hidden');
      }, 800)
      
    function generateRandom() {
        let num =  Math.floor(Math.random() * 3);
        return (num == playerSelect) ? generateRandom() : num;
    }

    const ranNum = generateRandom();

    housePickedImg.src = "./img/icon-" + GameOption[ranNum].icon + ".svg";
    housePickedIcon.classList.add("from-primary-" + GameOption[ranNum].color + "1");
    housePickedIcon.classList.add("to-primary-" + GameOption[ranNum].color + "2");
    housePickedShadow.classList.add("bg-primary-" + GameOption[ranNum].color + "1");

    setTimeout(() => {

        if(playerSelect == 0) {
            (ranNum == 1) ? houseWin() : playerWin()
        } else if(playerSelect == 1) {
            (ranNum == 2) ? houseWin() : playerWin()
        } else if(playerSelect == 2){
            (ranNum == 0) ? houseWin() : playerWin()
        } else {
            alert("Select option!")
        }
        
        selectIcon.classList.remove('w-248');
        showResult.classList.remove('hidden');
        showScore.textContent = score;

      }, 2000)

}

function playerWin() {
    score++;
    showResultText.textContent = "You Win";
    ourWinShd.classList.remove('hidden');
}

function houseWin() {
    if(score == 0) {
        score = 0;
    } else {
        score--;
    }
    showResultText.textContent = "You Lose";
    houseWinShd.classList.remove('hidden');
}

function restartGame() {

}