---
backward: "[[Content/School/Unix-Linux/Chapter 1]]"
forward: "[[Content/School/Unix-Linux/Chapter 3]]"
parent: "[[Spring 2025]]"
---

**MAN command (Manual):**
Linux also has built-in facilities that provide detailed help. They include man, info, and the command line parameter `--help`.
Many Linux distributions store the location in the environmental variable MANPATH. Others may use configuration file `/etc/man_db.conf`. Enter the command echo `$MANPATH` to display where the man pages are stored
All the man pages are called the manual. The manual is divided into **nine different sections**. <u>Section one</u> of the manual provides documentation for programs and shell commands that can be run by any user on the system. <u>Section two</u> covers Unix and C system calls. <u>Section three</u> is for C library functions. <u>Section four</u> documents the special files that are found in the `/dev` directory. <u>Section five</u> covers file formats and conventions. <u>Section six</u> documents games. <u>Section seven</u> describes miscellaneous conventions. <u>Section eight</u> combines administrative utilities and daemons. And <u>section nine</u> is for the kernel itself.
Type `man pwd` at the command prompt, and the man page for pwd is displayed.
The **title** is the first line in the man page. It lists the name of the utility and the section number it belongs to
The **NAME** section displays the command name followed by a short description of what function the command performs.
The **SYNOPSIS** section shows the user how to use the command
The **DESCRIPTION** section is very detailed and provides much more information about how to use the command. In general, all of the command line options are listed by the single letter or word that's used to modify the command's behavior. Many commands have a single-dash option or a double-dash option that's used interchangeably
Most man pages include a **SEE ALSO** section. This section provides you with a list of other man pages, or even other resources, that are related to the command you have looked up

---
**Info Utility Command:**
You can also use the **info utility** to view documentation for commands, utility services, files, and applications installed
The man utility is more of a quick reference. It provides information, but no examples of how to use it. The info utility is more of a primer that provides much the same information as man, but adds a deeper explanation of each subject, often along with examples.
Simply type the word `info` followed by the command.

---
**More Information:**
There will be a `/usr/share/doc directory`. When you list the contents of this directory, you see that a directory exists for many of the different components of the Linux system.
Often the documentation found in these directories can be viewed using the `cat` command. For example, I can run `cat WHATSNEW | more`
Instead of reading the whole file until I found a solution, I could have pressed `/` and then typed a keyword, such as directories. Now, when I press `Enter`, each instance of the word "directories" is highlighted within the file.
I can then jump between each search result by pressing the `N` key
For the command info, you can search within a particular node, but instead of using the` forward slash` key, you need to press the `Control and s` keys. Then you'll type the search term you're looking for. In this case, we want to recursively delete directories, so let's type recursive. When I do, I see the search results highlighted over here.

---
**--help command**
You can get a quick overview of a particular command by typing the name of the command followed by `--help`, this is a condensed version of the man page.

---
**pwd command**
The `pwd` command stands for present working directory,
The command is used to display the current directory you're working in on the screen.

---
**cd command**
Relative path: The path specified within the command is relative to some other point in the file system, for example, if we're in the directory Documents, and then type cd Finances, it's going to go to the sub-directory using the relative path.
Absolute Path: Specify the full path to the directory that you want to change to, starting with the root directory, which is forward slash (/)
Move up levels in the file system hierarchy. You do this by entering `cd ..` to change the current directory to the next level higher in the hierarchy
Moving up TWO levels by typing `cd ../..`

---
**ls command**
Displays all of the files and all of the subdirectories located in the current directory by default
Use `ls -a` to display all entries, including hidden folders.
Use `ls -l` to display long listing format, to get more detailed information
Use `ls --sort=[Word]` to sort by`[Word]`, Word being size, time, extension, version, and width
Use `ls -S` to sort by file size, largest first 

---
Linux Filesystem Hierarchy Standard, or FHS, which provides a standard directory structure to ensure consistency between all the Linux distributions.

