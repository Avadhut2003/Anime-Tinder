document.getElementsByClassName("Refreshimg").addEventListener("click",refresh);

function refresh() {
        var random1 = Math.floor(Math.random() * 6) + 1;
        var randomimage1 = "dice"+random1+".png";

        var random2 = Math.floor(Math.random() * 6) + 1;
        var randomimage2 = "dice"+random2+".png";

        var image1 = "images/"+randomimage1;
        var image2 = "images/"+randomimage2;


        var s1 = document.getElementsByClassName("img1")[0];
        s1.setAttribute("src",image1)
    
        var s2  = document.getElementsByClassName("img2")[0];
        s2.setAttribute("src",image2)
    
        if(random1 > random2){
                document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
        }else if(random1 < random2){
                document.querySelector("h1").innerHTML = "Player 2 Win!🚩"; 
        }else{
                document.querySelector("h1").innerHTML = " Draw! ";
        }
}