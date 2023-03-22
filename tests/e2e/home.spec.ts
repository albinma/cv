import { expect, test } from '@playwright/test';

test.describe('home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('should navigate to the index page', async ({ page }) => {
    const hero = await page.getByTestId('hero');

    await expect(hero).toBeVisible();
  });
});
