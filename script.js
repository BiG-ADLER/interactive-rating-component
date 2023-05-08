let rate = $(".container .rate").length
let selected = new Object({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false
})
let rateNumber = []
let count = 0

$( document ).ready(function() {
    $("#button").click(function(){
        if ((count <= 0) || (count == (null || undefined))) {
            return false;
        } else if (count >= 1) {
            $('.vote').hide();
            $('.submit').show();
            CheckRate();
            document.getElementById("rate").innerHTML = CheckRate();
        }
    });

    for (let i = 1; i <= rate; i++) {
        console.log(i)
        $("."+i).click(function(){
            if (selected[i] == false) {

                $("."+i).css({
                    'background-color':' hsl(25, 97%, 53%)',
                    'color':' #FFFFFF',
                    'box-shadow': '0px 0px 10px 0px rgba(251,116,19,1)'
                })
                selected[i] = true
                rateNumber.push(i)
                count = rateNumber.reduce(GetBiggestNumber)
                if (count > 5) {
                    count = 5
                } else if (count < 0) {
                    count = 0
                } else if (count == (null || undefined)) {
                    count = 0
                }
            } else if (selected[i] == true) {
                const index = rateNumber.indexOf(i);
                $("."+i).css({
                    'background-color':' rgb(38, 47, 56)',
                    'color':' hsl(217, 12%, 63%)',
                    'box-shadow': '0px 0px 0px 0px rgba(251,116,19,1)'
                })
                selected[i] = false
                if (index > -1) {
                    rateNumber.splice(index, 1);
                }
                if (rateNumber.reduce(GetBiggestNumber)== (null || undefined)) {
                    count= 0

                } else {
                    count = rateNumber.reduce(GetBiggestNumber)
                }

                if (count > 5) {
                    count = 5
                } else if (count < 0) {
                    count = 0
                } else if (count == (null || undefined)) {
                    count = 0
                }
            }
        });
    }
});

function CheckRate() {
    return Number(count)
}

function GetBiggestNumber(total) {
    return total;
}