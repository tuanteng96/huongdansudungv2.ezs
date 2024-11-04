import { ChevronLeftIcon } from "@heroicons/react/24/outline";
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
    <div className="h-full w-full flex">
      <Helmet>
        <title>{isLoading ? "Đang tải ..." : data?.title?.rendered}</title>
      </Helmet>
      <div className="w-[320px] border-r h-full flex-col hidden md:flex">
        <div
          className="h-16 px-4 flex items-center bg-[#F3F6F9] border-b cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-6" />
          <div
            className="uppercase font-bold ml-2.5 text-[14px] leading-4 flex-1 truncate"
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
          ></div>
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
      <div className="md:w-[calc(100%-320px)] h-full overflow-hidden relative" id="container-slider">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {data?.items &&
            data.items.map((item, index) => (
              <div key={index}>
                <img
                  src={item.Image}
                  className="h-screen w-full object-cover"
                />
              </div>
            ))}
        </Slider>
        <div className="absolute bottom-5 right-5 gap-3 flex justify-end">
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
      </div>
    </div>
  );
}

export default QuickDetail;
