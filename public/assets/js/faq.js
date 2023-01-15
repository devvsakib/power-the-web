const items = document.querySelectorAll(".item-header");

function toggle(){
    $(".accordion-item").removeClass("active");
    $(this).parent().addClass("active");
    $(".icon").text("+");
    $(this).children(".icon").text("-");
    $(this).children(".icon").css("line-height", "15px");
}

items.forEach(item => item.addEventListener('click', toggle));
