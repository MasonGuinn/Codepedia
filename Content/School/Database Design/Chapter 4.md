---
backward: "[[Content/School/Database Design/Chapter 3]]"
forward: "[[Content/School/Database Design/Chapter 5]]"
parent: "[[Spring 2025]]"
---

![[hoffer_mdm12e_pp_ch04-1 1.pptx]]

## Objectives:

- Define key database terms
    
- Understand five properties of relations
    
- Describe candidate keys and their properties
    
- Explain 1st, 2nd, and 3rd Normal Forms
    
- Understand problems with merging relations
    
- Transform E-R and EER diagrams into relational tables
    
- Create tables with integrity constraints
    
- Use normalization to remove anomalies and produce well-structured relations
    

## Relational Model Components:

1. **Data Structure:** Tables (relations), rows (records), columns (fields/attributes)
    
2. **Data Manipulation:** SQL operations for retrieval and update
    
3. **Data Integrity:** Business rules to ensure consistent and valid data
    

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