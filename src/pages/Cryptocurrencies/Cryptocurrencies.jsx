import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [crypros, setCrypros] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCrypros(filterData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return `Loading...`;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[25, 25]} className="crypto-card-container">
        {crypros?.map((item) => (
          <Col xs={24} key={item.id} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${item.id}`}>
              <Card
                title={`${item.rank}. ${item.name}`}
                extra={<img className="crypto-image" src={item.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(item.price)}</p>
                <p>Market Cap: {millify(item.marketCap)}</p>
                {millify(item.change) > 0 ? (
                  <p>
                    Daily Change:
                    <span className="green">
                      {" "}
                      {millify(item.change)}%{" "}
                    </span>{" "}
                  </p>
                ) : (
                  <p>
                    Daily Change:{" "}
                    <span className="red"> {millify(item.change)}% </span>
                  </p>
                )}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
