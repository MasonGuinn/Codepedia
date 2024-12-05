<html lang="en">
  <body style="font-family: Arial, sans-serif; list-style-type: none;">
    <ul style="display: flex; justify-content: space-between; overflow: hidden; list-style-type: none; padding: 0; margin: 0; background-color: #333; ">
      <li style="margin: 5px;">
        <a href="obsidian://open?vault=Vault&file=C/Welcome to C"
          style="display: block; padding: 25px 30px; text-align: center; text-decoration: none; color: white; background-color: #444; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s;">
          Go Back
        </a>
      </li>
      <li style="margin: 0 3px 0 0; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; ">
        <a href="obsidian://open?vault=Vault&file=Welcome to C"
          style="display: block; width: 100%; padding: 5px; text-align: center; text-decoration: none; color: white; background-color: #444; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s; margin: 0 auto; font-size: 15px;">
          Welcome to C
        </a>
        <ul style="display: flex; justify-content: space-between; overflow: hidden; list-style-type: none; padding: 0; margin: 0;">
          <li style="margin: 3px 3px 0px 0px; width: 100%;">
            <a href="obsidian://open?vault=Vault&file=Home"
              style="display: block; padding: 5px; text-align: center; text-decoration: none; color: white; background-color: #888; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s; width: 100%;">
              Home
            </a>
          </li>
          <li style="margin: 3px 3px 0px 0px; width: 100%;">
            <a href="obsidian://open?vault=Vault&file=Development"
              style="display: block; padding: 5px; text-align: center; text-decoration: none; color: white; background-color: #888; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s; width: 100%;">
              Development
            </a>
          </li>
          <li style="margin: 3px 3px 0px 0px; width: 100%;">
            <a href="obsidian://open?vault=Vault&file=Gaming"
              style="display: block; padding: 5px; text-align: center; text-decoration: none; color: white; background-color: #888; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s; width: 100%">
              Gaming
            </a>
          </li>
          <li style="margin: 3px 0 0px 0px; width: 100%;">
            <a href="obsidian://open?vault=Vault&file=Other"
              style="display: block; padding: 5px; text-align: center; text-decoration: none; color: white; background-color: #888; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s;">
              Other
            </a>
          </li>
        </ul>
      </li>
      <li style="margin: 5px;">
        <a href="obsidian://open?vault=Vault&file=5. History of Unix"
          style="display: block; padding: 25px 30px; text-align: center; text-decoration: none; color: white; background-color: #444; border: 1px solid #555; border-radius: 5px; transition: background-color 0.3s;">
          Go Forward
        </a>
      </li>
    </ul>
  </body>
</html>


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

