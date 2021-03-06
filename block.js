const blockSize = 40;

export class Block { 
    constructor(colour, startingX, startingY) {
        this.colour = colour
        this.x = startingX;
        this.y = startingY
    }

    move(xChange, yChange) {
        this.x += xChange;
        this.y += yChange;
    }

    draw(ctx) { // input context
        ctx.fillStyle = this.colour;

        // + 1, blockSize - 2 used to create the border
        const x = this.x * blockSize + 1;
        const y = this.y * blockSize + 1;
        const size = blockSize - 2;
        ctx.fillRect(x, y, size, size);
    }
}