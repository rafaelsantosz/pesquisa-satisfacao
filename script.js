var no=document.getElementById('no')
var nsei=document.getElementById('nsei')
var sim=document.getElementById('sim')
var msg=""

function aval1(){
    msg="Não indicaria"
    no.classList.remove('ava')
    no.classList.add('atno')
    nsei.classList.remove('atnsei')
    nsei.classList.add('ava')
    sim.classList.remove('atsim')
    sim.classList.add('ava')
}

function aval2(){
    msg="Não sei"
    no.classList.remove('atno')
    no.classList.add('ava')
    nsei.classList.remove('ava')
    nsei.classList.add('atnsei')
    sim.classList.remove('atsim')
    sim.classList.add('ava')
}

function aval3(){
    msg="Com certeza"
    no.classList.remove('atno')
    no.classList.add('ava')
    nsei.classList.remove('atnsei')
    nsei.classList.add('ava')
    sim.classList.remove('ava')
    sim.classList.add('atsim')
}

function res(){
    var ap1=document.getElementById('ap1')
    var ap2=document.getElementById('ap2')
    var feedback=document.getElementById('feedback')
    if(msg==""){
        window.alert('Deixe sua opinião!')
    }else{
        ap1.style.display='none'
        ap2.style.display='block'
        feedback.innerHTML+=`Feedback: ${msg}`
    }
}