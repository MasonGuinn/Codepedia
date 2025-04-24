---
backward: "[[Content/School/Unix-Linux/Chapter 2]]"
forward: "[[Content/School/Unix-Linux/Chapter 4]]"
parent: "[[Spring 2025]]"
---
One of the most frequently used commands on Linux for viewing files is the **cat** command.

you can also use the less command to view Linux files. The less command can be very useful. Like cat, the less command displays the contents of a text file on the screen. However, it addresses the key weakness that we just discussed with the cat command. The less command automatically pauses the output of a long text file on the screen, one page at a time.

Another command that you can use to view the contents of a file on a Linux system is the head command. head displays the first few lines of the file you specify on the screen.

The tail command is the opposite of the head command. Where the head command displays the first few lines at the beginning of the file, the tail command displays the last few lines at the end of the file.
the -f option, the tail command continuously monitors the file

---
If you need to create a file with no contents, you can use the touch command at the shell prompt.

Linux does not commonly use file extension like .txt for text files or .exe for executable files. A simple way to discover the Linux file type is to use the file command at the shell prompt. The output will provide the general file type, such as a directory, a named pipe, a link file, or a standard file.

You can use the rm command to delete files or directories

The same utilities you use for copying and moving directories are used for copying and moving files. To copy a file from one location in the file system to another, use the cp command

To move a file, use the mv command. This will copy the file from its current location, add it to the new location, and delete the original file.

The mv command can also rename files. To do this, enter mv followed by the name of the file to be renamed and then followed by the new name.

Shred - This command is used to completely remove a file. This is important to understand because when you delete a file using the rm command, the file's inode is deleted, but the file's data remains on the hard drive. shred -u will completely remove the file
the -z option. This specifies that the shred process overwrites the data with zeros

---
