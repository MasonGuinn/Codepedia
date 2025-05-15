---
backward: "[[Content/School/Unix-Linux/Chapter 4]]"
forward: "[[Content/School/Unix-Linux/Chapter 6]]"
parent: "[[Spring 2025]]"
---

| command            | description                                                     | params                                                                                                                     |
| ------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| grep, egrep, fgrep | search for a specific text string in a file(s) or directorie(s) | `-i` ignore case `-I` displays only the names of the files `-n` display matching numbers `-R` recursively `-E` expressions |
|                    |                                                                 |                                                                                                                            |
|                    |                                                                 |                                                                                                                            |

| Word           | Definition                  | Example |
| -------------- | --------------------------- | ------- |
| Literals       | letters A-Z                 | Hey     |
| metacharacters | represents other characters | Stuff*  |
|                |                             |         |
|                |                             |         |

# Regular Expressions %% fold %% 
![[Pasted image 20250509220244.png]]

`/` to escape regex


# Input and Output Manipulation  %% fold %% 
0 - stdin - controls how data is inputted
1 - stdout - controls output, normal screen output to a file, 
2 - stderr - controls output, error output, and can send it to a file

## Redirect Symbols 
`<` input 
`>` output
`>>` append output 

### Examples:
```bash
$ ls file1 file2
ls: cannot access 'file2': No such file or directory
file1

$ ls file1 file2 1>output.txt 2>error.txt
$ cat output.txt
file1
$ cat error.txt
ls: cannot access 'file2': No such file or directory
```
```bash
$ ls file1 file2 >output.txt 2>&1
$ cat output.txt
ls: cannot access 'file2': no such file or directory
file1
```


### File Descriptors Example %% fold %% 
![[Pasted image 20250509221542.png]]

## Piping
Piping `|` takes the **output** from one command and uses it as **input** for another command. Pipes work with any command the produces output, and they're great when you want to save the results of something you redirected.
- Syntax
	- Command output :LiArrowRight: command input
	- `Command 1 | Command 2`
	- `Command 1 | Command 2 | Command 3`
	- `Command 1 | Command 2 > output.txt`
- Using `tee`
	- `ls -l | tee rootdir.txt` (Output goes to **SCREEN** & **FILE**)
- Examples
	- `cat logfile | more`
