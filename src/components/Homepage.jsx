import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const { Title } = Typography;

const Homepage = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies);

  const { push } = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);

  const columns = [
    {
      title: "Movie Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div onClick={() => push(`/details/${record.id}`, record)}>{text}</div>
      ),
      sorter: (a, b) =>
        a.title.toString() > b.title.toString()
          ? 1
          : a.title.toString() < b.title.toString()
          ? -1
          : 0,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (text, record) => (
        <div onClick={() => push(`/details/${record.id}`, record)}>{text}</div>
      ),
      sorter: (a, b) => a.rank - b.rank,
      sortDirections: ["descend"],
    },
    {
      title: "Released Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
      render: (text, record) => (
        <div onClick={() => push(`/details/${record.id}`, record)}>{text}</div>
      ),
      sorter: (a, b) => a.releaseDate - b.releaseDate,
      sortDirections: ["descend", "ascend"],
    },
  ];

  if (!movieData) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="home-page">
      <div className="home-heading-container">
        <Title level={1} className="home-title">
          Top 5 Movies of 1980's
        </Title>
      </div>
      <Table className="table" columns={columns} dataSource={movieData} />
    </div>
  );
};

export default Homepage;
