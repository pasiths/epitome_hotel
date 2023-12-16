import React, { useRef } from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-cup-line"></i>
            </span>
            <div className="sb">
              <h6>Search here..</h6>
              <input
                type="text"
                placeholder="Food Name?"
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit"  >
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
