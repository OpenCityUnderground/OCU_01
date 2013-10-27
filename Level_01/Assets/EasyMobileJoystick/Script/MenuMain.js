#pragma strict 

var customSkin : GUISkin;
var font : Font;
var menuGreenHat : Texture2D;
var whiteBackgroundTexture : Texture2D;
var noneBackground : Texture2D;
var toggleBool = false;
var toggleBoolNew = false;

// Menu Main script
function OnGUI () {

	// Define script variables
	GUI.skin = customSkin;
	var GORooms : GameObject;
	var GOPlayer : GameObject;
	var GORightJoyStick : GameObject;
	var GOLeftJoyStick : GameObject;
	var audioZones : Component[];
	var menuScript : Behaviour;
	var joyStickControl : Behaviour;
	
	// define dimensions
	var menuSizeMultiplier = 2.0;
	var screenWidthAdj = Screen.width * menuSizeMultiplier;
	var screenHeightAdj = Screen.height * menuSizeMultiplier;
	var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
	var xPosAdj = (xPos - screenWidthAdj / 10.5);
	var yPos = (Screen.height / 12);		
	var width = (screenWidthAdj / 10);
	var toggleItemWidth = (screenWidthAdj / 5.5);
	var menuItemWidth = (screenWidthAdj / 10);
	var menuItemShortWidth = (screenWidthAdj / 22);
	var menuItemHeight = (screenHeightAdj / 18);		
	var boxWidth = (screenWidthAdj / 5);
	var boxHeight = (screenHeightAdj / 3.5);
	var varFontSize = (screenWidthAdj / 40);
	var widthPlus = (screenWidthAdj / 15);
	xPos = xPos - width/1.2;
	
	// Define GUI skin attributes			
	GUI.skin.box.fontSize = varFontSize;
	GUI.skin.box.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange				
	GUI.skin.box.font = font; 
	GUI.skin.box.normal.background = whiteBackgroundTexture;			
	GUI.skin.button.font = font;
	GUI.skin.button.fontSize = varFontSize;
	GUI.skin.button.normal.textColor = Color.black;
	GUI.skin.button.hover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleLeft;
	GUI.skin.button.normal.background = whiteBackgroundTexture;
	GUI.skin.button.hover.background = whiteBackgroundTexture;
	GUI.skin.toggle.font = font;
	GUI.skin.toggle.fontSize = varFontSize;
	GUI.skin.toggle.normal.textColor = Color.black;
	GUI.skin.toggle.onNormal.textColor = Color.black;
	GUI.skin.toggle.hover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	GUI.skin.toggle.onHover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	GUI.skin.toggle.active.background = whiteBackgroundTexture;
	GUI.skin.toggle.onActive.background = whiteBackgroundTexture;
	GUI.skin.toggle.hover.background = whiteBackgroundTexture;
	GUI.skin.toggle.onHover.background = whiteBackgroundTexture;
	GUI.skin.toggle.normal.background = whiteBackgroundTexture;
	GUI.skin.toggle.onNormal.background = whiteBackgroundTexture;
	GUI.skin.label.normal.background = menuGreenHat;
	GUI.skin.label.normal.textColor = Color.white;
	GUI.skin.label.font = font;
	GUI.skin.label.fontSize = varFontSize;
	GUI.skin.label.alignment = UnityEngine.TextAnchor.LowerCenter;
	
	// Get reference to game objects
	GORooms = GameObject.Find("Rooms"); 
	GOPlayer = GameObject.Find("Player");
	GORightJoyStick = GameObject.Find("RightStick");
	GOLeftJoyStick = GameObject.Find("LeftStick");
		
	// Turn on menu icon 
	GOPlayer.GetComponent(MenuMainTurnOn).turnOnIcon = true;
				
	// Turn off joy sticks
	joyStickControl = GORightJoyStick.GetComponent(EasyMobileJoystick);	
	joyStickControl.enabled = false;		
	joyStickControl = GOLeftJoyStick.GetComponent(EasyMobileJoystick);	
	joyStickControl.enabled = false;
		
	// Display green hat menu label			
	GUI.Label(Rect( xPosAdj, yPos, boxWidth, boxHeight/3 ), "Menu" );
	
	yPos += boxHeight/3;
			
	// Display menu and menu items						
	GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "" );
	
	yPos += boxHeight/15;
							
	if( GUI.Button( new Rect( xPos, yPos, menuItemWidth, menuItemHeight ), "Credits" ) )
	{
		// Turn credits menu ON,  Turn main menu OFF
		menuScript = GOPlayer.GetComponent(MenuCredits);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = false;
	}
	
	yPos += boxHeight/5;
	
	if( GUI.Button( new Rect( xPos, yPos, menuItemWidth, menuItemHeight ), "Tutorial" ) )
	{
		// Turn tutorial menu ON,  Turn main menu OFF
		menuScript = GOPlayer.GetComponent(MenuTutorial);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = false;
	}
	
	yPos += boxHeight/5;
		
	toggleBoolNew = GUI.Toggle(Rect( xPos - 10, yPos, toggleItemWidth, menuItemHeight ), toggleBool, "Sound " );

	GUI.skin.label.normal.background = noneBackground;
	
	yPos -= boxHeight/40;
	xPos += widthPlus * 1.3;
	
	if (toggleBool == false) { 
		GUI.skin.label.normal.textColor = Color.black;
	}else{
		GUI.skin.label.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	}
	GUI.Label(Rect( xPos, yPos, toggleItemWidth/4, menuItemHeight ), "ON/" );
	
	xPos += widthPlus * .65;
	if (toggleBool == false) { 
		GUI.skin.label.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	}else{
		GUI.skin.label.normal.textColor = Color.black;
	}
	GUI.Label(Rect( xPos, yPos, toggleItemWidth/3.5, menuItemHeight ), "OFF" );
	
	GUI.skin.label.normal.textColor = Color.white;
										
	if(toggleBoolNew != toggleBool)
	{
		// Mute/Unmute audio in all rooms
		audioZones = GORooms.GetComponentsInChildren(AudioSource);
		// Turn audio ON
		if (toggleBool == false) {           
			for (var i=0; i<audioZones.Length; i++){    
				audioZones[i].audio.mute = false;    
			}
		}
		// Turn audio OFF      
		else {                   
			for (var x=0; x<audioZones.Length; x++){    
				audioZones[x].audio.mute = true;    
			}
		}		
		toggleBool = toggleBoolNew;	   	
	}
		
	yPos += (boxHeight/5) * 1.63;
			
	// Display exit button	
	if( GUI.Button( new Rect( xPos, yPos, menuItemShortWidth, menuItemHeight ), "Exit" ) )
	{
		// Turn joy stick controls back on, then close the menu				
		joyStickControl = GORightJoyStick.GetComponent(EasyMobileJoystick);	
		joyStickControl.enabled = true;		
		joyStickControl = GOLeftJoyStick.GetComponent(EasyMobileJoystick);	
		joyStickControl.enabled = true;		
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = false;			
		menuScript = GOPlayer.GetComponent(MenuMainTurnOn);
		GOPlayer.GetComponent(MenuMainTurnOn).toggleIcon = true;
	}
}
