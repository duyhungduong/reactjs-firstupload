//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="youtube-list">
      <YoutubeItem
        image="https://images.unsplash.com/photo-1724093121168-c4ff94115732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
        avt="https://images.unsplash.com/photo-1723737347273-5ae32dcdb5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
        info="First  video"
        author="DUYHUNG"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1724093121168-c4ff94115732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
        avt="https://images.unsplash.com/photo-1723737347273-5ae32dcdb5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
        info="First  video"
        author="DUYHUNG"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1724093121168-c4ff94115732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
        avt="https://images.unsplash.com/photo-1723737347273-5ae32dcdb5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
        info="First  video"
        author="DUYHUNG"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1724093121168-c4ff94115732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
        avt="https://images.unsplash.com/photo-1723737347273-5ae32dcdb5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
        info="First  video"
        author="DUYHUNG"
      ></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-items">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>

      <div className="youtube-footer">
        <img src={props.avt} alt="" className="youtube-avatar" />

        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.info || "This is title of this videp"}
          </h3>
          <h4 className="youtube-author">{props.author || "Author"}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
