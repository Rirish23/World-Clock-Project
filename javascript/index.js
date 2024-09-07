 function updateTime(){

 // New York
    let newYorkElement = document.querySelector("#new-york");
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");
  
      newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format(
        "h:mm:ss:SSS [<small>]A[</small>]"
      );


      //Pairs
      let parisElement = document.querySelector("#paris");
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss:SSS [<small>]A[</small>]"
      )

      //london
      let londonElement = document.querySelector("#london");
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");
  
      londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
      londonTimeElement.innerHTML = londonTime.format(
        "h:mm:ss:SSS [<small>]A[</small>]"
      )


      //Tokyo
      let tokyoElement = document.querySelector("#tokyo");
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
      let tokyoTime = moment().tz("Asia/Tokyo");
  
      tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
      tokyoTimeElement.innerHTML = tokyoTime.format(
        "h:mm:ss:SSS [<small>]A[</small>]"
      )

        //Sydney
        let sydneyElement = document.querySelector("#sydney");
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");
    
        sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format(
          "h:mm:ss:SSS [<small>]A[</small>]"
        )
    }
    updateTime();
    setInterval(updateTime,100);





