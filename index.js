// measuring values
let skillz = 0; // initialize starting skill level
let starPower = 100; // initialize starting health power
let dollaBillz = 50; // initialize starting cash

// switch indexes
let currentDjTool = 0; // set the weapon to index 0
let workingIt;
let vibeKillerAttentionSpan;

let inventory = ['USB Sticks']; // initialize first inventory item

// direct dom manipulation
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text = document.querySelector('#text')
const starPowerText = document.querySelector('#starPowerText')
const skillzText = document.querySelector('#skillzText')
const dollaBillzText = document.querySelector('#dollaBillzText')
const vibeKillerStats = document.querySelector('#vibeKillerStats')
const vibeKillerNameText = document.querySelector('#vibeKillerName')
const vibeKillerAttentionSpanText = document.querySelector('#vibeKillerAttentionSpan')

const djWeapons = [{
	name:'USB Sticks',
	attentionSpan:5
},{
	name:' Lit Instagram Stories',
	attentionSpan:30
},{
	name:' Mega Bomb You Produced',
	attentionSpan:50
},{
	name:' Social Media Marketing Team',
	attentionSpan:100
},]

const vibeKillers = [
	{
	name: 'Mixing With Broken Monitors',
	level: 2,
	attentionSpan: 15
	},
	{
	name: 'Dealing With A Drunk Bro',
	level: 8,
	attentionSpan: 60
	},
	{
	name: 'Playing Detroit!',
	level: 20,
	attentionSpan: 300
	},
]

const locations = [
	{
		name: 'the scene',
		'button text': ['BUY NEW GEAR','PLAY AT THE CLUB','PLAY DETROIT!'],
		'button functions': [goStore, goClub, playDetroit],
		'text':'The Scene is lit tonight! \n Your peeps be straight up vibing under the neon foggy street signs. \n Time to take the party to the next level and become the best DJ on the planet.'
	},
	{
		name: 'the store',
		'button text': ['Buy New Shoes (10 dollabillz)','Buy DJ Gear (30 dolla billz)','Go Hit The Scene'],
		'button functions': [buyStarPower, buyDjStuff, goHitTheScene],
		'text':'A girl in faded overalls and fake oval glasses with a lisp welcomes you to the store and rolls her eyes.'
	},	
	{
		name: 'the club',
		'button text': ['Mix Dope Beats!','Deal With A Drunk Bro!','Go Hit The Scene'],
		'button functions': [mixDopeTracks, dealWithDrunkBro, goHitTheScene],
		'text':'You get to the club and step up to the decks.'
	},
	{
		name: 'work it',
		'button text': ['Drop The Realness!','Instagram Story!','Jump Out The Back Window!'],
		'button functions': [dropSeriousHit, dodge, goHitTheScene],
		text: 'You\'re vibing out on the decks! The crowd is getting deep! Some drunk bros approach you!'
	},
	{
		name: 'kill vibe killers',
		'button text': ['Go Hit The Scene!','Go Hit The Scene!','Go Hit The Scene!'],
		'button functions': [goHitTheScene, goHitTheScene, easterEgg],
		'text':'The drunk bros scream Arggg!! and the bouncers throw them out. The crowd digs your set! You gain Star Power points and get paid!'
	},
	{
		name: "lose",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "The Audience boos and the sound guy cuts the music! \n You die of embarressment and your DJ career is over forever. ☠️ \n GAME OVER"
	},
	{
		name: "win",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You Slayed Detroit! You are a true underground Techno Champion."
	},	
	{
		name: "easter egg",
		"button text": ["under the mattress", "at the train station", "Go Hit The Scene!"],
		"button functions": [underTheMatter, atTheTrainStation, goHitTheScene],
		text: "You meet Deep Mike at a shady bar for some drinks! Deep Mike just robbed a bank and wants to offers you a deal. He tells you he has hidden a stash of fat stacks somewhere. If you can guess where the money is then you get to take it, but if you guess wrong then he gets to keep all your dope Italo Records."
	},	
]


// button fundamental function event click default
button1.onclick = goStore
button2.onclick = goClub
button3.onclick = playDetroit

// this is the order the location that gets selected in update goes to 
function update(location) {
	vibeKillerStats.style.display = "none";
	button1.innerText = location['button text'][0]
	button2.innerText = location['button text'][1]
	button3.innerText = location['button text'][2]
	button1.onclick = location['button functions'][0]
	button2.onclick = location['button functions'][1]
	button3.onclick = location['button functions'][2]
	text.innerText = location.text
}

// location update functions

function goHitTheScene() {
	update(locations[0])
}

function goStore() {
	update(locations[1])
}

function goClub() {
	update(locations[2])
}

// store purchasing functions

