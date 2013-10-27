#pragma strict 

var customSkin : GUISkin;
var font : Font;
var menuGreenHat : Texture2D;
var whiteBackground : Texture2D;

// Menu Tutorial script

function OnGUI () {

	// Define script variables
	GUI.skin = customSkin;
	var GOPlayer : GameObject;
	var menuScript : Behaviour;
  			
	// Tutorial text
	var menuItemTutorial = "Press and move left thumb to move in a direction. Press and move right thumb to look around.";
  			
 	// define dimensions
	var menuSizeMultiplier = 2.0;
	var screenWidthAdj = Screen.width * menuSizeMultiplier;
	var screenHeightAdj = Screen.height * menuSizeMultiplier;
	var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
	var xPosAdj = (xPos - screenWidthAdj / 10.5);
	var yPos = (Screen.height / 12);		
	var width = (screenWidthAdj / 6.4);
	var height = (screenHeightAdj / 5);
	var menuItemShortWidth = (screenWidthAdj / 22);
	var menuItemHeight = (screenHeightAdj / 18);		
	var boxWidth = (screenWidthAdj / 5);
	var boxHeight = (screenHeightAdj / 3.5);
	var fontSize = (screenWidthAdj / 40);
	var smallFontSize = fontSize/1.42;
	var widthPlus = (screenWidthAdj / 15);
	xPos = xPos - width/1.2;
		
	// Define GUI skin attributes
	GUI.skin = customSkin;
	GUI.skin.box.fontSize = fontSize;
	GUI.skin.box.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange				
	GUI.skin.box.font = font; 				
	GUI.skin.button.font = font;
	GUI.skin.button.fontSize = fontSize;
	GUI.skin.button.normal.textColor = Color.black;
	GUI.skin.button.hover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	GUI.skin.button.imagePosition = UnityEngine.ImagePosition.TextOnly;
	GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleLeft;	
	GUI.skin.button.normal.background = whiteBackground;
	GUI.skin.label.font = font;
	GUI.skin.label.fontSize = fontSize;
	
	// Get reference to game objects
	GOPlayer = GameObject.Find("Player");
	
	// Start of tutorial menu
		
	// Display green hat menu label
	GUI.skin.label.fontSize = fontSize;
	GUI.skin.label.normal.textColor = Color.white;
	GUI.skin.label.normal.background = menuGreenHat;
	GUI.skin.label.alignment = UnityEngine.TextAnchor.LowerCenter;	
	GUI.Label(Rect( xPosAdj, yPos, boxWidth, boxHeight/3 ), "Tutorial" );
	
	yPos += boxHeight/3;
			
	// Display menu and menu items						
	GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "" );
	
	yPos += boxHeight/15;	
	xPos += widthPlus * .724;
			
	// Display tutorial description			
	GUI.skin.label.normal.background = whiteBackground;
	GUI.skin.label.normal.textColor = Color(55f/255f, 81f/255f, 85f/255f); // blue green
	GUI.skin.label.fontSize = smallFontSize;
	GUI.skin.label.alignment = UnityEngine.TextAnchor.UpperLeft;
	GUI.Label(Rect( xPos, yPos, width, height ), menuItemTutorial );
							
	yPos += boxHeight/5;
	yPos += (boxHeight/5);
	yPos += (boxHeight/5) * 1.5;	
	xPos += widthPlus * 1.3;
	xPos += widthPlus * .63;
	
	// Display exit button				
	if( GUI.Button( new Rect( xPos, yPos, menuItemShortWidth, menuItemHeight ), "Exit" ) )
	{
		// Close tutorial menu, Open main menu
		GOPlayer = GameObject.Find("Player"); 			
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuTutorial);
		menuScript.enabled = false;
	}
}