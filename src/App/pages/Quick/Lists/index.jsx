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
    <div className="w-full h-full flex flex-col bg-[#eef0f8]">
      <div className="grow overflow-auto flex">
        <div className="max-w-screen-xl w-full mx-auto grid md:grid-cols-2 xl:grid-cols-3 md:gap-5 gap-4 p-4">
          {data &&
            data.map((item, index) => (
              <div className="bg-white rounded" key={index}>
                <div className="p-4 border-b uppercase text-lg font-semibold text-primary">
                  {item.name}
                </div>
                <div className="flex flex-col">
                  {item.children &&
                    item.children.map((sub, idx) => (
                      <Link
                        className="px-4 py-4 inline-block border-b border-dashed text-black hover:text-primary text-base last:border-0"
                        to={`${sub.slug}`}
                        key={idx}
                      >
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
      </div>
      <div className="border-t">
        <div className="flex justify-between max-w-screen-xl p-4 mx-auto text-black font-medium">
          <div>
            Hotline
            <a className="text-primary ml-2" href="tel:0981883338">
              0981.883.338
            </a>
          </div>
          <div>EZS.VN</div>
        </div>
      </div>
    </div>
  );
}

export default QuickLists;
