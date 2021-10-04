import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MyWorkPage } from '../pages/MyWorkPage';
import { ChatPage } from '../pages/ChatPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { TasksPage } from '../pages/TasksPage';

import * as faker from 'faker';

test.describe('Features', () => {
    let page: Page;
    let loginPage: LoginPage;
    let homePage: HomePage;
    let myWorkPage: MyWorkPage;
    let chatPage: ChatPage;
    let projectsPage: ProjectsPage;
    let tasksPage: TasksPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        myWorkPage = new MyWorkPage(page);
        chatPage = new ChatPage(page);
        projectsPage = new ProjectsPage(page);
        tasksPage = new TasksPage(page);

        await homePage.openHomePage(page);
        await homePage.openLoginPage(page);
        await loginPage.typeEmailLogin(page, 'aleen.lemke@gmail.com');
        await loginPage.typePasswordLogin(page, '123456AB');
        await loginPage.submitLogin(page);
    });

    test('Validate login successful', async () => {
        await loginPage.openTeamwork(page, page.url());
        await myWorkPage.clickUserProfile(page);

        expect(await myWorkPage.checkUserLogged(page)).toBe('Aleen Lemke')
    });

    test('Invite standard users to chat application', async () => {
        await loginPage.openTeamworkChat(page);

        let inviteEmailExpected = faker.internet.email();
        let hasUserBeenAdded = await chatPage.inviteChatUser(page, inviteEmailExpected);

        expect(hasUserBeenAdded).toBeTruthy();
    });

    test('Create new project with Task List and Task', async () => {
        await loginPage.openTeamwork(page);
        await myWorkPage.openMyProjects(page);

        let inviteEmailExpected = faker.company.companyName();
        await projectsPage.createNewProject(page, inviteEmailExpected);

        let taskListName = faker.lorem.words(2);
        let taskName = faker.lorem.words(3);
        await tasksPage.createTaskList(page, taskListName, taskName);
    });

    test.afterEach(async () => {
        page.close();
    });
});