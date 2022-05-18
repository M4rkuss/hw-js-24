// document.body.addEventListener('mousemove', function (event) {
//   document.getElementById("coordinateX").innerText = event.pageX;
//   document.getElementById("coordinateY").innerText = event.pageY;
//   if (event.which === 1) {
//     document.getElementById("mouseBtn").innerText = "левой";
//   }
//   if (event.which === 3) {
//     document.getElementById("mouseBtn").innerText = "правой";
//   }
//   if (event.which === 2) {
//     document.getElementById("mouseBtn").innerText = "средней";
//   }
// })

//2)
// document.getElementById('inputName').addEventListener('keydown', function (event){
//   if (event.keyCode >=48 && event.keyCode <= 57) {
//     event.preventDefault()
//   }
// })

//3)
document.getElementById('btnChangeColor').addEventListener('click', function (event) {
  if (document.getElementsByClassName('circle-item')[1].classList.contains('active')) {
    document.getElementsByClassName('circle-item')[1].classList.remove('active')
    document.getElementsByClassName('circle-item')[2].classList.add('active')
  }
  else if (document.getElementsByClassName('circle-item')[2].classList.contains('active')) {
    document.getElementsByClassName('circle-item')[2].classList.remove('active')
    document.getElementsByClassName('circle-item')[0].classList.add('active')
  }
  else if (document.getElementsByClassName('circle-item')[0].classList.contains('active')) {
    document.getElementsByClassName('circle-item')[0].classList.remove('active')
    document.getElementsByClassName('circle-item')[1].classList.add('active')
  }
})