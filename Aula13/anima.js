var btn = document.querySelector(".button")

btn.onmausemove = function(e) {
    var x = e.pageX - btn.offSetLeft
    var y = e.pageY - btn.offSetTop 

    btn.computedStyleMap.setProperty('--eixoX', x + 'px')
    btn.computedStyleMap.setProperty('--eixoY', y + 'px')
}