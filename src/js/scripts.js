/*Обработка и отправка формы через AJAX*/
$('#offer-form').on('submit', function(event) {
    event.preventDefault();
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
});