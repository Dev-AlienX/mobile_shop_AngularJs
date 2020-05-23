function clock() { // We create a new Date object and assign it to a variable called "time".
        var time = new Date(),

            // Access the "getHours" method on the Date object with the dot accessor.
            hours = time.getHours(),

            // Access the "getMinutes" method with the dot accessor.
            minutes = time.getMinutes(),


            seconds = time.getSeconds();

        document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
        // document.querySelectorAll('.clock2')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

        function harold(standIn) {
            if (standIn < 10) {
                standIn = '0' + standIn
            }
            return standIn;
        }
        $(window).ready(function () {
            /* if time is bitween 6am to 6pm text color will be dark */
            if (hours >= 6 && hours <= 18) {
                // console.log('its day ' + "and time is" + " " + hours + ":" + minutes);
                $('#showTime').addClass('text-white');
                $('#showTime').removeClass('text-success');
            }
            /* on other time text color will be green */
            else {
                console.log('its night');
                $('#showTime').addClass('text-success');
                $('#showTime').removeClass('text-white');
            };
        });
    };
    setInterval(clock, 1000);