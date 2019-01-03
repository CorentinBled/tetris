import { Piece } from './piece.js'
import { BlockManager } from './blockManager.js';

const borderWidth = 10;

export class Tetris { 
    constructor() {
        // TODO: Set up the initial stuff
        console.log("In Tetris Constructor");
        this.keyDownHandler = this._onKeyDown.bind(this);
    }

    start() {
        console.log('App Starting...');
        
        this.canvas = document.getElementById('theCanvas');
        this.context = this.canvas.getContext('2d');
        this.piece = new Piece();
        this.blockManager = new BlockManager();
        this.blockManager.addBlocks(this.piece.blocks);
        this._animationLoop = window.requestAnimationFrame(() => this._update());

        document.addEventListener('keydown', this._keyDownHandler)
    }

    stop() {
        window.cancelAnimationFrame(this._animationLoop);
    }

    _update() {
        this._clearCanvas();
        this._drawBackground();
        this._drawFrame();   

        this.blockManager.draw(this.context);

        this._animationLoop = window.requestAnimationFrame(() => this._update()); // Refresh
    }

    _drawFrame() {
        this.context.strokeStyle = '#CCCCCC';
        this.context.lineWidth = borderWidth;
        this.context.rect(borderWidth / 2, borderWidth / - 2, this.canvas.width - borderWidth, this.canvas.height);
        this.context.stroke();
    }

    _drawBackground () {
        this.context.fillStyle = '#333333';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _onKeyDown() {

    }
}

let app = new Tetris()
app.start();