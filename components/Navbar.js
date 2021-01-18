import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a href="#">Value give</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="#">take Value</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          ul {
            background-color: darkgray;
            width: 97vw;
            color: green;
            margin: 1.5em auto 0;
            display: flex;
            justify-content: space-around;
            padding: 3vh;
            border-radius: 23px 9px 37px 17px;
          }
          li {
            color: white;
          }
          ul li a {
            text-decoration: none;
            font-size: 23px;
            font-weight: 900;
            letter-spacing: 5px;
            color: #0071f3d0;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
