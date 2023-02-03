// import React from "react";
// import { Stack, Box } from "@mui/material";
// import { VideoCard, ChannelCard } from "./";

// const Videos = ({ videos }) => {
//   return (
//     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
//       {videos.map((item, index) => (
//         <Box key={index}>
//           {item.id.videoId && <VideoCard video={item} />}
//           {item.id.channelId && <ChannelCard ChannelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;

import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  // if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
