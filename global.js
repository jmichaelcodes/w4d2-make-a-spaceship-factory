// Object Literal
var spaceship1 = {
    name: 'Galaxy Cruiser',
    topSpeed: '2lyph',
    launch: function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

// Call the drive method with a speed argument value of 65
spaceship1.launch(65)

var spaceship2 = new Object()
spaceship2.name = 'Terra Venture'
spaceship2.launchTerraVenture = function(speed) {
    console.log(this.name + ' launching to infinity and beyond at ' + speed + '!')
}

spaceship2.launchTerraVenture('1.5lyph');


var Spaceship3 = function() {
    this.name = 'Astro Megaship'
    this.launchAstroMegaship = function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + '!')
    }
}

var ship3 = new Spaceship3()
ship3.launchAstroMegaship('1lyph')

class Spaceship4 {
    constructor() {
        this.name = 'MagnaDefender'
    }

    launch(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + '!')
    }
}

var ship4 = new Spaceship4()
ship4.launch('1lyph')