var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var sub = document.getElementById('sub').value;
    var message = document.getElementById('message').value;
    var body = 'Name : ' + name + '<br/>Email : ' + email + '<br/>Phone no. : ' + phone + '<br/>Subject : ' + sub + '<br/>Message : ' + message;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "singhsanju456789@gmail.com",
        Password: "A9C88B45005EAB2E627970E4D9F5A042B63F",
        To: 'pratapsinghshreshth123@gmail.com',
        From: "singhsanju456789@gmail.com",
        Subject: sub,
        Body: body
    }).then(
        message => alert("Your Query is successfully submited..!!")
    );

    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    output.innerHTML += "Form submitted successfully! <br>";
})