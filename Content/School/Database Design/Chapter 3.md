---
backward: "[[Content/School/Database Design/Chapter 2]]"
forward: "[[Content/School/Database Design/Chapter 4]]"
parent: "[[Spring 2025]]"
---
[Open PDF](DatabaseDesignCh3.pdf)

### 🧩 **Supertypes and Subtypes**

- **Subtype**: A subgroup of an entity with unique attributes.
    
- **Supertype**: A general entity type connected to one or more subtypes.
    
- **Attribute Inheritance**: Subtypes inherit all attributes of their supertype.
    

---

### 🔄 **Generalization vs Specialization**

- **Generalization (Bottom-Up)**: Combine similar entity types into one supertype.
    
- **Specialization (Top-Down)**: Create subtypes from a general supertype.

### 🔗 **Relationships in Supertypes/Subtypes**

- Relationships at the **supertype** level apply to all subtypes.
    
- Subtypes may have **unique relationships** shown at the subtype level.

### ✅ **Constraints**

#### Completeness Constraints:

- **Total Specialization**: Every supertype instance _must_ be in a subtype (double line).
    
- **Partial Specialization**: A supertype instance _may or may not_ belong to a subtype (single line).
    

#### Disjointness Constraints:

- **Disjoint Rule**: A supertype instance can belong to only one subtype.
    
- **Overlap Rule**: A supertype instance can belong to multiple subtypes.
    

#### Subtype Discriminator:

- **Disjoint**: A single attribute determines subtype membership.
    
- **Overlap**: A composite attribute with Boolean flags indicates multiple memberships.
    

---

### 🧱 **Entity Clusters**

- Used to simplify complex EER diagrams.
    
- Groups related entities and relationships into a higher-level abstract entity for clarity.
    

---

### 📦 **Packaged Data Models**

- **Universal Data Model**: Predefined, reusable models adaptable to various domains.
    
- Benefits:
    
    - Saves time and reduces errors.
        
    - Easier modification and integration.
        
    - Promotes reuse (e.g., supertype/subtype hierarchies).
        
    - Supports inter-organizational systems.