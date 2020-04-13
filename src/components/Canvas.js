import React from 'react';
import Idle1 from '../assets/character/idle1.png'
import Idle2 from '../assets/character/idle2.png'
import Jump from '../assets/character/jump.png'
import BgShrooms from '../assets/backgrounds/background.png'
import Grass from '../assets/ground/grass.png'
import Time, {currentTime} from '../components/Time'
import Meat from '../assets/items/meat.png'

export let HungerLevel = 0;

let charPng = new Image();
let bgPng = new Image();
let groundTile = new Image();
let meatItem = new Image();

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ground: Grass,
            bg: BgShrooms,
            roll: 0,
            gravity: 0.8,
            lift: -15,
            pull: 5,
            items: {
                meat: {
                    sprite: Meat,
                    x: 220,
                    y: 500,
                    w: 50,
                    h: 50
                }
            },
            pet: {
                sprite: Idle1,
                x: 100,
                y: 500,
                w: 50,
                h: 70,
                velocity: 5,
                radius: 40
            }
        }
    }
    field = () => {
        const ctx = this
            .refs
            .canvas
            .getContext("2d");
        bgPng.src = this.state.bg;
        groundTile.src = this.state.ground;
        ctx.drawImage(bgPng, 0, -400)
        ctx.drawImage(groundTile, 0, 540, 50, 50)
        ctx.drawImage(groundTile, 50, 540, 50, 50)
        ctx.drawImage(groundTile, 100, 540, 50, 50)
        ctx.drawImage(groundTile, 150, 540, 50, 50)
        ctx.drawImage(groundTile, 200, 540, 50, 50)
        ctx.drawImage(groundTile, 250, 540, 50, 50)
        ctx.drawImage(groundTile, 300, 540, 50, 50)
        ctx.drawImage(groundTile, 350, 540, 50, 50)
        ctx.drawImage(groundTile, 400, 540, 50, 50)
        ctx.drawImage(groundTile, 450, 540, 50, 50)
        ctx.drawImage(groundTile, 500, 540, 50, 50)
        ctx.drawImage(groundTile, 550, 540, 50, 50)
        ctx.drawImage(groundTile, 600, 540, 50, 50)
        ctx.drawImage(groundTile, 650, 540, 50, 50)
        ctx.drawImage(groundTile, 700, 540, 50, 50)
        ctx.drawImage(groundTile, 750, 540, 50, 50)
        ctx.drawImage(groundTile, 800, 540, 50, 50)
        ctx.drawImage(groundTile, 850, 540, 50, 50)
        ctx.drawImage(groundTile, 900, 540, 50, 50)
        ctx.drawImage(groundTile, 950, 540, 50, 50)
        ctx.drawImage(groundTile, 1000, 540, 50, 50)
        ctx.drawImage(groundTile, 1050, 540, 50, 50)
        ctx.drawImage(groundTile, 1100, 540, 50, 50)
        ctx.drawImage(groundTile, 1150, 540, 50, 50)
        ctx.drawImage(groundTile, 1200, 540, 50, 50)

    }
    item = () => {
        const ctx = this
            .refs
            .canvas
            .getContext("2d");
        meatItem.src = this.state.items.meat.sprite
        ctx.drawImage(meatItem, this.state.items.meat.x, this.state.items.meat.y, this.state.items.meat.w, this.state.items.meat.h)

    }
    character = () => {
        const ctx = this
            .refs
            .canvas
            .getContext("2d");
        charPng.src = this.state.pet.sprite

        ctx.drawImage(charPng, this.state.pet.x, this.state.pet.y, 50, 70);

    }
    movementRoll = () => {
        if (this.state.roll === 0 && this.state.roll <= 10) {
            charPng.src = this.state.pet.sprite
            this.character();
            this.setState({
                pet: {
                    sprite: Jump,
                    x: this.state.pet.x,
                    y: this.state.pet.y,
                    velocity: this.state.pet.velocity + this.state.lift,
                    radius: this.state.pet.radius
                }
            })
        } else if (this.state.roll >= 11 && this.state.roll <= 20) {
            charPng.src = this.state.pet.sprite
            this.character();
            this.setState({
                pet: {
                    sprite: Idle1,
                    x: this.state.pet.x + 20 + this.state.pull,
                    y: this.state.pet.y,
                    velocity: this.state.pet.velocity,
                    radius: this.state.pet.radius
                }
            })
        } else if (this.state.roll >= 21 && this.state.roll <= 30) {
            charPng.src = this.state.pet.sprite
            this.character();
            (this.setState({
                pet: {
                    sprite: Idle2,
                    x: this.state.pet.x - 20 - this.state.pull,
                    y: this.state.pet.y,
                    velocity: this.state.pet.velocity,
                    radius: this.state.pet.radius
                }
            }))
        }
    }
    collisionDetection = () => {
        if (this.state.pet.x + 15 > this.state.items.meat.x) {
            this.setState({
                items: {
                    meat: {
                        sprite: Meat,
                        x: -200,
                        y: 500,
                        w: 0,
                        h: 0
                    }
                }
            })

        }
    }
    meatSpawner = () => {
        if (this.state.items.meat.x < 0 && this.state.items.meat.w === 0) {
            this.setState({
                items: {
                    meat: {
                        sprite: Meat,
                        x: Math.floor((Math.random() * 1000) + 0),
                        y: 500,
                        w: 50,
                        h: 50
                    }
                }
            })

        }
    }
    update = () => {
        let newV = (this.state.pet.velocity + this.state.gravity) * 0.9
        this.setState({
            roll: Math.floor((Math.random() * 1800) + 0),
            pet: {
                sprite: this.state.pet.sprite,
                x: Math.max(Math.min(this.state.pet.x, this.refs.canvas.width - 20), true),
                y: Math.max(Math.min(this.state.pet.y + newV, this.refs.canvas.height - 50 - this.state.pet.radius), 0),
                velocity: newV,
                radius: this.state.pet.radius
            }
        });
        this.movementRoll();
        this.meatSpawner();
        this.character()
    }

    componentDidMount() {
        setInterval(() => {
            this.field();
            this.update();
            this.item();
            this.collisionDetection();

        }, 1000 / currentTime.seconds);

    }
    render() {
        return (
            <div>
                <Time/>
                <canvas
                    style={{
                    border: "1px solid #000"
                }}
                    ref="canvas"
                    width={1228}
                    height={570}/>
            </div>
        )
    }
}
export default CanvasComponent