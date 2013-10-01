using UnityEngine;
using System.Collections;

public class AudioZone : MonoBehaviour {
	enum Fade {In, Out};
	float fadeTime = 4.0F;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	}

	// Enter room trigger
	void OnTriggerEnter (Collider other){
		// Debug.Log("Trigger Enter");
		audio.Play();
		StartCoroutine(FadeAudio(fadeTime, Fade.In));
	}
	
	// Exit room trigger
	void OnTriggerExit (Collider other){
		// Debug.Log("Trigger Exit");
		StartCoroutine(FadeAudio(fadeTime, Fade.Out));
		// audio.Stop();
	}
	
	IEnumerator FadeAudio (float timer, Fade fadeType) {
    	float start = fadeType == Fade.In? 0.0F : 1.0F;
    	float end = fadeType == Fade.In? 1.0F : 0.0F;
    	float i = 0.0F;
    	float step = 1.0F/timer;
		
 		// Debug.Log("FadeAudio");
		// Debug.Log("Out Step = " + step);
		// Debug.Log("Out i = " + i);
    	while (i <= 1.0F) {
			// Debug.Log("Audio Volume i = " + i);
        	i += step * Time.deltaTime;
        	audio.volume = Mathf.Lerp(start, end, i);
			// Debug.Log("Audio Volume = " + audio.volume);
        	yield return new WaitForSeconds(step * Time.deltaTime);
    	}
		// Debug.Log("Out of while loop");
	}
}
