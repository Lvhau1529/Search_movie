import React from "react";
import { Row, Col, Card } from "antd";
import LayoutPage from "../components/layout";

const { Meta } = Card;

const SearchPage = () => {
  return (
    <>
      <LayoutPage>
        <Row style={{ paddingTop: "20px" }}>
          <h2>Top Trending</h2>
          <Col span={24}>
            <Card
              hoverable
              style={{ width: 240, marginBottom: "20px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </LayoutPage>
    </>
  );
};

export default React.memo(SearchPage);
