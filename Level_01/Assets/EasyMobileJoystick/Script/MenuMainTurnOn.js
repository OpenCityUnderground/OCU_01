#pragma strict 

var customSkin : GUISkin;
var menuIcon : Texture2D;
var menuIconOn : Texture2D;
var menuIconOff : Texture2D;
var noneBackground : Texture2D;
var toggleIcon = false;
var turnOnIcon = true;

// Menu Main On script

function OnGUI() {

	// Define script variables
	GUI.skin = customSkin;
	var GOPlayer : GameObject;
	var menuScript : Behaviour;
	var xPos = (Screen.width / 1.968);
	var yPos = 0;		
	var iconWidth = (Screen.width / 8);
	var iconHeight = (Screen.height / 10);		
	xPos = xPos - iconWidth/2;

	// Define GUI skin attributes
	GUI.skin.button.normal.background = menuIcon;
	GUI.skin.button.hover.background = noneBackground;
	
	// Get reference to game objects
	GOPlayer = GameObject.Find("Player");
	
	if(turnOnIcon) {
		menuIcon = menuIconOn;
		turnOnIcon = false;
	}
	
	if( GUI.Button( new Rect( xPos, yPos, iconWidth, iconHeight ), "" ) )
	{
		// Turn credits menu ON,  Turn main menu OFF
		menuScript = GOPlayer.GetComponent(MenuCredits);
		menuScript.enabled = false;
		menuScript = GOPlayer.GetComponent(MenuTutorial);
		menuScript.enabled = false;
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = true;
	}
	
	if(toggleIcon) {
		flashingIcon();
		toggleIcon = false;
	}
}

function flashingIcon() {

	// Flash icon 
	for (var z = 0; z<4; z++) {
	 	menuIcon = menuIconOn;
	 	yield WaitForSeconds(.5);
	 	menuIcon = menuIconOff;	
	 	yield WaitForSeconds(.5);
	}
}