First, at the root of the system, we have the bin directory. It contains executable files necessary to manage and run the Linux system, including your shell executables, such as for the bash shell. Also included are file system management utilities like cp and rm.

Another directory at the root of the file system is the dev directory. Unique in the Linux file system, the dev directory contains special files that represent the hardware devices installed in the system. For example, the first hard disk drive in the system is called sda. The second is called sdb, and each hard disk is represented by files in the /dev directory.
The partitions on each drive are identified by adding a number to the end of the disk name. For example, the first partition on the first hard drive is sda1
An older system with a floppy disk would use /dev/fd0 to access the first floppy disk drive. The first optical drive would be accessed using /dev/sr0, a second one would be /dev/sr1. You can access or send data on a serial port through /dev/ttyS0
all physical hardware in the Linux system is addressed by applications and services through the files in /dev. For example, saving a file to a disk, sending a print job to a printer, or accessing a file on a DVD all go through a file in /dev.
The /dev directory is also used for virtual system resources. For example, the /dev/random device file is connected to a virtual random number generator and not any physical hardware.

the /etc directory. This contains the text-based configuration files used to configure the Linux system, and all the services, daemons, and applications running on the system. Because they're text files, you can customize your system's behavior by editing the files in the text editor.

/home directory, which contains subdirectories that serve as home directories for each user account on the system.

the /media directory that's used by some Linux distributions to mount external devices, such as an optical drive or a connected USB drive. For example, if I were to insert an optical disk into the optical drive, I would need to mount it first in an existing directory, such as /media. Once the optical drive is mounted, I can use the CD command at the shell prompt to change into that directory and access the data on the optical device.

Now, some distributions use the /mnt directory instead of /media to mount external devices. Most distributions also use /mnt for temporarily mounting local and remote file systems. For example, if there's a server in the network with an NFS mount, I could mount it in the /mnt directory. Then, when I switch to /mnt, I'm accessing the data on the server in the shared folder somewhere else on the network. It's essentially like mapping a drive in Windows.

the /opt directory. Some applications put some of their files in the /opt directory during installation, but this doesn't happen often.

the /proc directory, which is unique from other directories because it doesn't actually exist. Instead, it's what is called a pseudo file system. This means the directory is dynamically created when it's accessed. /proc directory plays a key roll in accessing information about the processes running on the system and system information. Notice that within /proc there are several directories identified with a number instead of a name. These numbers are process ID numbers, or PIDs. Every process running on the system has an assigned PID and a corresponding subdirectory in /proc that's named with the same PID. You can access information about a running process by viewing data within one of these directories. For example, if I want to view information about a process with the PID of 7610, I can go into the 7610 directory and view the running process's information. You can also view information about hardware in your system in /proc. For example, if I were to view this cpuinfo file with the cat command, I could see the type of CPU that's installed in this system. I could also use the cat command to view the interrupts file to see which devices in the system are using which interrupts. I could use the cat command to view the meminfo file to see how memory is being used. Or if I want to see what modules are loaded onto the system, I could use the cat command to view the modules file.

the /root directory which is the root user's home directory. The root user's directory is not in the same location as the standard user's home directories. The standard user's home directories are in /home and the root user's home directories are in /root.

You also have a directory named /sbin at the root of the file system. It contains important system administration utilities, like fdisk, ifconfig, init, makefs, shutdown, halt, and so on.

Another directory at the root is /srv which contains subdirectories where services save their files. For example, if I installed a web server, then the web server files that are served to web clients on the browser are stored in /srv.

Next is the /tmp directory, which contains temporary files created by the system or by you. Be aware that the Linux kernel will clear out older temporary files automatically on a periodic basis.

Next, we have the /usr directory that contains application files. Most application files used by the system are stored in a subdirectory within /usr.

And finally, we have the /var directory, which contains variable data – including system log files and mail spool files for each user account.

---
