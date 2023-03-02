import { expect, test } from '@playwright/test';

test('should navigate to the index page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
});
