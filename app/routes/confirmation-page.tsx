import { Link } from "@remix-run/react";


export default function ConfirmationPage() {
  
  return (
    <article className="prose prose-xl">
      <h1>Welcome to ConfirmationPage</h1>
      <p>This is the  ConfirmationPage</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </article>
  );
}