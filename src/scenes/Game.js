import Phaser from 'phaser' 

export default class Game extends Phaser. Scene 
{
    preload()
    {

    }

    create()
    {
        // const text = this.add.text(400, 250, 'GAME');
        // text.setOrigin(0.5, 0.5);

        
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
        const paddleLeft = this.add.rectangle(15, 250, 20, 400, 0xffffff);
        const paddleRight = this.add.rectangle(785, 250, 20, 400, 0xffffff);

        this.physics.add.existing(ball);
        this.physics.add.existing(paddleLeft, true);
        this.physics.add.existing(paddleRight, true);

        this.physics.add.collider([paddleLeft, paddleRight ], ball);
    
        ball.body.setCollideWorldBounds(true, 1,1)
        ball.body.setVelocity(200, 200);
        ball.body.setBounce(1,1);
    }

}

///https://www.youtube.com/watch?v=yo40OaolRs8&t=0s
// https://www.youtube.com/watch?v=h7wnLUJEKj8