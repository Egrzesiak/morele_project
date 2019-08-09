function getMoreleItemCount(url)
{
    const request = new XMLHttpRequest();
    request.addEventListener(
        "load",
        function(evt)
        {
            console.log(evt);
        },
        false);
    request.open('GET', url, true);
    request.send();
}

console.log("Start!");

const moreleLink = "https://www.morele.net/laptop-lenovo-thinkpad-l540-i5-4210m-8gb-240gb-ssd-dvd-rw-win-10-pro-refurbished-4144959/";

//getMoreleItemCount(moreleLink);

$.get(moreleLink, {}, function(results){
    alert(results); // will show the HTML from anotherPage.html
    alert($(results).find("div.prod-available").html()); // show "scores" div in results
  });

  $.get("middleman.php", {"site":moreleLink}, function(results){
    alert(results); // middleman gives Google's HTML to jQuery
  });

console.log("KONIEC!");