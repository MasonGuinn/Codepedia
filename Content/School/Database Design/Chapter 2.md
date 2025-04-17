---
backward: "[[Content/School/Database Design/Chapter 1]]"
forward: "[[Content/School/Database Design/Chapter 3]]"
parent: "[[Spring 2025]]"
---
![[hoffer_mdm12e_pp_ch02 - Tagged.pdf]]
--
Example of Strong Entities and binary relationship

![[Pasted image 20250409175903.png]]

**Strong Entity** exists independtly of other types of entities, has its own unique identifier
**Weak Entity** cannot exist by itself, its tied to an entity, only has partial identifier
**Identifier Attribute** is an attribute that uniquely identifies indivual instances of an entity type (PrimaryKey), you can use composite primary keys as well.

**Composite Primary Key** example: DoctorID, PatientID, DrugID inside one table/entity, the DrugID would give you an error, because it has to be unique, if the same patient came, and got the same drug, it would have the SAME DrugID.

**Foreign Key** is a reference to a primary key, it does NOT have to be unique

**Associate Entity** is also a relationship, its a bridge between many-to-many, or associates between entities.

**Attribute Symbols** consist of Entity Name and the attributes.

**Derived attribute** has `[brackets]` around it, a attribute that comes from maybe a calculation (like an age), since it changes, its best to be a derived attribute that calculates the agree (don't hard-code it)

**Multi-valued attribute** has `{curly braces}`, for example cell-phone, home-phone, etc, anything with several values.

**Composite attributes** can be further broken down, lets say you just put Name, its a composite attribute because it could be further broken down later into firstName, lastName, etc. Address is also an example.

**Relationships** can also have **degrees** (how many entity instances is it going to parcipate with)

**urinary relationships** have a relationship with itself, for example, if you have an Employee table, all employees have a Manager, so Manager ID would be a foreign key of Employee. A **binary** is between two entities, and a **ternary**, a relationship between three entities.

Entities **equate** to tables, attributes equate to fields, relationships just show where we put our foreign keys.

Most often you don't want **optional attributes**.

0| optional one
|| mandatory one
0> Optional Many
|> Mandatory Many

An entity should not be a system user, or system output.

**One to Many Example**: A Customer may have MANY orders, but an order belongs to one and ONLY one customer. **Customer || ---------- 0> Order**

When asked to create an ERD
1. Find the nouns (ex. departments, divisions, employees, projects, and etc) these will be the tables
2. Find any business rules, or find information how these entities relate to another (ex. A division operates many departments)


# Tests 

