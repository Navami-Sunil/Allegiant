let plus=$("//button[@data-hook='ancillaries-page-traveler_0_carry-on_increment']");
let addtocart=$("//button[@data-hook='priority-boarding-card_add-to-cart']");
let continue5=$("//button[@data-hook='ancillaries-page_continue']");
class bags{
    async bags(){
        await plus.waitForClickable();
        await plus.click();
        await addtocart.waitForClickable();
        await addtocart.click();
        await browser.pause(2000);
        await $("//div[@class='Checkbox__CheckboxWrapper-gyke29-0 kJEboX']").waitForClickable();
        await $("//div[@class='Checkbox__CheckboxWrapper-gyke29-0 kJEboX']").click();
        await $("//button[@data-hook='priority-boarding-modal_add-to-cart']").waitForClickable();
        await $("//button[@data-hook='priority-boarding-modal_add-to-cart']").click();
        await browser.pause(6000);
        await continue5.scrollIntoView();
        await continue5.click();
        await browser.pause(8000);
    }
}
module.exports=new bags();