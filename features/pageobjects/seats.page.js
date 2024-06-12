let seats=$("//span[@data-hook='select-economy-seat_unrestricted_4E']");
let continuee=$("//button[@data-hook='seats-page_continue']");
let nothanks =$("//span[text()='No thanks, skip seat selection.']");
class seat{
   async selectseat(){
    await browser.pause(3000);
    // await seats.click();
    // await browser.pause(6000);
    // await continuee.click();
    await nothanks.scrollIntoView();
    await nothanks.click();
   }
}
module.exports=new seat();