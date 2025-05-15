---
backward: "[[Content/School/Database Design/Chapter 5]]"
forward: "[[Content/School/Database Design/Chapter 7]]"
parent: "[[Spring 2025]]"
---
# Introduction to SQL (Chapter 6)

## Core Concepts

### What is SQL?
* **SQL (Structured Query Language)**: Often pronounced "Sequel", it's the standard language for relational database management systems (RDBMS).
* **RDBMS (Relational Database Management System)**: Manages data as a collection of tables where relationships are shown by common values in related tables.

### History of SQL
* **1970**: E. F. Codd developed the relational database concept.
* **1974-1979**: System R with Sequel (later SQL) was created at IBM Research Lab.
* **1979**: Oracle was the first to market a relational DB with SQL.
* **1981**: SQL/DS became the first available RDBMS on DOS/VSE. Other systems like INGRES, IDM, DG/SGL, and Sybase followed.
* **1986**: The ANSI SQL standard was released.
* Major ANSI standard updates occurred in 1989, 1992, 1999, 2003, 2006, 2008, and 2011.
* Currently, SQL is supported by most major database vendors.

### Purpose of SQL Standard
* Specify syntax/semantics for data definition and manipulation.
* Define data structures and basic operations.
* Enable portability of database definition and application modules.
* Specify minimal (level 1) and complete (level 2) standards.
* Allow for growth and enhancement (e.g., referential integrity, transaction management, user-defined functions).

### Benefits of Standardized SQL
* Reduced training costs.
* Increased productivity.
* Application portability and longevity.
* Reduced dependence on a single vendor.
* Cross-system communication.

### SQL Environment
* **Catalog**: A set of schemas describing a database.
* **Schema**: Contains descriptions of objects created by a user (e.g., base tables, views, constraints).
* **DDL (Data Definition Language)**: Commands for defining a database (e.g., `CREATE`, `ALTER`, `DROP` tables).
* **DML (Data Manipulation Language)**: Commands for maintaining and querying a database (e.g., `INSERT`, `UPDATE`, `SELECT`).
* **DCL (Data Control Language)**: Commands for controlling database access and privileges (e.g., `GRANT`, `REVOKE`).
* Figure 6-1 shows a simplified schematic of a typical SQL environment with users, programs, DBMS, and catalogs (DEV_C, PROD_C).

## SQL Database Definition (DDL)
* Major `CREATE` statements:
    * `CREATE SCHEMA`: Defines a portion of the database owned by a user.
    * `CREATE TABLE`: Defines a new table and its columns.
    * `CREATE VIEW`: Defines a logical table from one or more tables or views.
* Other `CREATE` statements include: `CHARACTER SET`, `COLLATION`, `TRANSLATION`, `ASSERTION`, `DOMAIN`.

### SQL Data Types (Examples from Table 6-2)
* **String**:
    * `CHARACTER (CHAR)`: Fixed-length string.
    * `CHARACTER VARYING (VARCHAR or VARCHAR2)`: Variable-length string.
    * `BINARY LARGE OBJECT (BLOB)`: Variable-length binary string in hexadecimal format.
* **Number**:
    * `NUMERIC`: Exact number with defined precision and scale.
    * `INTEGER (INT)`: Exact number with predefined precision and scale of zero.
* **Temporal**:
    * `TIMESTAMP`: Stores a moment an event occurs, with definable precision.
    * `TIMESTAMP WITH LOCAL TIME ZONE`: Adjusted to the user's session time zone.
* **Boolean**:
    * `BOOLEAN`: Stores truth values: `TRUE`, `FALSE`, or `UNKNOWN`.

### Steps in Table Creation
1.  Identify data types for attributes.
2.  Identify columns that can and cannot be null.
3.  Identify columns that must be unique (candidate keys).
4.  Identify primary key-foreign key mates.
5.  Determine default values.
6.  Identify constraints on columns (domain specifications).
7.  Create the table and associated indexes.

### `CREATE TABLE` Statement
* General syntax (Figure 6-5):
    ```sql
    CREATE TABLE tablename (
        {column_definition [table_constraint]}...,
        [ON COMMIT {DELETE | PRESERVE} ROWS]
    );
    -- where column_definition ::=
    -- column_name {domain_name | datatype [(size)]}
    -- [column_constraint_clause...]
    -- [default_value]
    -- [collate_clause]
    -- and table_constraint ::=
    -- [CONSTRAINT constraint_name]
    -- constraint_type [constraint_attributes]
    ```
