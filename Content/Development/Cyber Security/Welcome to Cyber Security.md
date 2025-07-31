---
tags: course
course:
  title: CompTIA Network+ (N10-009)
  provider:
    title: Professor Messer
    status: In Progress
    page: 1
    chapters:
      "1": "[OSI Model](Networking/OSI Model)"
      "2": "[Chapter 2 Title](link-to-chapter-2)"
course-2:
  title: TITLE 2
  provider:
    title: PROVIDER TITLE
    status: In Progress
    page: 1
    chapters:
      "1": "[Chapter 1 Title](link-to-chapter-1)"
      "2": "[Chapter 2 Title](link-to-chapter-2)"
---
# %% fold %%<button class="section-heading heading-collapse-indicator" role="button"><span class="text">`VIEW[{course.title}][text]`</span></button>
## %% fold %%<button class="section-sub-heading heading-collapse-indicator" role="button"><span>`VIEW[{course.provider.title}][text]`</span>
</button><div>`INPUT[status][:course.provider.status]`<p style="display: inline; font-size: 16px;">Video # </p>`INPUT[chapter][:course.provider.page]`</div>
<div class="content-menu">
  <ul>
    <li>
      <code>VIEW[{course.provider.chapters["1"]}][link]</code>
    </li>
    <li>
      <code>VIEW[{course.provider.chapters["2"]}][link]</code>
    </li>
  </ul>
</div>

# %% fold %%<button class="section-heading heading-collapse-indicator" role="button"><span class="text">`VIEW[{course-2.title}][text]`</span></button>
## %% fold %%<button class="section-sub-heading heading-collapse-indicator" role="button"><span>`VIEW[{course-2.provider.title}][text]`</span>
</button><div>`INPUT[status][:course-2.provider.status]`<p style="display: inline; font-size: 16px;">Page # </p>`INPUT[chapter][:course-2.provider.page]`</div>
<div class="content-menu">
  <ul>
    <li>
      <code>VIEW[{course-2.provider.chapters["1"]}][link]</code>
    </li>
    <li>
      <code>VIEW[{course-2.provider.chapters["2"]}][link]</code>
    </li>
  </ul>
</div>

