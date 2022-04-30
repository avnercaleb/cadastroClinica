let pacientes = document.querySelectorAll('.paciente');

for(let i=0; i < pacientes.length; i++) {
    paciente = pacientes[i];

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');
    let imc = tdImc.textContent;

    imc = calcImc(peso, altura);
    tdImc.textContent = imc;  

    function calcImc(peso, altura){
        let imc = 0;

        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }  
}












