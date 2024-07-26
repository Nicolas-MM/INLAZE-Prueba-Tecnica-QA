describe ("Test suite - Registro de Usuario", ()=>{

    //T001
    it("Registro válido",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez M")
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/auth/sign-in')
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')

       
    })
    ///T002
    it("Registro: Nombre 1 palabra",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas")
        cy.get("#email").type("nimotest2@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
    })
    ///T003
    it("Registro: Correo Repetido",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas L")
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/auth/sign-in')
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
    })
    //T004
    it("Registro: Correo Errado",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez M")
        cy.get("#email").type("nimotest10")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/auth/sign-in')
        cy.get("#email").type("nimotest10")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
    })
    //T005
    it("Contraseña (-8) caracteres",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest3@gmail.com")
        cy.get(".join > #password").type("Ce1/")
        cy.get(".join > #confirm-password").type("Ce1/")
        cy.get("[type=submit]").click()
    })
    //T006
    it("Contraseña sin números",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest3@gmail.com")
        cy.get(".join > #password").type("Claveasd/")
        cy.get(".join > #confirm-password").type("Claveasd/")
        cy.get("[type=submit]").click()
    })
    //T007
    it("Contraseña sin caracteres especiales",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest3@gmail.com")
        cy.get(".join > #password").type("Claveasdf")
        cy.get(".join > #confirm-password").type("Claveasdf")
        cy.get("[type=submit]").click()
    })
    //T008
    it("Contraseñas Non coinciden",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest4@gmail.com")
        cy.get(".join > #password").type("Ce1/")
        cy.get(".join > #confirm-password").type("Ce2/")
        cy.get("[type=submit]").click()
    })
    //T009
    it("Registro sin name",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#email").type("nimotest1@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
    })
    //T010
    it("Registro sin email",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get(".join > #password").type("Clave123/")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
    })
    //T011
    it("Registro sin password",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest1@gmail.com")
        cy.get(".join > #confirm-password").type("Clave123/")
        cy.get("[type=submit]").click()
    })
    //T012
    it("Registro sin confirm-password",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".text-center > .font-bold").click()
        cy.get("#full-name").type("Nicolas Martinez")
        cy.get("#email").type("nimotest1@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
    })
})
describe ("Test suite - Login de Usuario", ()=>{

    //T013
    it("Sign in",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
    })
    //T014
    it("Campos incompletos Password",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
    })
    //T015
    it("Campos incompletos email",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
    })
    //T016
    it("Logout",()=>{
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
        cy.get("#email").type("nimotest10@gmail.com")
        cy.get(".join > #password").type("Clave123/")
        cy.get("[type=submit]").click()
        cy.url().should('include', 'https://test-qa.inlaze.com/panel')
        cy.get(".flex > .font-bold").contains("Nicolas Martinez")
        cy.get(".btn").click()
        cy.get('ul.menu li a').contains('Logout').click();
        cy.url().should('include', 'https://test-qa.inlaze.com/auth/sign-in')
        
    })

})