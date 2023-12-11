#THIS IS THE SERVER

import socket
import os
import signal
import subprocess
import time
import psutil

rooms = ['A','B','C']

WAIT_TIME = 35 #CHANGE TIME AS NEEDED FOR PATROLS


# Server script--------------------------------------------------------------------------------------------

def start_navigation_server():
    host = '192.168.123.15'  # Change this to the server's IP address
    port = 50390  # Choose an available port number

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)     #socket setup
    server_socket.bind((host, port))
    server_socket.listen(1)
    #server_socket.close()
    
    try:
        while True:
            print(f"Server listening on {host}:{port}\n")
            client_socket, client_address = server_socket.accept()    #opens socket connection
            data = client_socket.recv(1024).decode('utf-8')
            print("Data received: |"+data+"|")
            if not data or not (data in rooms):
                print("Unknown data received or unknown room. No action taken.")
                client_socket.close()
                break

            result = subprocess.run("sh ~/Desktop/audio.sh navstart.wav", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
            #call to function here
            run_to(data, True)


            #call from function here
            run_to(data, False)

            print("Done executing command.")
            time.sleep(1)
            client_socket.send("Done Navigating".encode('utf-8'))
        pass
    except KeyboardInterrupt:            #when cntrl+c, close the sockets
        print("\nKeyboardInterrupt: Closing client socket.")

        client_socket.close()
        server_socket.close()



#patrolXto.sh function definition-------------------------------------------------------------------
def run_to(data, start):
    os.chdir(os.path.expanduser('~/UnitreeSLAM'))
    print("Running navigation command: TO")
    #nav_command = f"gnome-terminal -- bash -c \"cd /home/unitree/UnitreeSLAM/ && bash /home/unitree/UnitreeSLAM/patrolBto.sh\""
    if start:
        command = [
    "xterm",
    "-e",
    "bash",
    "-c",
    "cd /home/unitree/UnitreeSLAM/ && bash /home/unitree/UnitreeSLAM/mainPatrol.sh patrol"+data+"to"
]
    else:
        command = [
    "xterm",
    "-e",
    "bash",
    "-c",
    "cd /home/unitree/UnitreeSLAM/ && bash /home/unitree/UnitreeSLAM/mainPatrol.sh patrol"+data+"from"
]

    print(command)
# Run the command and set the process group
    p = subprocess.Popen(command, preexec_fn=os.setpgrp)
    #process = subprocess.run(nav_command, shell=True)
    #FIND TERMINAL PID----------------------------------------------------------------- 
    time.sleep(2)
    #find_terminal_pid_command = "pgrep -f 'x-terminal-emulator'"
    #result = subprocess.run(find_terminal_pid_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
  
    if 0 == 0:
        #terminal_pid = result.stdout.strip()
        #print(f"Terminal PID: {terminal_pid}")

        # Terminate the terminal window using the retrieved PID
        try:
            
            #os.kill(int(terminal_pid), signal.SIGTERM)
            #subprocess.run(['pkill', '-f', 'gnome-terminal'])
            # Get the PID of the terminal process


            # Wait for some time (replace with the appropriate duration)
            if start:
                result = subprocess.run("sh ~/Desktop/audio.sh to"+data+".wav", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                time.sleep(WAIT_TIME)
            else:
                result = subprocess.run("sh ~/Desktop/audio.sh from.wav", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                time.sleep(WAIT_TIME+20)
            #process2 = subprocess.run("rosnode kill -a", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE) #kill all ros
            # Command to initiate ROS shutdown--------------------------------------
            ros_shutdown_command = "pkill -f xterm"

            # Execute the command to shut down the ROS system
            subprocess.run(ros_shutdown_command, shell=True)
 
            time.sleep(2)
            # Kill the terminal process
            #subprocess.run(['kill', str(terminal_pid)])
            #os.killpg(p.pid, signal.SIGINT)
            print("Terminal window killed successfully.")
        except OSError:
            print("Failed to kill terminal window.")
    else:
        print("Failed to find terminal PID.")
    #----------------------------------------------------------------------------------

start_navigation_server()  #start the start_navigation_server function
