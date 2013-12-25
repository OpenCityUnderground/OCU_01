#pragma strict 

var customSkin : GUISkin;
var font : Font;
var menuTutorialGraphic : Texture2D;
var noneBackground : Texture2D;

// Menu Tutorial script

function OnGUI () {

	// Define script variables
	var GOPlayer : GameObject;
	var menuScript : Behaviour;
	var menuSizeMultiplier = 2.0;
	var screenWidthAdj = Screen.width * menuSizeMultiplier;
	var screenHeightAdj = Screen.height * menuSizeMultiplier;
	var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
	var xPosAdj = (xPos - screenWidthAdj / 10.5);
	var yPos = (Screen.height / 12);		
	var width = (screenWidthAdj / 6.4);
	var boxWidth = (screenWidthAdj / 5);
	var boxHeight = (screenHeightAdj / 3.5);
	xPos = xPos - width/1.2;
		
  	GUI.skin.button.normal.background = noneBackground;		
	GOPlayer = GameObject.Find("Player");
	
	// Start of tutorial menu
		
	GUI.Label(Rect( xPosAdj, yPos, boxWidth, boxHeight ), menuTutorialGraphic );
	
	if( GUI.Button( new Rect( xPosAdj, yPos, boxWidth, boxHeight ), "" ) )
	{
		// Close tutorial menu, Open main menu
		GOPlayer = GameObject.Find("Player"); 			
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuTutorial);
		menuScript.enabled = false;
	}
}