const content = [
  { displayText: "Learn React", link: "https://reactjs.org" },
  { displayText: "File Structure", link: "https://legacy.reactjs.org/docs/faq-structure.html" },
  { displayText: "How To Structure React Projects", link: "https://blog.webdevsimplified.com/2022-07/react-folder-structure/" },
  { displayText: "Deploy to GitHub Pages", link: "https://blog.logrocket.com/deploying-react-apps-github-pages/" },
  { displayText: "React App To Github Pages", link: "https://www.youtube.com/watch?v=Q9n2mLqXFpU" },
];

function Sidebar() {
  return (
    <div className="bg-light">
      <p>Sidebar - with json array</p>
      <ul>
      {content.map((item, index) => {
        return <li><a href={item.link} target="_blank" rel="noopener noreferrer">{item.displayText}</a></li>
      })}
      </ul>
    </div>
  );
}

export default Sidebar;
