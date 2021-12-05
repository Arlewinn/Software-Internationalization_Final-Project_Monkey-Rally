MouseGame.Credits = function (game) {
    "use strict";

    //  Our main menu
    this.game = game;
};

var creditText;
var codeText;
var anitaText;
var graphicText;
var erikLauraText;
var musicText;
var raxlText;
var backText;


MouseGame.Credits.prototype = {


    preload: function() {
        "use strict";
        // game.load.image('credits-background','assets/backgrounds/credits-background.jpg');

        // // Buttons
        // game.load.image('button-back','assets/buttons/back.png');
    },

    create: function () {
        "use strict";

        this.game.add.sprite(0, 0, 'credits-background');
        // bg.scale.setTo(2.5, 2.5);

        // var t = this.game.add.sprite(100, 600, 'touhou');
        // t.anchor.setTo(0, 1);

        var button = this.game.add.button(this.game.world.centerX, 630, 'button-back', this.showMenu, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
        MouseGame.MainMenu.prototype.bindButtonHover(button);
        //history.pushState(null, null, '#credits');
        
            //history.pushState(null, null, '#levelselector');
            creditText = game.add.text(creditTextX, creditTextY, credit, creditsStyle);
            codeText = game.add.text(codeTextX, codeTextY, code, creditsStyle);
            anitaText = game.add.text(anitaTextX, anitaTextY, anita, creditsStyle);
            graphicText = game.add.text(graphicTextX, graphicTextY, graphic, creditsStyle);
            erikLauraText = game.add.text(erikLauraTextX, erikLauraTextY, erikLaura, creditsStyle);
            musicText = game.add.text(musicTextX, musicTextY, music, creditsStyle);
            raxlText = game.add.text(raxlTextX, raxlTextY, raxl, creditsStyle);
            backText = game.add.text(backX, backY, back, creditsStyle);

            /*level1Text = game.add.text(level1X, level1Y, level1, levelStyle);
            level2Text = game.add.text(level2X, level2Y, level2, levelStyle);
            level3Text = game.add.text(level3X, level3Y, level3, levelStyle);
            level4Text = game.add.text(level4X, level4Y, level4, levelStyle);
            level5Text = game.add.text(level5X, level5Y, level5, levelStyle);
            level6Text = game.add.text(level6X, level6Y, level6, levelStyle);
            level7Text = game.add.text(level7X, level7Y, level7, levelStyle);
            level8Text = game.add.text(level8X, level8Y, level8, levelStyle);
            backText = game.add.text(backX, backY, back, levelStyle);*/
    },

    showMenu: function () {
        "use strict";

        this.game.state.start('mainmenu');
    },

};



