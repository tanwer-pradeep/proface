import React from "react";

function Temp({ data }) {
  const mydata = data;
  console.log(mydata, "this is my data");
  console.log(data, "this is data");

  return (
    mydata.map((entry, i) => (
      <li key={i} className={`menu-mlid-${entry.attributes.drupal_internal__id}`}>
        <span className='nolink'>{entry.attributes.title}</span>
        {entry.children?.length > 0 ? (
            <ul className='proface-dropdown-menu'>
              {console.log(i, entry.attributes.title, entry.children)}
            {entry.children.map((child, index) => (
              <li key={index} className={`menu-mlid-${index}`}>
                <span className='nolink'>{child.attributes.title}</span>
                {child.children?.length > 0 ? (
                    <ul>
                        {console.log(i, index, child, child.children)}
                        {child.children.map(innerChild =>(
                            <a href={`${innerChild.attributes.link.url}`}>
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

export default Temp;
