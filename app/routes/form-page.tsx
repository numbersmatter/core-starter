import { Link } from "@remix-run/react";


export default function FormPage() {
  


  // display a form with the following inputs
  // select input 
  // text input
  // text area input
  // submit button that takes me to the confirmation page
  // button that takes me back to the home page
  return (
    <article className="prose prose-xl">
      <h1>Welcome to FormPage</h1>
      <p>This is the  FormPage</p>
      <ul>
        <li>
          <Link to='/confirmation-page'> Submit Form</Link>
        </li>
        <li>
          <Link to='/'>To Home Page</Link>
        </li>
      </ul>
    </article>
  );
}