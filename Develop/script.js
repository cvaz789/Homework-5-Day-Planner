var clock = $("<div id=clock>")
      $("#currentDay").append(clock)
      
      function displayClock() {
        $(clock).html(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }
      setInterval(displayClock, 1000);

      // Adding inputs to all second-columns
      var inputText0 = $("<textarea type=text placeholder='Enter you task here' id=userText0>")
      $(".second-column0").append(inputText0);  
      var inputText1 = $("<textarea type=text placeholder='Enter you task here' id=userText1>")
      $(".second-column1").append(inputText1);
      var inputText2 = $("<textarea type=text placeholder='Enter you task here' id=userText2>")
      $(".second-column2").append(inputText2);
      var inputText3 = $("<textarea type=text placeholder='Enter you task here' id=userText3>")
      $(".second-column3").append(inputText3);
      var inputText4 = $("<textarea type=text placeholder='Enter you task here' id=userText4>")
      $(".second-column4").append(inputText4);
      var inputText5 = $("<textarea type=text placeholder='Enter you task here' id=userText5>")
      $(".second-column5").append(inputText5);
      var inputText6 = $("<textarea type=text placeholder='Enter you task here' id=userText6>")
      $(".second-column6").append(inputText6);
      var inputText7 = $("<textarea type=text placeholder='Enter you task here' id=userText7>")
      $(".second-column7").append(inputText7);
      var inputText8 = $("<textarea type=text placeholder='Enter you task here' id=userText8>")
      $(".second-column8").append(inputText8);
      var inputText9 = $("<textarea type=text placeholder='Enter you task here' id=userText9>")
      $(".second-column9").append(inputText9);
      var inputText10 = $("<textarea type=text placeholder='Enter you task here' id=userText10>")
      $(".second-column10").append(inputText10);
      var inputText11 = $("<textarea type=text placeholder='Enter you task here' id=userText11>")
      $(".second-column11").append(inputText11);
      var inputText12 = $("<textarea type=text placeholder='Enter you task here' id=userText12>")
      $(".second-column12").append(inputText12);
      var inputText13 = $("<textarea type=text placeholder='Enter you task here' id=userText13>")
      $(".second-column13").append(inputText13);

      //ONCLICK EVENTS TO SAVE TO LOCAL STORAGE AND VALIDATE TASK HOUR VS CURRENT HOUR
      
      // 9 AM STARTS //         
        $(document).ready(function() {

            var textContent0 = localStorage.getItem("textContent0");
            $("#userText0").val(textContent0);

            var attrColor = localStorage.getItem("AttributeColor");
            $(".second-column0").val(attrColor);     

            $(".third-column0").on("click", function() {
                $(".second-column").each(function(i, col) {
                    
                var taskHour = parseInt($(".first-column")[i].innerHTML);
                console.log(taskHour);
                var currentHour = moment().hour();
                var content0 = $("#userText"+i).val();
                localStorage.setItem("textContent"+i, content0);

                if(taskHour < currentHour ) {
                    
                    //$(".second-column0").css("background-color", "grey")
                    $(".second-column"+i).attr("id", "past");    
                
                    var valueColor = $(".second-column"+i).attr("id");
                    localStorage.setItem("AttributeColor", valueColor);

                }
                else if(taskHour === currentHour) {
                    
                    $(".second-column"+i).css("background-color", "salmon")
                }
                else{
                    
                    //$(".second-column0").css("background-color", "green")
                    $(".second-column"+i).attr("id", "future")
                    var valueColor = $(".second-column"+i).attr("id");
                    localStorage.setItem("AttributeColor", valueColor);
                }
                })
                
                
            });


        });
      // 9 AM ENDS // 

      //10 AM STARTS//
        //LOCAL STORAGE ISSUE
        var textContent1 = localStorage.getItem("textContent1");
        $("#userText1").val(textContent1);

        $(".third-column1").on("click", function() {
          var content1 = $("#userText1").val();
          localStorage.setItem("textContent1", content1);
          var userText1 = $("#userText1").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[1].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column1").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column1").css("background-color", "salmon")
          }
          else{
            $(".second-column1").css("background-color", "green")
          }
        })
      //10 AM ENDS//

      //11 HRS START HERE//
        var textContent2 = localStorage.getItem("textContent2");
        content2 = $("#userText2").val(textContent2);
        $(".third-column2").on("click", function() {
          var content2 = $("#userText2").val();
          localStorage.setItem("textContent2", content2);
          var userText2 = $("#userText2").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[2].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column2").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column2").css("background-color", "salmon")
          }
          else{
            $(".second-column2").css("background-color", "green")
          }
        })
      //11 HRS END HERE//

      //12 HRS START HERE//
        var textContent3 = localStorage.getItem("textContent3");
        content3 = $("#userText3").val(textContent3);
        $(".third-column3").on("click", function() {
          var content3 = $("#userText3").val();
          localStorage.setItem("textContent3", content3);
          var userText3 = $("#userText3").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[3].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column3").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column3").css("background-color", "salmon")
          }
          else{
            $(".second-column3").css("background-color", "green")
          }
      })
      //12 HRS END HERE//

      //13 HRS START HERE//
        var textContent4 = localStorage.getItem("textContent4");
        content4 = $("#userText4").val(textContent4);
        $(".third-column4").on("click", function() {
          var content4 = $("#userText4").val();
          localStorage.setItem("textContent4", content4);
          var userText4 = $("#userText4").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[4].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column4").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column4").css("background-color", "salmon")
          }
          else{
            $(".second-column4").css("background-color", "green")
          }
        })
      //13 HRS END HERE//

      //14 HRS START HERE//
        var textContent5 = localStorage.getItem("textContent5");
        content5 = $("#userText5").val(textContent5);
        $(".third-column5").on("click", function() {
          var content5 = $("#userText5").val();
          localStorage.setItem("textContent5", content5);
          var userText5 = $("#userText5").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[5].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column5").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column5").css("background-color", "salmon")
          }
          else{
            $(".second-column5").css("background-color", "green")
          }
        })
      //14 HRS END HERE//

      //15 HRS START HERE//
        var textContent6 = localStorage.getItem("textContent6");
        content6 = $("#userText6").val(textContent6);
        $(".third-column6").on("click", function() {
          
          var content6 = $("#userText6").val();
          localStorage.setItem("textContent6", content6);
          var userText6 = $("#userText6").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[6].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column6").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column6").css("background-color", "salmon")
          }
          else{
            $(".second-column6").css("background-color", "green")
          }
        })

        // $(".third-column6").on("submit", function() {
        //   event.preventDefault();
        // })
      //15 HRS END HERE//

      //16 HRS START HERE//
        var textContent7 = localStorage.getItem("textContent7");
        content7 = $("#userText7").val(textContent7);
        $(".third-column7").on("click", function() {
          var content7 = $("#userText7").val();
          localStorage.setItem("textContent7", content7);
          var userText7 = $("#userText7").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[7].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column7").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column7").css("background-color", "salmon")
          }
          else{
            $(".second-column7").css("background-color", "green")
          }
        })
      //16 HRS END HERE//

      //17 HRS START HERE//
        var textContent8 = localStorage.getItem("textContent8");
        content8 = $("#userText8").val(textContent8);
        $(".third-column8").on("click", function() {
          var content8 = $("#userText8").val();
          localStorage.setItem("textContent8", content8);
          var userText8 = $("#userText8").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[8].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column8").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column8").css("background-color", "salmon")
          }
          else{
            $(".second-column8").css("background-color", "green")
          }
        })
      //17 HRS END HERE//

      //18 HRS START HERE//
        var textContent9 = localStorage.getItem("textContent9");
        content9 = $("#userText9").val(textContent9);
        $(".third-column9").on("click", function() {
          var content9 = $("#userText9").val();
          localStorage.setItem("textContent9", content9);
          var userText9 = $("#userText9").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[9].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column9").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column9").css("background-color", "salmon")
          }
          else{
            $(".second-column9").css("background-color", "green")
          }
        })
      //18 HRS END HERE//

      // 19 HRS START HERE //
        var textContent10 = localStorage.getItem("textContent10");
        content10 = $("#userText10").val(textContent10);
        $(".third-column10").on("click", function() {
          var content10 = $("#userText10").val();
          var userText10 = $("#userText10").val();
          localStorage.setItem("textContent10", content10);

          var taskHour = parseInt($(".first-column")[10].innerHTML);
          var currentHour = moment().hour();

          console.log(taskHour);
          console.log(currentHour);

          if(taskHour < currentHour ) {
            $(".second-column10").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column10").css("background-color", "salmon")
          }
          else{
            $(".second-column10").css("background-color", "green")
          }
        })
      //19 HRS END HERE//

      //20 HRS START HERE //
        var textContent11 = localStorage.getItem("textContent11");
        content11 = $("#userText11").val(textContent11);
        $(".third-column11").on("click", function() {
          var content11 = $("#userText11").val();
          localStorage.setItem("textContent11", content11);
          var userText11 = $("#userText11").val();12
          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[11].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column11").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column11").css("background-color", "salmon")
          }
          else{
            $(".second-column11").css("background-color", "green")
          }
        })
      //20 HRS END HERE//
      
      //21 HRS START HERE //
        var textContent12 = localStorage.getItem("textContent12");
        content12 = $("#userText12").val(textContent12);
        $(".third-column12").on("click", function() {
          var content12 = $("#userText12").val();
          localStorage.setItem("textContent12", content12);
          var userText12 = $("#userText12").val();

          //PAST, PRESENT, FUTUR VALIDATION
          //var parsedStringed = parseInt($(".first-column")[0].innerHTML);
          //var parsedStringed2 = parseInt($(".first-column")[1].innerHTML);
          var taskHour = parseInt($(".first-column")[12].innerHTML);
          var currentHour = moment().hour();

          if(taskHour < currentHour ) {
            $(".second-column12").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column12").css("background-color", "salmon")
          }
          else{
            $(".second-column12").css("background-color", "green")
          }
        })
      //21 HRS END HERE//

      //22 HRS START HERE //
        var textContent13 = localStorage.getItem("textContent13");
        content13 = $("#userText13").val(textContent13);
        $(".third-column13").on("click", function() {
          var content13 = $("#userText13").val();
          var userText13 = $("#userText13").val();
          localStorage.setItem("textContent13", content13);

          var taskHour = parseInt($(".first-column")[13].innerHTML);
          var currentHour = moment().hour();

          console.log(taskHour);
          console.log(currentHour);

          if(taskHour < currentHour ) {
            $(".second-column13").css("background-color", "grey")
          }
          else if(taskHour === currentHour) {
            $(".second-column13").css("background-color", "salmon")
          }
          else{
            $(".second-column13").css("background-color", "green")
          }
        })
      //22 HRS END HERE //