* **Example (PVF Company - Figure 6-6)**:
    * Creating `Customer_T`, `Order_T`, `Product_T`, `OrderLine_T`.
    * Defining attributes and data types (e.g., `ProductID NUMBER(11,0) NOT NULL`).
    * Using `CHECK` constraint (e.g., `CHECK (ProductFinish IN ('Cherry', ...))`).
    * Identifying primary keys (e.g., `CONSTRAINT Customer_PK PRIMARY KEY (CustomerID)`). Primary keys can never have NULL values.
    * Composite primary keys (e.g., `PRIMARY KEY (OrderID, ProductID)` in `OrderLine_T`).
    * Controlling values with `DEFAULT` (e.g., `OrderDate DATE DEFAULT SYSDATE`).
    * Domain constraints.
    * Identifying foreign keys and establishing relationships (e.g., `FOREIGN KEY (CustomerID) REFERENCES Customer_T(CustomerID)`).

### Data Integrity Controls
* **Referential Integrity**: Ensures foreign key values match primary key values in related tables.
* Restrictions on:
    * Deletes of primary records.
    * Updates of primary records.
    * Inserts of dependent records.
* **Update/Delete Actions (Figure 6-7)**:
    * `ON UPDATE RESTRICT`: Prevents updates if related records exist.
    * `ON UPDATE CASCADE`: Changes in the parent table cascade to dependent tables.
    * `ON UPDATE SET NULL`: Sets foreign key to NULL if the parent record is updated/deleted.
    * `ON UPDATE SET DEFAULT`: Sets foreign key to a default value.

### Changing Tables
* `ALTER TABLE` statement: Allows changes to column specifications.
    * `ADD [COLUMN]`: Adds a new column.
    * `ALTER [COLUMN] SET DEFAULT`: Sets a default value for a column.
    * `ALTER [COLUMN] DROP DEFAULT`: Removes a default value.
    * `DROP [COLUMN]`: Removes a column.
    * `ADD table_constraint`: Adds a table constraint.
    * Example: `ALTER TABLE CUSTOMER_T ADD COLUMN CustomerType VARCHAR2(10) DEFAULT "Commercial";`

### Removing Tables
* `DROP TABLE` statement: Removes tables from the schema.
    * Example: `DROP TABLE CUSTOMER_T;`

### Creating Tables with Identity Columns (SQL:2008)
* Automatically generates values for a column.
    ```sql
    CREATE TABLE Customer_T (
        CustomerID INTEGER GENERATED ALWAYS AS IDENTITY
            (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 10000 NO CYCLE),
        CustomerName VARCHAR2(25) NOT NULL,
        -- ... other columns
        CONSTRAINT Customer_PK PRIMARY KEY (CustomerID)
    );
    ```
* Insertion does not require explicit ID entry for the identity column.

## Data Manipulation Language (DML)

### `INSERT` Statement
* Adds one or more rows to a table.
* Example: `INSERT INTO Customer_T VALUES (001, 'Contemporary Casuals', ...);`
* Inserting records with some null attributes requires identifying fields that get data.
    * Example: `INSERT INTO Product_T (ProductID, ProductDescription, ...) VALUES (1, 'End Table', ...);`
* Inserting from another table: `INSERT INTO CaCustomer_T SELECT * FROM Customer_T WHERE CustomerState = 'CA';`

### `DELETE` Statement
* Removes rows from a table.
* Delete specific rows: `DELETE FROM CUSTOMER_T WHERE CUSTOMERSTATE = 'HI';`
* Delete all rows: `DELETE FROM CUSTOMER_T;`

### `UPDATE` Statement
* Modifies data in existing rows.
* Example: `UPDATE Product_T SET ProductStandardPrice = 775 WHERE ProductID = 7;`

### `MERGE` Statement
* Combines `INSERT` and `UPDATE` operations into one statement.
* Useful for updating master tables with new data.
    ```sql
    MERGE INTO Product_T AS PROD
    USING (SELECT ... FROM Purchases_T) AS PURCH
    ON (PROD.ProductID = PURCH.ProductID)
    WHEN MATCHED THEN UPDATE SET PROD.ProductStandardPrice = PURCH.ProductStandardPrice
    WHEN NOT MATCHED THEN INSERT (ProductID, ...) VALUES (PURCH.ProductID, ...);
    ```

## Schema Definition and Data Access
* **Control processing/storage efficiency**:
    * Choice of indexes.
    * File organizations for base tables and indexes.
    * Data clustering.
    * Statistics maintenance.
* **Creating Indexes**:
    * Speed up random/sequential access to base table data.
    * Example: `CREATE INDEX NAME_IDX ON CUSTOMER_T(CUSTOMERNAME);`

### `SELECT` Statement
* Used for queries on single or multiple tables.
* **Clauses**:
    * `SELECT`: Lists columns and expressions to be returned.
    * `FROM`: Indicates table(s) or view(s).
    * `WHERE`: Specifies conditions for row inclusion.
    * `GROUP BY`: Categorizes results.
    * `HAVING`: Specifies conditions for category inclusion.
    * `ORDER BY`: Sorts the results.
