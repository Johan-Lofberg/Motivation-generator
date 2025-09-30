
async function fetchAdvice() {
    
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;

    document.querySelector('.advice-id').textContent = `ADVICE #${adviceId}`;
    document.querySelector('.advice-text').textContent = `"${adviceText}"`;
}

fetchAdvice();

document.querySelector('.dice-btn').addEventListener('click', fetchAdvice);
