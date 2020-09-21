import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [dposts,setDPosts] =useState([]);

  useEffect(() => {
		axios.get("http://localhost:8080/api")
			.then( res => setDPosts(res.data) // new
			)
	},[])


  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    event.preventDefault();
  }

  function handleClick(event) {

    const payload={
      title:post.title,
      body:post.content
    }

    console.log(payload);

    axios({
      url: 'http://localhost:8080/api/save',
      method:'POST',
      data :payload
    })
    .then(() => {
      console.log("Inserted Sucessfully");
    })
    .catch(() => {
      console.log("Something went Wrong");
    })
  }


  return (
    <div className="App">
     <h2>Welcome to React</h2>
     <form onSubmit={handleClick}>
      <div className="form-input">
      <input type="text"
      name="title"
      value={post.title}
      onChange={handleChange}
      placeholder="title here"
      />
      </div>
      <div className="form-input">
      <textarea name="content" cols="30" rows="10" value={post.content}  onChange={handleChange} placeholder="text here"></textarea>
      </div>
      <button>Submit</button>
      <div className="blog">
      {dposts.map((dposts) => (
        <div >
        <h3>{dposts.title}</h3>
        <p>{dposts.body}</p>
          </div>
      ))}

        </div>
        </form>
      </div>
    )
}

export default App;
