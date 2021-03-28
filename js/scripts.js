'use strict';
const buttons = document.querySelectorAll('.button');

$(document).ready(function () {
  listaPicaPica();
  apartatCarta();
  carrousel();
  /* galeria(); */
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

function transparent() {
  $('.topbar').removeClass('topbar-white').addClass('topbar-transparent');
}
function white() {
  $('.topbar').removeClass('topbar-transparent').addClass('topbar-white');
}

function scrollMenu() {
  5 < $(window).scrollTop() ? white() : transparent();
}
scrollMenu(),
  $(window).on({
    scroll: function () {
      scrollMenu();
    },
  });

window.onscroll = function () {
  myFunction();
  scrollMenu();
};

var header = document.getElementById('myHeader');

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function burguerMenuFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topbar__ul') {
    x.className += ' responsive';
  } else {
    x.className = 'topbar__ul';
  }
}

function carrousel() {
  var e = $('.carousel');
  e.length &&
    e.each(function () {
      $(this).flickity({
        cellAlign: 'left',
        contain: true,
      });
    });
}

function apartatCarta() {
  $('.mybutton').click(function () {
    //alert("The paragraph was clicked.");
    buttons.forEach((button) => button.classList.remove('active'));
    this.classList.add('active');
    if ($(this).attr('id') == 'picapica') {
      console.log('this is picapica');
      listaPicaPica();
    } else if ($(this).attr('id') == 'primers') {
      console.log('this is primers');
      listaPrimers();
    } else if ($(this).attr('id') == 'segons') {
      console.log('this is segons');
      listaSegons();
    } else {
      console.log('this is postre');
      listaPostres();
    }
  });
}

function listaPicaPica() {
  $.ajax({
    url: 'carta/carta.json',
    type: 'get',
    datatype: 'json',
    beforeSend: function () {
      $('#contenidos').html('Procesando, espere por favor...');
    },
    success: function (data) {
      //var resposta=JSON.parse(data);
      console.log(data);
      var resposta = data;
      console.log(resposta);
      $('#contenidos').empty();
      $.each(resposta.picapica, function (index, element) {
        $('#contenidos').append(
          '<article class="item"><div class="item__header"><h3 class="item__title">' +
            element.titol +
            '</h3><span class="item__dots"></span><span class="item__price"></span></div></article>'
        );
        //$("#contenidos").append('<p>'+element.titol+'</p>');
      });
    },
    error: function (e) {
      //called when there is an error
      console.log(e.message);
      $('#contenidos').html('Ha habido un error ' + e.message);
    },
  });
}

function listaPrimers() {
  $.ajax({
    url: 'carta/carta.json',
    type: 'get',
    datatype: 'json',
    beforeSend: function () {
      $('#contenidos').html('Procesando, espere por favor...');
    },
    success: function (data) {
      //var resposta=JSON.parse(data);
      console.log(data);
      var resposta = data;
      console.log(resposta);
      $('#contenidos').empty();
      $.each(resposta.primers, function (index, element) {
        $('#contenidos').append(
          '<div class="item"><div class="item__header"><h3 class="item__title">' +
            element.titol +
            '</h3><span class="item__dots"></span><span class="item__price"></span></div><p class="item__description">' +
            element.descripcio +
            '</p></div>'
        );
        //$("#contenidos").append('<p>'+element.titol+'</p>');
      });
    },
    error: function (e) {
      //called when there is an error
      console.log(e.message);
      $('#contenidos').html('Ha habido un error ' + e.message);
    },
  });
}

function listaSegons() {
  $.ajax({
    url: 'carta/carta.json',
    type: 'get',
    datatype: 'json',
    beforeSend: function () {
      $('#contenidos').html('Procesando, espere por favor...');
    },
    success: function (data) {
      //var resposta=JSON.parse(data);
      console.log(data);
      var resposta = data;
      console.log(resposta);
      $('#contenidos').empty();
      $.each(resposta.segons, function (index, element) {
        $('#contenidos').append(
          '<div class="item"><div class="item__header"><h3 class="item__title">' +
            element.titol +
            '</h3><span class="item__dots"></span><span class="item__price"></span></div><p class="item__description">' +
            element.descripcio +
            '</p></div>'
        );
        //$("#contenidos").append('<p>'+element.titol+'</p>');
      });
    },
    error: function (e) {
      //called when there is an error
      console.log(e.message);
      $('#contenidos').html('Ha habido un error ' + e.message);
    },
  });
}

function listaPostres() {
  $.ajax({
    url: 'carta/carta.json',
    type: 'get',
    datatype: 'json',
    beforeSend: function () {
      $('#contenidos').html('Procesando, espere por favor...');
    },
    success: function (data) {
      //var resposta=JSON.parse(data);
      console.log(data);
      var resposta = data;
      console.log(resposta);
      $('#contenidos').empty();
      $.each(resposta.postres, function (index, element) {
        $('#contenidos').append(
          '<div class="item"><div class="item__header"><h3 class="item__title">' +
            element.titol +
            '</h3><span class="item__dots"></span><span class="item__price"></span></div></div>'
        );
        //$("#contenidos").append('<p>'+element.titol+'</p>');
      });
    },
    error: function (e) {
      //called when there is an error
      console.log(e.message);
      $('#contenidos').html('Ha habido un error ' + e.message);
    },
  });
}
