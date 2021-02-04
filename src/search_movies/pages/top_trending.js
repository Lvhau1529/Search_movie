import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import LayoutPage from "../components/layout";
import { Row, Col, Card } from "antd";
import { getDataMoviesTrending } from "../services/api";
import LoadingData from "../components/loading";

const { Meta } = Card;

const TrendingPage = () => {
  const [loadingHome, setLoadingHome] = useState(false);
  const [listMovies, setListMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDataMovie = async () => {
      setLoadingHome(true);
      const data = await getDataMoviesTrending(page);
      if (data) {
        setListMovies(data.results);

        if (page < 1) {
          setPage(1);
        } else if (page > data.total_pages) {
          setPage(data.total_pages);
        }
        setLoadingHome(false);
      }
    };
    getDataMovie();
  }, [page]);

  if (loadingHome || listMovies.length === 0) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }
  return (
    <>
      <LayoutPage>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Trending Movies
        </h1>
        <Row style={{ marginTop: "5px" }}>
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
                  <Meta title={item.title} description={item.release_date} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </LayoutPage>
    </>
  );
};

export default React.memo(TrendingPage);
