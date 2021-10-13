window.onscroll = () => {
  if (window.scrollY) {
    document.getElementsByTagName('header')[0].style.background = '#fff'
    document.getElementsByTagName('header')[0].style.boxShadow =
      '2px 2px 5px rgba(0, 0, 0, 0.1)'
  } else {
    document.getElementsByTagName('header')[0].style.background = 'none'
    document.getElementsByTagName('header')[0].style.boxShadow = 'none'
  }
}

function changeColor() {
  if (document.getElementById('use').value !== '') {
    document.getElementById('use').style.color = 'rgba(0, 0, 0, 0.87)'
    switch (document.getElementById('use').value) {
      case 'personal':
        document.getElementById('cost').innerText = 500
        break
      case 'small-team':
        document.getElementById('cost').innerText = 1500
        break
      case 'database':
        document.getElementById('cost').innerText = 5000
        break

      default:
        document.getElementById('cost').innerText = ''
        break
    }
  }
}
