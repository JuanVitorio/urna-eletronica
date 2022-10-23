'use strict'

function numero(num) {
  let arr = []
  arr[0] = num
  console.log(arr)
}

function votar() {
  let num1 = String(document.getElementById('num1').value)
  let num2 = String(document.getElementById('num2').value)



  let voto = num1 + num2

  if (Number(voto) == 12) {
    artur()
  } else if (Number(voto) == 30) {
    mamae()
  }

}

function artur() {
  document.querySelector('.inputs-visibles').classList.toggle('hide')
  document.querySelector('.img-box').classList.toggle('hide')
  document.querySelector('.expli').classList.toggle('hide')
  document.querySelector('#nome-candidato').innerHTML = 'Turzin'
  document.querySelector('#partido-candidato').innerHTML = 'ZK'
  document.querySelector('.img-urna').src = '../img/turzin.jpg'
  document.querySelector('#input-one').innerHTML = '1'
  document.querySelector('#input-two').innerHTML = '2'
}

function mamae() {
  document.querySelector('.inputs-visibles').classList.toggle('hide')
  document.querySelector('.img-box').classList.toggle('hide')
  document.querySelector('.expli').classList.toggle('hide')
  document.querySelector('#nome-candidato').innerHTML = 'Claudercia Ferreira'
  document.querySelector('#partido-candidato').innerHTML = 'LC'
  document.querySelector('.img-urna').src = '../img/mamae.jpg'
  document.querySelector('#input-one').innerHTML = '3'
  document.querySelector('#input-two').innerHTML = '0'
}