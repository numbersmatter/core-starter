import ListOfItems from "~/ui/Layouts/ListOfItems";
import NavList from "~/ui/Layouts/NavList";



export default function HomePage( ) {
  
  const links = [
    {label:  'home', to: '/'},
    {label:  'about', to: '/about'},
  ]

  return (
    <article className="prose prose-xl">
      <h1>Welcome to Home Page</h1>
      <p>This is the  HomePage</p>
      <NavList links={links} />
      <ListOfItems title="List of Houses" itemName="House" />
    </article>
  );
}
