import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagList: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  let tags = fileData.frontmatter?.tags
  if (fileData.slug === "index") {
    const allTags = new Set<string>()
    for (const file of allFiles) {
      const fileTags = file.frontmatter?.tags
      if (fileTags) {
        for (const tag of fileTags) {
          allTags.add(tag)
        }
      }
    }
    tags = Array.from(allTags).sort()
  }

  if (tags && tags.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => TagList) satisfies QuartzComponentConstructor
