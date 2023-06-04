const rule = document.getElementById("rule");
const rulePage = document.getElementById("rule-page");
const closeRulePage = document.getElementById("close-rule");
const closeBtn = document.getElementById('close-btn');
const icon = document.getElementById('icon');

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

const gameOption = [
    {
        icon: "paper",
        color: "from-primary-PG1 to-primary-PG2",
        shadow: "PG1"
    },
    {
        icon: "scissors",
        color: "from-primary-SG1 to-primary-SG2",
        shadow: "SG1"
    },
    {
        icon: "rock",
        color: "from-primary-RG1 to-primary-RG2",
        shadow: "RG1"
    }
]

const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const rock = document.getElementById('rock');

function clickIcon(icon) {
    icon.addEventListener('click', ()=> {
        startGame()
    })
}

clickIcon(paper);
clickIcon(scissor);
clickIcon(rock);

function startGame() {
    icon.classList.add('hidden');
}