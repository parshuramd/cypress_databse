import Papa from 'papaparse';
describe('CSV to JSON Conversion', () => {
    it('Converts CSV to JSON', () => {
        cy.fixture('sample.csv').then((csvContent) => {
            const parsedCsv = Papa.parse(csvContent, { header: true }).data;
            cy.log(JSON.stringify(parsedCsv));
            for(const obj of parsedCsv){
                for(const value in obj ){
                    cy.log([value])
                }
            }
        });
    });
});
