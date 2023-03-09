const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    try {
        fs.readFile('./blog.json', (err, data) => {
            if (err) throw err;
            res.send(data);
        }
        );
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }

});
app.get('/all', (req, res) => {
    try {
        fs.readFile('./blog.json', (err, data) => {
            if (err) throw err;
            res.send(data);
        }
        );
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }

});
app.get('/:id', (req, res) => {
    try {
        fs.readFile('./blog.json', (err, data) => {
            if (err) throw err;
            const posts = JSON.parse(data);
            const post = posts.find(post => post.id === parseInt(req.params.id));
            if (!post) res.status(404).send('Post not found.');
            res.send(post);
        }
        );
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

let deletedIDs = [];

app.post('/', (req, res) => {
  try {
    fs.readFile('./blog.json', 'utf8', (err, data) => {
      if (err) throw err;

      const posts = JSON.parse(data);
      let id;

      // check if post already exists
      const checkID = posts.find(post => post.id === req.body.id);

      if (checkID) {
        id = checkID.id;
      } else if (deletedIDs.length > 0) {
        id = deletedIDs.shift(); // use the next available deleted ID
      } else {
        id = posts.length + 1; // use the next available ID
      }

      const { title, body, datetime } = req.body;
      const newPost = {
        id: id,
        title,
        body,
        datetime
      };

      posts.push(newPost);
      fs.writeFile('./blog.json', JSON.stringify(posts), 'utf8', err => {
        if (err) throw err;
        res.send(newPost);
      });
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// endpoint to delete a post by ID
app.delete('/:id', (req, res) => {
  try {
    fs.readFile('./blog.json', 'utf8', (err, data) => {
      if (err) throw err;

      const posts = JSON.parse(data);
      const index = posts.findIndex(post => post.id == req.params.id);

      if (index === -1) {
        res.status(404).send(`Post with ID ${req.params.id} not found`);
      } else {
        // add the deleted ID to the deletedIDs array
        deletedIDs.push(posts[index].id);

        posts.splice(index, 1);
        fs.writeFile('./blog.json', JSON.stringify(posts), 'utf8', err => {
          if (err) throw err;
          res.send(`Post with ID ${req.params.id} deleted`);
        });
      }
    });
    
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});



app.patch('/:id', (req, res) => {
    try {
        fs.readFile('./blog.json', 'utf8', (err, data) => {
            if (err) throw err;
            const posts = JSON.parse(data);
            const post = posts.find(post => post.id === parseInt(req.params.id));
            if (!post) res.status(404).send('Post not found.');

            const { title, body, datetime } = req.body;
            if (title) post.title = title;
            if (body) post.body = body;
            if (datetime) post.datetime = datetime;

            fs.writeFile('./blog.json', JSON.stringify(posts), 'utf8', err => {
                if (err) throw err;

                res.json({
                    message: 'Post updated',
                    post: post
                });
            });
        });
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});



app.listen(5000, () => console.log('Listening on port 5000'));