# 🚨 Attention 🚨
> This repository is no longer maintained, Due to my focus on new projects and commitments! Please be cautious if you decide to use any information from this repository, as it may be outdated or no longer accurate.  
### I was using create-react-app here, here's why its no longer used 
A good article on this: [Link](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o#:~:text=The%20problem%20with%20CRA)   
check this to see which frameworks support React ==> [Link](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks)   
A good runner up after [Vite](https://vitejs.dev/guide/) is nextJS in my opinion => [Link](https://github.com/vercel/next.js)  

# Steps to edit the functionality

a personal recommendation is to create a template folder containing server and client folders.

## Backend General Functionality

Make sure that you have the server off , create 4 folders, config , controllers , routes, models , and a server.js. This is for Modularization and Organization purposes.

### Config Folder

This folder is where you host the connection to the db, since I am using Mongoose and Mongo db, the File structure would look like this, after you create a file called ‘mongoose.config.js’: 

```jsx
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/authors", {
    // if there is no db, it will create a new one
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
```

### Models Folder.

in the Models folder, create a file for every Table you might have, and name it in the name of the table/document. ‘for instance ‘authors.models.js’’  ,  it should look something like this: 

```jsx
const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "title is required"],
      minLength: [2, "title needs to be at least 10 charecter"],
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorsSchema);

module.exports = Author;

```

if you have multiple documents, each  table could have a file for it as will as a module.export . 

### Controllers

in the controllers folder, make a file called `authors.controller.js` and each table will have a controller file, and this is what it looks like: 

first , import the model 

```jsx
const Author = require("../models/authors.model");
```

- The See all function
    
    ```jsx
    module.exports.findAllAthors = (req, res) => {
      // console.log("all ");
      Author.find()
        .then((allAthors) => {
          res.json(allAthors); // this line is edited
        })
        .catch((err) => {
          res.json({
            message: "Something went wrong in retrieving all the Athors ",
            error: err,
          });
        });
    };
    ```
    
- find a single object:
    
    ```jsx
    module.exports.findOneSingleAuthor = (req, res) => {
      console.log("hi");
      Author.findOne({ _id: req.params.id })
        .then((Author) => {
          res.json(Author); // this line is edited
        })
        .catch((err) => {
          res.json({
            message: "Something went wrong in retrieving a single Author ",
            error: err,
          });
        });
    };
    ```
    
- create a new object:
    
    ```jsx
    // Refactored creating an object function, to create an array instead of an object
    module.exports.createNewAuthor = (req, res) => {
      // console.log(req);
      const { name } = req.body;
      Author.create({
        name
      })
        .then((lastCreatedAuthor) => {
          res.json(lastCreatedAuthor);
          // console.log(lastCreatedAuthor);
        })
        .catch((err) => {
          res.json({
            message: "Something went wrong with creating a new Author ",
            error: err,
          });
        });
    };
    ```
    
- update an object:
    
    ```jsx
    // updated this function so that it updated the vaalues , but does not return an object.
    module.exports.updateAuthor = (request, response) => {
      // console.log(request.body);
      Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
      }) // this line is edited
        .then((updatedAuthor) => {
          response.json(updatedAuthor);
          console.log(updatedAuthor);
        })
        .catch((err) => {
          res.json({
            message: "Something went wrong with Updating a Author ",
            error: err,
          });
        });
    };
    ```
    
- Delete an object:
    
    ```jsx
    // delete a product by id
    module.exports.deleteAuthor = (request, response) => {
      // console.log(request.body);
      Author.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
    };
    ```
    

### Routes Folder

The place where you define your routes , and define what is happening when we visit them, name the file as ‘something.routes.js’, do a : 

```jsx
const AuthorsController = require('../controllers/authors.controller');
 
module.exports = app => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.get('/api/authors/:id', AuthorsController.findOneSingleAuthor);
    app.put('/api/authors/:id/edit', AuthorsController.updateAuthor);
    app.delete('/api/authors/:id', AuthorsController.deleteAuthor);
    app.post('/api/authors', AuthorsController.createNewAuthor);
}
```

and now last but not least, server.js 

### Server.js

this is the place that holds up all the functionality:- 

```jsx
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const allAuthorsRoutes = require("./routes/authors.routes");
const cors = require('cors');
const port = 8000; 
app.use(cors());

require("./config/mongoose.config");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({ extended: true }));
    

allAuthorsRoutes(app);
    
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
```

and There we go!, We are all set up in the backend ,lets check out postman. 

## Front End functionality

install react-router-dom, axios , and any other thing you might need. then start working

in the case of this assignment: authors, this the steps I took. 
![Untitled](https://github.com/saranatour1/React/assets/77834808/82c40704-007d-4440-a006-b376666d689c)



### Main root

We have a heading that’s shared across , so we can make it into a component, as well as the button to indicate the location. 

**************Header.js************** 

```jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [linkPath, setLinkPath] = useState({ '/new': 'Add a new author' });
  const location = useLocation();

  console.log(location.pathname);

  // Update the linkPath based on the location.pathname
  useState(() => {
    if (location.pathname === '/') {
      setLinkPath({ '/new': 'Add a new author' });
      console.log("am i here");
    } else {
      setLinkPath({ '/': 'Home' });
    }
  }, []);
  const linkKey = Object.keys(linkPath)[0];
  const linkValue = Object.values(linkPath)[0];

  // console.log(linkKey,linkValue,linkPath)
  return (
    <div>
      <h3>Favorite Authors</h3>
      <Link to={linkKey}>{linkValue}</Link>
    </div>
  );
}

export default Header;
```

Now to do iterate over the authors and show delete and edit buttons, this goes as follows: 

the Display Component : 

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function Display({ removeFromDom, items }) {
  const [authors , setAuthors] = useState(items);
  // const [loaded, setLoaded] = useState(false);

  // get all the products 

// http://localhost:8000/api/authors/
  return (

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            <td>
              <Link to={`/authors/${item._id}`}>{item.name}</Link>
            </td>
            <td>
              <Link to={`/authors/${item._id}/edit`}>Edit</Link>
            </td>
            <td>
              <DeleteButton removeFromDom={removeFromDom} id={item._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  
  );
}

export default Display;
```

and the Main page now looks like this: 

```jsx
import React, { useEffect, useState } from 'react'
import FormInput from '../components/FormInput';
import Display from '../components/Display';
import axios from 'axios';
import Header from '../components/Header';

function MainPage() {
  // lets do all the editing here? 
  
  // grab all the things that were on formInput, and transfer them here

  // const [price, setPrice] = useState(0);
  // const [descreption, setDescreption] = useState("");
  // const [products, setProducts] = useState([]); // must change the above to be a Single object rather than attributes 
  const [loaded, setLoaded] = useState(false);
  const [authors , setAuthors] = useState([]);

    // get all the previous items that were there 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/authors');
          // setProducts(response.data);
          setAuthors(response.data);
          setLoaded(true);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
    
    // Take out the remove from Dom in 'Display' Component
    const removeFromDom = authorId => {
      setAuthors(authors.filter(author => author._id !== authorId));
  }

  return (
    <div>
      <Header />
      {loaded && <Display removeFromDom={removeFromDom}
       items={authors} 
       />}
    </div>
  )
}

export default MainPage;
```

### Add a New Item page

The page Structure is now Going to be like this: 

```jsx
import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import axios from 'axios';
import Header from '../components/Header';

function AddAuthorPage() {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);

  const createAuthor = person => {
    axios.post('http://localhost:8000/api/authors/', person)
      .then(res => {
        setAuthors([...authors, res.data]);
        setErrors([]);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.name) {
          const errorResponse = err.response.data.errors.name;
          const errorArr = Object.values(errorResponse).map(error => error.message);
          setErrors(errorArr);
        } else {
          setErrors(["An error occurred while creating the author."]);
        }
      });
  };

  return (
    <div>
      <Header />
      <FormInput
        onSubmitProp={createAuthor}
        initialName=""
        errMsg={errors}
      />
    </div>
  );
}

export default AddAuthorPage;
```

where we already made The Header , and the formInput. So we are done :D:D:D: 

### update Page

I prefer to keep both pages separated even though they are exactly the same. 

```jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import FormInput from '../components/FormInput';

function UpdateAuthor() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors , setErrors] = useState();

  const navigate = useNavigate();
  //get request 
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data);
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

