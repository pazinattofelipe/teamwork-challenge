exports.ChatPage = class ChatPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    async inviteChatUser(page, emailInviteChat) {
        await page.click('//button[contains(@class, "s-unified-header__button--add-new")]');
        await page.click('//*[contains(text(),"Invite users")]');
        
        await page.fill('//input[@autocomplete="new-password"]', emailInviteChat);
        await page.click('//button[contains(text(),"Invite")]');
        await page.click('//span[contains(text(), "' + emailInviteChat + '")]')

        return await page.isVisible('//span[contains(text(), "' + emailInviteChat + '")]');
    }
}