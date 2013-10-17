#pragma strict 

var customSkin : GUISkin;
var menuSizeMultiplier = 2.0;
var menuText = "MENU";
var noneBackground : Texture2D;

// Menu Main On script

function OnGUI () {

  			// Define script variables
  			GUI.skin = customSkin;
  			var GOPlayer : GameObject;
			var menuScript : Behaviour;
  			var font = Resources.Load("StencilPunchJNL") as Font;
			var xPos = (Screen.width / 2 );
			var yPos = 0;		
			var menuWidth = (Screen.width / 12);
			var menuHeight = (Screen.height / 10) * menuSizeMultiplier;		
			var varFontSize = (Screen.width / 30);
			xPos = xPos - menuWidth/2;

			// Define GUI skin attributes
			GUI.skin.button.font = font;
			GUI.skin.button.fontSize = varFontSize;
			GUI.skin.button.normal.textColor = Color.red;
			GUI.skin.button.onHover.textColor = Color.red;
			GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleCenter;
 
			GUI.skin.button.normal.background = noneBackground;
			GUI.skin.button.hover.background = noneBackground;
			
			// Get reference to game objects
			GOPlayer = GameObject.Find("Player");
			
			if( GUI.Button( new Rect( xPos, yPos, menuWidth, menuHeight ), menuText ) )
			{
				// Turn credits menu ON,  Turn main menu OFF
				menuScript = GOPlayer.GetComponent(MenuCredits);
				menuScript.enabled = false;
				menuScript = GOPlayer.GetComponent(MenuTutorial);
				menuScript.enabled = false;
				menuScript = GOPlayer.GetComponent(MenuMain);
				menuScript.enabled = true;
				// menuText = "MENU";
			}
}