---
backward: "[[Content/School/Intro to Sociology/Chapter 6]]"
forward: "[[Content/School/Intro to Sociology/Chapter 8]]"
parent: "[[Spring 2025]]"
---

 ## <span class="section-sub-heading heading-collapse-indicator">Windows Server 2016 Storage Options Summary</span>

#### **Disk Storage Types: Basic vs. Dynamic Disks**

Disk storage in Windows Server 2016 can be categorized into **Basic Disks** and **Dynamic Disks**, each with distinct capabilities and use cases.

### **Basic Disks**

- Use **traditional [[#^partitioning-def|partitioning]]** with primary and **[[#^extendedpartition-def|extended partitions]]**.
    
- Allow the creation of **logical drives** within extended partitions.
    
- Support **[[#^mbr-def|MBR (Master Boot Record)]]** and **[[#^gpt-def|GPT (GUID Partition Table)]]** partitioning schemes.
    
- Default disk type in new or upgraded Windows Server 2016 installations.
    
- **Limited RAID support**, requiring hardware RAID controllers for redundancy.
    

### **Dynamic Disks**

- **No fixed partitions**, allowing more flexible volume management.
    
- Enable the creation of volumes spanning **multiple disks**.
    
- Support **RAID levels 0, 1, and 5** in software.
    
- Allow **reactivation** if a disk goes offline.
    
- Incompatible with multi-boot systems (must use basic disks).
    
### **Partitioning Methods in Basic Disks**

#### **1. MBR (Master Boot Record)**

- Stores partitioning information in the first sector.
    
- **Limitations**: Maximum **2TB disk size** and **4 partitions**.
    

#### **2. GPT (GUID Partition Table)**

- Stores partitioning information in multiple locations for redundancy.
    
- **Advantages**:
    
    - Supports up to **18 exabytes**.
        
    - Allows **128 partitions**.
        
    - Works with both **BIOS and UEFI**.
        
### **Types of Partitions in Basic Disks**

- **Primary Partition**: Contains OS and system files, can be marked active.
    
- **Extended Partition**: A workaround for the 4-partition limit, allows logical drives.
    
- **Active Partition**: The partition the system boots from.
    

**System vs. Boot Partition:**

- **System Partition**: Stores startup files (e.g., `bootmgr`).
    
- **Boot Partition**: Contains OS files (`\Windows`).
    

---

### **Converting Between Basic and Dynamic Disks**

- **Basic → Dynamic**: No data loss, can be done via Disk Management.
    
- **Dynamic → Basic**: Requires **deleting all volumes**, leading to data loss.
    

---

### **Types of Dynamic Disk Volumes**

#### **1. Simple Volume**

- A single segment on a dynamic disk.
    
- Can be **extended** on the same disk.
    
- **No fault tolerance**.
    

#### **2. Spanned Volume**

- Combines **2 to 32 dynamic disks** into a single logical volume.
    
- Data is written **sequentially** across disks.
    
- **Risks**: If **one disk fails, all data is lost**.
    
- **Cannot be used for critical data**.
    

#### **3. Striped Volume (RAID-0)**

- Splits data evenly across **2 to 32 disks** for better performance.
    
- Uses **64 KB blocks** for striping.
    
- **No fault tolerance** – failure of one disk results in **total data loss**.
    
- Best for **high-speed storage**, e.g., large databases.
    

#### **4. Mirrored Volume (RAID-1)**

- Creates an **exact copy** of data on two disks.
    
- Provides **fault tolerance** – if one disk fails, data remains intact.
    
- **Storage overhead**: Requires double the disk space.
    

#### **5. RAID-5 Volume**

- Combines **striping with parity** for redundancy.
    
- Requires **at least 3 disks**.
    
- Can recover data if **one disk fails**.
    
- More efficient use of space compared to RAID-1.
    

---

### **Shrinking a Volume in Windows Server 2016**

Windows Server 2016 allows reducing the size of **basic and dynamic disk volumes** to create unallocated space.

#### **Steps to Shrink a Volume:**

1. Open **Disk Management**.
    
2. Right-click the volume’s **blue bar**.
    
3. Select **Shrink Volume**.
    
4. Enter the desired space to recover.
    
5. Click **Shrink**.
    
6. The new **unallocated space** appears in Disk Management.
    

#### **Limitations of Shrinking Volumes:**

- **Paging files and shadow copies** can prevent shrinking.
    
- **Bad clusters** may restrict shrinking.
    
- Moving the paging file to another disk may allow further shrinking.
    

---

### **Comparison: Basic vs. Dynamic Disks**

|Feature|Basic Disks|Dynamic Disks|
|---|---|---|
|Partitioning|Uses MBR/GPT|No traditional partitions|
|Max Partitions|4 (MBR), 128 (GPT)|Unlimited|
|Multi-Disk Volumes|No (except hardware RAID)|Yes (spanned, striped, RAID)|
|Fault Tolerance|Hardware RAID only|RAID-1, RAID-5 supported|
|Extendability|Only in NTFS (GPT)|Supports spanning across disks|
|Multi-Boot Support|Yes|No|
|Conversion|Can convert to dynamic|Requires volume deletion|

### **Conclusion**

- **Use basic disks** if:
    
    - You need **multi-boot support**.
        
    - Simplicity and compatibility are top priorities.
        
- **Use dynamic disks** if:
    
    - You need **flexible storage configurations**.
        
    - You require software-based **RAID and volume spanning**.
 


 ## <span class="section-sub-heading heading-collapse-indicator">Chapter Summary</span>

- Windows Server 2016 uses **basic** and **dynamic** disks. Basic disks are backward compatible
with earlier Windows server and workstation operating systems. Dynamic disks offer more
flexibility for configuration.
- Dynamic disks can be configured as simple, spanned, striped, mirrored, and RAID-5
	volumes.
- If you need to recover space from a basic or dynamic disk, you can shrink the disk so that
the recovered space can be configured as a separate volume.
- The Disk Management tool enables you to configure basic and dynamic disks. It performs
disk configurations from simple volumes to RAID-5. You can also use it to convert a basic
disk to a dynamic disk or vice versa.
- For optimum disk performance, plan to set up a schedule to regularly defragment disks on
a server.
- Use the Disk Check and chkdsk tools to find and repair disk problems.
- RAID provides fault tolerance for hard disks. Windows Server 2016 supports RAID levels 0, 1, and 5.
- RAID level 0 is disk striping. It provides no actual fault tolerance other than to help extend the life of the disks.
- With disk mirroring or duplexing (RAID level 1), the same data is written to a partition on each of the two disks included in the mirror.
- With RAID level 5, data is written across a minimum of three disks. Parity information is added to achieve fault tolerance.
- Storage Spaces is a technology that opens up a variety of ways to manage disk storage in Windows Server 2016. Storage Spaces enables you to create storage pools containing different types of storage technologies, such as combining SATA and SSD storage in the same pool. Adding more storage is relatively easy and flexible.
- Three RAID-like resiliency types are offered through Storage Spaces: simple (similar to RAID level 0), mirror (similar to RAID level 1), and parity (similar to RAID level 5).
- New to Windows Server 2016, Storage Spaces Direct makes it even easier to add and access storage spaces and is especially targeted for virtual machines.
- Multipath I/O extends your options for creating fault tolerance for storage through using redundant paths.
- **Windows Server Backup** offers features to schedule backups, perform full, custom, or incremental backups, and recover data from backups.

## <span class="section-sub-heading heading-collapse-indicator">Key Terms</span>

- **active partition** The partition from which a computer boots.
- **basic disk** In Windows Server 2016, a partitioned disk that can have up to four partitions and that uses logical drive designations. This type of disk is backward compatible with previous versions of Windows client and server operating systems and MS-DOS and supports multi-boot with other operating systems. Uses traditional disk management techniques.
- **boot partition** Partition on basic disks that holds the Windows Server 2016 \Windows folder containing the system files.
- **boot volume** Volume on dynamic disks that holds the \Windows folder of system files.
- **custom backup** Enables you to configure backups differently for each volume, using either a full backup or an incremental backup.
- **defragmenting** A software process that rearranges data to fill in the empty spaces that develop on disks and makes data easier to obtain.
- **Device Specific Module (DSM)** A software interface between the Multipath I/O capability in Windows Server 2016 and the hard disk hardware.
- **disk duplexing** A fault-tolerance method similar to disk mirroring in that it prevents data loss by duplicating data from a main disk to a backup disk, but disk duplexing places the backup disk on a different controller or adapter than is used by the main disk.
- **disk mirroring** A fault-tolerance method that prevents data loss by duplicating data from a main disk to a backup disk. Some operating systems also refer to this as disk shadowing.
- **dynamic disk** In Windows Server 2016, a disk that does not use traditional partitioning, which means that there is no restriction to the number of volumes that can be set up on one disk or to the ability to extend volumes onto additional physical disks. Dynamic disks are compatible with Windows Server 2016 back through Windows 2000 Server.
- **extended partition** A partition that is created from unpartitioned free disk space and is linked to a primary partition in order to increase the available disk space. ^extendedpartition-def
- **fault tolerance** Techniques that employ hardware and software to provide assurance against equipment failures, computer service interruptions, and data loss.
- **formatting** A process that prepares a hard disk partition for a specific file system.
- **fragmented** Having files spread throughout a disk with empty pockets of space between files; a normal and gradual process in the functioning of an operating system, addressed by using a defragmentation utility.
- **full backup** A backup of an entire system, including all system files, programs, and data files.
- **Globally Unique Identifier (GUID) Partition Table (GPT)** A method for partitioning disks that allows for theoretically unlimited partitions and use of larger disks. In Windows Server 2016, the maximum number of partitions on a GPT disk is 128, and the maximum partition size is up to 18 exabytes. ^gpt-def
- **home directory or home folder** A server folder that is associated with a user’s account and that is a designated workspace for the user to store files.
- **incremental backup** Backs up only files that are new or that have been updated.
- **Internet Small Computer System Interface (iSCSI)** A high-speed technology used in SANs that employs TCP/IP communications and SCSI disk drives. See Storage Area Network (SAN).
- **Master Boot Record (MBR)** Data created in the first sector of a disk, containing startup information and information about disk partitions. ^mbr-def
- **mirrored volume** Two dynamic disks that are set up for RAID level 1 so that data on one disk is stored on a redundant disk.
- **mounted drive** A physical disk, CD/DVD, removable drive, or other drive that appears as a folder and that is accessed through a path like any other folder.
- **Multipath I/O** A set of drivers in Windows Server 2016 that can be used with device and network architecture to set up multiple paths between a server and its disk storage to achieve fault tolerance.
- **Non-volatile Memory Express (NVMe)** A communications protocol and interface created for SSD to enable much faster data access and to reduce data latency.
- **parallelized repair** A process in Storage Spaces that causes the data on a failed disk to be automatically spread over all of the remaining functioning disks.
- **partition table** Table containing information about each partition on a disk, such as the type of partition, size, and location. Also, the partition table provides information to the computer about how to access the disk.
- **partitioning** Allocating a group of tracks and sectors on a disk to be used by a particular file system, such as NTFS. ^partitioning-def
- **primary partition** Partition or portion of a hard disk that is bootable.
- **RAID (redundant array of inexpensive [or independent] disks)** A set of standards designed to extend the life of hard disk drives and to prevent data loss from a hard disk failure.
- **RAID-5 volume** Three or more dynamic disks that use RAID level 5 fault tolerance through disk striping and creating parity blocks for data recovery.
- **Serial Advanced Technology Attachment (SATA)** A high-speed serial interface technology for hard disks.
- **Serial Attached SCSI (SAS)** An update to parallel SCSI that uses serial communications and does not require terminators as with the older parallel SCSI technology.
- **Server Message Block version 3 (SMBv3)** Version 3 of the SMB protocol native to Windows operating systems that is used for sharing folders and files on a network as well as for communications between nodes in Storage Spaces Direct.
- **simple volume** A portion of a disk or an entire disk that is set up as a dynamic disk.
- **Small Computer System Interface (SCSI)** A 32- or 64-bit computer adapter that transports data between one or more attached devices, such as hard disks, and the computer using parallel communications technology.
- **software-defined storage (SDS)** Managing data storage with software that is independent of the actual storage hardware.
- **solid state drive (SSD)** A fast storage technology based on using semiconductors for storage, similar to flash drives.
- **spanned volume** Two or more Windows Server dynamic disks that are combined to appear as one disk.
- **Storage Area Network (SAN)** A grouping of storage devices that forms a subnet. The storage devices are available to any server on the main network and appear to the user as though they are attached to the server they are accessing.
- **storage pool** Used in Storage Spaces, a grouping of physical disks and disk space to be managed by a Windows Server 2016 server as a virtual disk.
- **Storage Spaces** A Windows Server 2016 technology that enables multiple physical disks to be formed into individual storage pools. See storage pool.
- **Storage Spaces Direct** Software-defined storage that is intended to make storage more versatile through making it easier to add storage as needed, to access storage, and to use new storage capabilities. See Storage Spaces.
- **stripe set** Two or more basic disks set up so that files are spread in blocks across the disks.
- **striped volume** Two or more dynamic disks that use striping so that files are spread in blocks across the disks.
- **striping** A data storage method that breaks up data files across all volumes of a disk set to minimize wear on a single volume.
- **system partition** Partition on basic disks that contains boot files.
- **system volume** Volume on dynamic disks that is used to boot the computer.
- **tiered storage places** In Storage Spaces, the ability to have slow tiers (slow disk technology, such as SATA) for less frequently accessed data and fast tiers (faster disk technology, such as SSD) for more frequently accessed data.
- **Unified Extensible Firmware Interface (UEFI)** A firmware alternative to BIOS that includes the use of GPT disks. See Globally Unique Identifier (GUID) Partition Table (GPT).
- **virtual disk** As used in Storage Spaces, a grouping of different kinds of physical disks, also known as a storage pool, that are combined on a server to appear to the user or to an application as one disk. See storage pool and Storage Spaces.
- **volume** A logical designation of one or more physical disks partitioned and formatted with one file system. One volume can be composed of one or more partitions. In Windows Server 2016, a volume can be a basic disk partition that has been formatted for a particular file system, a primary partition, a volume set, an extended volume, a stripe set, a stripe set with parity, or a mirror set. A volume can also be a dynamic disk that is set up as a simple volume, spanned volume, striped volume, RAID-5 volume, or mirrored volume.
- **volume set** Two or more formatted basic disk partitions (volumes) that are combined to look like one volume with a single drive letter.
- **Volume Shadow Copy Service (VSS)** Backup service used in Windows Server 2016 to create stable images of files and folders on servers based on the point in time when the image is made.