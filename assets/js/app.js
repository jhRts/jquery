
/* 
    Set up modal for ToDo
*/

    $(".TODO").each(function () {
        $("#myModal .modal-body").append($(this).clone().show().text() + "<br>");
    });


/*
    Menu
*/
var items = $("section");
var ul = $('.bs-docs-sidenav');
$(items).each(function() {
    var item = $(this);
    ul.append('<li><a href="#' + item.attr("id") + '"><i class="icon-chevron-right"></i>' + $("h1", item).text() + '</a></li>');
});
$("li:first", ul).addClass("active");




/*
    forside anime
*/
var tl = new TimelineLite();
function splitText(el) {
    var text = $(el),
        mysplit = $(text).text().split(""),
        prevLetter;
        text.html("");
        $.each(mysplit, function (index, val) {
            if (val === " ") {
                val = "&nbsp;";
            }
            var letter = $("<span/>", {
                id: "txt" + index
            }).addClass('txt').html(val).appendTo(text);

            //if (prevLetter) {
            //    console.debug("test");
            //    //   $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
            //    console.log("left prevLetter " + $(prevLetter).position().left, "width " + $(letter).width(), $(prevLetter).position().left + $(letter).width());
            //} else {
            //    // $(letter).css("left", (42 + $(letter).width()) + "px");

            //}
            //    prevLetter = letter;
        });
}
splitText("#title-name");

$(".toTop").click(function (){
    var completeCalled = false;
    $("html, body").animate(
        { scrollTop: "0px" },
        {
            complete: function () {
                if (!completeCalled) {
                    completeCalled = true;
                    window.location.href = $("#menu .nav .active").next("li").find('a').attr("href");
                }
            }
        }
    );
});

//console.log($("#menu .nav .active").next("li").find('a').attr("href"))

$('.myTooltip').tooltip()


//$(".navbar-inner .nav-collapse").load("temp/menu.html");