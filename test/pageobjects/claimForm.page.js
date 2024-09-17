class claimForm {

    get name() { return $("//input[@id='c__ClaimantInfo_Name_ee85a0da']") }
    get email() { return $("//input[@id='c__ClaimantInfo_Email_ee85a0da']") }
    get addPurchase() { return $("//button[normalize-space()='Add A Purchase']") }
    get date() { return $("//input[@type='date']") }
    get stateDropdown() { return $("/html//div[@id='contact-form']/div[@class='container']//div[@class='cms-form-app cms-form-app-ee85a0da']/div/div[3]/div/div[1]/div")}
    get confirmation() { return $("//span[@tabindex='0']") }
    get signature() { return $("//div[7]/input") }
    get submitButton() { return $("//button[normalize-space()='Submit']") }

    open() {
        return browser.url('https://cms.template4.jndla.net/claim-form')
    }

    async submit(name, email, date, state, signature) {
        await browser.maximizeWindow()

        await this.name.setValue(name)
        await this.email.setValue(email)

        if (date != "" || state != "") {
            await this.addPurchase.click()
            await this.date.click()
            await this.date.setValue(date)

            await this.stateDropdown.click()
            await $(`//li[normalize-space()='${state}']`).click()
        }

        await this.confirmation.click()
        await this.signature.setValue(signature)

        await this.submitButton.click()
        await browser.pause(2000);
    }
}

export default new claimForm();