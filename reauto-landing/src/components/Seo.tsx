import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noIndex?: boolean;
};

const SITE_NAME = 'ReAuto';
const SITE_URL = 'https://reauto.hn';

function setMetaTag({
  selector,
  content,
  attribute,
}: {
  selector: string;
  content: string;
  attribute: 'name' | 'property';
}) {
  let tag = document.head.querySelector(`meta[${attribute}="${selector}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, selector);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

export default function Seo({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = pageTitle;

    setMetaTag({
      selector: 'description',
      content: description,
      attribute: 'name',
    });

    setMetaTag({
      selector: 'robots',
      content: noIndex ? 'noindex, nofollow' : 'index, follow',
      attribute: 'name',
    });

    setMetaTag({
      selector: 'og:title',
      content: pageTitle,
      attribute: 'property',
    });

    setMetaTag({
      selector: 'og:description',
      content: description,
      attribute: 'property',
    });

    setMetaTag({
      selector: 'og:url',
      content: canonicalUrl,
      attribute: 'property',
    });

    setMetaTag({
      selector: 'twitter:title',
      content: pageTitle,
      attribute: 'name',
    });

    setMetaTag({
      selector: 'twitter:description',
      content: description,
      attribute: 'name',
    });

    if (keywords) {
      setMetaTag({
        selector: 'keywords',
        content: keywords,
        attribute: 'name',
      });
    }

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', canonicalUrl);
  }, [description, keywords, noIndex, path, title]);

  return null;
}
