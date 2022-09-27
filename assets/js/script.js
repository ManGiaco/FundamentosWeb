
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

const mapa = document.querySelector('#mapa')

function validaNome() {
  let txtNome = document.querySelector('#txtNome')

  if(nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido. Digite ao menos 3 caracteres.'
    txtNome.style.color = '#EE2E31'
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome válido.'
    txtNome.style.color = '#4A314D'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email inválido.'
    txtEmail.style.color = '#EE2E31'
    emailOk = false
  } else {
    txtEmail.innerHTML = 'Email válido.'
    txtEmail.style.color = '#4A314D'
    emailOk = true
  }
}

function validaEmail2() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  if(email.value.match(regex)){
    txtEmail.innerHTML = 'Email válido.'
    txtEmail.style.color = '#4A314D'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'Email inválido.'
    txtEmail.style.color = '#EE2E31'
    emailOk = false
  }
}

function validaMensagem() {
  let txtMsg = document.querySelector('#txtMsg')

  if(mensagem.value.length >= 100) {
    txtMsg.innerHTML = 'Mensagem muito grande, digite no máximo 100 caracteres.'
    txtMsg.style.color = '#EE2E31'
    mensagemOk = false
  } else {
    txtMsg.innerHTML = mensagem.value.length + '/100'
    txtMsg.style.color = '#4A314D'
    mensagemOk = true
  }
}

function enviarForm() {
  if(nomeOk === true && emailOk === true && mensagemOk === true) {
    alert(nome.value + ', mensagem enviada com sucesso, aguarde um contato dos nossos zumbis por e-mail.')
  } else {
    alert('Por favor, preencha todos os campos corretamente. Nossos zumbis não são videntes e nem gostam de textão')
  }

}

function mapaZoom() {
  mapa.style.aspectRatio = '16/11'
}

function mapaNormal() {
  mapa.style.aspectRatio = '16/9'
}