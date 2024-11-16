let saldo = 0;

function redeemCode() {
    const input = document.getElementById('codeInput').value.trim();
    const message = document.getElementById('message');
    
    if (input === "ANTE69") {
        saldo += 10000;
        message.textContent = `Kod zaakceptowany! Dodano 10 000 robuxów. Twoje saldo: ${saldo} robuxów.`;
        message.className = "message success";
    } else {
        message.textContent = "Nieprawidłowy kod. Spróbuj ponownie.";
        message.className = "message error";
    }
}
