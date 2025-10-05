import { test, expect } from '@playwright/test';

test('has searchfield', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    const searchButton = page.locator('span.DocSearch-Button-Placeholder');
    await searchButton.click();

    const input = page.locator('input.DocSearch-Input');
    await input.fill('Testautomation');

});