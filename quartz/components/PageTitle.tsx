import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/logo.png")
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <h2 class="page-title">
        <a href={baseDir}>
          <img class="page-title-logo" src={logoPath} alt={title} />
          <span class="page-title-text">{title}</span>
        </a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--dark);
}
.page-title-logo {
  width: 100%;
  max-width: 120px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.page-title a:hover .page-title-logo {
  transform: scale(1.04) translateY(-2px);
}
.page-title-text {
  font-weight: 700;
  letter-spacing: -0.02em;
}
@media (max-width: 768px) {
  .page-title a {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .page-title-logo {
    max-width: 40px;
  }
  .page-title {
    font-size: 1.5rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
