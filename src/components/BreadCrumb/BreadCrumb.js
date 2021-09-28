import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

//Styles
import { Wrapper, Content } from "../BreadCrumb/BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
}

export default BreadCrumb;
