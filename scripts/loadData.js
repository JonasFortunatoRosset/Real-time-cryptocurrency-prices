// Carregar os dados das crytomoedas na home
async function loadData(){
    const data = await fetch('https://api.coincap.io/v2/assets', {method: 'GET', mode: 'cors'});
    const coin_data = await data.json();
    const cards_container = document.getElementById('cards-container');
    for(let i=0;i<coin_data.data;i++){
        const card_data = coin_data.data[i]
        const card_element = document.createElement('div')
        const card = new Coin(card_data.id,card_data.rank,card_data.symbol,card_data.supply,card_data.maxSupply,card_data.marketCapUsd,card_data.volumeUsd24Hr,card_data.priceUsd,card_data.changePercent24Hr,card_data.vwap24Hr,card_data.explorer)
        cards_container.appendChild(card_element)
    }

}

class Coin{
    constructor(id,rank,symbol,supply,maxSupply, marketCapUsd,volumeUsd24Hr,priceUsd,changePercent24Hr,vwap24Hr,explorer){
        this.id = id
        this.rank = rank
        this.symbol = symbol
        this.supply = supply
        this.maxSupply = maxSupply
        this.marketCapUsd = marketCapUsd
        this.volumeUsd24Hr = volumeUsd24Hr
        this.priceUsd = priceUsd
        this.changePercent24Hr = changePercent24Hr
        this.vwap24Hr = vwap24Hr
        this.explorer = explorer
    }
}


export default loadData;