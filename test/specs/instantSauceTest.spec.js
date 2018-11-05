describe('Login', () => {
    it('should be able to login with a standard user', () => {
        // Navigate to the url of the Sauce Labs Sample app
        browser.url('');
        // Wait for the user name field to be visible
        browser.waitForVisible('[type="text"]', 3000);
        // Type the user name string into the user name field
        browser.setValue('[type="text"]', 'standard_user');
        // Type the password into the password field
        browser.setValue('[type="password"]', 'secret_sauce');
        // Hit Login button
        browser.click('[type="submit"]');

        // Synchronize on the next page and make sure it loads
        browser.waitForVisible('#inventory_container', 3000);

        // Assert that the inventory page displayed appropriately
        expect(browser.isVisible('#inventory_container')).toEqual(true)
    });
});
