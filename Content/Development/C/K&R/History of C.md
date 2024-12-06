
# The History
![[Screenshot from 2024-11-28 08-47-19.png]]

**The B language** was "word" orientated. [B (programming language)](https://en.wikipedia.org/wiki/B_(programming_language))
It was a typeless language, with the only data type being the underlying machine's natural [memory word](https://en.wikipedia.org/wiki/Memory_word "Memory word") format, whatever that might be. Depending on the context, the word was treated either as an [integer](https://en.wikipedia.org/wiki/Integer "Integer") or a [memory address](https://en.wikipedia.org/wiki/Memory_address "Memory address").

As new computer hardware came out that supported [Byte addressing](https://en.wikipedia.org/wiki/Byte_addressing) which included bytes/characters.

In the 70's [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [Unix](https://en.wikipedia.org/wiki/Unix) co-evolved, they wanted to build something that would make Unix work well on something like a [PDP-11](https://en.wikipedia.org/wiki/PDP-11) specifically the PDP–11/20 and at the same time make it so they can port Unix to other systems. The PDP-11/20's had a cool memory architecture having to do with [Byte addressing](https://en.wikipedia.org/wiki/Byte_addressing). They were carefully rewriting Unix in C, but then fixing X. Laying the groundwork for Unix portability.

By 1978 the K&R C book was published, you can think of it as a summary of over a decade of research and how to build a portable programming language, and how to use it to build a portable operating system.

By 1989, C has became popular, and there was a need to standardize, So there's a variant called C89 that is the ANCI, and then that same version was called C90 as ISO (international organization of standards). So that was the first version of C that we could all agree on.

C has continued to evolve, there's a number of revisions, but the key thing these revisions don't do in the modern version of C, is to make C an easy to use language.

# The Future
![[Screenshot from 2024-11-28 09-11-43.png]]

C is a difficult language to use as a general purpose language e.g. Python. The two things missing from C are the lack of really solid dynamic memory support in the core types and libraries, and there is no safe string type, there's no string in C, it's character arrays and arrays have sizes and if you start putting stuff beyond the boundary of that array things just blowup. 

