var customSkin : GUISkin;
var menuItemSoundOnOff = "SOUND  OFF";
var toggleBool = false;
var toggleBoolNew;
var menuSizeMultiplier = 2.0;

// MenuMain script

function OnGUI () {

  			// Define script variables
  			GUI.skin = customSkin;
  			var GORooms : GameObject;
  			var GOPlayer : GameObject;
  			var GORightJoyStick : GameObject;
  			var GOLeftJoyStick : GameObject;
			var audioZones : Component[];
			var menuScript : Component;
			var joyStickControl : Component;
			var whiteBackgroundTexture = Resources.Load("whiteBackground") as Texture;
  			var font = Resources.Load("StencilPunchJNL") as Font;
  			var screenWidthAdj = Screen.width * menuSizeMultiplier;
  			var screenHeightAdj = Screen.height * menuSizeMultiplier;
			var xPos = (screenWidthAdj / 2 )/menuSizeMultiplier;
			var xPosAdj = (xPos - screenWidthAdj / 15);
			var yPos = (screenHeightAdj / 5 )/menuSizeMultiplier;		
			var width = (screenWidthAdj / 10);
			var toggleItemWidth = (screenWidthAdj / 12);
			var menuItemWidth = (screenWidthAdj / 16);
			var menuItemShortWidth = (screenWidthAdj / 22);
			var menuItemHeight = (screenHeightAdj / 20);		
			var boxWidth = (screenWidthAdj / 7);
			var boxHeight = (screenHeightAdj / 3.5);
			var heightPlus1 = (screenHeightAdj / 16);
			var heightPlus2 = (screenHeightAdj / 22);
			var varFontSize = (screenWidthAdj / 65);
			var widthPlus = (screenWidthAdj / 15);
			xPos = xPos - width/2;
			
			// Define GUI skin attributes			
			GUI.skin.box.fontSize = varFontSize;
			GUI.skin.box.normal.textColor = Color.red;				
			GUI.skin.box.font = font; 
			GUI.skin.box.normal.background = whiteBackgroundTexture;			
			GUI.skin.button.font = font;
			GUI.skin.button.fontSize = varFontSize;
			GUI.skin.button.normal.textColor = Color.black;
			GUI.skin.button.hover.textColor = Color.red;
			GUI.skin.button.alignment = UnityEngine.TextAnchor.MiddleLeft;
			GUI.skin.button.normal.background = whiteBackgroundTexture;
			GUI.skin.button.hover.background = whiteBackgroundTexture;
			GUI.skin.toggle.font = font;
			GUI.skin.toggle.fontSize = varFontSize;
			GUI.skin.toggle.normal.textColor = Color.black;
			GUI.skin.toggle.onNormal.textColor = Color.black;
			GUI.skin.toggle.hover.textColor = Color.red;
			GUI.skin.toggle.onHover.textColor = Color.red;
			GUI.skin.toggle.active.background = whiteBackgroundTexture;
			GUI.skin.toggle.onActive.background = whiteBackgroundTexture;
			GUI.skin.toggle.hover.background = whiteBackgroundTexture;
			GUI.skin.toggle.onHover.background = whiteBackgroundTexture;
			GUI.skin.toggle.normal.background = whiteBackgroundTexture;
			GUI.skin.toggle.onNormal.background = whiteBackgroundTexture;
			
			// Get reference to game objects
			GORooms = GameObject.Find("Rooms"); 
			GOPlayer = GameObject.Find("Player");
			GORightJoyStick = GameObject.Find("RightStick");
			GOLeftJoyStick = GameObject.Find("LeftStick");
			
			// Turn off joy sticks
			joyStickControl = GORightJoyStick.GetComponent("EasyMobileJoystick");	
			joyStickControl.enabled = false;		
			joyStickControl = GOLeftJoyStick.GetComponent("EasyMobileJoystick");	
			joyStickControl.enabled = false;
					
			// Display menu and menu items						
			GUI.Box(Rect( xPosAdj, yPos, boxWidth, boxHeight ), "01 - MENU" );
			
			toggleBoolNew = GUI.Toggle(Rect( xPos - 10, yPos + heightPlus1, toggleItemWidth, menuItemHeight ), toggleBool, menuItemSoundOnOff );
			// toggleBoolNew = GUI.Toggle(Rect( xPos - 10, yPos + heightPlus1, toggleItemWidth, menuItemHeight ), toggleBool, "SOUND  OFF" );
			
			if(toggleBoolNew != toggleBool)
			{
				// Mute/Unmute audio in all rooms
				audioZones = GORooms.GetComponentsInChildren(AudioSource);
				// Turn audio ON
				if (toggleBool == false) {           
					menuItemSoundOnOff = "SOUND  OFF";
					for (var i=0; i<audioZones.Length; i++){    
						audioZones[i].audio.mute = false;    
					}
				}
				// Turn audio OFF      
				else {                   
					menuItemSoundOnOff = "SOUND  ON";
					for (var x=0; x<audioZones.Length; x++){    
						audioZones[x].audio.mute = true;    
					}
				}
				toggleBool = toggleBoolNew;	   	
			}
			
			yPos += heightPlus2;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemWidth, menuItemHeight ), "CREDITS" ) )
			{
				// Turn credits menu ON,  Turn main menu OFF
				menuScript = GOPlayer.GetComponent("MenuCredits");
				menuScript.enabled = true;
				menuScript = GOPlayer.GetComponent("MenuMain");
				menuScript.enabled = false;
			}
			
			yPos += heightPlus2;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemWidth, menuItemHeight ), "TUTIORAL" ) )
			{
				// Turn tutorial menu ON,  Turn main menu OFF
				menuScript = GOPlayer.GetComponent("MenuTutorial");
				menuScript.enabled = true;
				menuScript = GOPlayer.GetComponent("MenuMain");
				menuScript.enabled = false;
			}
			
			yPos += heightPlus1;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemShortWidth, menuItemHeight ), "EXIT" ) )
			{
				// End the game
				Application.Quit();
			}
			
			xPos += widthPlus * 1.2;
			
			if( GUI.Button( new Rect( xPos, yPos + heightPlus1, menuItemShortWidth, menuItemHeight ), "OPEN" ) )
			{
				// Turn joy stick controls back on, then close the menu				
				joyStickControl = GORightJoyStick.GetComponent("EasyMobileJoystick");	
				joyStickControl.enabled = true;		
				joyStickControl = GOLeftJoyStick.GetComponent("EasyMobileJoystick");	
				joyStickControl.enabled = true;		
				menuScript = GOPlayer.GetComponent("MenuMain");
				menuScript.enabled = false;			
			}
}