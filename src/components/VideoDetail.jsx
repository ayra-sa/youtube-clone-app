import React, { useEffect, useState } from "react";
import { GrChannel } from "react-icons/gr";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import RelatedVideos from "./RelatedVideos";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoDetail = ({ setHide }) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [progress, setProgress] = useState(0);
  const [theTitle, setTheTitle] = useState("");
  const [showMore, setShowMore] = useState(true);
  const { id } = useParams();

  const viewCount = videoDetail?.statistics?.viewCount;
  const likeCount = videoDetail?.statistics?.likeCount;
  const titlePage = videoDetail?.snippet?.title;
  const description = videoDetail?.snippet?.description;

  console.log(titlePage, "and", theTitle);

  const numberFormat = (num, text) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + `K ${text}`
      : Math.sign(num) * Math.abs(num) + `${text}`;
  };

  useEffect(() => {
    setHide(true);

    if (!videoDetail) {
      setProgress(100);
    }

    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  useEffect(() => {
    setTheTitle(titlePage);

    if (theTitle) {
      document.title = theTitle;
    }
  }, [theTitle]);

  return (
    <section className="mt-[20%] lg:mt-[7%] px-7 flex flex-col lg:flex-row justify-between gap-x-5">
      <LoadingBar
        color="#DC2638"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="w-full lg:w-[65%]">
        <div className="h-64 md:h-96 lg:h-[500px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player w-full"
            controls
            width="100%"
            height="100%"
          />
        </div>

        <div className="space-y-2 mt-5">
          <h1 className="text-2xl">{titlePage || <Skeleton />}</h1>
          <div
            className="flex items-center gap-x-2"
            title={
              `${videoDetail?.snippet?.channelTitle} channel` || <Skeleton />
            }
          >
            <div className="rounded-full w-8 h-8 flex place-content-center items-center text-base bg-neutral-500">
              <i>
                <GrChannel />
              </i>
            </div>
            <p>
              {videoDetail?.snippet?.channelTitle || <Skeleton count={5} />}
            </p>
          </div>

          <div className="flex gap-x-4">
            <b>
              {new Date(videoDetail?.snippet?.publishedAt).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              ) || <Skeleton />}
            </b>
            <b>{numberFormat(viewCount, "views") || <Skeleton />}</b>
            <b>{numberFormat(likeCount, "likes") || <Skeleton />}</b>
          </div>

          <div className="max-w-[90%]">
            <p>
              {showMore
                ? `${description?.substring(0, 100)}`
                : `${description?.substring(0, 999)}`}
            </p>

            {!showMore && 
              <div className="flex gap-x-3 text-neutral-400 flex-wrap">
                {videoDetail?.snippet?.tags?.map((t) => (
                  <p key={t}>#{t}</p>
                ))}
            </div>
            }
            
            <button className="underline mt-3" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show More" : "Show Less"}
            </button>
            
          </div>
        </div>
      </div>

      <RelatedVideos videos={videos} />
    </section>
  );
};

export default VideoDetail;
