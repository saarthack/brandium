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

locomotiveAnimation()

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

cursorAnimation()

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

page1Text()