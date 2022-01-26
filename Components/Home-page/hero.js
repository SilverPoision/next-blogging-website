import classes from "./hero.module.css";

import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/piyush.jpg"
          alt="An image of piyush"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi!, I am Piyush Kumar</h1>
      <p>
        I blog about web development - espacially about backend frameworks like
        nodejs and expressjs.
      </p>
    </section>
  );
};

export default Hero;
