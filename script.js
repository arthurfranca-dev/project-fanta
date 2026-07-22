// Construção da timeline

gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    },
})
timeline.to(
    "#fanta",
    {
        top: "120%",
        left: "0%",
    },
    "orange"
);
timeline.to(
    "#laranja-cortada",
    {
        top: "160%",
        left: "23%",
    },
    "orange"
);
timeline.to(
    "#folha",
    {
        rotate: "500deg",
        top: "97%",
        left: "75%",
    },
    "orange"
);
timeline.to(
    "#laranjas",
    {
        width: "15%",
        top: "167%",
        right: "10%",
    },
    "orange"
);
timeline.to(
    "#folha2",
    {
        transform: "rotate(530deg)",
        top: "90%",
        left: "5%",
    },
    "orange"
);
var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
    },
})
timeline2.from(
    ".lemon1",
    {
        rotate: "530deg",
        top: "110%",
        left: "-100%",
    },
    "ca"
);
timeline2.from(
    ".lemon2",
    {
        rotate: "530deg",
        top: "110%",
        left: "180%",
    },
    "ca"
);
timeline2.to(
    "#fanta",
    {
        width: "40%",
        top: "210%",
        left: "30.3%",
    },
    "ca"
);
timeline2.to(
    "#laranja-cortada",
    {
        width: "18%",
        top: "204%",
        left: "41%",
    },
    "ca"
);
timeline2.from(
    "#cocacola",
    {
        rotate: "530deg",
        top: "110%",
        left: "50%",
    },
    "ca"
);
timeline2.from(
    "#pepsi",
    {
        rotate: "-530deg",
        top: "110%",
        right: "-100%",
    },
    "ca"
);
