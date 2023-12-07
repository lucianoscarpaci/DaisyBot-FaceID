# Group1

# robot-talk folder
# talk
 - In this directory, there is all the code to make the Go1 voice talk in the file. Run ```python3 talk.py``` replace the variable text with what you want the robot to say. Also, the robot needs Wi-Fi first before you run it because it requires the python package "gTTS" (Google Text to Speech) 
# Wi-Fi
- In this directory, there is the wifi script that we call 'Dog WiFi'. The instructions are to put this file onto the Raspberry Pi board to the desktop and run ```sudo python3 wifi.py``` on the desktop of the raspberry pi.
# additional notes about Wi-Fi, the Wi-Fi is configured with DHCP with the 547385A dog. To set up Wi-Fi for a new dog, Caleb made some instructions:
ssh or VNC
In new terminal:
cd ../../etc
nano dhcpcd.conf

add the two lines at the end of the file:
interface wlan2
metric 300

CTRL+S to save
CTRL+X to exit

Put wifi_up.sh script onto Desktop
 (edited)
[3:37 PM]
.

Get Wi-Fi on nano boards:
VNC (or ssh) into Raspberry pi
cd Desktop
sudo sh wifi_up.sh
 (edited)
[3:38 PM]
.


Get Rasperry pi Wi-Fi:
Repeat Get Wi-Fi on nano boards steps
VNC (or ssh) into Raspberry pi
sudo ifconfig wlan0 up

select fau (if not already) at the top right of the screen for wlan0
 (edited)"
# Movement with the Legs
# JavaScript Node.JS API with Droneblocks library @GO1-JS
Run ```node ./index.js``` while on the robot dog hot spot to get the movement working.

