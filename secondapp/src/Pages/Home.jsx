import { useSelector } from "react-redux";


export default function Home() {
  const language = useSelector((state)=>state.language.lang)
  return(
    <div>
        <h1>Home</h1>
        <h1>Language: {language}</h1>
    </div>
  );
}
