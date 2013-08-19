using UnityEngine;
using System.Collections;

public class AudioZone : MonoBehaviour {

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	}

	// Enter room trigger
	void OnTriggerEnter (Collider other){
		audio.Play();
	}
	
	// Exit room trigger
	void OnTriggerExit (Collider other){
		audio.Stop();
	}
}

