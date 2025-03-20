const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var world = []

ctx.fillStyle = "#000000"
for (x = 0; x < 16; x++) {
    for (y = 0; y < 16; y++) {
        ctx.fillRect(x * 10, y * 10, 10, 10)
    }
}