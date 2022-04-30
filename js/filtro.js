let filtro = document.querySelector('#filtro');

filtro.addEventListener('input',function() {
    
    let paciente = document.querySelectorAll('.paciente');

    if(this.value.length > 0){

        paciente.forEach((paciente) => {
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            let expReg = new RegExp(this.value, "i")
            
            if(!expReg.test(nome)){
                paciente.classList.add('esconde');
            }else{
                paciente.classList.remove('esconde');
            }
        })
    }else{
        paciente.forEach((paciente) => {
            paciente.classList.remove('esconde');
        })
    }

    
});