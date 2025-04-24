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

- **Generalization (Bottom-Up)**: Combine similar entity types into one supertype. (you identify common traits in multiple entities and combine them into a supertype.)
    
- **Specialization (Top-Down)**: Create subtypes from a general supertype. (you start with a supertype and create subtypes)

### 🔗 **Relationships in Supertypes/Subtypes**

- Relationships at the **supertype** level apply to all subtypes.
    
- Subtypes may have **unique relationships** shown at the subtype level.

### ✅ **Constraints**

#### Completeness Constraints:

- **Total Specialization**: Every supertype instance _must_ be in a subtype (double line).
    
- **Partial Specialization**: A supertype instance _may or may not_ belong to a subtype (single line).
    

#### Disjointness Constraints:

- **Disjoint Rule**: A supertype instance can belong to only one subtype. (D)
    
- **Overlap Rule**: A supertype instance can belong to multiple subtypes. (O)
    

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

## Examples from Book

> Basic notation for supertype/subtype notation

[[DatabaseDesignCh3.pdf#page=5&selection=19,11,19,56|DatabaseDesignCh3, page 5]]

> Basic notation for supertype/subtype notation (cont.)

[[DatabaseDesignCh3.pdf#page=5&selection=19,11,19,64|DatabaseDesignCh3, page 5]]

> Employee supertype with three subtypes

[[DatabaseDesignCh3.pdf#page=6&selection=7,11,7,49|DatabaseDesignCh3, page 6]]

> Supertype/subtype relationships in a hospital

[[DatabaseDesignCh3.pdf#page=8&selection=7,11,7,56|DatabaseDesignCh3, page 8]]

> Example of generalization

[[DatabaseDesignCh3.pdf#page=11&selection=7,11,7,36|DatabaseDesignCh3, page 11]]

> Example of specialization

[[DatabaseDesignCh3.pdf#page=13&selection=17,11,17,36|DatabaseDesignCh3, page 13]]

> Examples of completeness constraints a) Total specialization rule

[[DatabaseDesignCh3.pdf#page=15&selection=7,11,9,28|DatabaseDesignCh3, page 15]]

> Examples of completeness constraints b) Partial specialization rule

[[DatabaseDesignCh3.pdf#page=16&selection=7,0,7,30|DatabaseDesignCh3, page 16]]

> Examples of disjointness constraints a) Disjoint rule

[[DatabaseDesignCh3.pdf#page=18&selection=9,11,9,47|DatabaseDesignCh3, page 18]]

> Examples of disjointness constraints b) Overlap rule

[[DatabaseDesignCh3.pdf#page=19&selection=9,11,9,47|DatabaseDesignCh3, page 19]]

> Subtype discriminator (disjoint rule)

[[DatabaseDesignCh3.pdf#page=21&selection=7,11,10,5|DatabaseDesignCh3, page 21]]

> Subtype discriminator (overlap rule)

[[DatabaseDesignCh3.pdf#page=22&selection=7,11,10,5|DatabaseDesignCh3, page 22]]

> Example of supertype/subtype hierarchy

[[DatabaseDesignCh3.pdf#page=23&selection=7,12,7,50|DatabaseDesignCh3, page 23]]

> EER diagram of PVF entity clusters

[[DatabaseDesignCh3.pdf#page=26&selection=7,13,7,47|DatabaseDesignCh3, page 26]]

> Basic PARTY universal data model

[[DatabaseDesignCh3.pdf#page=30&selection=27,4,29,20|DatabaseDesignCh3, page 30]]


