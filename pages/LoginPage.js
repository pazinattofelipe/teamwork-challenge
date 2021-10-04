exports.LoginPage = class LoginPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async typeEmailLogin(page, email) {
        await page.fill("#loginemail", email);
    }

    async typePasswordLogin(page, password) {
        await page.fill("#loginpassword", password);
    }

    async submitLogin(page) {
        await page.click("//button[@type='submit']");
    }

    async openTeamworkChat(page) {
        await page.click('//h5[text()="Teamwork Chat"]');
    }

    async openTeamwork(page, currentUrl) {
        await page.click('//h5[text()="Teamwork"]');
    }
}