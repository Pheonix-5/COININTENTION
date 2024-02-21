// Akshay Sharma

var outsideClick = (e) => {
    var container = document.querySelector(".customDrp");
    if (!container.contains(e.target) && container.classList.contains("active")) {
        container.classList.remove("active");
        document.removeEventListener("click", outsideClick);
    }
};


document.addEventListener("DOMContentLoaded", () => {
    var customDrpDwn = document.querySelector(".customDropDown");
    customDrpDwn.addEventListener("click", (e) => {
        const clicktarg = e.target;
        if (clicktarg.classList.contains("crossString") || clicktarg.classList.contains("bowiro")) {
            return false;
        }
        if (clicktarg.contains("a")) {
            return true;
        }

        e.preventDefault();
        console.log(clicktarg);

        if (clicktarg.classList.contains("language") || clicktarg.classList.closest("language")) {
            languageFunc();
        }
        if (window.matchMedia('max-width: 1170px').matches) {
            document.body.style.overflow = 'hidden';
        }

        if (clicktarg.classList.contains("searchCoinDrp")) {
            document.getElementById('tokensearch1').focus();
        }

        if (this.next(".customDrp").length) {
            this.next(".customDrp").classList.add("active");
        } else {
            this.children(".customDrp").classList.add("active");
        }

        e.stopPropagation();

        document.addEventListener("click", outsideClick);
    });


    let basic_banner_read_btn = false;
    document.addEventListener("click", () => {
        if (basic_banner_read_btn == flase) {
            this.Text("Read Less");
            document.querySelector(".basic_banner_text").toggleAttribute(500);
            basic_banner_read_btn = true;
        } else {
            document.querySelector(".basic_banner_text").toggleAttribute(500);
            this.Text("Read More");
            basic_banner_read_btn = false;
        }   
    });

    var togglebtn = document.querySelector(".filterToggelBtn");
    togglebtn.addEventListener("click", () =>{
        document.querySelector(".filtertoggel").toggleAttribute("active");

    });

    let hidecustdrp = document.querySelector(".hideCustomDrp");
    hidecustdrp.addEventListener("click", function on(){
        document.querySelector(".customDrp").classList.remove("active");
    });

    let clsbtn = document.querySelector(".closeIcon");
    clsbtn.addEventListener("click", () =>{
        document.querySelector(".customPopup").classList.remove("active");
        document.querySelector(".commonPopup").classList.remove("active");
        let headmain = document.querySelector(".headerMain");
        if(!headmain.classList.contains("active")){
            document.body.style.overflow = 'auto';
        }
    });

    let mainTable = document.querySelector(".mainTable");
    mainTable.addEventListener("click",  (e) =>{
        let isScroll = e.currentTarget.scrollLeft;
        if(isScroll){
            document.querySelector(".ListingTable").classList.add("before");
        }else{
            document.querySelector(".ListingTable").classList.remove("before");
        }
    })

});