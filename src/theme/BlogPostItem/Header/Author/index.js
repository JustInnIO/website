import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <div className={clsx('avatar', className)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className="avatar__photo"
            src={imageURL}
            alt={name}
            itemProp="image"
          />
        </MaybeLink>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person">
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url" className="hover:text-black text-black text-normal">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </div>
          {/* {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )} */}
        </div>
      )}
    </div>
  );
}
