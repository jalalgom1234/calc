// Fonction pour ajouter des chiffres ou opérateurs à l'écran
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fonction pour effacer l'écran
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fonction pour calculer le résultat
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}