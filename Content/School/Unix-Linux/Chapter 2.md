---
backward: "[[Content/School/Unix-Linux/Chapter 1]]"
forward: "[[Content/School/Unix-Linux/Chapter 3]]"
parent: "[[Spring 2025]]"
---
### 📚 **Manuals and Help Utilities**

#### 🔹 `man` Command – The Manual System

- Use: `man <command>`
    
- Displays official manual entries for commands/utilities.
    
- Sections of the manual:


| Section | Content Type                    |
| ------- | ------------------------------- |
| 1       | User commands                   |
| 2       | System calls (Unix/Linux/C)     |
| 3       | C Library functions             |
| 4       | Special files (`/dev`)          |
| 5       | File formats and conventions    |
| 6       | Games and screensavers          |
| 7       | Miscellaneous info              |
| 8       | System admin commands & daemons |
| 9       | Kernel routines                 |
    
- Check man storage location: `echo $MANPATH`
    
    - Some distros use `/etc/man_db.conf` for config.
        
- Structure of a man page:
    
    - **Title**: Command name and section.
        
    - **NAME**: Command + short description.
        
    - **SYNOPSIS**: Usage format (flags, arguments).
        
    - **DESCRIPTION**: Detailed options, explanations.
        
    - **SEE ALSO**: Related commands and references.
        

---

#### 🔹 `info` Command – In-Depth Documentation

- Use: `info <command>`
    
- Similar to `man`, but often includes **examples and deeper explanations**.
    
- Navigation:
    
    - `/` → search in `cat`-based viewers.
        
    - `Ctrl + s` → search inside `info` nodes.
        
    - `n` → jump to next match in search.
        
---

#### 🔹 `--help` Option – Quick Syntax Reminder

- Use: `<command> --help`
    
- Summarized overview of available options. Useful for quick checks.
    
---

## 📂 Linux Directory Navigation & File Commands

### 🧭 `pwd` – Present Working Directory

- Displays your current directory: `pwd`
    

### 🔁 `cd` – Change Directory

- **Relative Path**: `cd subfolder`
    
- **Absolute Path**: `cd /home/user/folder`
    
- **Move up**:
    
    - One level: `cd ..`
        
    - Two levels: `cd ../..`
        

---

### 📋 `ls` – List Directory Contents

- Default: Shows visible files/folders.
    
- Common flags:

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `ls -a`          | Show all files (incl. hidden)     |
| `ls -l`          | Long listing with metadata        |
| `ls -S`          | Sort by file size (descending)    |
| `ls --sort=size` | Sort by criteria (e.g. time, ext) |
| `ls -i`          | Show index of files               |

---

## 🗂️ Linux Filesystem Hierarchy Standard (FHS)

| Directory | Purpose                                       |
| --------- | --------------------------------------------- |
| `/`       | Root of entire file system                    |
| `/bin`    | Essential user binaries (e.g., `cp`, `ls`)    |
| `/boot`   | Bootloader and kernel files                   |
| `/dev`    | Device files (e.g., `/dev/sda`, `/dev/ttyS0`) |
| `/etc`    | Configuration files                           |
| `/home`   | User home directories                         |
| `/root`   | Home dir for root user                        |
| `/media`  | Mount point for external media                |
| `/mnt`    | Temporary mount point (e.g. NFS)              |
| `/opt`    | Optional application packages                 |
| `/proc`   | Virtual FS for process and system info        |
| `/sbin`   | System binaries (e.g., `shutdown`, `fdisk`)   |
| `/srv`    | Data for services (e.g., web servers)         |
| `/tmp`    | Temporary files (auto-deleted)                |
| `/usr`    | User-space applications and utilities         |
| `/var`    | Variable files: logs, spools, mail, etc.      |

> **Note on `/proc`**: It's a pseudo-filesystem. Use `cat /proc/<file>` to read system/hardware info like `cpuinfo`, `meminfo`, `interrupts`, `modules`.

---

### 🔍 Exploring Documentation in the Filesystem

- Many docs are in: `/usr/share/doc`
    
- View with: `cat <file> | more`
    
- Search within:
    
    - In `cat/more`: `/keyword` then `n` to cycle
        
    - In `info`: `Ctrl + s` → `keyword` → `Enter`

---

### ⚠️ **Performance Considerations**

- The `find` command can be slow on large filesystems. Use `-maxdepth` to limit the search depth for better performance.

Example: `find . -maxdepth 3 -name "*.log"`


## 🔍 File Search Utilities in Linux

### 🔍 `find` Command – Search for Files and Directories

The **`find`** command is used to search for files and directories in a directory hierarchy based on specific criteria such as name, type, size, modification time, etc.

#### 📝 **Syntax**:
`find [path] [expression]`

- **`path`**: The directory to begin the search (default is the current directory `.`).
    
- **`expression`**: The criteria to search for (e.g., name, type, size).
    
---
#### 🧭 **Common Examples**

##### 🔹 Find files by name: `find . -name "file.txt"`

- Searches for files named `file.txt` in the current directory and all subdirectories.

