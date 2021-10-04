exports.MyWorkPage = class MyWorkPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    async clickUserProfile(page) {
        await page.click('//span[@class="s-header-user__avatar"]');
    }

    async checkUserLogged(page) {
        return await page.textContent('//span[contains(@class, "w-header-user__user-name")]');
    }

    async openMyProjects(page) {
        await page.click('//span[text()="My Projects"]');
    }
}