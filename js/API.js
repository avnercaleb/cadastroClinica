let btn = document.querySelector('#importa-paciente');

btn.addEventListener('click', () => {
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener('load', () => {
        
    if(xhr.status == 200){
        let pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach((paciente) => {
            adicionaPaciente(paciente);
        })
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        let erro = document.querySelector("#erro-ajax");
        erro.classList.remove('esconde')
    }
        
    })

    xhr.send();
})