##### 🔹 Find files by type: `find . -type d`

- Searches for directories (`d`) in the current directory and all subdirectories.

##### 🔹 Find files with a specific extension: `find . -name "*.jpg"`

- Finds all `.jpg` files in the current directory and subdirectories.
    
##### 🔹 Find files modified within the last N days: `find . -mtime -7`

- Finds files modified in the last 7 days.
    
##### 🔹 Find files by size: `find . -size +10M`

- Finds files larger than 10MB.
    
##### 🔹 Find and delete files: `find . -name "*.bak" -exec rm -f {} \;`

- Finds files with a `.bak` extension and deletes them.
    
---
#### ⚙️ **Common Options**

| Option                  | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| `-name <pattern>`       | Search by file name (supports wildcards).                       |
| `-iname <pattern>`      | Case-insensitive name search.                                   |
| `-type <type>`          | Search by file type (e.g., `f` for files, `d` for directories). |
| `-size <size>`          | Search by file size (e.g., `+10M` for larger than 10MB).        |
| `-mtime <n>`            | Search files modified within the last `n` days.                 |
| `-exec <command> {} \;` | Execute a command on each found file (e.g., `rm -f`).           |
| `-user <username>`      | Search for files owned by a specific user.                      |
| `-group <group>`        | Search for files belonging to a specific group.                 |
| `-maxdepth`             | Limit the depth of the directory traversal                      |

---
#### ⚡ **Advanced Examples**

- Find files larger than 1 GB: `find / -type f -size +1G`

- Find empty files: `find . -type f -empty`

- Find files with a specific permission: `find . -type f -perm 644`
	Finds files with permission `644` (read/write for owner, read-only for others).

- Limit search depth (max 2 levels): `find . -maxdepth 2 -name "*.txt"`
	Limits the search to 2 levels of directories.
    
---

#### 🛠️ **Useful Commands with `find`**

- Count files found: `find . -type f | wc -l`
    
    - Counts the number of files found.
        
- Search by modification time (e.g., last 24 hours): `find . -mtime -1`
    
- Search by file type (directories only): `find . -type d`
    

---


### 🚀 `locate` – Fast File Finder

- **Description**:  
    The `locate` command is a faster alternative to `find` because it searches a **pre-built index** instead of scanning directories in real-time.
    
- **Why it's fast**:  
    Unlike `find`, which checks each directory and file live, `locate` uses an indexed database (typically updated daily by `updatedb`).
    
- **Usage**: `locate <filename>`
    
- **Example**: `locate passwd`
    
    Searches for all instances of "passwd" across indexed locations.
    
- **Note**:  
    You might need to run `sudo updatedb` if the database is outdated or missing.
    

---

### 🧭 `which` – Show Full Path to Executables

- **Description**:  
    The `which` command tells you **where a command lives** in your system by searching your `$PATH` environment variable.
    
- **Usage**: `which <command>`
    
- **Example**: `which ls`
    
    Output: `/bin/ls`
    
- **Use Case**:  
    Confirm which version of a command you’re running if there are multiple versions installed (e.g., Python).
    

---

### 🔎 `whereis` – Locate Binary, Source, and Man Page

- **Description**:  
    The `whereis` command finds the **binary**, **source code**, and **manual pages** of a given command.
    
- **Usage**:`whereis <command>`
    
- **Example**: `whereis ls`
    
    Output: `ls: /bin/ls /usr/share/man/man1/ls.1.gz`
    
- **Use Case**:  
    Helpful when you want to find all files related to a program, especially for debugging or system administration.
    

---

### 📌 Summary Table

|Command|Purpose|Notes|
|---|---|---|
|`find`|Real-time, recursive directory search|Slower but flexible|
|`locate`|Fast index-based file search|Needs database (`updatedb`)|
|`which`|Shows full path to executable|Uses `$PATH`|
|`whereis`|Finds executable, source, and man page|Broader but less customizable than `find`|


## 🧠 `type` – Identify How a Command Will Be Interpreted

### 📝 **Description**

The `type` command shows **how a command name is interpreted** by the shell: whether it’s a **builtin**, an **alias**, a **keyword**, or an **executable file**.

- It’s useful for **debugging command behavior** and **understanding shell resolution** (especially when commands are aliased or overridden).
    

---

### 🧪 **Usage**`type <command>`


### 📌 **Examples**

#### 🔹 Check if a command is an alias or builtin:`type ls`

Possible output:`ls is aliased to 'ls --color=auto'`

#### 🔹 Determine if a command is a shell builtin:`type cd`

Output:`cd is a shell builtin`

#### 🔹 Check for external binaries:`type grep`

Output: `grep is /bin/grep`

---

### ⚙️ **Options**

|Option|Description|
|---|---|
|`-a`|Show **all locations** in the path (aliases, functions, builtins, and files).|
|`-t`|Print only the **type** of command (`alias`, `builtin`, `file`, etc.).|
|`-p`|Print the **path** to the command if it's a binary, skipping aliases and functions.|
|`-f`|Skip functions; use to **force search for builtins and files only**.|