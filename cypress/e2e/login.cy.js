describe('test', () => {
    it('login test', { pageLoadTimeOut: 2000000 }, () => {
        cy.visit('http://127.0.0.1:5500/index.htm');
        cy.get('[data-cy="test"]').then($el => {
            const titleText = $el.text();
            if (titleText.match(/\bParshuram\b/) || titleText.match(/\bLog in\b/)) {
                
                expect(true).to.equal(true);
                cy.log(titleText)
            } else {
                expect.fail('Unexpected text: ' + text);
            }
        });

    })
})