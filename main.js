const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var world = new World()
console.log(world.getParticle(40, 40, world.world))
console.log(world.setParticle(40, 70, world.world, 1))
console.log(world.setParticle(41, 70, world.world, 1))
console.log(world.setParticle(60, 30, world.world, 1))

ctx.fillStyle = "#000000"
for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
        let type = world.getParticle(x, y, world.world)
        if (type == 1) {
            ctx.fillRect(x, y, 1, 1)
        }
    }
}