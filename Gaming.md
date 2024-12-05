```dataview
table without ID
  link(file.folder + "/Landing Page", regexreplace(file.folder, ".*/", "")) as "All Games"
from "Content/Gaming"
where contains(file.path, "/Landing Page")
sort file.folder asc

```




