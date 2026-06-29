const links = document.querySelectorAll(".nav-item");

links.forEach(link => {

    link.addEventListener("click", function(e){

        const target = this.getAttribute("href");

        if(!target) return;

        e.preventDefault();

        document.body.classList.add("page-leaving");

        setTimeout(()=>{

            window.location.href = target;

        },350);

    });

});