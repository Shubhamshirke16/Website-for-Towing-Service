document.getElementById("whatsappForm1").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("msg").value;
    

    var encodedMessage = encodeURIComponent(
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "service Type:" + subject + "\n" +
        "Message: " + msg
    );

    var link;

    // Check if user is on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${9637009624}&text=${encodedMessage}`;
    } else { // Desktop device
        link = `https://web.whatsapp.com/send?phone=${9637009624}&text=${encodedMessage}`;
    }

    window.open(link, '_blank');
});
