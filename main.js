let isNavVisible = true

function toggleNav() {

    if (isNavVisible) {
        document.getElementById("barra-navegacao").style.display = 'none'
        isNavVisible = false
    } else {
        document.getElementById("barra-navegacao").style.display = 'flex'
        isNavVisible = true
    }
}