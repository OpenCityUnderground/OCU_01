#pragma strict 

var customSkin : GUISkin;
var font : Font;
var menuGreenHat : Texture2D;
var whiteBackground : Texture2D;
var noneBackground : Texture2D;
var greenBackground : Texture2D;

// Menu Credits script

function OnGUI () {

	// Define script variables
	var TextStyle = new GUIStyle();
	var GOPlayer : GameObject;
	var menuScript : Behaviour;
	var yPosSave;
			
	// define dimensions
	var menuSizeMultiplier = 2.0;
	var screenWidthAdj = Screen.width * menuSizeMultiplier;
	var screenHeightAdj = Screen.height * menuSizeMultiplier;
	var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
	var xPosAdj = (xPos - screenWidthAdj / 22);
	var yPos = (Screen.height / 12);		
	var width = (screenWidthAdj / 10);
	//var menuItemWidth = (screenWidthAdj / 5);
	//var menuItemShortWidth = (screenWidthAdj / 22);
	var menuItemHeight = (screenHeightAdj / 18);		
	var boxWidth = (screenWidthAdj / 10);
	var boxHeight = (screenHeightAdj / 3.5);
	var varFontSize = (screenWidthAdj / 70);
	//var widthPlus = (screenWidthAdj / 15);
	xPos = xPos - width/1.2;
		
	// Define GUI skin attributes
	GUI.skin = customSkin;
	////GUI.skin.box.fontSize = varFontSize;
	//GUI.skin.box.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange				
	//GUI.skin.box.font = font;
	//GUI.skin.button.font = font;
	GUI.skin.box.normal.background = greenBackground;
	//GUI.skin.button.fontSize = varFontSize;
	//GUI.skin.button.normal.textColor = Color.black;
	//GUI.skin.button.hover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	//GUI.skin.button.imagePosition = UnityEngine.ImagePosition.TextOnly;
	GUI.skin.label.alignment = UnityEngine.TextAnchor.MiddleCenter;	
	GUI.skin.button.normal.background = noneBackground;
	
	//GUI.skin.button.hover.background = noneBackground;
	
	
	GUI.skin.label.normal.textColor = Color.black;
	GUI.skin.label.normal.background = noneBackground;
	GUI.skin.label.font = font;
	GUI.skin.label.fontSize = varFontSize;
	//GUI.skin.label.alignment = UnityEngine.TextAnchor.LowerCenter;

	// Get reference to game objects
	GOPlayer = GameObject.Find("Player");
	
	// Define text style for sudo buttons  			
	// TextStyle.fontSize = varFontSize;
	// TextStyle.font = font;
	TextStyle.normal.textColor = Color(55f/255f, 81f/255f, 85f/255f); // blue green
			
	// Start of credits menu						
		
	// Display green hat menu label			
	
	yPos += boxHeight/30;
	yPosSave = yPos;
	
	// Display menu and menu items	
						
	GUI.Box(Rect( xPosAdj - 10, yPos - 10, boxWidth + 20, boxHeight + 20 ), "" );
	
	GUI.skin.box.normal.background = whiteBackground;
				
	// Display menu and menu items						
	GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "" );
		
	yPos += boxHeight/40;
	
	GUI.Label(Rect( xPosAdj, yPos, boxWidth, menuItemHeight ), "CREDITS" );
	
	yPos += boxHeight/45;
	
	GUI.Label(Rect( xPosAdj, yPos, boxWidth, menuItemHeight ), "__________" );
	
	yPos += boxHeight/6.5;
	
	// This is the display button for Derric, later on it may contain some bio information
	GUI.Label( new Rect( xPosAdj, yPos, boxWidth, menuItemHeight  ), "Derric Eady" );
	
	yPos += boxHeight/9;
	
	// This is the display button for Martin, later on it may contain some bio information
	GUI.Label( new Rect( xPosAdj, yPos, boxWidth, menuItemHeight  ), "Martin Eady" );
	
	yPos = yPosSave;
		
	// Display exit button			
	if( GUI.Button( new Rect( xPosAdj, yPos, boxWidth, boxHeight ), "" ) )
	{
		// Close Credits menu, Open main menu
		GOPlayer = GameObject.Find("Player"); 			
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuCredits);
		menuScript.enabled = false;
	}
}