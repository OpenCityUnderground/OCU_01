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
		audio.Play();
		StartCoroutine(FadeAudio(fadeTime, Fade.In));
	}
	
	// Exit room trigger
	void OnTriggerExit (Collider other){
		StartCoroutine(FadeAudio(fadeTime, Fade.Out));
		audio.Stop();
	}
	
	IEnumerator FadeAudio (float timer, Fade fadeType) {
    	float start = fadeType == Fade.In? 0.0F : 3.0F;
    	float end = fadeType == Fade.In? 3.0F : 0.0F;
    	float i = 0.0F;
    	float step = 1.0F/timer;
 
    	while (i <= 3.0F) {
        	i += step * Time.deltaTime;
        	audio.volume = Mathf.Lerp(start, end, i);
        	yield return new WaitForSeconds(step * Time.deltaTime);
    	}	
	}
}

