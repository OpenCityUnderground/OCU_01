#pragma strict 

var customSkin : GUISkin;
var font : Font;
var menuIconStar : Texture2D;
var menuIconQuestionMark : Texture2D;
var menuIconSoundOn : Texture2D;
var menuIconSoundOff : Texture2D;
var menuIconSoundOnOff : Texture2D;
var menuIconX : Texture2D;
var menuIconRibon : Texture2D;
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
	var MIQM = menuIconQuestionMark;
	
	// define dimensions
	var menuSizeMultiplier = 2.0;
	var screenWidthAdj = Screen.width * menuSizeMultiplier;
	var screenHeightAdj = Screen.height * menuSizeMultiplier;
	var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
	var yPos = (Screen.height / 10);		
	var xPosAdj = (xPos - screenWidthAdj / 10.4);
	// xPos = xPosAdj;
	var yPosAdj = ( yPos - Screen.height / 2.7);
	var width = (screenWidthAdj / 10);
	var menuItemWidth = (screenWidthAdj / 30);
	var menuItemHeight = (screenHeightAdj / 15);		
	var boxWidth = (screenWidthAdj / 5);
	var boxHeight = (screenHeightAdj / 2);
	var varFontSize = (screenWidthAdj / 40);
	xPos = xPosAdj - width/1.2;
	
	// Define GUI skin attributes			
	//GUI.skin.box.fontSize = varFontSize;
	//GUI.skin.box.normal.textColor = Color(1f, 62f/255f, 21f/255f); // Orange				
	//GUI.skin.box.font = font; 
	GUI.skin.button.normal.background = noneBackground;
	GUI.skin.button.hover.background = noneBackground;
	//GUI.skin.button.font = font;
	//GUI.skin.button.fontSize = varFontSize;
	//GUI.skin.button.normal.textColor = Color.black;
	//GUI.skin.button.hover.textColor = Color(1f, 62f/255f, 21f/255f); // Orange
	//GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleLeft;
	//GUI.skin.button.normal.background = whiteBackgroundTexture;
	// GUI.skin.button.hover.background = whiteBackgroundTexture;
	// GUI.skin.button.hover.background = whiteBackgroundTexture;
	
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
	
	// GUI.skin.label.normal.background = menuGreenHat;
	//GUI.skin.button.active.background = whiteBackgroundTexture;
	//GUI.skin.button.onActive.background = whiteBackgroundTexture;
	//GUI.skin.button.hover.background = whiteBackgroundTexture;
	//GUI.skin.button.onHover.background = whiteBackgroundTexture;
	//GUI.skin.button.normal.background = whiteBackgroundTexture;
	//GUI.skin.button.onNormal.background = whiteBackgroundTexture;
	GUI.skin.label.normal.textColor = Color.white;
	GUI.skin.label.font = font;
	GUI.skin.label.fontSize = varFontSize;
	GUI.skin.label.alignment = UnityEngine.TextAnchor.LowerCenter;
	// TextStyle.normal.textColor = Color(55f/255f, 81f/255f, 85f/255f); // blue green

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
		
	// Display green label			
	GUI.Label(Rect( xPosAdj, yPosAdj, boxWidth, boxHeight ), menuIconRibon );
	
	xPos += boxWidth/1.2;
	yPos += boxHeight/90;
			
	// Display menu and menu items													
	if( GUI.Button( new Rect( xPos, yPos, menuItemWidth, menuItemHeight ), MIQM ) )
	{
		// Turn tutorial menu ON,  Turn main menu OFF
		menuScript = GOPlayer.GetComponent(MenuTutorial);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = false;
	}
	
	yPos += boxHeight/7;
	
	if( GUI.Button( new Rect( xPos, yPos, menuItemWidth, menuItemHeight ), menuIconStar ) )
	{
		// Turn credits menu ON,  Turn main menu OFF
		menuScript = GOPlayer.GetComponent(MenuCredits);
		menuScript.enabled = true;
		menuScript = GOPlayer.GetComponent(MenuMain);
		menuScript.enabled = false;
	}
	
	yPos += boxHeight/7;
		
	toggleBoolNew = GUI.Toggle(Rect( xPos, yPos, menuItemWidth, menuItemHeight ), toggleBool, menuIconSoundOnOff );

	GUI.skin.label.normal.background = noneBackground;
		
	if (toggleBool == false) { 
		menuIconSoundOnOff =  menuIconSoundOff;
	}else{
		menuIconSoundOnOff =  menuIconSoundOn;
	}
	
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
		
	yPos += boxHeight/7;
			
	// Display exit button	
	if( GUI.Button( new Rect( xPos, yPos, menuItemWidth, menuItemHeight ), menuIconX ) )
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
