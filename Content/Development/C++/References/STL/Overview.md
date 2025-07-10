---
backward: "[[Welcome to C++]]"
forward: 
parent: "[[Welcome to C++]]"
---

The STL is a collection of pre-written, highly optimized, and _generic_ code. "Generic" means it works with almost any data type (integers, strings, your custom `Player` objects, etc.) without you having to rewrite the same logic for each type. This is achieved through C++ **templates**, similar to how `List<int>` and `List<string>` in C# use the same underlying `List<T>` template.

The STL was added to the C++ standard in C++98, making it a fundamental part of the language.

---

### **Components of STL**

The STL is traditionally divided into 4 main conceptual components, plus some modern additions:

1. **Containers:** The data structures that _store_ your data.
    
2. **Algorithms:** Functions that _perform operations_ on your data (e.g., sort, search).
    
3. **Iterators:** "Pointer-like" objects that _connect_ algorithms to containers, allowing algorithms to work on any container.
    
4. **Functors (Function Objects):** Objects that _act like functions_, providing custom behavior to algorithms.