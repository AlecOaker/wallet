export default class BinService {
    async getData(cardNumber) {
        let response = await fetch(
            `https://lookup.binlist.net/${cardNumber.replace(/ /g, "")}`
        );
        if (response.ok) {
            let data = await response.json();
            return data;
        }
    }
    getBin(cardNumber) {
        return this.getData(
            `https://lookup.binlist.net/${cardNumber.replace(/ /g, "")}`
        );
    }
}

const updateBin = (cardNumber, setBank, setScheme, setType, setLuhn) => {
    const binService = new BinService();
    binService
        .getBin(cardNumber)
        .then((response) => setBank(response.bank.name));
    binService
        .getBin(cardNumber)
        .then((response) => setScheme(response.scheme));
    binService.getBin(cardNumber).then((response) => setType(response.type));
    binService
        .getBin(cardNumber)
        .then((response) => setLuhn(response.number.luhn));
};

export { updateBin };
