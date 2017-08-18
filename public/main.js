(function () {
    // Find a <table> element with id="myTable":
    var myTable = document.getElementById("mytable")

    var xmlhttp = new XMLHttpRequest(); //creating a new request objectv
    
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            if (xmlhttp.status === 200){
                var data = JSON.parse(xmlhttp.responseText)
                console.log('hi i am data', data)
                for (var x = 0; x < data.length; x++) {
                    var element = data[x];
                    // Create an empty <tr> element and add it to the 1st position of the table:
                    var row = myTable.insertRow(x + 1)
                    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1)
                    var cell3 = row.insertCell(2)
                    var cell4 = row.insertCell(3)
                    var cell5 = row.insertCell(4)
                    var cell6 = row.insertCell(5)
                    // Add some text to the new cells:
                    cell1.innerHTML = '' + x
                    cell2.innerHTML = '' + element.birthYear
                    cell3.innerHTML = '' + element.enthnicity
                    cell4.innerHTML = '' + element.name
                    cell5.innerHTML = '' + element.count
                    cell6.innerHTML = '' + element.rank
                }
            } else if (xmlhttp.status === 400) {
                alert('There was an http error 400!')
            } else {
                alert('something else other than 400 was returned!')
            }
        }
    }

    xmlhttp.open('GET', '/baby-names/top-ten', true);
    xmlhttp.send()

    var attempt = 3; // Variable to count number of attempts.
    // Below function Executes on click of login button.
    function validate(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if ( username == "admin" && password == "password"){
        alert ("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --; // Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
     }
    }

    // With Jquery
    // $.ajax({
    //     url: "/baby-names/top-ten",
    //     context: document.body,
    //     success: function(){
    //       $(this).addClass("done");
    //     }
    // });
})