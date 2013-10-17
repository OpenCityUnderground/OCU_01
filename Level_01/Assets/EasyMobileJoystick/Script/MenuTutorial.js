#pragma strict 

var customSkin : GUISkin;
var menuSizeMultiplier = 2.0;
var fontSizeAdj = 140;

// Menu Tutorial script

function OnGUI () {

			// Define script variables
  			GUI.skin = customSkin;
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
			var heightPlus2 = (screenHeightAdj / 6.5);
			var varFontSize = (screenWidthAdj / 65);
			var varFontSize2 = (screenWidthAdj / fontSizeAdj);
			var widthPlus = (screenWidthAdj / 15);
			xPos = xPos - width/2;
						
			// Define GUI skin attributes
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
			GUI.skin.label.fontSize = varFontSize2;
			GUI.skin.label.normal.textColor = Color.black;				
			GUI.skin.label.font = font; 				
			
			// Start of tutorial menu
			
			// Tutorial text
			var menuItemTutorial = "WELCOME TO OPEN CITY UNDERGROUND. THE DIRRECTIONS ARE SIMPLE. THE LEFT THUMB MOVES YOU DIRECTIONALLY AND THE RIGHT THUMB DIRECTS WHERE YOU'RE LOOKING. YOU CAN DO BOTH AT THE SAME TIME. THERE IS NO OBJECTIVE EXCEPT TO EXPERIENCE AND ENJOY.";
			
			// Tutorial Menu			
			GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "01 - TUTORIAL", "box" );
			GUI.Label(Rect( xPos, yPos + heightPlus1, width * 1.2, height * 1.8 ), menuItemTutorial );
						
			yPos += heightPlus2;
			xPos += widthPlus * 1.2;
			
			// Back Button
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemShortWidth, menuItemHeight ), "BACK" ) )
			{
				// Close tutorial menu, Open main menu
				GOPlayer = GameObject.Find("Player"); 			
				menuScript = GOPlayer.GetComponent(MenuMain);
				menuScript.enabled = true;
				menuScript = GOPlayer.GetComponent(MenuTutorial);
				menuScript.enabled = false;
			}
}