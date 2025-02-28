// Carregar os dados das crytomoedas na home
async function loadData(){
    const data = await fetch('https://api.coincap.io/v2/assets', {method: 'GET', mode: 'cors'});
    const coin_data = await data.json();
    const main_content = document.getElementById('main-content');
    
    for(const coin of coin_data.data){
        const card_data = coin;
        const card = new Coin(card_data.id,card_data.rank,card_data.symbol,card_data.supply,card_data.maxSupply,card_data.marketCapUsd,card_data.volumeUsd24Hr,card_data.priceUsd,card_data.changePercent24Hr,card_data.vwap24Hr,card_data.explorer);
        const card_element = document.createElement('div'); // card
        card_element.className = 'card_element';
        const cryptoNameBg = document.createElement('div');
        cryptoNameBg.className = 'cryptoNameBg';
        const cryptoName = document.createElement('span');
        cryptoName.className = 'cryptoName';
        cryptoName.innerText = `${coin.id}`;
        cryptoNameBg.appendChild(cryptoName);
        card_element.appendChild(cryptoNameBg);
        card_element.onclick = () => {
            const modal = document.getElementById('modal');
            modal.style.visibility = 'visible';
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = '';

            const cryptoImage = document.createElement('div');
            cryptoImage.style.backgroundImage = `url('https://api.coingecko.com/api/v3/coins/${coin.id}')`;
            cryptoImage.className = 'crypto-image';

            const id = document.createElement('span');
            id.className = 'crypto-details';
            id.innerText = `Id: ${coin.id}`;

            const rank = document.createElement('span');
            rank.className = 'crypto-details';
            rank.innerText = `Rank: ${coin.rank}`;

            const symbol = document.createElement('span');
            symbol.className = 'crypto-details';
            symbol.innerText = `symbol: ${coin.symbol}`;

            const supply = document.createElement('span');
            supply.className = 'crypto-details';
            supply.innerText = `supply: ${coin.supply}`;

            const maxSupply = document.createElement('span');
            maxSupply.className = 'crypto-details';
            maxSupply.innerText = `maxSupply: ${coin.maxSupply}`;
            
            const marketCapUsd = document.createElement('span');
            marketCapUsd.className = 'crypto-details';
            marketCapUsd.innerText = `marketCapUsd: ${coin.marketCapUsd}`;
            
            const volumeUsd24Hr = document.createElement('span');
            volumeUsd24Hr.className = 'crypto-details';
            volumeUsd24Hr.innerText = `volumeUsd24Hr: ${coin.volumeUsd24Hr}`;
            
            const priceUsd = document.createElement('span');
            priceUsd.className = 'crypto-details';
            priceUsd.innerText = `priceUsd: ${coin.priceUsd}`;
            
            const changePercent24Hr = document.createElement('span');
            changePercent24Hr.className = 'crypto-details';
            changePercent24Hr.innerText = `changePercent24Hr: ${coin.changePercent24Hr}`;
            
            const vwap24Hr = document.createElement('span');
            vwap24Hr.className = 'crypto-details';
            vwap24Hr.innerText = `vwap24Hr: ${coin.vwap24Hr}`;
            
            const explorer = document.createElement('span');
            explorer.className = 'crypto-details';
            explorer.innerText = `explorer: ${coin.explorer}`;


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