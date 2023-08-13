describe("Database Testing",()=>{
    it('Create Table',()=>{
        cy.task('queryDb','CREATE TABLE users(id int unsigned NOT NULL unique,name varchar(100) NOT NULL,email varchar(150) unique,password varchar(100) NOT NULL)').then((results)=>{
            cy.log(results.info)
            expect(results.info).to.eq("");
        })
    })
    it('create users',()=>{
        cy.task('queryDb','INSERT INTO users (id,name,email,password) VALUES (1, "parshuram","dadasparshuram@email.com", "Password@123")').then((results)=>{
            cy.log(results)
            expect(results.affectedRows).to.eq(1);
        })
    })
    it('select',()=>{
        cy.task('queryDb','SELECT * from users').then((results)=>{
            cy.log(results[0].email)
            expect(results[0].email).to.eq('dadasparshuram@email.com')
        })
    })
    it('delete table',()=>{
        cy.task('queryDb','DROP TABLE users').then((results)=>{
            cy.log(results)
            expect(results.info).to.eq("");
        })
    })
})