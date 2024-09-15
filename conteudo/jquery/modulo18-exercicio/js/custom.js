// instancia jquery e evita conflitos
jQuery(function ($) {
  //$(document).ready(function () {
  let backgroundColor = {
    background: "linear-gradient(115deg, #1e1e1e 10%, #051937 90%)",
  };

  let destaquesProdutos = [
    {
      img: "./assets/images/item-01.jpg",
      h4: "Placa Mãe Gigabyte H410M",
      novo: true,
      h6: "R$778,00",
      ahref: "",
    },
    {
      img: "./assets/images/item-02.jpg",
      h4: "Processador Intel Core i7-12700",
      novo: false,
      h6: "R$1300,00",
      ahref: "",
    },
    {
      img: "./assets/images/item-03.jpg",
      h4: "Gabinete Gamer Rise Mode Galaxy Glass",
      novo: false,
      h6: "R$580,00",
      ahref: "",
    },
    {
      img: "./assets/images/item-04.jpg",
      h4: "2x Memória Kingston Fury Beast 8GB DDR4",
      novo: false,
      h6: "R$600,00",
      ahref: "",
    },
    {
      img: "./assets/images/item-05.jpg",
      h4: "Ssd 1TB Kingston NV2 M.2 2280",
      novo: false,
      h6: "R$433,00",
      ahref: "",
    },
    {
      img: "./assets/images/item-06.jpg",
      h4: "Headset sem fio PULSE 3D",
      novo: false,
      h6: "R$545,00",
      ahref: "",
    },
  ];

  destaquesProdutos.forEach((prod, idx) => {
    let component =
      `<div class="featured-item" id="carouselAdj"> <img src="${prod.img}" alt="Item ${idx}" />` +
      `<h4 id="carouselText">${prod.h4} <span id="product-badge" class="badge bg-primary">Novo</span></h4>` +
      `<h6>${prod.h6}</h6>` +
      `<a href="${prod.ahref}"> Comprar </a> </div>`;
    $("#carousel-contents").append(component);

    let children = $(".featured-item > h4 > span").get();
    if (!prod.novo) {
      $(children[idx]).css({
        color: "transparent",
        backgroundColor: "transparent",
        opacity: "0",
      });
    }
  });

  $("body").css(backgroundColor);

  $(".owl-carousel").owlCarousel();

  //   let titulos = $("h4"); // tag

  //   let itens = $(".featured-item"); // class

  //   let destaques = $("#featured"); // id

  //  console.log(titulos.first());

  // Configuração de produtos

  $(".featured-item a").addClass("btn btn-outline-primary stretch-link");

  //   $(".featured-item > h4 > span")
  //     .get()
  //     .forEach(function (entry, index, array) {
  //       if (index > 0) {
  //         $(entry).css({
  //           color: "transparent",
  //           backgroundColor: "transparent",
  //           opacity: "0",
  //         });
  //       }
  //     });

  // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
  // $('.featured-item:first h4').addClass('active')
  // $('.featured-item:first h4').removeClass('active')
  // $('.featured-item:first h4').toggleClass('active')
  // $('.featured-item:first h4').hide()
  // $('.featured-item:first h4').show()
  // $('.featured-item:first h4').fadeIn(2000)
  // $('.featured-item:first h4').fadeOut()
  //  $('.featured-item:first h4').css('color', '#f00')

  //   $(".featured-item h4").dblclick(function () {
  //     $(this).css({
  //       color: "#f00",
  //       background: "#ff0",
  //       "font-weight": "100",
  //     });
  //   });

  /*
   * Manipulação de eventos
   */
  $(".featured-item a").on("click", function (event) {
    event.preventDefault();

    // alert("Produto esgotado");
    $("#modal-stock").modal("show");
  });

  $("#button0").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let errors = 0;

    $("#form1 input")
      .get()
      .forEach((elmt) => {
        if (elmt.value == "") {
          $("#form1").addClass("was-validated");
          errors++;
        }
      });

    $("#form1 textarea")
      .get()
      .forEach((elmt) => {
        if (elmt.value == "") {
          $("#form1").addClass("was-validated");
          errors++;
        }
      });

    if (errors === 0) {
      $("#form1").removeClass("was-validated");
      $("#modal-contato").modal("toggle");
      $("#modal-formsent").modal("toggle");
    } else {
      errors = 0;
    }
  });

  $("#modal-formsent button").on("click", function (event) {
    $("#form1").trigger("submit");
  });

  $("#navbarResponsive a").on("click", function (event) {
    let screenWidth = $("body").width();
    if (screenWidth < 992) {
      $("#navbar-collapse-button").trigger("click");
    }
  });
});
