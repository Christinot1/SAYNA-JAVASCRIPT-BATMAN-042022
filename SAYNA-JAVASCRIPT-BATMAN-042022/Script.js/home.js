
const send = document.getElementById('popup');
const para = document.getElementById('textalert');
const border = document.getElementById('alert');
const btn = document.querySelector('.fermer');

const inputs = document.getElementsByClassName('cage');

send.addEventListener('submit', function(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            border.style.display = 'block'
            para.innerText = 'Veuillez remplir le formulaire'
            return false
        } else {
            border.style.display = 'block'
            para.innerText = 'Merci!!'
        }

    }

})

btn.addEventListener('click', () => {

    border.style.display = 'none'

})


$(document).ready(function() {
    $('.Accueil ul li').on({
        mouseenter: function() {
            $(this).css({
                'text-decoration': 'underline',
                'text-transform': 'bold',
                'color': '#ffffff',
                
            })

        },
        mouseleave: function() {
            $(this).css({
                'text-decoration': 'none',
                'text-transform': 'none',
                
            })

        }
    })

   

    $('.social').on({
        mouseenter: function() {
            $(this).css({

                'color': '#ffffff',
            })

        },
        mouseleave: function() {
            $(this).css(
                'color', '#000000',
            )

        }
    })
    




































})