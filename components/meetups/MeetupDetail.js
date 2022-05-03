import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <adress>{props.address}</adress>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
