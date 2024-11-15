import {
  Bars4Icon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PostsAPI from "_ezs/api/posts";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import PickerQuick from "../components/PickerQuick";

function QuickDetail(props) {
  const { slug, cate } = useParams();
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  let sliderRef = useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["DetailQuick", slug],
    queryFn: async () => {
      const { data: Post } = await PostsAPI.getPosts(`slug=${slug}`);
      let rs = Post && Post.length > 0 ? Post[0] : null;
      return {
        ...rs,
        items: rs?.acf?.json_data ? JSON.parse(rs.acf.json_data) : null,
      };
    },
  });

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActive(next),
  };
  return (
    <div className="relative flex w-full h-full">
      <Helmet>
        <title>{isLoading ? "Đang tải ..." : data?.title?.rendered}</title>
      </Helmet>
      <div
        className={clsx(
          "w-[320px] border-r h-full flex-col md:relative md:flex absolute left-0 top-0 z-10 bg-white",
          open ? "flex" : "hidden"
        )}
      >
        <div
          className="h-16 px-4 flex items-center bg-[#F3F6F9] border-b cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-6" />
          <div
            className="uppercase font-bold ml-2.5 text-[14px] leading-5 flex-1 truncate"
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
          ></div>
          <XMarkIcon
            className="w-6 md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          />
        </div>
        <div className="overflow-auto grow">
          {data?.items &&
            data.items.map((item, index) => (
              <div
                className={clsx(
                  "cursor-pointer border-b px-4 py-3 text-[15px] flex items-center group",
                  active === index && "active"
                )}
                onClick={() => sliderRef.slickGoTo(index)}
                key={index}
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-number font-bold group-[.active]:bg-primary group-[.active]:text-white transition-all">
                  {index + 1}
                </div>
                <div className="pl-3 flex-1 group-[.active]:text-primary transition-colors">
                  {item.Title}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className="w-full md:w-[calc(100%-320px)] h-full overflow-hidden relative"
        id="container-slider"
      >
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {data?.items &&
            data.items.map((item, index) => (
              <div className="h-screen bg-[#2d3334]" key={index}>
                <img
                  src={item.Image}
                  className="object-cover w-full"
                />
              </div>
            ))}
        </Slider>
        <div className="absolute flex justify-end gap-3 bottom-5 right-5">
          {data?.items && data?.items[active] && data?.items[active].Note && (
            <PickerQuick Image={data?.items[active].Note}>
              {({ open }) => (
                <button
                  onClick={open}
                  className="bg-primary px-3 py-3.5 rounded text-white text-[13px] animate-heartBeat"
                  type="button"
                >
                  Chi tiết nhập liệu
                </button>
              )}
            </PickerQuick>
          )}
          <button
            className="bg-white/20 px-3.5 py-3.5 rounded text-white text-[13px] disabled:opacity-50"
            type="button"
            disabled={active === 0}
            onClick={() => sliderRef.slickPrev()}
          >
            Quay lại
          </button>
          <button
            className="bg-white/20 px-3.5 py-3.5 rounded text-white text-[13px] disabled:opacity-50"
            type="button"
            disabled={data?.items.length - 1 === active}
            onClick={() => sliderRef.slickNext()}
          >
            Tiếp theo
          </button>
        </div>
        <div className="absolute top-0 left-0 flex justify-between w-full px-4 pt-4 md:hidden">
          <div
            className="px-3 py-3 text-white rounded bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-6" />
          </div>
          <div
            className="px-3 py-3 text-white rounded bg-white/20"
            onClick={() => setOpen(true)}
          >
            <Bars4Icon className="w-6" />
          </div>
        </div>
      </div>
      {open && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default QuickDetail;
