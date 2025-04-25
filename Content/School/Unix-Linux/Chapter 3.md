---
backward: "[[Content/School/Unix-Linux/Chapter 2]]"
forward: "[[Content/School/Unix-Linux/Chapter 4]]"
parent: "[[Spring 2025]]"
---
### **File Viewing Commands**

- **`cat filename`**
    
    - Displays full content of a file in one go (no paging).
        
    - Can be overwhelming for large files.
        
- **`less filename`**
    
    - Paged output; use `Enter` to scroll line-by-line, `Space` for page-by-page.
        
    - Press `q` to quit. Superior for large files.
        
- **`head filename`**
    
    - Shows the first 10 lines by default.
        
    - Use `head -n X filename` to show `X` lines.
        
- **`tail filename`**
    
    - Shows the last 10 lines by default.
        
    - Use `tail -n X filename` for specific line count.
        
    - Use `tail -f filename` to monitor file **live** (e.g., logs).
        

---

### 🛠️ **Creating, Copying, Moving, and Deleting Files**

- **`touch filename`**
    
    - Creates an empty file if it doesn’t exist.
        
    - Also updates access & modification times to current time.
        
- **`cp source dest`**
    
    - Copies a file from one place to another.
        
- **`mv source dest`**
    
    - Moves a file or renames it.
        
    - Syntax applies for both move and rename operations.
        
- **`rm filename`**
    
    - Deletes a file. Does **not** securely wipe contents.
        

---

### 🔐 **Secure File Deletion**

- **`shred -u filename`**
    
    - Overwrites file data and deletes it securely (removes inode).
        
- **`shred -z -u filename`**
    
    - Final overwrite with **zeros** for extra stealth.
        

---

### 🧪 **File Type Identification**

- **`file filename`**
    
    - Displays the file type (e.g., text, directory, link, binary).
        

---

### 🔗 **Links in Linux**

#### 🔹 Hard Links

- **Share the same inode**.
    
- Indistinguishable once created.
    
- **Deleting one does not delete the other**.
    
- Syntax:
    
    bash
    
    Copy code
    
    `ln original_file hard_link_name`
    

#### 🔹 Symbolic Links (Soft Links)

- Like shortcuts.
    
- Have **separate inodes**.
    
- Broken if the target file is deleted.
    
- View with:
    
    bash
    
    Copy code
    
    `ls -l`
    
    - Shows `linkname -> targetfile`.
        
- Create with:
    
    bash
    
    Copy code
    
    `ln -s target_file symlink_name`
    
    - ⚠️ Syntax: **target first, then link name**
        

---

### ✅ **Quick Command Reference Table**

|Command|Purpose|
|---|---|
|`cat`|Display file contents|
|`less`|Page-through file contents|
|`head`|Show beginning of file|
|`tail`|Show end of file (`-f` = live)|
|`touch`|Create or update file timestamps|
|`file`|Show file type|
|`cp`|Copy files|
|`mv`|Move/rename files|
|`rm`|Delete files|
|`shred -u`|Secure delete|
|`ln`|Hard link|
|`ln -s`|Symbolic (soft) link|