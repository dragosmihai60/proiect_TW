var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if( MenuItems.style.maxHeight == "0px")
                {
                    MenuItems.style.maxHeight = "200px";
                }
            else
                {
                    MenuItems.style.maxHeight = "0px";
                }
        }
        

        var ProductImg = document.getElementById("ProductImg");
        var SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = function()
        {
            ProductImg.src = SmallImg[0].src;
            for(let imagine of SmallImg)
            {
                imagine.style.border="none";
            }
            SmallImg[0].style.border="solid black";
        }
        SmallImg[1].onclick = function()
        {
            ProductImg.src = SmallImg[1].src;
            for(let imagine of SmallImg)
            {
                imagine.style.border="none";
            }
            SmallImg[1].style.border="solid black";
        }
        SmallImg[2].onclick = function()
        {
            ProductImg.src = SmallImg[2].src;
            for(let imagine of SmallImg)
            {
                imagine.style.border="none";
            }
            SmallImg[2].style.border="solid black";
        }
        SmallImg[3].onclick = function()
        {
            ProductImg.src = SmallImg[3].src;
            for(let imagine of SmallImg)
            {
                imagine.style.border="none";
            }
            SmallImg[3].style.border="solid black";
        }

        document.body.addEventListener('keypress', function(event){
            if(event.key=="1")
            {
                for(let i=0; i<SmallImg.length; i++)
                    {
                    if(SmallImg[i].style.border == "solid black")
                        SmallImg[i].style.border = "none";
                    else
                        SmallImg[i].style.border = "solid black";
                    }
            }
        })
    var Logo= document.getElementsByClassName("logo");
    
    Logo[0].onclick = function()
    {
        this.remove();
        
    }
