let departure = $("//div[text()='Departure, airport']");
let destination=$("//div[text()='Destination, airport']");
let departure_date=$("button[data-hook='flight-search-date-picker_expand-start-date']");
let return_date= $("button[data-hook='flight-search-date-picker_expand-end-date']");
let search=$("//button[@type='submit']");
let close=$("button[data-hook='overlay-merchandise_ice-pop_close']");
let radio =$("//span[text()='One way']");
let continue1=$("//button[@data-hook='flights-page_continue']");
let continue2=$("//button[@data-hook='bundles-page_continue']");
let Fname =$("//input[@placeholder='First Name']");
let Lname =$("//input[@placeholder='Last Name']");
let gender = $("(//div[@class='Radio__IconContainer-owm0zi-0 fIAozG'])[1]");
let month = $("(//div[@class=' css-1hwfws3'])[2]");
let day =$("(//div[@class=' css-1wy0on6'])[3]");
let year =$("//input[@id='adults.0.dob-year']");
let continue3=$("//button[@data-hook='travelers-page_continue']")
let add=$("(//span[text()='Add'])[2]");
let check=$("(//div[@class='Checkbox__CheckboxWrapper-gyke29-0 kJEboX'])[1]");
let rad=$("(//div[@class='Radio__IconContainer-owm0zi-0 fIAozG'])[3]");
class home{
    async SearchFlight(){
    if(close)
        await close.click();    
    await radio.click();
    browser.pause(2000);
     await departure.click();
     await browser.pause("3000");
     await $("//div[text()='Akron-Canton, OH (CAK)']").click();
     await destination.click();
     await browser.pause(2000);
     await $("//div[text()='Daytona Beach / Sanford, FL (SFB)']").click();

    
     await departure_date.waitForClickable();
     await departure_date.click();
     let btn = await this.find_date();
     await btn.click();
    //  await return_date.waitForClickable();
    //  await return_date.click();
    //  let btn2 = this.find_date;
    //  await btn2.click();
     await search.click();
     await browser.pause(4000);
     await continue1.scrollIntoView();
     await continue1.click();
     await browser.pause(5000);
     await continue2.waitForClickable();
     await continue2.click();
     await 
     browser.pause(4000);
     await Fname.setValue("Navami");
     await Lname.setValue("Sunil");
     await gender.click();
    await month.click();
    await browser.pause(2000);
    await $("//div[text()='January']").click();
    await browser.pause(2000);
    await day.click();
    await browser.pause(2000);
    await $("//div[text()='1']").click();
    await browser.pause(2000);
    await year.setValue("2002");
    await browser.pause(3000);
    await add.waitForClickable();
    await add.click();
    await browser.pause(2000);
    // await check.scrollIntoView();
    await check.waitForClickable();
    await check.click();
    await browser.pause(2000);
   // (await rad).scrollIntoView();
    await rad.click();
    
    await continue3.waitForClickable();
    // await browser.pause(3000);
    await continue3.click(); 
    
    await browser.pause(5000);
    }

    find_date = async()=>{
        const curr_date= new Date();
        console.log(curr_date);
        const final_date = curr_date.toISOString();
        console.log(final_date);
        var day = final_date.slice(8,10);
        console.log(day);
        let dayInt=parseInt(day);
        while( await $('//button[@data-hook="flight-search-date-picker_calendar-0_select-day-'+dayInt+'"]').isEnabled()==false)
    {
        dayInt++;
    }
    return $('//button[@data-hook="flight-search-date-picker_calendar-0_select-day-'+dayInt+'"]');


    }


    
}
    
module.exports=new home();