// Carregar os dados das crytomoedas na home
async function loadData(url){
    const data = await fetch('https://api.coincap.io/v2/assets', {method: 'GET', mode: 'cors'});
    const coin_data = await data.json();

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    for(const coin of coin_data.data){
        const new_card = new Coin(coin.id,
            coin.rank || 'N/A',
            coin.symbol || 'N/A',
            coin.supply || 0,
            coin.maxSupply || 0,
            coin.marketCapUsd || 0,
            coin.volumeUsd24Hr || 0,
            coin.priceUsd || 0,
            coin.changePercent24Hr || 0,
            coin.vwap24Hr || 0,
            coin.explorer || 'N/A');

        let imageUrl = '../assets/favicon.png';
        try {
            const coin_image = await fetch(`https://api.coingecko.com/api/v3/coins/${new_card.id}`, { method: 'GET', mode: 'cors' });
            const coin_image_converted = await coin_image.json();
            if (coin_image_converted.image && coin_image_converted.image.large) {
                imageUrl = coin_image_converted.image.large; // Atualiza a imagem, se encontrada    
            } else if(coin_image_converted.image.small){
                imageUrl = coin_image_converted.image.small;
            }
        } catch (error) {
            console.log(`Erro ao buscar a imagem da moeda ${new_card.id}: ${error}`);
        }
        const card = document.createElement('div'); // card
        card.className = 'card';
        card.style.backgroundImage = `url('${imageUrl}')`;
        const cryptoNameBg = document.createElement('div');
        cryptoNameBg.className = 'cryptoNameBg';
        const cryptoName = document.createElement('span');
        cryptoName.className = 'cryptoName';
        cryptoName.innerText = `${coin.id}`;
        cryptoNameBg.appendChild(cryptoName);
        card.appendChild(cryptoNameBg);
        card.onclick = () => {
            const modal = document.getElementById('modal');
            modal.style.visibility = 'visible';
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = '';

            const cryptoImage = document.createElement('div');
            cryptoImage.style.backgroundImage = `url('${imageUrl}')`;
            cryptoImage.className = 'crypto-image';

            const id = document.createElement('span');
            id.className = 'crypto-details';
            id.innerText = `Id: ${new_card.id}`;

            const rank = document.createElement('span');
            rank.className = 'crypto-details';
            rank.innerText = `Rank: ${new_card.rank}`;

            const symbol = document.createElement('span');
            symbol.className = 'crypto-details';
            symbol.innerText = `symbol: ${new_card.symbol}`;

            const supply = document.createElement('span');
            supply.className = 'crypto-details';
            supply.innerText = `supply: ${new_card.supply}`;

            const maxSupply = document.createElement('span');
            maxSupply.className = 'crypto-details';
            maxSupply.innerText = `maxSupply: ${new_card.maxSupply}`;
            
            const marketCapUsd = document.createElement('span');
            marketCapUsd.className = 'crypto-details';
            marketCapUsd.innerText = `marketCapUsd: ${new_card.marketCapUsd}`;
            
            const volumeUsd24Hr = document.createElement('span');
            volumeUsd24Hr.className = 'crypto-details';
            volumeUsd24Hr.innerText = `volumeUsd24Hr: ${new_card.volumeUsd24Hr}`;
            
            const priceUsd = document.createElement('span');
            priceUsd.className = 'crypto-details';
            priceUsd.innerText = `priceUsd: ${new_card.priceUsd}`;
            
            const changePercent24Hr = document.createElement('span');
            changePercent24Hr.className = 'crypto-details';
            changePercent24Hr.innerText = `changePercent24Hr: ${new_card.changePercent24Hr}`;
            
            const vwap24Hr = document.createElement('span');
            vwap24Hr.className = 'crypto-details';
            vwap24Hr.innerText = `vwap24Hr: ${new_card.vwap24Hr}`;
            
            const explorer = document.createElement('span');
            explorer.className = 'crypto-details';
            explorer.innerText = `explorer: ${new_card.explorer}`;


            modalContent.appendChild(cryptoImage);
            modalContent.appendChild(id);
            modalContent.appendChild(rank);
            modalContent.appendChild(symbol);
            modalContent.appendChild(supply);
            modalContent.appendChild(maxSupply);
            modalContent.appendChild(marketCapUsd);
            modalContent.appendChild(volumeUsd24Hr);
            modalContent.appendChild(priceUsd);
            modalContent.appendChild(changePercent24Hr);
            modalContent.appendChild(vwap24Hr);
            modalContent.appendChild(explorer);
        }
        mainContent.appendChild(card);
    }
}

class Coin{
    constructor(id,rank,symbol,supply,maxSupply, marketCapUsd,volumeUsd24Hr,priceUsd,changePercent24Hr,vwap24Hr,explorer){
        this.id = id;
        this.rank = rank;
        this.symbol = symbol;
        this.supply = supply;
        this.maxSupply = maxSupply;
        this.marketCapUsd = marketCapUsd;
        this.volumeUsd24Hr = volumeUsd24Hr;
        this.priceUsd = priceUsd;
        this.changePercent24Hr = changePercent24Hr;
        this.vwap24Hr = vwap24Hr;
        this.explorer = explorer;
    }
}


export default loadData;