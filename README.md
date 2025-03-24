# 🚀 Group1 Project 

Welcome to the Group1 project! This project showcases various functionalities related to robotics, including voice interaction, Wi-Fi setup, movement, and navigation. The Go-1 robot features cutting-edge computer vision capabilities, such as person detection and face recognition, along with a speech recognition module. The project is organized into three main sections: Head Nano, NX Board, and Robot Talk, each with its own set of functionalities and scripts.

## 📝 Project Overview 

- **Head Nano**: Code for the Go-1's head, including face recognition and speech recognition.
- **NX Board**: Code for the Go-1's navigation and mapping capabilities.
- **Robot Talk**: Code for the Go-1's voice interaction capabilities.
- **CameraSDK**: Code for streaming video from the camera.
- **face_recognizer**: Code for recognizing faces.
- **SpeechRecognition**: Code for recognizing speech.
- **personDetection**: Code for detecting people.

## 📂 Directory Structure 

Below is an overview of the project's directory structure:

```
/Group1
├── index.js
├── README.md
├── wifi.py
├── Head Nano/
│   ├── start_vision.sh
│   ├── talk.py
│   ├── CameraSDK/
│   │   ├── example_getRawFrame.cc
│   │   └── stream.py
│   ├── face_recognizer/
│   │   ├── audio.py
│   │   ├── client_website_test.py
│   │   ├── encode_faces.py
│   │   ├── main.py
│   │   ├── README.md
│   │   ├── train.py
│   │   └── Audios/
│   │       ├── caleb.wav
│   │       ├── first.wav
│   │       ├── initiate.wav
│   │       └── second.wav
│   └── SpeechRecognition/
│       ├── dance.js
│       ├── dance.sh
│       ├── kill_audio.sh
│       └── main.py
└── NX Board/
    ├── nav.py
    └── personDetection/
        ├── detect.py
        └── stream_capture.py
```

## 🗣️ Robot Talk 

The Robot Talk directory contains all the code necessary to enable the Go1 robot to speak. To use this feature, run `python3 talk.py` and replace the variable text with your desired speech. Ensure the robot is connected to Wi-Fi, as it requires the "gTTS" (Google Text to Speech) package.

## 📶 Wi-Fi Setup 

The Wi-Fi script, known as 'Dog WiFi', should be placed on the Raspberry Pi board's desktop. Execute `sudo python3 wifi.py` on the Raspberry Pi's desktop to configure the Wi-Fi.

### Additional Wi-Fi Configuration Notes

- The Wi-Fi is configured with DHCP for the 547385A dog.
- To set up Wi-Fi for a new device, follow these steps:
  - SSH or VNC into the Raspberry Pi.
  - In a new terminal, navigate to `/etc` and edit `dhcpcd.conf` to add the following lines:
    ```
    interface wlan2
    metric 300
    ```
  - Save and exit the editor using `CTRL+S` and `CTRL+X`.
  - Place the `wifi_up.sh` script on the Desktop.

### Connecting Nano Boards to Wi-Fi

- VNC (or SSH) into the Raspberry Pi.
- Navigate to the Desktop and execute `sudo sh wifi_up.sh`.

### Enabling Wi-Fi on Raspberry Pi

- Repeat the steps for Nano boards.
- VNC (or SSH) into the Raspberry Pi and execute `sudo ifconfig wlan0 up`.
- Select 'fau' at the top right of the screen for wlan0 to connect.

## Movement with the Legs 🦿

Use the JavaScript Node.JS API with the Droneblocks library at `GO1-JS`. Execute `node ./index.js` while connected to the robot dog's hotspot to enable movement.

## 🗺️ Navigation and Mapping 

VNC into the NX board at `192.168.123.15` in the `/home/Desktop` directory. Before executing `nav.py`, run `build_map.sh` and `build_map_rviz.sh` to create custom maps.

## 🕵️ Person Detection

Run `python3 start_vision.sh` to initiate the person detection script. This script utilizes the NX board's camera to detect people and measure their distance from the camera.

## 🚦 Project Status

The project is completed and ready for use.

