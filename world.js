class World {
    constructor() {
        this.world = [{"size": 100, "x": 0, "y": 0, "value": 0, "children": []}]
    }

    getParticle(x, y, layer) {
        for (let quad_ = 0; quad_ < layer.length; quad_++) {
            let quad = layer[quad_]
            if (quad["x"] <= x && quad["y"] <= y && quad["x"] + quad["size"] >= x && quad["y"] + quad["size"] >= y) {
                if (quad["children"].length == 0) {
                    return quad["value"]
                } else {
                    return this.getParticle(x, y, quad["children"])
                }
            }
        }
    }

    setParticle(x, y, layer, value) {
        if (Math.floor(layer[0]["size"] / 2) == 1) {
            layer[0]["value"] = value
            console.log("REACHED END")
            return true
        }

        for (let quad_ = 0; quad_ < layer.length; quad_++) {
            let quad = layer[quad_]
            if (quad["x"] <= x && quad["y"] <= y && quad["x"] + quad["size"] >= x && quad["y"] + quad["size"] >= y) {
                if (quad["children"].length == 0) {
                    let chunk_x = Math.floor(x / Math.floor(quad["size"] / 2)) * Math.floor(quad["size"] / 2)
                    let chunk_y = Math.floor(y / Math.floor(quad["size"] / 2)) * Math.floor(quad["size"] / 2)

                    console.log(chunk_x, x)
                    console.log(chunk_y, y)

                    quad["children"].push({
                        "size": Math.floor(quad["size"] / 2), 
                        "x": chunk_x, "y": chunk_y, 
                        "value": 0, "children": []
                    })
                }
                let found = this.setParticle(x, y, quad["children"], value)
                return found
            }
        }
        console.log(this.world)
    }
}