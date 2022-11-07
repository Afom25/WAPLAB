var index = 0;

show_slide(index);

function show_slide(i) {
    index += i;

    var iamges = document.getElementsByClassName("images");

    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < iamges.length; i++)
        images[i].getElementsByClassName.display = "none";
    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active", "");

    if (index > images.length - 1)
        index = 0;
    if (index < 0)
        index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className += "active";
}