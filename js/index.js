// const forms = document.querySelectorAll(".needs-validation");

// Array.from(forms).forEach((form) => {
//   form.addEventListener(
//     "submit",
//     (event) => {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add("was-validated");
//     },
//     false
//   );
// })();

let allsection = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav a");

// window.onscroll = function () {
//   allsection.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlink.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//       });
//     }
//   });
// };

$(".alert").hide();
$("form").submit(function (e) {
  e.preventDefault();
  if (
    $("input[id = validationCustom01]").val() ||
    ($("textarea").val() === $("input").val() && $("textarea").val())
  ) {
    $(`.alert`).append($("input[id = validationCustom01]").val()).show();
    setTimeout(() => {
      $(".alert").hide();
    }, 3000);
  }
  $("input").val("");
  $("textarea").val("");
});

$(".card-link").click(function () {
  // Recuperation des valeurs du cardre
  var titre = $(this).find(".card-title").text();
  var image = $(this).find(".card-img-top").attr("src");
  var prix = $(this).find(".price-none").text();
  var url =
    "commande.html?&titre = " +
    encodeURIComponent(titre) +
    "&image=" +
    encodeURIComponent(image) +
    "&prix=" +
    encodeURIComponent(prix);

  //Redirection vers la page de commande
  window.location.href = url;
});
//Recuperations des valeurs en parametres dans url de la page commande
$(document).ready(function () {
  var urlParams = location.href.split("&"); //Recherche de tout les parametre de l'url
  const titre = decodeURIComponent(urlParams[1].split("=")[1]);
  const image = decodeURIComponent(urlParams[2].split("=")[1]);
  const prix = decodeURIComponent(urlParams[3].split("=")[1]);

  $(".titreProduit").append(titre);
  $(".price").append(prix);
  $("#imageProduit").attr("src", image);
  $(".Total3").text("VOUS ALLEZ PAYER AU TOTAL:" + " " + prix);

  $("#submit-commande").prop("disabled", true);
  //
  $("#myForm input").on("input", function () {
    var inputs = $(".input-commande").val();
    var select = $(".input-commande-second").val();
    if (inputs && select === "") {
      $("#submit-commande").prop("disabled", true);
    } else {
      $("#submit-commande").prop("disabled", false);
    }
  });
  $(".input-commande").val("");
  $(".input-commande-second").val("");
});

// $(".card").click(function (e) {
//   e.preventDefault();
//   let image = $(this).children("img").attr("src");
//   console.log(image);
//      $('.order').append(`<div class="col-lg-6 ">
//      <img src="${image}" class="card-img-top" alt="...">
//    </div>`
//     )
// });

var cart_item = 0;
$(".btn2").click(function (e) {
  e.preventDefault();

  if ($(this).text() === "Add to Card") {
    cart_item++;
    $("#cart_item").text(cart_item);
    $("#cart_item1").text(cart_item);
    $(this).text("remove to card");
  } else if ($(this).text() === "remove to card") {
    cart_item--;
    $("#cart_item").text(cart_item);
    $("#cart_item1").text(cart_item);
    $(this).text("Add to Card");
  }
 
});

//   $('a').click(function(e){
//     e.preventDefault();
//     if($(this).text()==="Add to Card"){
//         $(this).parent().prev().slideUp(1000,()=>
//         $(this).children().text("remove card"))
//     }else{
//         $(this).parent().prev().slideDown(1000,()=>
//         $(this).next().children().text("Add to Card")
// )
//     }
//     })

// taille de la police

$("span")
  .last()
  .css({
    fontSize: `$[${this}.val()]px`,
  });
console.log($("span"));
// $('span').first().min().$('input').val()

// $('input').change(function(e){
//   e.preventDefault();
//     $('span').last().css({
//       fontSize:`$[${this}.val()]px`
//     })
//     $('span').first().max($(this).val())
// });

// Changement de couleur dans la page d'acceuil
$("#color-input").on("change", function () {
  $(".para").css("color", $(this).val());
});

//Changement du prix dans la page de commande
$(".quantity-input").on("change", function () {
  let quantity = Number($(this).val());
  let total = quantity * parseInt($(".price").text());
  $(".Total2").text(total + "FCFA");
  $(".Total3").text("VOUS ALLEZ PAYER AU TOTAL:" + " " + total + "FCFA");
});

//Verification du formulaire

//Slection du formaulaire

// let color = document.querySelector("#color-input");
// let paras = document.querySelectorAll("#para");
// color.addEventListener("change", () => {
//   for (let para of paras) {
//     para.style.color = color.value;
//   }
// });

// let input = document.querySelector("input");
// let total = document.querySelector(".price");
// let total2 = document.querySelector(".Total2");
// let total3 = document.querySelector("Total3");

// input.addEventListener("change", () => {
//   total1 = input.value * parseInt(total.textContent);
//   total2.textContent = total1 + "FCFA";
// });

// let allinput = $(this).find("input")
// let total = $(this).find(".price")
// let total2 = $(this).find(".Total2")
// let total3 = $(this).find(".Total3")

// $('input').change(function(e){
//   let total1 = $('input').val() * parseInt($('.price').text())
//   $("fs-5").text() = total1+'FCFA';

// })

let nav_link = document.getElementById("#navbar");
let close = document.getElementById("close");
let bar = document.getElementById("#bar");

if (bar) {
  bar.addEventListener("click", function () {
    nav_link.classList.add("active");
  });
}
if (close) {
  bar.addEventListener("click", function () {
    nav_link.classList.remove("active");
  });
}
