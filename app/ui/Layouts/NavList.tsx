import { Link } from "@remix-run/react";


interface INavList {
  links: { label: string, to: string }[],
}

export default function NavList( props: INavList  ) {
  
  const links= props.links;

  return (
    <div   className="prose prose-xl">
      <ul>
        {
          links.map((link)=> 
          <li key={link.to}>
            <Link to={link.to}>
              { link.label }
            </Link>
          </li>
          )
        }
      </ul>
    </div>
  );
}