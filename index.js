import { Go1, Go1Mode}  from "@droneblocks/go1-js";

class myClient {                                                                                                                                           
    constructor() {                                                                                                                                          
      this.robotDog = new Go1();
      this.robotDog.init();                                                                                                                             
    }

    async blinky() {
      for (let i = 0; i < 10; i++) {
        await this.robotDog.setLedColor(255, 0, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(255, 165, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(255, 255, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(0, 255, 0);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(75, 0, 130);
        await this.robotDog.wait(2000);
        await this.robotDog.setLedColor(148, 0, 211);
        await this.robotDog.wait(2000);
      }
    }
    
    async onMessage() {
      //WALKING
      const SLOW_SPEED = 0.10000000000000000;
      const MED_SPEED = 0.50000000000000000;
      const FAST_SPEED = 0.90000000000000000;
      
      // FORWARD
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goForward(SLOW_SPEED, 100);
      }
      // BACKWARD
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goBackward(SLOW_SPEED, 100);
      }
      // LEFT
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goLeft(SLOW_SPEED, 100);
      }
      // RIGHT
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goRight(SLOW_SPEED, 100);
      }
      // LEFT
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goLeft(SLOW_SPEED, 100);
      }
      
      //TURN LEFT RIGHT
      
      await this.robotDog.wait(1000);
      await this.robotDog.turnLeft(FAST_SPEED, 1000);
      await this.robotDog.turnRight(MED_SPEED, 2000);
      
      // HOP HERE
      
     
      //PUSH UPS
      for (let i = 0; i < 4; i++) {
        this.robotDog.setMode(Go1Mode.standDown);
        await this.robotDog.wait(2000);
        this.robotDog.setMode(Go1Mode.standUp);
        await this.robotDog.wait(2000);
      }
      // HOP HERE
      await this.robotDog.wait(3000);
      await this.robotDog.resetBody();
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goForward(MED_SPEED, 100);
        await this.robotDog.resetBody();
      }
      //WALKING IN ANOTHER WAY
      // LOOK UP
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.lookUp(FAST_SPEED, 100);
      }
      // LOOK DOWN
      await this.robotDog.wait(5000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.lookDown(FAST_SPEED, 100);
      }
      // LEAN LEFT
      await this.robotDog.wait(5000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.leanLeft(FAST_SPEED, 100);
      }
      // LEAN RIGHT
      await this.robotDog.wait(5000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.leanRight(FAST_SPEED, 100);
      }
      // TWIST LEFT
      await this.robotDog.wait(5000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.twistLeft(MED_SPEED, 100);
      }
      // TWIST RIGHT
      await this.robotDog.wait(5000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.stand);
        await this.robotDog.twistRight(MED_SPEED, 100);
      }
      //HOP HERE DOESNT WORK
      //BEGGING MODE
      await this.robotDog.wait(3000);
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.straightHand1);
        await this.robotDog.wait(3000);
      }
      
     //HOPPING
      await this.robotDog.wait(3000);
      await this.robotDog.resetBody();
      for (let i = 0; i < 2; i++) {
        await this.robotDog.wait(1000);
        this.robotDog.setMode(Go1Mode.walk);
        await this.robotDog.goForward(MED_SPEED, 100);
        await this.robotDog.resetBody();
      }
      
      
    
    }
}

const client = new myClient();
client.blinky();
client.onMessage();





