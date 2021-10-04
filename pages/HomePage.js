exports.HomePage = class HomePage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    async openHomePage(page) {
        await page.goto('./');
    }

    async openLoginPage(page) {
        await page.click('//a[text()="Log in"]');
    }
}