import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: "#efefef", zIndex: 10, height: "150px" }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-135px" />
      </Box>
      <Box display="flex" p="2">
        <Box marginX="auto" />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
