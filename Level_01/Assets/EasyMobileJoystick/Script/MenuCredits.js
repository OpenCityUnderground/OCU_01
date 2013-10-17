#pragma strict 

var customSkin : GUISkin;
var menuSizeMultiplier = 2.0;

// Menu Credits script

function OnGUI () {

			// Define script variables
			var TextStyle = new GUIStyle();
  			var GOPlayer : GameObject;
			var menuScript : Behaviour;
  			var font = Resources.Load("StencilPunchJNL") as Font;
  			var screenWidthAdj = Screen.width * menuSizeMultiplier;
  			var screenHeightAdj = Screen.height * menuSizeMultiplier;
			var width = (screenWidthAdj / 10);
			var height = (screenHeightAdj / 12);
			var menuItemShortWidth = (screenWidthAdj / 22);
			var menuItemHeight = (screenHeightAdj / 20);		
			var boxWidth = (screenWidthAdj / 7);
			var boxHeight = (screenHeightAdj / 3.5);
			var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
			var xPosAdj = (xPos - screenWidthAdj / 15);
			var yPos = (screenHeightAdj / 5 )/menuSizeMultiplier;		
			var heightPlus1 = (screenHeightAdj / 16);
			var heightPlus2 = (screenHeightAdj / 22);
			var heightPlus3 = (screenHeightAdj / 9.3);
			var varFontSize = (screenWidthAdj / 65);
			var widthPlus = (screenWidthAdj / 15);
			xPos = xPos - width/2;
			
			// Define GUI skin attributes
  			GUI.skin = customSkin;
			GUI.skin.box.fontSize = varFontSize;
			GUI.skin.box.normal.textColor = Color.red;				
			GUI.skin.box.font = font; 				
			GUI.skin.button.font = font;
			GUI.skin.button.fontSize = varFontSize;
			GUI.skin.button.normal.textColor = Color.black;
			GUI.skin.button.hover.textColor = Color.red;
			GUI.skin.button.imagePosition = UnityEngine.ImagePosition.TextOnly;
			GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleLeft;	
			GUI.skin.toggle.font = font;
			GUI.skin.toggle.fontSize = varFontSize;
			GUI.skin.toggle.normal.textColor = Color.black;
			GUI.skin.toggle.onNormal.textColor = Color.black;
			GUI.skin.toggle.onHover.textColor = Color.red;

			// Define text style for sudo buttons  			
			TextStyle.fontSize = varFontSize;
			TextStyle.font = font;
			TextStyle.normal.textColor = Color.black;
			
			// Start of credits menu
			Application.CancelQuit();
						
			GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "01 - CREDITS", "box" );
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, width, height ), "DERRIC EADY", TextStyle ) )
			{
			}
			
			yPos += heightPlus2;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, width, height ), "MARTIN EADY", TextStyle ) )
			{
			}
			
			yPos += heightPlus3;
	
			xPos += widthPlus * 1.2;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemShortWidth, menuItemHeight ), "BACK" ) )
			{
				// Close Credits menu, Open main menu
				GOPlayer = GameObject.Find("Player"); 			
				menuScript = GOPlayer.GetComponent(MenuMain);
				menuScript.enabled = true;
				menuScript = GOPlayer.GetComponent(MenuCredits);
				menuScript.enabled = false;
			}
}