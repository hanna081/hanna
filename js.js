document.addEventListener("DOMContentLoaded", startFn);

function startFn()
{
    
    let menu = document.querySelectorAll("#menu ul li");
    let contents = document.querySelectorAll('#content > section');

    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = pageYOffset;

    let scrollAni;

    window.addEventListener('scroll', scrollFn);

    function scrollFn()
    {
        nowScrollPos = pageYOffset;
        scrollPos = nowScrollPos;
    }

    for(let i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click',
        
        function()
        {
            let index = this.getAttribute('clickNum');
            

            targetScrollPos = contents[index].offsetTop;
            console.log(targetScrollPos);

            scrollAni = requestAnimationFrame(moveTo);
        }
        
        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos)*0.2;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - scrollPos) <= 1)
        {
            window.scroll(0, targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else{
            scrollAni = requestAnimationFrame(moveTo);
        }
    }

}