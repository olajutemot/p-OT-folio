import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Hey, Welcome to Timilehin's World!</h1>
        <p>
          I'm thrilled to have you here. Let me take a moment to introduce
          myself and share a little bit about what you can expect from this
          space.
        </p>
        <h1>Who Am I?</h1>
        <p>
          I'm Olajutemo Timilehin, a passionate software geek as i like to call
          myself. With a love for Coding and productivity, I've embarked on a
          journey to explore and share my experiences with the world. Through
          this blog, I aim to connect with like-minded individuals, spark
          meaningful conversations, and inspire others to pursue their passions.
        </p>
        <h1>What Can You Expect?</h1>
        <p>
          Here, you'll find a blend of coding and productivity, ranging from how
          to become a successful programmer to becoming a productive individual
          and everything in between. Whether it's sharing insightful tips,
          delving into personal anecdotes, or discussing the latest trends, I
          strive to provide valuable content that resonates with my readers.
        </p>
        <h1>My Mission </h1>
        <p>
          My mission is simple: to create a space where creativity thrives,
          ideas flourish, and connections are forged. Through authentic
          storytelling, genuine conversations, and a sprinkle of creativity, I
          hope to empower and inspire individuals to embrace their uniqueness
          and pursue their dreams fearlessly.
        </p>
        <h1>Let's Connect! </h1>
        <p>
          I believe that the beauty of blogging lies in its ability to foster
          connections and build communities. So, I invite you to join me on this
          journey. Whether you're a fellow enthusiast, a curious soul, or
          someone simply looking for a dose of inspiration, I'd love to hear
          from you! Feel free to reach out, share your thoughts, or just say
          hello. Thank you for being a part of this adventure. Together, let's
          explore, learn, and grow!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