// update  
const updateAuthor = author => {
  // e.preventDefault();
  console.log('Trying to update');
  axios
    .put(`http://localhost:8000/api/authors/${id}/edit`, author)
    .then(res => {console.log(res); navigate('/');})
    .catch(err => {
      if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.name) {
        const errorResponse = err.response.data.errors.name;
        const errorArr = Object.values(errorResponse).map(error => error.message);
        setErrors(errorArr);
      } else {
        setErrors(["An error occurred while editing the author."]);
      }
    });
};

if (!loaded) {
  return <p>Loading...</p>;
}

  return (
    <div>
      <Header /> 
      <h3>Update this author  </h3>
      <FormInput
        onSubmitProp={updateAuthor}
        initialName={author.name}
        errMsg={errors}
      />
    </div>
  )
}

export default UpdateAuthor;
```

but the validations don’t work :D:D:D:D:DD:D:

I guess that’s it.

Check out these for minor help: 

[React Docs](http://React.dev)

[React Router docs](https://reactrouter.com/en/main/components/link) 

[MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 

[axios documintation](https://axios-http.com/docs/intro) 

[Mongoose Documentation](https://mongoosejs.com/docs/index.html) 

[Mongodb Manual](https://www.mongodb.com/docs/manual/) 

Documenting the documentation ? Sounds like a pretty good idea.
