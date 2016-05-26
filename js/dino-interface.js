$(document).ready(function() {
  $('#getDino').click(function() {
    var elDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1'),
      fillContainer = function(html) {
        $('#showDino').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
      elDino.then(fillContainer, oops);
    });

  });


// $(document).ready(function() {
//   $('#getDino').click(function() {
//
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
//     xhr.onload = function() {
//       if (this.status === 200) {
//         document.querySelector('#showDino').innerHTML = this.response;
//       } else {
//         console.log('Where did all the dinosaurs go?');
//       }
//     };
//     xhr.send();
//   });
//   });
