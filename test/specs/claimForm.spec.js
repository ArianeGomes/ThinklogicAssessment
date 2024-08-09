import claimForm from '../pageobjects/claimForm.page.js';

describe('Claim Form Automation Test', async () => {

    it('Success Case', async () => {
        await claimForm.open()

        await claimForm.submit('Ariane', 'test@thinklogic.com', '08/09/2024', 'CA', 'Ariane Gomes')
        
        const element = await $('.container').getText();
        await expect(element).toEqual(expect.stringContaining('Your claim has been submitted.'));
    });

    it('Failed Case - Missing Info', async () => {
        await claimForm.open()

        await claimForm.submit('Ariane', '', '08/09/2024', 'CA', '')

        const element = await $('.container').getText();
        await expect(element).toEqual(expect.stringContaining('*required'));
    })

    it('Failed Case - Missing Purchase', async () => {
        await claimForm.open()

        await claimForm.submit('Ariane', 'test@thinklogic.com', '', '', 'Ariane Gomes')

        const element = await $('.container').getText();
        await expect(element).toEqual(expect.stringContaining('Entries in list must be between 1 and 20.'));
    })
    
});