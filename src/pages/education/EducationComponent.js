import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import { certifications } from "../../portfolio";

class Education extends Component {
  render() {
    // const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        {/* Remove the basic-education div */}
        {certifications.certifications.length > 0 ? (
          <Certifications theme={this.props.theme} />
        ) : null}
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
