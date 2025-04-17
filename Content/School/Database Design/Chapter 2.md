---
backward: "[[Content/School/Database Design/Chapter 1]]"
forward: "[[Content/School/Database Design/Chapter 3]]"
parent: "[[Spring 2025]]"
---
[Open PDF](DatabaseDesignCh2.pdf)

## 🧱 Entity Types %% fold %% 

### **Strong Entity**

- Exists independently of other entity types.
    
- Has its own **unique identifier** (primary key).
    

### **Weak Entity**

- Cannot exist on its own.
    
- Depends on a **related strong entity**.
    
- Identified by a **partial key** and the **primary key of the related entity**.
    

### **Associative (Bridge) Entity**

- Represents a **relationship** (often many-to-many) between two or more entities.
    
- Typically includes **foreign keys** referencing related entities.
    
- May also contain additional attributes related to the relationship.
    

---

## 🆔 Identifiers %% fold %% 

### **Identifier Attribute**

- Uniquely identifies each instance of an entity.
    
- Also known as a **Primary Key (PK)**.
    
- Can be **simple** or **composite**.
    

### **Composite Primary Key**

- Combines multiple attributes to uniquely identify a record.
    
- Example:
    
    - `DoctorID`, `PatientID`, and `DrugID` together form a composite PK.
        
    - `DrugID` alone may not be unique, especially if the same patient receives the same drug more than once.
        

### **Foreign Key (FK)**

- An attribute that references a **primary key** in another table.
    
- **Does not need to be unique** (allows many-to-one relationships).
    

---

## 🧩 Attribute Types & Notation %% fold %% 

| Attribute Type        | Description                                                                 | Symbol           |
| --------------------- | --------------------------------------------------------------------------- | ---------------- |
| **Derived Attribute** | Calculated from other attributes (e.g., age from DOB). Not stored directly. | `[Brackets]`     |
| **Multi-valued**      | Can hold multiple values (e.g., phone numbers).                             | `{Curly Braces}` |
| **Composite**         | Can be broken into smaller parts (e.g., Name → FirstName, LastName).        | —                |

---

## 🔗 Relationships %% fold %% 

### Degrees of Relationships:

- **Unary** (recursive): Entity relates to itself.  
    _Example: An `Employee` has a `ManagerID` that references another `Employee`._
    
- **Binary**: Relationship between **two** entities.
    
- **Ternary**: Relationship between **three** entities.
    

### Cardinality Notation:

| Symbol | Meaning        |
| ------ | -------------- |
| 0\|    | Optional One   |
| 0>     | Optional Many  |
| \|\|   | Mandatory One  |
| \|>    | Mandatory Many |

## 🛠 Design Principles %% fold %% 

- **Entities = Tables**
    
- **Attributes = Columns / Fields**
    
- **Relationships = Foreign Keys**
    

> 🛑 Avoid creating entities for **system users** or **system outputs** — entities should represent real-world business objects.

---

## 📐 ERD Design Process %% fold %% 

When asked to create an **Entity-Relationship Diagram (ERD)**:

1. **Identify Nouns**
    
    - Find business objects (e.g., departments, employees, projects). These become **entities**.
        
2. **Define Relationships**
    
    - Use business rules to describe how entities relate to each other.  
        _Example: “A division operates many departments” → One-to-Many._

## Examples %% fold %% 

![Pasted image 20250409175903.png](app://9c353e2e7618ea687d524125d9d8db69d74b/C:/dev/Obsidian/Codepedia/Config/Resources/Pasted%20image%2020250409175903.png?1744246743390)