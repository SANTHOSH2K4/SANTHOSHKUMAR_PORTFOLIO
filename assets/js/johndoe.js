/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  
  // Construct the mailto URL
  var mailtoLink = 'mailto:santhosh20041@outlook.com'
                 + '?subject=' + encodeURIComponent(subject)
                 + '&body=' + encodeURIComponent('Name: ' + name + '\n\nMessage:\n' + message);
  
  // Open the default mail client with the pre-filled draft
  window.location.href = mailtoLink;
});
