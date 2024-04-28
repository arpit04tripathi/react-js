const content = [
  { displayText: "Learn React", link: "https://reactjs.org" },
  { displayText: "File Structure", link: "https://legacy.reactjs.org/docs/faq-structure.html" },
  { displayText: "How To Structure React Projects", link: "https://blog.webdevsimplified.com/2022-07/react-folder-structure/" },
  { displayText: "Deploy to GitHub Pages", link: "https://blog.logrocket.com/deploying-react-apps-github-pages/" },
  { displayText: "React App To Github Pages", link: "https://www.youtube.com/watch?v=Q9n2mLqXFpU" },
  { displayText: "Router - Query Params", link: "https://www.basedash.com/blog/guide-to-react-router-query-params"},
  { displayText: "axios", link: "https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/"},
];

function Sidebar() {
  return (
    <div className="bg-light border border-5 border-primary rounded-5 p-4">
      <p>Sidebar - with json array</p>
      <ul>
      {content.map((item, index) => {
        return <li  key={"li-"+index} ><a href={item.link}target="_blank" rel="noopener noreferrer">{item.displayText}</a></li>
      })}
      </ul>
    </div>
  );
}

export default Sidebar;
