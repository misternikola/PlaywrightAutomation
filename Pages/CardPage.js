exports.CardPage = class CardPage {

    constructor(page){
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCard(productName){
        const productsincards = await this.page.$$(this.noOfProducts);
        for (const product of productsincards) {
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }
}