* **General Syntax (Figure 6-2)**:
    ```sql
    SELECT [ALL|DISTINCT] column_list
    FROM table_list
    [WHERE conditional_expression]
    [GROUP BY group_by_column_list]
    [HAVING conditional_expression]
    [ORDER BY order_by_column_list];
    ```
* **SQL Statement Processing Order (Figure 6-10)**:
    1.  `FROM`
    2.  `WHERE`
    3.  `GROUP BY`
    4.  `HAVING`
    5.  `SELECT`
    6.  `ORDER BY`
* **SELECT Example**: Find products with standard price less than $275.
    ```sql
    SELECT ProductDescription, ProductStandardPrice
    FROM Product_T
    WHERE ProductStandardPrice < 275;
    ```
* **Comparison Operators (Table 6-3)**: `=`, `>`, `>=`, `<`, `<=`, `<>` (or `!=`) for not equal.
* **Alias**: Alternative column or table name.
    ```sql
    SELECT CUST.CUSTOMERNAME AS NAME, CUST.CUSTOMERADDRESS
    FROM CUSTOMER_V CUST
    WHERE NAME = 'Home Furnishings';
    ```
* **Aggregate Functions**:
    * Example: `COUNT(*)`
        ```sql
        SELECT COUNT(*) FROM ORDERLINE_T WHERE ORDERID = 1004;
        ```
    * Cannot have single-valued columns in `SELECT` with aggregate functions unless they are in `GROUP BY`.
* **Boolean Operators**: `AND`, `OR`, `NOT` in `WHERE` clause.
    * `LIKE` operator for string comparison with wildcards (`%` for multiple characters, `_` for single).
    * Example: `WHERE ProductDescription LIKE '%Desk' OR ProductDescription LIKE '%Table' AND ProductStandardPrice > 300;`
    * Default processing order: `NOT`, then `AND`, then `OR`. (Figure 6-8)
    * Parentheses `()` override default precedence. (Figure 6-9)
* **Sorting with `ORDER BY`**:
    * Example: `ORDER BY CustomerState, CustomerName;`
    * `IN` operator for multiple OR conditions: `WHERE CustomerState IN ('FL', 'TX', 'CA', 'HI')`.
* **Categorizing with `GROUP BY`**:
    * Used with aggregate functions.
    * **Scalar aggregate**: Single value returned.
    * **Vector aggregate**: Multiple values returned via `GROUP BY`.
    * Example: `SELECT CustomerState, COUNT(CustomerState) FROM Customer_T GROUP BY CustomerState;`
    * Single-value fields can be used with aggregate functions if included in `GROUP BY`.
* **Qualifying Categories with `HAVING`**:
    * Used with `GROUP BY`. Operates on groups, not individual rows.
    * Example: `SELECT CustomerState, COUNT(CustomerState) FROM Customer_T GROUP BY CustomerState HAVING COUNT(CustomerState) > 1;`
* **Query with `WHERE` and `HAVING`**:
    ```sql
    SELECT ProductFinish, AVG(ProductStandardPrice)
    FROM Product_T
    WHERE ProductFinish IN ('Cherry', 'Natural Ash', 'Natural Maple', 'White Ash')
    GROUP BY ProductFinish
    HAVING AVG(ProductStandardPrice) < 750
    ORDER BY ProductFinish;
    ```

## Views
* Provide users controlled access to tables.
* **Base Table**: Table containing the raw data.
* **Dynamic View**:
    * A "virtual table" created dynamically upon request.
    * No data actually stored; data from base table is made available.
    * Based on an SQL `SELECT` statement.
* **Materialized View**:
    * Copy or replication of data; data is actually stored.
    * Must be refreshed periodically.
* **`CREATE VIEW` Statement**:
    ```sql
    CREATE VIEW ExpensiveStuff_V AS
    SELECT ProductID, ProductDescription, ProductStandardPrice
    FROM Product_T
    WHERE ProductStandardPrice > 300
    WITH CHECK OPTION;
    ```
    * View has a name.
    * Based on a `SELECT` statement.
    * `WITH CHECK OPTION`: Works for updatable views and prevents updates that would create rows not included in the view.
* **Advantages of Views**:
    * Simplify query commands.
    * Assist with data security (but not the sole security measure).
    * Enhance programming productivity.
    * Contain most current base table data (for dynamic views).
    * Use little storage space (for dynamic views).
    * Provide customized view for users.
    * Establish physical data independence.
* **Disadvantages of Views**:
    * Use processing time each time a dynamic view is referenced.
    * May or may not be directly updatable.