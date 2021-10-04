/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 80000,
    
    use: {
        baseURL: 'https://www.teamwork.com/',
        headless: false,
        viewport: { width: 1440, height: 900 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure'
    },
};
  
module.exports = config;