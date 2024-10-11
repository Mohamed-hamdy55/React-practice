import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Contact(props) {
  console.log(props); // auto recieved props that conatin an object about the route

  let history = useHistory(); // save history to avoid 'props.history.push()'

  const redirectToAbout = () => {
    // using the native way
    // props.history.push('/about');

    // using useHistroy Hook
    history.push("/about");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          redirectToAbout();
        }}
      >
        About Us
      </button>
    </div>
  );
}
