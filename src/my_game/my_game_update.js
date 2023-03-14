/*
 * File: my_game_update.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";
import MyGame from "./my_game_draw.js";

// The Update function, updates the application state. Make sure to _NOT_ draw
// anything from this function!
MyGame.prototype.update = function () {
    //Left mouse botton click

    //Update dialogue
    for(let i = 0; i < this.mDialogueSet.length; i++){
        this.mDialogueSet[i].update();
    }

    //Update for Class Dialog
    //this.mDialog.update();

        // //When button is clicked
        // const button1 = document.getElementById('button1');
        // if(button1 != null){
        //     button1.addEventListener('click', function(event){
        //         event.stopPropagation();
        //         //event.preventDefault();
    
        //         window.mIsOptionClicked = true;
    
        //         if(button1.parentNode){    
        //             button1.parentNode.removeChild(button1);
        //     }
        //     });
        // } 

        //When mouse is clicked
        //const button1 = document.getElementById('button1');
        //const button2 = document.getElementById('button2');
        //const button3 = document.getElementById('button3');

        //const {buttonParentNode1, button1, button2, button3} = window;
        const {buttonParentNode1} = window;

        document.addEventListener('click', function(event){
            //when button 1 is clicked
            if(event.target.id === 'button1'){
                console.log("click button1");
                window.mIsOptionClicked1 = true;
    
                if((buttonParentNode1) && (buttonParentNode1.contains(button1)) && (buttonParentNode1.contains(button2)) && (buttonParentNode1.contains(button3))){    
                    console.log("remove button");
                    //button1.parentNode.removeChild(button1);
                    //button2.parentNode.removeChild(button2);
                    //button3.parentNode.removeChild(button3);

                    // buttonParentNode1.removeChild(button1);
                    // buttonParentNode1.removeChild(button2);
                    // buttonParentNode1.removeChild(button3);

                    console.log("button1 before remove = " + button1);

                    button1.remove();
                    //button1 = undefined;
                    button2.remove();
                    //button2 = undefined;
                    button3.remove();
                    //button3 = undefined;

                    console.log("button1 after remove = " + button1);
                }
            }
            //when button 2 is clicked
            if(event.target.id === 'button2'){
                console.log("click button2");
                window.mIsOptionClicked2 = true;
    
                if((buttonParentNode1) && (buttonParentNode1.contains(button1)) && (buttonParentNode1.contains(button2)) && (buttonParentNode1.contains(button3))){   
                    buttonParentNode1.removeChild(button1);
                    buttonParentNode1.removeChild(button2);
                    buttonParentNode1.removeChild(button3);
                }
            }
            //when button 3 is clicked
            if(event.target.id === 'button3'){
                console.log("click button3");
                window.mIsOptionClicked3 = true;
    
                if((buttonParentNode1) && (buttonParentNode1.contains(button1)) && (buttonParentNode1.contains(button2)) && (buttonParentNode1.contains(button3))){    
                    buttonParentNode1.removeChild(button1);
                    buttonParentNode1.removeChild(button2);
                    buttonParentNode1.removeChild(button3);
                }
            }                        
            //when anything but button is clicked
            else{
                //console.log("click anything but button");
                    window.mIsOtherClicked = true;
            }
        });

    //When mIsOptionClicked1 is true, play certain dialogue
    if(window.mIsOptionClicked1){
        //console.log("mCounter = " + (this.mCounter - 1));
        this.mDialogueSet[this.mCounter].mVisible = false;

        //console.log("this.kHealthValue:" + this.kHealthValue);

        //Update health
        this.kHealthValue += this.mDialogueSet[this.mCounter - 1].kHealthAdd1;
        this.mHealth.setText(this.mDialogueSet[this.mCounter - 1].kHealth + ":" + this.kHealthValue);

        //Update Qi
        this.kQiValue += this.mDialogueSet[this.mCounter - 1].kQiAdd1;
        this.mQi.setText(this.mDialogueSet[this.mCounter - 1].kQi + ":" + this.kQiValue);        

        //Update Attack
        this.kAttackValue += this.mDialogueSet[this.mCounter - 1].kAttackAdd1;
        this.mAttack.setText(this.mDialogueSet[this.mCounter - 1].kAttack + ":" + this.kAttackValue);   
        
        //Update Defend
        this.kDefendValue += this.mDialogueSet[this.mCounter - 1].kDefendAdd1;
        this.mDefend.setText(this.mDialogueSet[this.mCounter - 1].kDefend + ":" + this.kDefendValue);           

        //console.log("this.mDialogueSet[this.mCounter - 1].kHealthAdd1:" + this.mDialogueSet[this.mCounter - 1].kHealthAdd1);
        //console.log("this.kHealthValue:" + this.kHealthValue);

        //Effect mode 1
        if(this.mDialogueSet[this.mCounter - 1].mEffectMode1 == 1){
            this.mDialogueSet[this.mDialogueSet[this.mCounter - 1].mOptionNextNumber1 - 1].oscillatePlayer();

            console.log("i=" + (this.mDialogueSet[this.mCounter - 1].mOptionNextNumber1 - 1) + "mOscillatePlayer=" + this.mDialogueSet[this.mDialogueSet[this.mCounter - 1].mOptionNextNumber1 - 1].mOscillatePlayer);
        }

        //Go to next page
        this.mCounter = this.mDialogueSet[this.mCounter - 1].mOptionNextNumber1 - 1;

        this.mDialogueSet[this.mCounter].mVisible = true;
        
        
        //console.log("mOptionNextNum1 = " + this.mDialogueSet[this.mCounter - 1].mOptionNextNumber1);
        window.mIsOptionClicked1 = false;
    }

    //When mIsOptionClicked2 is true, play certain dialogue
    if(window.mIsOptionClicked2){
        this.mDialogueSet[this.mCounter].mVisible = false;

        //Update health
        this.kHealthValue += this.mDialogueSet[this.mCounter - 1].kHealthAdd2;
        this.mHealth.setText(this.mDialogueSet[this.mCounter - 1].kHealth + ":" + this.kHealthValue);

        //Update Qi
        this.kQiValue += this.mDialogueSet[this.mCounter - 1].kQiAdd2;
        this.mQi.setText(this.mDialogueSet[this.mCounter - 1].kQi + ":" + this.kQiValue);          

        //Update Attack
        this.kAttackValue += this.mDialogueSet[this.mCounter - 1].kAttackAdd2;
        this.mAttack.setText(this.mDialogueSet[this.mCounter - 1].kAttack + ":" + this.kAttackValue);   
        
        //Update Defend
        this.kDefendValue += this.mDialogueSet[this.mCounter - 1].kDefendAdd2;
        this.mDefend.setText(this.mDialogueSet[this.mCounter - 1].kDefend + ":" + this.kDefendValue);     

        //Effect mode 1
        if(this.mDialogueSet[this.mCounter - 1].mEffectMode2 == 1){
            this.mDialogueSet[this.mDialogueSet[this.mCounter - 1].mOptionNextNumber2 - 1].oscillatePlayer();
        }

        //Update next slide
        this.mCounter = this.mDialogueSet[this.mCounter - 1].mOptionNextNumber2 - 1;
        //console.log("mOptionNextNumber2 = " + this.mDialogueSet[this.mCounter - 1].mOptionNextNumber2);
        this.mDialogueSet[this.mCounter].mVisible = true;
        
        window.mIsOptionClicked2 = false;
    }

    //When mIsOptionClicked3 is true, play certain dialogue
    if(window.mIsOptionClicked3){
        this.mDialogueSet[this.mCounter].mVisible = false;
        
        //Update health
        this.kHealthValue += this.mDialogueSet[this.mCounter - 1].kHealthAdd3;
        this.mHealth.setText(this.mDialogueSet[this.mCounter - 1].kHealth + ":" + this.kHealthValue);

        //Update Qi
        this.kQiValue += this.mDialogueSet[this.mCounter - 1].kQiAdd3;
        this.mQi.setText(this.mDialogueSet[this.mCounter - 1].kQi + ":" + this.kQiValue);           

        //Update Attack
        this.kAttackValue += this.mDialogueSet[this.mCounter - 1].kAttackAdd3;
        this.mAttack.setText(this.mDialogueSet[this.mCounter - 1].kAttack + ":" + this.kAttackValue);   
        
        //Update Defend
        this.kDefendValue += this.mDialogueSet[this.mCounter - 1].kDefendAdd3;
        this.mDefend.setText(this.mDialogueSet[this.mCounter - 1].kDefend + ":" + this.kDefendValue);             

        //Effect mode 1
        if(this.mDialogueSet[this.mCounter - 1].mEffectMode3 == 1){
            this.mDialogueSet[this.mDialogueSet[this.mCounter - 1].mOptionNextNumber3 - 1].oscillatePlayer();
        }

        //Update next slide
        this.mCounter = this.mDialogueSet[this.mCounter - 1].mOptionNextNumber3 - 1;
        this.mDialogueSet[this.mCounter].mVisible = true;
        //console.log("mOptionNextNum3 = " + this.mDialogueSet[this.mCounter - 1].mOptionNextNumber3);
        
        window.mIsOptionClicked3 = false;
    }

    //When mIsOtherclicked is true, play next dialogue
    if(window.mIsOtherClicked){
        if((this.mCounter < this.mDialogueSet.length)){
            this.mDialogueSet[this.mCounter].mVisible = true;
            if(this.mCounter - 1 >= 0){
                this.mDialogueSet[this.mCounter - 1].mVisible = false;
            }
            this.mCounter += 1;
        }

        //Update player attribute
        this.mHealth.setText(this.mDialogueSet[this.mCounter].kHealth + ":" + this.kHealthValue);
        console.log("this.mDialogueSet[this.mCounter].kHealth:" + this.mDialogueSet[this.mCounter].kHealth);
        this.mQi.setText(this.mDialogueSet[this.mCounter].kQi + ":" + this.kQiValue);      
        this.mAttack.setText(this.mDialogueSet[this.mCounter].kAttack + ":" + this.kAttackValue);   
        this.mDefend.setText(this.mDialogueSet[this.mCounter].kDefend + ":" + this.kDefendValue);     

        window.mIsOtherClicked = false;
    }


    //console.log("window.mIsOptionClicked = " + window.mIsOptionClicked);
   
    //When dialogue is clicked
    //Button is not clicked and mouse is clicked
    // if(engine.input.isButtonClicked(engine.input.eMouseButton.eLeft) && (!window.mIsOptionClicked)){
    //     //if(this.mDialogueSet[this.mCounter].isMouseInside()){
        
    //     if(this.mCounter < this.mDialogueSet.length){
    //         this.mDialogueSet[this.mCounter].mVisible = true;
    //         if(this.mCounter - 1 >= 0){
    //             this.mDialogueSet[this.mCounter - 1].mVisible = false;
    //         }

    //         this.mCounter += 1;
    //     }
    //}
    }

export default MyGame;