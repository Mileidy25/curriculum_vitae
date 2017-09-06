document.addEventListener('DOMContentLoaded', () =>{
 const form = document.getElementById('form-contacto');
 const contMessage = form.querySelector('.message-res');

 form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;

    const url = `https://wt-f998ad39cf2a6b9130d43e753db8e755-0.run.webtask.io/exercise-webtask`;

    fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email,
        comment: comment
    })
    })
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        form.reset();
        toggleMessage('Mensaje enviado con éxito, pronto estaré en contacto');
    })
    .catch(function (error) {
        console.log('Request failed', error);
        toggleMessage('Hubo un error al enviar el mensaje, por favor intenta más tarde');
    });
 })

 function toggleMessage(message){
     contMessage.innerHTML= message;
     contMessage.classList.remove('hide');
     setTimeout(()=>{ contMessage.classList.add('hide')}, 5000)
 }

});
