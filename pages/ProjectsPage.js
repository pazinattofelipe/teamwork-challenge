exports.ProjectsPage = class ProjectsPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
    }
    
    async createNewProject(page, projectName) {
        const confirmButton = '//*[contains(text(),"Next step")]';
        
        await page.click('//button[text()="Add Project"]');
        await page.click(confirmButton);
        await page.fill('//input[@placeholder="Give your project a name"]', projectName);
        await page.click(confirmButton);
        await page.click(confirmButton);
        await page.click('//*[contains(text(),"Create Project")]');
        await page.click('//h4[text()="Project Added"]');
    }
}