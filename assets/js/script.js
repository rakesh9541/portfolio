// BACKGROUND ANIMATION
console.clear();
let am = 30;
document.addEventListener("click", (e) => {
    let xx = e.pageX;
    let yy = e.pageY;
    for (let i = 0; i < am; i++) {
        createCircles(xx, yy, i);
    }
});
function createCircles(x, y, tuSam) {
    let circle = document.createElement("circle");
    document.body.appendChild(circle);
    let size = Math.floor(Math.random() * 5);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    let destinationX = x + (Math.random() - 0.5) * tuSam * 20;
    let destinationY = y + (Math.random() - 0.5) * tuSam * 20;
    let roate = (Math.random() + 1) * tuSam * 20;
    let animation = circle.animate(
        [
            {
                transform: `translate3d(${x - tuSam}px, ${y - tuSam}px, 0)`,
                opacity: 1,
                filter: `hue-rotate(${0}deg`
            },
            {
                transform: `translate3d(${destinationX - size}px, ${destinationY - size
                    }px, 0) rotateZ(${roate}deg)  translateX(${tuSam}px)`,
                opacity: 0.5,
                filter: `hue-rotate(${360}deg`
            },
            {
                transform: `translate3d(${destinationX}px, ${destinationY}px, 0) rotateZ(${roate}deg)  translateX(${tuSam * 30
                    }px)`,
                opacity: 0,
                filter: `hue-rotate(${720}deg`
            }
        ],
        {
            duration: 10 + Math.random() * 4000,
            easing: "ease-out",

            delay: Math.random() * 200
        }
    );
    animation.onfinish = () => {
        circle.remove();
    };
}
// ANIMATON CODE END
// variable decelartion
var subtitles, projects, skills, award, oppSide, langauge, exp, blog, development, tool;
var count = 0;
var tabOut = {
    left: false,
    right: false
}
var tabOutsecond = {
    up: false,
    down: false
}
// loading the content with animation
$("#title").fadeTo(1000, 1);
$("#navbar").delay(1000).fadeTo(1000, 1);
$("#subtitle").delay(1000).fadeTo(1000, 1);
$(".sidebarTab h5").delay(3000).fadeTo(1000, 1);
// loading data from the json file
$.getJSON("assets/js/custom.json", function (data) {
    subtitles = data.subtitles;
    projects = data.projects;
    skills = data.skills;
    langauge = data.langauge;
    development = data.development;
    tool = data.tools;
    exp = data.exp;
    blog = data.blog;
    loadPortfolio();
});
// main function start
function loadPortfolio() {
    // call to change subtitle
    changeSubtitle();
    // filling project sidebar
    for (var i = 0; i < projects.length; i++) {
        $("#sidebar-right").append(
            "<div class='project'>" + "<h4>" +
            "<a href=" + projects[i].link + " target='_newtab'>" +
            "<img class='projectImg' src='assets/img/projects/" + projects[i].img + "'>" +
            "</a>" +
            "</h4>" +
            "<h5>" + projects[i].title + "</h5>" +
            "<p>" + projects[i].desc + "</p>" +
            "</div>"
        );
    }
    // filling skills sectionn
    for (var i = 0; i < skills.length; i++) {
        $(".skill-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<img class='skillImg' src='assets/img/skills/" + skills[i].name + ".svg'>" + "</h4>" +
            "<p>  " + skills[i].desc + "</p>" +
            "</div>"
        );
    }
    // for language section
    for (var i = 0; i < langauge.length; i++) {
        console.log("hello ");
        $(".lang-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<img class='skillImg' src='assets/img/skills/" + langauge[i].name + ".png'>" + "</h4>" +
            "<p>  " + langauge[i].desc + "</p>" +
            "</div>"
        );
    }
    // filling developemt section
    for (var i = 0; i < development.length; i++) {
        console.log("hello ");
        $(".dev-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<img class='skillImg' src='assets/img/skills/" + development[i].name + ".png'>" + "</h4>" +
            "<p>  " + development[i].desc + "</p>" +
            "</div>"
        );
    }
    // filling tool section
    for (var i = 0; i < tool.length; i++) {
        console.log("hello ");
        $(".tool-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<img class='skillImg' src='assets/img/skills/" + tool[i].name + ".png'>" + "</h4>" +
            "<p>  " + tool[i].desc + "</p>" +
            "</div>"
        );
    }
    // filling experience data
    for (var i = 0; i < exp.length; i++) {
        $(".exp-group").append(
            "<div class='panel'>" +
            "<h4>" +
            "<a href=" + exp[i].link + " target='_newtab'>" +
            "<img class='skillImg' src='assets/img/exp/" + exp[i].name + ".png'>" + "</h4>" + "</a>" +
            "<p>  " + exp[i].pos + "<br>" + exp[i].des + "<br> " + exp[i].time + "</p>" +
            "</div>"
        );
    }
    // fillling blogs
    for (var i = 0; i < blog.length; i++) {
        $(".blog-group").append(
            "<div class='project'>" +
            "<h4>" +
            "<a href=" + blog[i].link + " target='_newtab'>" +
            "<img class='projectImg' src='assets/img/blog/" + blog[i].img + "'>" +
            "</a>" + "</h4>" +
            "<h5>" + blog[i].title + "</h5>" +
            "</div>"
        );

    }
}
// tab click to open and close 
$(".sidebarTab").click(function () {
    tabClick(tabOut[$(this).attr('id').substring(11)], $(this).attr('id').substring(11));
});
$(".check").click(function () {
    tabClicksecond(tabOutsecond[$(this).attr('id').substring(11)], $(this).attr('id').substring(11));
});
function tabClick(tabOutStatus, side) {
    if (side == "right") {
        oppSide = "left";
    } else {
        oppSide = "right";
    }
    if (tabOut[oppSide] == true) {
        tabClick(true, oppSide);
    }
    if (!tabOutStatus) {
        $("#title").css(side, "50%");
        $("#sidebar-" + side).css(side, 0);
        $("#sidebarTab-" + side).css(side, (.4 * window.innerWidth) - 10);
        $("#sidebarTab-" + side + " h5").fadeOut(500, 0);
        $("#arrow-" + side).html("<i class='fa fa-chevron-" + side + "' aria-hidden='true'></i>");
    } else {
        $("#title").css(side, "0");
        $("#sidebar-" + side).css(side, "-50%");
        $("#sidebarTab-" + side).css(side, "-10px");
        $("#sidebarTab-" + side + " h5").fadeIn(500, 0);
        $("#arrow-" + side).html("<i class='fa fa-chevron-" + oppSide + "' aria-hidden='true'></i>");
    }
    tabOut[side] = !tabOutStatus;
}
function tabClicksecond(tabOutStatussecond, side) {
    console.log("hi sdf dsj ");
    if (side == "up") {
        oppSide = "down";
    } else {
        oppSide = "up";
    }
    if (tabOutsecond[oppSide] == true) {
        tabClicksecond(true, oppSide);
    }
    if (!tabOutStatussecond) {
        if (side == "up") {
            $("#title").css("left", "50%");
            $("#sidebar-" + side).css("left", 0);
            $("#sidebarTab-" + side).css("left", (.4 * window.innerWidth) - 10);
            $("#sidebarTab-" + side + " h5").fadeOut(500, 0);
            $("#arrow-" + "left").html("<i class='fa fa-chevron-" + "left" + "' aria-hidden='true'></i>");
        }
        else {
            $("#title").css("right", "50%");
            $("#sidebar-" + side).css("right", 0);
            $("#sidebarTab-" + side).css("right", (.4 * window.innerWidth) - 10);
            $("#sidebarTab-" + side + " h5").fadeOut(500, 0);
            $("#arrow-" + "right").html("<i class='fa fa-chevron-" + "left" + "' aria-hidden='true'></i>");

        }
    } else {
        if (side == "up") {
            $("#title").css("left", "0");
            $("#sidebar-" + side).css("left", "-40%");
            $("#sidebarTab-" + side).css("left", "-20px");
            $("#arrow-" + "left").html("<i class='fa fa-chevron-" + "right" + "' aria-hidden='true'></i>");
        }
        else {
            $("#title").css("right", "0");
            $("#sidebar-" + side).css("right", "-40%");
            $("#sidebarTab-" + side).css("right", "-20px");
            $("#arrow-" + "right").html("<i class='fa fa-chevron-" + "left" + "' aria-hidden='true'></i>");
        }
        if (window.innerWidth < 360) {
            $("#navbar").fadeToggle(500);
        }
    }
    tabOutsecond[side] = !tabOutStatussecond;
}
// CHANGINGN SUBTITLE CODE
function changeSubtitle() {
    var i = 0;
    setInterval(function () {
        $("#subtitle").fadeTo(300, 0).fadeTo(300, 1);
        setTimeout(function () {
            $("#subtitle").text(subtitles[i]);
        }, 300);
        i++;
        if (i == subtitles.length) {
            i = 0;
        }
    }, 1500);
}
//CHANGING SUBTITLE CODE END
// contect button code
var $button = document.querySelector('.register-button');
$button.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay });
    TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});