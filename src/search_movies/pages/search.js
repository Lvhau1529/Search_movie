import React, { useState } from "react";
import { Input, Row, Col, Card, Pagination } from "antd";
import LayoutPage from "../components/layout";
import LoadingData from "../components/loading";
import { searchMovieByKeywords } from "../services/api";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const { Meta } = Card;
const { Search } = Input;

const SearchPage = () => {
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [listMovies, setListMovies] = useState([]);

  const searchMovies = async (keywords = "", currentPage = 1) => {
    setLoadingSearch(true);
    const data = await searchMovieByKeywords(keywords, currentPage);
    if (data) {
      setListMovies(data.results);
      setTotalItems(data.totalItems);
      setLoadingSearch(false);

      //Phan trang
      if (page < 1) {
        setPage(1);
      } else if (page > data.total_pages) {
        setPage(data.total_pages);
      }
      setLoadingSearch(false);
    }
  };

  const changePageInput = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
  };

  if (loadingSearch && listMovies.length === 0) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }

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
                  onSearch={(val) => searchMovies(val, page)}
                  enterButton="Search"
                  onChange={changePageInput}
                  value={keyword}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "25px" }}>
          {listMovies.map((item, index) => (
            <Col span={6} key={index}>
              <Link to={`/movie/${slugify(item.title)}~${item.id}`}>
                <Card
                  hoverable
                  style={{
                    width: 250,
                    marginBottom: "20px",
                  }}
                  cover={
                    <img
                      alt={item.title}
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    />
                  }
                >
                  <Meta title={item.title} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {listMovies.length !== 0 ? (
          <Row style={{ marginTop: "20px", textAlign: "center" }}>
            <Col span={24}>
              <Pagination
                current={page}
                total={totalItems}
                pageSize={20}
                onChange={(pages) => setListMovies(keyword, pages)}
              />
            </Col>
          </Row>
        ) : null}
      </LayoutPage>
    </>
  );
};

export default React.memo(SearchPage);
