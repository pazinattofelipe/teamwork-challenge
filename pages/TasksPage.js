exports.TasksPage = class TasksPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
    }
    
    async createTaskList(page, taskListName, taskName) {
        await page.click('//*[contains(text(),"Add Task List")]');
        await page.fill('//input[@name="listName"]', taskListName);
        await page.click('//button[@class="btn btn-primary ml--auto mr--none w-loader w-loader--expand w-loader--expand-right"]');

        await page.waitForTimeout(4000)

        await page.click('div.tlOpts.noSelT.no-print.w-task-row__blankState--button > button');
        await page.click('(//a[contains(text(),"Today")])[1]');
        await page.fill('//input[@class="w-task-input__input"]', taskName);
        await page.click('//button[text()="Save Changes"]');
    }
}