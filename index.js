const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const BlogRoutes = require("./Routes/BlogRoute");
const UploadRoutes = require("./Routes/UploadRoute");
const CommentRoutes = require("./Routes/CommentRoute");
const HomeRoutes = require("./Routes/HomeRoute");
const { MONGO_URL, PORT } = process.env;
const UserRoutes = require("./Routes/UserRoutes")
const EventRoute = require("./Routes/EventRoute")
const ApplicationRoute = require("./Routes/ApplicationRoute")

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true

}));

mongoose
  .connect("mongodb+srv://dhananjayaaps:Jc9F6GUbKXs0ysbL@cluster0.hycaxfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(4000, () => {
  console.log(`Server is listening on port ${PORT}`);
});


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use('/Blogs', BlogRoutes);
app.use('/upload', UploadRoutes);
app.use('/home', HomeRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/user", UserRoutes);
app.use("/comment", CommentRoutes);
app.use("/event", EventRoute)
app.use("/application", ApplicationRoute)