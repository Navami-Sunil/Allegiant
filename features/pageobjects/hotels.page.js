let continue6=$("//button[@data-hook='hotels-page_continue']");
class rooms{
    async room(){
        await continue6.scrollIntoView();
        await continue6.click();
        await browser.pause(4000);
       
    }
}
module.exports=new rooms();