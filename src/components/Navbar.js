import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                [6C] Six Candy
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                Commands
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://github.com/preetsuthar17/discord-bot-website-template"
                target="_blank"
              >
                Source
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
