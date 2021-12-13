import React from "react";

function HeaderMenu({ data }) {
  const mydata = data;
 

  return (
    mydata.map((entry, i) => (
      <li key={i} className={`menu-mlid-${entry.attributes.drupal_internal__id}`}>
        <span className='nolink'>{entry.attributes.title}</span>
        {entry.children?.length > 0 ? (
            <ul className='proface-dropdown-menu'>
            {entry.children.map((child, index) => (
              <li key={index} className={`menu-mlid-${index}`}>
                <span className='nolink'>{child.attributes.title}</span>
                {child.children?.length > 0 ? (
                    <ul>
                        {child.children.map((innerChild, j) =>(
                            <a key={j} href={`${innerChild.attributes.link.url}`}>
                                {innerChild.attributes.title}
                            </a>
                        ))}
                    </ul>
                ): null}
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    ))
  );
}

export default HeaderMenu;
