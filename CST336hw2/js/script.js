
        var credits = 0;
        var bet = 0;
        
        function write_message($message) {
            document.getElementById('messages').innerHTML = $message;
        }

        function spin()
        {
            if ( credits > 0 ) {
                // set credit add to empty
                document.getElementById("creditsIn").value = 0;
                
                // add default bet of 1
                if (document.getElementById("creditsOut").value == 0)
                {
                    bet = 1;
                }else {
                    bet = document.getElementById("creditsOut").value;
                }
                
                spendCredits(bet);
                
                var reel1 = Math.floor((Math.random()*3)+1);
                var reel2 = Math.floor((Math.random()*3)+1);
                var reel3 = Math.floor((Math.random()*3)+1);

                // display images
                displayImages(reel1, 1);
                displayImages(reel2, 2);
                displayImages(reel3, 3);

                // check for win and add credits plus display message
                if ( reel1 == reel2 && reel2 == reel3 ) {
                    alert('Winner Winner Chicken Dinner!');
                    write_message('Winner Winner Chicken Dinner!');
                    if (reel1 == 1) {
                        addCredits((2 * bet));//parseInt(document.getElementById('creditsOut').value,10)));
                    }
                    else if (reel1 == 2) {
                        addCredits((5 * bet));//parseInt(document.getElementById('creditsOut').value,10)));
                    }else {
                        addCredits((10 * bet));//parseInt(document.getElementById('creditsOut').value,10)));
                    }
                } else {
                    write_message('Sorry, better luck next time!');
                }
            } else {
                alert('You need to enter some credits.');
            }
        }

        // this adds credits
        function addCredits(x) {
            //let creditsAdded = Number($("#creditsIn").val());
            //credits = credits + creditsAdded;
            credits = credits + x;
            document.getElementById("p2").innerHTML = credits;
            
        }
        
        // this spends credits
        function spendCredits(y) {
            credits = credits - y;
            document.getElementById("p2").innerHTML = credits;
            
        }
        
        // function to display images based on roll
        function displayImages(reelVal, index) {
            switch (reelVal) {
                case 1: 
                    $(`#reel${index}`).html("<img src ='img/bar.png' alt='Bar'>");
                    break;
                case 2: 
                    $(`#reel${index}`).html("<img src ='img/7.jpg' alt='7'>");
                    break;
                case 3: 
                    $(`#reel${index}`).html("<img src ='img/cherries.jpg' alt='Cherries'>");
                    break;
            }
        }