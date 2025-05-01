---
backward: "[[Content/School/Database Design/Chapter 3]]"
forward: "[[Content/School/Database Design/Chapter 5]]"
parent: "[[Spring 2025]]"
---

![[hoffer_mdm12e_pp_ch04-1 1.pptx]]


## Why do we need Relational Models?
You need to **convert entities and relationships into relations (tables)** to actually:

- **Store data**
    
- **Run SQL queries**
    
- **Enforce integrity rules**
    
- **Build applications**

### 📊 Real-World Analogy:

Think of it like this:

|**ER Model**|**Relational Model (Tables)**|
|---|---|
|Like a **blueprint**|Like a **house built from the blueprint**|
|Conceptual & high-level|Concrete & implementable|
|Helps you understand design|Actually holds your data in a running system|

---

### 🔄 Why We Transform ER Diagrams into Relations:

1. **Computers Don’t Understand “Entities”**
    
    - A database engine (like PostgreSQL, MySQL, Oracle) needs tables, not abstract diagrams.
        
    - Relations define exactly **how data is stored**—types, constraints, keys.
        
2. **ER Diagrams Miss Critical Implementation Details**
    
    - In the ER model, you just say:
        
        > "Student enrolls in Courses."
        
    - In the relational model, you need a **whole join table** with:
        
        - Student ID (FK)
            
        - Course ID (FK)
            
        - Maybe a grade, semester, timestamp
            
    - Without converting to relations, there’s no place to store that enrollment info.
        
3. **ER Diagrams Have No Integrity Rules Built In**
    
    - Relations let you enforce:
        
        - **Primary Keys**
            
        - **Foreign Keys**
            
        - **Data types**
            
        - **Not null constraints**
            
4. **Applications and Queries Run on Tables**
    
    - All real databases—whether you’re building an app, dashboard, or report—**require tables to function**.
        
    - You can't SELECT or JOIN from an ER diagram!
        

---


## Objectives:

- Define key database terms
    
- Understand five properties of relations
    
- Describe candidate keys and their properties
    
- Explain 1st, 2nd, and 3rd Normal Forms
    
- Understand problems with merging relations
    
- Transform E-R and EER diagrams into relational tables
    
- Create tables with integrity constraints
    
- Use normalization to remove anomalies and produce well-structured relations

## 📚 Definition Breakdown:

#### 🔷 **Relation = Table**

- A **relation** is the formal name for a **table** in the **relational model** of a database.
    
- It consists of:
    
    - **Attributes** (columns)
        
    - **Tuples** (rows)
        
- Example: A `Students` table is a **relation**.
- Your entities will be your relations/tables
- Your rows will be your entity instances 
- Your columns will be your attributes
    

#### 🔶 **Relationship = Association Between Tables**

- A **relationship** describes how **two or more entities** (tables) are **connected**.
    
- Relationships are modeled using **foreign keys**.
    
- Example: If each student is enrolled in multiple classes, the **relationship** between `Students` and `Courses` is **many-to-many**.

## Relational Model Components:

1. **Data Structure:** Tables (relations), rows (records), columns (fields/attributes)
    
2. **Data Manipulation:** SQL operations for retrieval and update
    
3. **Data Integrity:** Business rules to ensure consistent and valid data (enforced through a set of rules and constraints that prevent invalid, duplicate, or conflicting data from being entered or maintained in the database.)
    

### Relation Definition: A relation is a named, two-dimensional table.

- Unique name
    
- Every attribute value must be atomic (no multivalued/composite attributes)
    
- Every row must be unique
    
- Columns must have unique names
    
- Order of rows/columns is irrelevant
    
- All relations are in **1st Normal Form**
    

### ER Model Correspondence:

- Relations map to entity types and M:N relationships
    
- Rows = entity instances
    
- Columns = attributes
    
- Note: "Relation" in relational model is not the same as "relationship" in ER model
    

### Key Fields:

- **Primary Key:** Uniquely identifies each row
    
- **Foreign Key:** Allows a dependent relation to refer to its parent
    
- Keys can be simple or composite
    
- Often used as indexes
    

### Integrity Constraints:

1. **Domain Constraints:** Valid attribute values
    
2. **Entity Integrity:** No NULLs in primary key fields
    
3. **Referential Integrity:** Foreign key must match a primary key in the parent table or be NULL
    

### Referential Integrity Delete Rules:

- **Restrict:** Prevent delete if dependent rows exist
    
- **Cascade:** Delete dependent rows
    
- **Set-to-Null:** Set FK to NULL if parent deleted (not allowed for weak entities)
    

## Transforming EER Diagrams to Relations:

- **Regular Entities:** Simple/composite attributes become columns; multivalued becomes separate relation with FK
    
- **Weak Entities:** Becomes a new relation with a composite primary key (partial ID + parent PK)
    
- **Binary Relationships:**
    
    - 1:M: PK on one side becomes FK on many side
        
    - M:N: Create new relation with both PKs as composite PK
        
    - 1:1: PK from mandatory side becomes FK on optional side
        
- **Associative Entities:**
    
    - Without identifier: PK is composite from the participating entities
        
    - With identifier: Use assigned identifier
        
- **Unary Relationships:**
    
    - 1:N: Recursive FK in same relation
        
    - M:N: New associative relation with two FKs to the same entity
        
- **Ternary Relationships:**
    
    - One relation per entity + one for associative entity
        
    - Composite PK includes keys from all participating entities
        
    - Often better to create a surrogate key
        
- **Supertype/Subtype:**
    
    - One relation for supertype with subtype discriminator
        
    - One relation per subtype with same PK as supertype
        
- **Normalization:**

	- Purpose: Decompose relations to eliminate anomalies and redundancy
    
- **Anomalies:**

	- **Insertion:** Must duplicate data
    
	- **Deletion:** Risk of losing unrelated data
    
	- **Modification:** Need to update data in multiple rows
    
- **Functional Dependencies:**

	- One attribute (determinant) determines another
    
	- **Candidate Key:** Unique identifiers; non-key fields must be dependent on all candidate keys
    
- **Normal Forms:**

	- **1NF:** No multivalued attributes; atomic values
    
	- **2NF:** 1NF + no partial dependencies (non-key attributes depend on whole key)
    
	- **3NF:** 2NF + no transitive dependencies (non-key attribute depends on another non-key)
    
## Merging Relations:

- Combine entities across ER models
    
- Issues:
    
    - Synonyms (same meaning, different name)
        
    - Homonyms (same name, different meaning)
        
    - Transitive dependencies may emerge
        
    - Supertype/subtype relationships might be obscured
        
    - **Enterprise Key:** Shared identifier across multiple tables/models


## Examples 
![[Pasted image 20250430175038.png]]
![[Pasted image 20250430180019.png]]

![[Pasted image 20250430180511.png]]![[Pasted image 20250430180608.png]]

![[Pasted image 20250430180730.png]]![[Pasted image 20250430181322.png]]

![[Pasted image 20250430181806.png]]
![[Pasted image 20250430182135.png]]

![[Pasted image 20250430182344.png]]
![[Pasted image 20250430182746.png]]

![[Pasted image 20250430182928.png]]
![[Pasted image 20250430183034.png]]

![[Pasted image 20250430183341.png]]
![[Pasted image 20250430184126.png]]

![[Pasted image 20250430184435.png]]
![[Pasted image 20250430184756.png]]

![[Pasted image 20250430184906.png]]
