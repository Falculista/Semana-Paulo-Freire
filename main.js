let isNavVisible = true

function toggleNav() {

    if (isNavVisible) {
        document.getElementById("navbar").style.display = 'none'
        isNavVisible = false
    } else {
        document.getElementById("navbar").style.display = 'flex'
        isNavVisible = true
    }
}