function buyStarPower() {
	if(dollaBillz <= 10) {
		text.innerText = 'You don\t got the dough, homie!'
	} else {
	dollaBillz -= 10
	starPower += 10
	}
	dollaBillzText.innerText = dollaBillz
	starPowerText.innerText = starPower
}
function buyDjStuff() {	
	if(currentDjTool < djWeapons.length - 1) {
	if(dollaBillz >= 30) {
		dollaBillz -= 30
		currentDjTool++
		dollaBillzText.innerText = dollaBillz
		let newDjWeapon = djWeapons[currentDjTool].name
	text.innerText = `You now have ${newDjWeapon} .`
	inventory.push(newDjWeapon)
	text.innerText += ` \n In your inventory you now have: ${inventory}`
	} else {
		text.innerText = 'You don\t got enough ca$$h, Yo!'
	}
} else {
	text.innerText = 'You Already Have The Most Powerful Weapon!'
	button2.innerText = 'Sell A Peice of Your DJ carreer away for 15$'
	button2.onClick = sellDjStuff
}
}

function sellDjStuff() {
	if(inventory.length > 1) {
		dollaBillz += 15
		dollaBillzText.innerText = dollaBillz
		currentDjTool = inventory.shift()
		text.innerText = `you just sold ${currentDjTool}.`
		text.innerText += `In your inventory you now have: ${inventory}` 
	} else {
		if(inventory.length < 1) {
			text.innerText = 'That\s like everything left you own! Don\t sell everything...'
		}
	}
}

// action functions

function mixDopeTracks() {
	workingIt = 0
	goWorkIt()
}

function dealWithDrunkBro() {
	workingIt = 1
	goWorkIt()
}

function playDetroit() {
	workingIt = 2
	goWorkIt()}

function goWorkIt() {
	update(locations[3])
	vibeKillerAttentionSpan = vibeKillers[workingIt].attentionSpan
	vibeKillerStats.style.display = 'block'
	vibeKillerNameText.innerText = vibeKillers[workingIt].name
	vibeKillerAttentionSpanText.innerText = vibeKillerAttentionSpan
}

function dropSeriousHit() {
	text.innerText = `You feel the vibe and you turn up the heat even though you\'re ${vibeKillers[workingIt].name}!`
	text.innerText += ` \n You take the vibe to the next level with your ${djWeapons[currentDjTool].name}`
	starPower -= getVibeKillerAttackValue(vibeKillers[workingIt].level)
	
	if (isVibeHit()) {
		vibeKillerAttentionSpan -= djWeapons[currentDjTool].attentionSpan + Math.floor(Math.random() * skillz + 1) 
	} else {
		text.innerText += ' \n You slip up and everyone can feel bad vibes.'
		}
	starPowerText.innerText = starPower 
	vibeKillerAttentionSpanText.innerText = vibeKillerAttentionSpan
	if(starPower <= 0) {
		lose()
	} else  if(vibeKillerAttentionSpan <= 0) {
		workingIt === 2 ?
		winGame() 
		:
		defeatVibeKiller()
	}
	if(Math.random() <= .1 && inventory.length !== 1) {
	text.innerText += `Your ${inventory.pop()} stop working for you!`
	currentDjTool--
	}
}

function getVibeKillerAttackValue(level) {
let hit = (level * 5) -  (Math.floor(Math.random() * skillz))
console.log(hit)
return hit
}

function isVibeHit() {
	return Math.random() > .2 || starPower < 20;
	}


function dodge() {
	text.innerText = "You dodge the attack from the " + vibeKillers[workingIt].name + ".";
}

function defeatVibeKiller() {
	dollaBillz += Math.floor(vibeKillers[workingIt].level * 6.7)
	skillz += vibeKillers[workingIt].level
	dollaBillzText.innerText = dollaBillz
	skillzText.innerText = skillz
	update(locations[4])
}


function lose() {
	update(locations[5])
}

function winGame() {
	update(locations[6])
}

function easterEgg() {
	update(locations[7])
}

function restart() {
	skillz = 0;
	starPower = 100;
	dollaBillz = 50;
	currentDjTool = 0;
	inventory = ["usb sticks"];
	dollaBillzText.innerText = dollaBillz;
	starPowerText.innerText = starPower;
	skillzText.innerText = skillz
	goHitTheScene();
}

function instaStory() {
	text.innerText = 'You hold down the vibe and ' + vibeKillers[workingIt].name + "."
}

function underTheMatter() {
	pick(2)
}

function atTheTrainStation() {
	pick(8)
}

function pick(guess) {
	let numbers = []
	while(numbers.length < 10) {
	numbers.push(Math.floor(Math.random() * 11))	
	}
	text.innerText = `You Picked ${guess == 2 ? `Under The Mattress!` : `At The Train Station`}.
	Here are the random numbers: \n`
	for(let i = 0; i < 10; i++) {
	text.innerText += numbers[i] + "\n"
	}
	if(numbers.indexOf(guess) !== -1) {
	text.innerText = "You got it, Mate! You win the fat stacks!"
	dollaBillz += 1000
	dollaBillzText.innerText = dollaBillz
	}	else {
		'Wrong Guess, Mate... Your records are mine!!!'
		text.innerText = 'You lose Your Best Italo Records to Deep Mike and it affects your Star Power!'
		starPower -= 80
		starPowerText.innerText = starPowerText
	}
	if(starPower <= 0) {
		lose()
	}
}