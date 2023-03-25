let isMoving = true

function setBgMoving() {
    if (isMoving == true) {
        setTimeout(function () {

            // background bejalan
            let bg = document.getElementById('board')
            bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px',''))-1) + 'px'

            // update live score
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) +1

            // panggil fungsi terus menerus (recursive)
            setBgMoving()
        },5)
    }
}
setBgMoving() // inisialisai fungsi bg berjalan


function setBoxMoving() {
    let box = document.getElementById('box'),
        dino = document.getElementById('dino')

        setTimeout(function () {

            box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px','')) -1 ) + 'px';

            if (box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px','')) < -100)) {
                box.style.marginLeft = '600px'
            }

            if (dino.offsetTop + 50 >= box.offsetTop &&
                dino.offsetLeft + 50 >= box.offsetLeft && 
                dino.offsetTop + 50 <= box.offsetTop + 50 &&
                dino.offsetLeft + 50 <= box.offsetLeft + 50) {
                alert('game over, Score anda : ' + document.getElementById('score').innerHTML)
                dino.setAttribute('class','freeze')
                location.href = 'index.html'
                isMoving = false
            } else {
                // panggil fungsi terus menerus (recursive)
                setBoxMoving()
            }
        },5)
}
setBoxMoving()


window.addEventListener('keyup', function(tab) {

    // untuk mendeteksi tombob
    if (tab.keyCode == 32) {
        
        // setting dino loncat
        document.getElementById('dino').style.marginTop = '30px'
        document.getElementById('dino').setAttribute('class', 'freeze')

        // kembalikan dino kedarat
        this.setTimeout(function () {
            document.getElementById('dino').style.marginTop = '170px'
            document.getElementById('dino').setAttribute('class', '')
        }, 1000)
    }
})