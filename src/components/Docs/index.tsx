import styled from 'styled-components';

import {useIsMobile} from 'components/Layout/useMediaQuery';
import {siteConfig} from 'config/appConfig';

import {Toc} from '../Layout/Toc';

// import DiscourseDiscuss from './DiscourseDiscuss';
import EditPage from './EditPage';

const StyledDocs = styled.div<{hasToc: boolean}>`
  max-width: var(--docs-area-width);
  margin: 0 auto 50px auto;
  display: grid;
  grid-template-columns: ${(props) => (props.hasToc ? '75% 1fr' : '1fr')};

  .docs-article__section {
    padding: 0 20px 20px 20px;
  }

  .docs-article {
    color: var(--docs-text-primary);
  }

  .docs-article__header {
    padding: calc(var(--header-height) / 2) 0 16px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .docs-article__header-icons {
    display: flex;
    gap: 8px;
  }

  .docs-article__body {
    display: grid;
    gap: 16px 0;

    .article-heading {
      display: flex;
      align-items: center;
      gap: 10px;
      scroll-margin-top: calc(var(--header-height) + 8px);
      padding-top: 16px;
      position: relative;

      .anchor {
        color: var(--docs-text-primary);
        text-decoration: none;

        span {
          margin-left: 8px;
          visibility: hidden;
        }
      }

      &:hover .anchor span {
        visibility: visible;
      }
    }

    .article-ul__list,
    .article-ol__list {
      padding-left: 27px;
      margin-bottom: 0.8rem;
      overflow: hidden;
    }

    .article-ul__list {
      list-style: disc;
    }

    .article-ul__list > li > .article-ul__list {
      list-style: square;
    }

    .article-ul__list > li > .article-ul__list > li > .article-ul__list {
      list-style: circle;
    }

    .article-ol__list {
      list-style: decimal;
    }

    .article-ol__list > li > .article-ol__list {
      list-style: lower-roman;
    }

    .article-ol__list > li > .article-ol__list > li > .article-ol__list {
      list-style: lower-alpha;
    }

    .list-item {
      margin-bottom: 7px;

      > *:not(.inline-icon) {
        margin-bottom: inherit;
      }
    }

    .text-link {
      color: #2993e0;
      text-decoration: none;
      position: relative;
      font-weight: 600;

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        left: 0;
        background: #2993e0;
        width: 0;
        transform: translateY(2px);
        transition: width 0.2s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .article-header {
    margin-top: 0;
    font-size: 1.8em;
    line-height: 40px;
    letter-spacing: -0.663px;
    font-weight: bold;
  }

  h2.article-heading {
    font-size: 1.65em;
    line-height: 28px;
    font-weight: 600;
  }

  h3.article-heading {
    font-size: 1.5em;
    line-height: 24px;
    font-weight: 600;
  }

  h4.article-heading {
    font-size: 1.3em;
    line-height: 20px;
    font-weight: 600;
  }

  h5.article-heading {
    font-size: 1.2em;
    line-height: 20px;
    font-weight: 600;
  }

  h6.article-heading {
    font-size: 1.1em;
    line-height: 20px;
    font-weight: 600;
  }

  .article-text {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    overflow: auto;
  }

  .list-item .article-text,
  img {
    margin-bottom: 7px;
  }

  img {
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 7px 2px,
      rgba(0, 0, 0, 0.06) 1px 3px 1px 0px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
    display: block;

    thead {
      /* box-shadow: rgb(71, 71, 71) 0px -2px inset; */
    }

    th,
    td {
      border: 1px solid var(--hr-secondary);
    }

    thead th {
      font-weight: 600;
      color: var(--docs-text-primary);
      font-size: 14px;
      background-color: var(--table-header-bg);
    }

    tr {
      th,
      td {
        padding: 12px;
        text-align: left;
        vertical-align: top;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const anchorClassName = siteConfig.headerIdConfig.className;

export default function Docs({
  title,
  children,
  tocHeadings,
  source,
}: {
  title: string;
  children: React.ReactNode;
  tocHeadings: {url: string; depth: number; text: string}[];
  source?: string;
}) {
  const hasToc = tocHeadings.length > 0;
  const isMobile = useIsMobile();

  return (
    <StyledDocs className="docs-body" hasToc={hasToc}>
      <div className="docs-article__section">
        <article className="docs-article">
          <header className="docs-article__header">
            <h1 className="article-header">
              {title}
              <a
                className={anchorClassName}
                href="#"
                style={{display: 'none'}}
                aria-hidden="true"></a>
            </h1>

            {!isMobile && (
              <div className="docs-article__header-icons">
                <EditPage as="icon" source={source} />
              </div>
            )}
          </header>
          <div className="docs-article__body">{children}</div>
        </article>
        {/* <EditPage /> */}
      </div>
      {hasToc && <Toc headings={tocHeadings} />}
    </StyledDocs>
  );
}
