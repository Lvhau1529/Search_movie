import React from "react";
import { Input, Row, Col /*{Card}*/ } from "antd";
import LayoutPage from "../components/layout";

// const { Meta } = Card;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchPage = () => {
  return (
    <>
      <LayoutPage>
        <Row>
          <Col span={24}>
            <div className="search">
              <div className="search__content">
                <div className="search__title">
                  <h2
                    style={{
                      color: "#fff",
                      fontSize: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    Welcome.
                  </h2>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Millions of movies, TV shows and people to discover. Explore
                    now.
                  </h3>
                </div>
                <Search
                  className="search__bar"
                  placeholder="Search for a movie..."
                  size="large"
                  onSearch={onSearch}
                  enterButton="Search"
                />
              </div>
            </div>
          </Col>
        </Row>
      </LayoutPage>
    </>
  );
};

export default React.memo(SearchPage);
