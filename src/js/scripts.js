/*Обработка и отправка формы через AJAX*/
$('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            phone: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Заполните поле.",
                minlength: jQuery.validator.format("Осталось символов: {0}."),
                maxlength: jQuery.validator.format("Введите не более 15 символов.")
            },
            phone: {
                required: "Заполните поле."
            }
        },
        submitHandler: function (form) {
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                data: $(this).serialize(),
                success: function(data) {
                    alert("Спасибо за заявку, скоро мы вам перезвоним.");
                    document.getElementById('user').value=null;
                    document.getElementById('phone').value=null;
                    }
            });
        },
    });
});