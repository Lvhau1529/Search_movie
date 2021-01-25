import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import { useParams } from "react-router-dom";
import LayoutPage from "../components/layout";
import { getDataMoviesById } from "../services/api";
import LoadingData from "../components/loading";
import "../styles/detail_movies.css";

const { Meta } = Card;

const DetailMoviePage = () => {
  let { id } = useParams();
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailMovie, setDetailMovie] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoadingDetail(true);
      const data = await getDataMoviesById(id);
      if (data) {
        setDetailMovie(data);
        setLoadingDetail(false);
      }
    };
    getData();
  }, [id]);

  if (loadingDetail) {
    return (
      <LayoutPage>
        <LoadingData />
      </LayoutPage>
    );
  }

  return (
    <>
      <LayoutPage>
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col span={6}>
            <Card
              className="card"
              hoverable={false}
              style={{ width: 300, textAlign: "center" }}
              cover={
                <img
                  alt={detailMovie.title}
                  src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
                />
              }
            >
              <Meta title={detailMovie.tagline} />
            </Card>
          </Col>
          <Col span={18} style={{ paddingLeft: "50px" }}>
            <h1 style={{ fontSize: "30px" }}>{detailMovie.title}</h1>
            <div>
              <h1>Overview</h1>
              <p>{detailMovie.overview}</p>
            </div>
            <div>
              <p>Vote average : {detailMovie.vote_average}</p>
              <p>Vote count : {detailMovie.vote_count}</p>
            </div>
          </Col>
        </Row>
        <div className="media">
          <h2>Media</h2>
          <div>
            <ul>
              {detailMovie.images !== undefined
                ? detailMovie.images.backdrops.map((item, index) => (
                    <li key={index}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                        alt=""
                      />
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </LayoutPage>
    </>
  );
};

export default React.memo(DetailMoviePage);
