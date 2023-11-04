const hands = document.querySelectorAll('.hand');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');

let isClickable = true;

hands.forEach(hand => {
    hand.addEventListener('click', () => {
        if (!isClickable) {
            return;
        }
        isClickable = false;

        const userChoice = hand.id;
        const pcChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

        result.textContent = 'Wait...';
        result.style.color = '#212529'

        userResult.src = `images/user-rock.png`;
        cpuResult.src = `images/pc-rock.png`;

        userResult.classList.add('move-animation1');
        cpuResult.classList.add('move-animation2');

        setTimeout(() => {
            userResult.src = `images/user-${userChoice}.png`;
            cpuResult.src = `images/pc-${pcChoice}.png`;

            userResult.classList.remove('move-animation1');
            cpuResult.classList.remove('move-animation2');

            setTimeout(() => {
                const outcome = getResult(userChoice, pcChoice);
                result.textContent = outcome;
                if (outcome === 'Draw!') {
                    result.style.color = '#7D7C7C';
                } else if (outcome === 'You lose!') {
                    result.style.color = '#ed2b2a'; 
                } else if (outcome === 'You win!') {
                    result.style.color = '#3CCF4E'; 
                }
                isClickable = true;
            }, 0);
        }, 2000);
    });
});

function getResult(user, pc) {
    if (user === pc) {
        return 'Draw!';
    } else if (
        (user === 'rock' && pc === 'scissors') ||
        (user === 'paper' && pc === 'rock') ||
        (user === 'scissors' && pc === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
