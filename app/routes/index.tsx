import { Link } from "@remix-run/react";

export interface IHomePage {

}

export default function HomePage() {

  return (
    <article className="prose prose-xl">
      <h1>Welcome to Home Page</h1>
      <p>This is the  HomePage</p>
      <ul>
        <li>
          <Link to="form-page">Form Page</Link>
        </li>
        <li>
          <Link to="confirmation-page">Confirmation Page</Link>
        </li>
      </ul>
    </article>
  );
}
