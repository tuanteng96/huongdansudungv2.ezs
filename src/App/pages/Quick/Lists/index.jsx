import { ArrowRightIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import PostsAPI from "_ezs/api/posts";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function QuickLists() {
  const { data } = useQuery({
    queryKey: ["Quicks-List"],
    queryFn: async () => {
      const { data } = await PostsAPI.getCategories(`parent=192&per_page=50`);
      const { data: List } = await PostsAPI.getPosts(
        `page=1&per_page=100&categories=192`
      );
      let newCate = [...data];
      if (List && List.length > 0) {
        for (let item of List) {
          let index = newCate.findIndex((x) => item.categories.includes(x.id));
          if (index > -1) {
            if (newCate[index]["children"]) {
              newCate[index]["children"].push(item);
            } else {
              newCate[index]["children"] = [item];
            }
          }
        }
      }

      return newCate
        .map((x) => ({
          ...x,
          children: x.children
            ? x.children.sort(
                (a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri)
              )
            : [],
        }))
        .sort((a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri));
    },
  });

  return (
    <div className="w-full h-full flex flex-col bg-[#eef0f8] overflow-auto">
      <div className="pt-10 mb-5 md:pt-16 md:mb-14">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <div className="font-bold text-2xl md:text-[35px] md:leading-[40px] text-[#1d2746]">
            HƯỚNG DẪN NHANH
          </div>
          <div className="text-base text-[#6b707f] md:w-2/4 mx-auto mt-1.5 md:mt-3">
            Một số nghiệp vụ spa / thẩm mỹ viện thường dùng hàng ngày.
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-screen-xl gap-4 p-4 mx-auto md:grid-cols-2 xl:grid-cols-3 md:gap-5">
        {data &&
          data.map((item, index) => (
            <div className="p-5 bg-white rounded md:p-8" key={index}>
              <div className="mb-3 md:mb-5">
                <img className="w-12 md:w-[60px]" src={item?.acf?.file_mp3 ? item?.acf?.file_mp3 : "/memo.png"} alt="" />
              </div>
              <div className="py-4 text-lg font-semibold text-black uppercase">
                {item.name}
              </div>
              <div className="flex flex-col">
                {item.children &&
                  item.children.map((sub, idx) => (
                    <Link
                      className="py-3 pl-7 inline-block text-[#6b707f] hover:text-primary text-base relative"
                      to={`${sub.slug}`}
                      key={idx}
                    >
                      <div className="absolute left-0">
                        <DocumentTextIcon className="w-[20px]" />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sub.title.rendered,
                        }}
                      ></div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
      </div>

      <div className="border-t">
        <div className="flex justify-between max-w-screen-xl p-4 mx-auto font-medium text-black">
          <div className="items-center justify-between w-full p-5 bg-white md:flex md:p-10">
            <div className="flex items-center">
              <div className="hidden md:block">
                <img src={"/Internet.png"} alt="" />
              </div>
              <div className="md:pl-5">
                <div className="text-xl md:text-3xl text-[#1d2746] mb-2">
                  Bạn chưa tìm được hướng dẫn cần tìm ?
                </div>
                <div className="text-sm md:text-base text-[#6b707f]">
                  Vui long bấm link dưới đây để xem bản hướng dẫn đầy đủ
                  <Link
                    className="inline-block ml-2 text-primary"
                    to="https://huongdan.ezs.vn"
                  >
                    https://huongdan.ezs.vn
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                className="bg-primary text-white text-base flex md:justify-start justify-center h-[54px] rounded items-center px-5 hover:shadow-3xl"
                href="https://zalo.me/0981883338"
              >
                Hỗ trợ trực tiếp qua Zalo
                <ArrowRightIcon className="w-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLists;
