import loadData from './loadData.js';
let currentPageUrl = 'https://api.coincap.io/v2/assets';

function hideModal() {
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}

window.onload = async () => {
    modal.addEventListener('click', (event) => {
        // Verifica se o clique foi fora da área do modal
        if (event.target === modal) {
            hideModal();
        }
    });
    loadData(currentPageUrl);
}
