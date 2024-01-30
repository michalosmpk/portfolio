import "../scss/contact.scss";

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <div className="ContentWrapper">
        <h2 className="Contact__Heading sectionHeading">
          <span>3. </span>
          What now?
        </h2>
        <p className="Contact__BigText">Get in touch with me</p>
        <div className="Contact__SeparatorLine" />
        <p className="Contact__SmallText">
          If you have any questions, please contact me at:
        </p>
        <p className="Contact__Email">Michalosmpk@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
