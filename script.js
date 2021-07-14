var nao=document.getElementById('nao')
var nsei=document.getElementById('nsei')
var sim=document.getElementById('sim')
var msg=""

function ativar(avaliacao){
    if(avaliacao==nao){
        msg="Não indicaria"
        avaliacao.classList.remove('avaliacoes')
        avaliacao.classList.add('naoAtivo')
        nsei.classList.remove('nseiAtivo')
        nsei.classList.add('avaliacoes')
        sim.classList.remove('simAtivo')
        sim.classList.add('avaliacoes')  
    }else if(avaliacao==nsei){
        msg="Não sei"
        avaliacao.classList.remove('avaliacoes')
        avaliacao.classList.add('nseiAtivo')
        nao.classList.remove('naoAtivo')
        nao.classList.add('avaliacoes')
        sim.classList.remove('simAtivo')
        sim.classList.add('avaliacoes')
    }else{
        msg="Com certeza"
        avaliacao.classList.remove('avaliacoes')
        avaliacao.classList.add('simAtivo')
        nao.classList.remove('naoAtivo')
        nao.classList.add('avaliacoes')
        nsei.classList.remove('nseiAtivo')
        nsei.classList.add('avaliacoes')
    }
}

function resultado(){
    var container=document.getElementById('container')
    var blocoFinal=document.getElementById('blocoFinal')
    var feedback=document.getElementById('feedback')
    if(msg==""){
        window.alert('Deixe sua opinião!')
    }else{
        container.style.display='none'
        blocoFinal.style.display='block'
        feedback.innerHTML+=`Feedback: ${msg}`
    }
}