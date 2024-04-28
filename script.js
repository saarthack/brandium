function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}


function cursorAnimation() {

    var crsr = document.querySelector("#cursor")

    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y
        })
    })

    var allImages = document.querySelectorAll(".image-div")
    var text = ""
    allImages.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            text = elem.getAttribute("data-text")
            // crsr.style.width = "160px"
            gsap.to(crsr, {
                width: "170px"
            })
            gsap.from("#cursor h5", {
                opacity: 0,
                delay: 0.2
            })
            crsr.innerHTML = `<h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5>`
        })
        elem.addEventListener("mouseleave", function () {
            // crsr.style.width = "25px"
            crsr.innerHTML = "<h5></h5>"
            gsap.to(crsr, {
                width: "25px"
            })
        })
    })
}


function page1Text() {
    var allText = document.querySelectorAll(".page1-text h1")

    allText.forEach(function (elem) {
        var text = elem.textContent
        var splittedText = text.split("")
        var clutter = ""
        splittedText.forEach(function (e) {
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter
    })



    gsap.from(".page1-text h1 span", {
        y: 300,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.1
    })


}


function page3and4Animations() {

    var elementContainer = document.querySelector("#element-container")

    elementContainer.addEventListener("mouseenter", function () {
        gsap.to("#moving-image", {
            opacity: 1
        })
    })

    elementContainer.addEventListener("mouseleave", function () {
        gsap.to("#moving-image", {
            opacity: 0
        })
    })

    var allElements = document.querySelectorAll(".element")
    var movingImageDiv = document.querySelector("#moving-image")
    var moveImg = document.querySelector("#moving-image img")


    allElements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            let image = elem.getAttribute("data-image")
            gsap.to(moveImg, {
                attr: { src: image },
            })
        })
        elementContainer.addEventListener("mousemove", function (dets) {
            gsap.to("#moving-image", {
                left: `${dets.x - elementContainer.getBoundingClientRect().x}`,
                top: `${dets.y - elementContainer.getBoundingClientRect().y}`,
                duration: 3,
                ease: "power1.out"
            })

        })
    })
}



function marqueAnimation() {

    document.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("#move .marque", {
                transform: "translateX(-200%)",
                ease: "none",
                repeat: -1,
                duration: 5
            })
            gsap.to("#move .marque img", {
                rotate: 180
            })
        } else {
            gsap.to("#move .marque", {
                transform: "translateX(0%)",
                ease: "none",
                repeat: -1,
                duration: 5
            })
            gsap.to("#move .marque img", {
                rotate: 0
            })
        }
    })
}



locomotiveAnimation()

cursorAnimation()

page1Text()

page3and4Animations()

marqueAnimation()
var roti = 0
document.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        roti += 10
        gsap.to("#bottomright svg",{
            transform:`translate(-50%,-50%) rotate(${roti}deg)`
        })
    }else{
        roti -= 10
        gsap.to("#bottomright svg",{
            transform:`translate(-50%,-50%) rotate(${roti}deg)`
        })
    }
})


