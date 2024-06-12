let closebt=$("//button[@data-hook='payment-page_ice-popup_close']");
class pay{
    async payments(){
        if(closebt)
            (await closebt).click();

    }
}
module.exports=new pay();