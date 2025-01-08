const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');

    const button = await page.$('#popover-trigger');
    await button.hover();

    const popoverVisible = await page.evaluate(() => {
        const popover = document.querySelector('.popover');
        return getComputedStyle(popover).display !== 'none';
    });

    console.log("Popover is visible: `${popoverVisible}`"); // должно быть true

    await browser.close();
})();

