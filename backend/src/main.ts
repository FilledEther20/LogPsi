import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//Signup route
app.post("/api/v1/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
  } catch {}
});

//Login route
app.post("/api/v1/login", async (req, res) => {
});

//Create content post route
app.post("/api/v1/content", async (req, res) => {
    
});

//Get content route
app.get("/api/v1/content", async (req, res) => {});

//Delete content
app.delete("/api/v1/content", async (req, res) => {});

//Shareable content link
app.post("/api/v1/share", async (req, res) => {});
