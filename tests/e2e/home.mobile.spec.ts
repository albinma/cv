import { expect, test } from '@playwright/test';

test.describe('mobile', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.skip(!isMobile);
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('should open side nav', async ({ page }) => {
    const body = page.locator('body');
    const menuButton = page.getByTestId('menu-button');
    const menu = page.getByTestId('mobile-menu');

    // Menu should be hidden by default.
    await expect(menu).not.toBeInViewport();

    // Clicking the menu button should open the menu.
    await menuButton.click();

    // Menu should be visible.
    await expect(menu).toBeInViewport();

    // Body should not be scrollable.
    await expect(body).toHaveCSS('overflow', 'hidden');

    // Clicking the menu button again should close the menu.
    await menuButton.click();

    // Menu should be hidden.
    await expect(menu).not.toBeInViewport();
  });
});
