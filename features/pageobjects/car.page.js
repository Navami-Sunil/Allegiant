let continue7=$("//button[@data-hook='cars-page_continue']");

class cars{
async carselection(){

//await $("(//span[text()='$284.16']").click();
await continue7.waitForClickable();
await continue7.click();
await browser.pause(4000);
}
}
module.exports=new cars();