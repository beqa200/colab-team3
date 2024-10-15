const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const path = require("path");
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/api/events", (req, res) => {
  try {
    const rawData = fs.readFileSync("data.json", "utf8");
    const data = JSON.parse(rawData);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ message: "Error reading data" });
  }
});

app.post("/api/events", (req, res) => {
  const newData = req.body;

  try {
    const rawData = fs.readFileSync("data.json", "utf8");
    const data = JSON.parse(rawData);

    newData.id = data.length ? data[data.length - 1].id + 1 : 1;
    data.push(newData);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");

    res
      .status(201)
      .json({ message: "Data added successfully", addedData: newData });
  } catch (error) {
    console.error("Error writing data:", error);
    res.status(500).json({ message: "Error writing data" });
  }
});



// Get a single event by ID
app.get("/api/events/:id?", (req, res) => {
  const eventId = parseInt(req.params.id); // Get the ID from the URL parameters and convert it to a number
  try {
    const rawData = fs.readFileSync("data.json", "utf8"); // Read the JSON file
    const data = JSON.parse(rawData); // Parse the JSON data

    // Find the event by id
    const event = data.find((event) => event.id === eventId);

    // If no event is found, return an error message
    if (!event) {
      return res
        .status(404)
        .json({ message: `Event with ID ${eventId} not found` });
    }

    // Return the event if found
    res.status(200).json(event);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ message: "Error reading data" });
  }
});

app.delete("/api/events/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);

  const filePath = path.join(__dirname, "data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(rawData);

  const postIndex = posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Post not found",
    });
  }

  const deletedPost = posts.splice(postIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf8");

  res.status(204).json({
    status: "success",
    data: {
      post: deletedPost,
    },
  });
});

app.patch("/api/events/:id?", (req, res) => {
  const postId = parseInt(req.params.id, 10);

  // Read the existing data from data.json
  const filePath = path.join(__dirname, "data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(rawData); // Parse the JSON data

  // Find the index of the post to update
  const postIndex = posts.findIndex((post) => post.id === postId);

  // If the post is not found, return a 404 error
  if (postIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Post not found",
    });
  }

  // Update the post data with the new data from the request body
  const updatedPost = { ...posts[postIndex], ...req.body }; // Merge the existing post with the new data
  posts[postIndex] = updatedPost; // Update the post in the array

  // Write the updated data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf8");

  // Respond with the updated post data
  res.status(200).json({
    status: "success",
    data: {
      post: updatedPost,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
