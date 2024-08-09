class claimForm {

    get name() { return $("#c__ClaimantInfo_Name_ee85a0da") }
    get email() { return $("#c__ClaimantInfo_Email_ee85a0da") }
    get addPurchase() { return $("//button[normalize-space()='Add A Purchase']") }
    get date() { return $("//input[@type='date']") }
    get stateDropdown() { return $(".null-value")}
    get confirmation() { return $("//span[@tabindex='0']") }
    get signature() { return $("#c__Signature_SignatureText_ee85a0da") }
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

        await browser.pause(2000);

        await this.submitButton.click()

        await browser.pause(500);
    }
}

export default new claimForm();