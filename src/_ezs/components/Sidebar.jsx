import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import PostsAPI from "../api/posts";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Avatar from "../assets/images/ezslogo.png";
import { JSONSidebar } from "_ezs/utils/SidebarMenuJSON";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

function SidebarPage() {
  const { pathname } = useLocation();

  // const { data } = useQuery({
  //   queryKey: ["Taxonomys"],
  //   queryFn: async () => {
  //     const { data: ParentList } = await PostsAPI.getTaxonomy("70");
  //     let result = [];
  //     for (let item of ParentList) {
  //       const { data: itemList } = await PostsAPI.getTaxonomy(item.id);
  //       let obj = {
  //         ...item,
  //         children: itemList
  //           ? itemList.sort(
  //               (a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri)
  //             )
  //           : [],
  //       };
  //       result.push(obj);
  //     }
  //     return result.sort((a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri));
  //   },
  // });

  let data = [
    {
      id: 110,
      count: 99,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/",
      name: "Phần mềm",
      slug: "phan-mem",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 0,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/110",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=110",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 116,
          count: 66,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/pos-quan-ly/",
          name: "Pos quản lý",
          slug: "pos-quan-ly",
          taxonomy: "category",
          parent: 110,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/116",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/110",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=116",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 115,
          count: 15,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/kho-hang-ton/",
          name: "Kho &amp; hàng tồn",
          slug: "kho-hang-ton",
          taxonomy: "category",
          parent: 110,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/115",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/110",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=115",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 114,
          count: 2,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/cskh/",
          name: "CSKH",
          slug: "cskh",
          taxonomy: "category",
          parent: 110,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
        },
        {
          id: 113,
          count: 2,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/page-telesale/",
          name: "Page/ Telesale",
          slug: "page-telesale",
          taxonomy: "category",
          parent: 110,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 3,
          },
        },
        {
          id: 191,
          count: 5,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/phan-mem/khoa-hoc/",
          name: "Khóa học",
          slug: "khoa-hoc",
          taxonomy: "category",
          parent: 110,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [70, 110],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
        },
      ],
    },
    {
      id: 104,
      count: 38,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/",
      name: "Kế toán / HCNS",
      slug: "ke-toan-hcns",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 1,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=104",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 109,
          count: 7,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/thu-chi-so-quy/",
          name: "Thu chi / sổ quỹ",
          slug: "thu-chi-so-quy",
          taxonomy: "category",
          parent: 104,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/109",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=109",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 108,
          count: 4,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/kpi-doanh-so/",
          name: "KPI doanh số",
          slug: "kpi-doanh-so",
          taxonomy: "category",
          parent: 104,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/108",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=108",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 107,
          count: 6,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/bang-luong/",
          name: "Bảng lương",
          slug: "bang-luong",
          taxonomy: "category",
          parent: 104,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 3,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/107",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=107",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 106,
          count: 2,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/thuong-phat-khac/",
          name: "Thưởng phạt / khác",
          slug: "thuong-phat-khac",
          taxonomy: "category",
          parent: 104,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 3,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/106",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=106",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 105,
          count: 19,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/ke-toan-hcns/cong-ca/",
          name: "Công ca",
          slug: "cong-ca",
          taxonomy: "category",
          parent: 104,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 4,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/105",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/104",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=105",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 98,
      count: 9,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/",
      name: "Web &amp; app",
      slug: "web-app",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 1,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=98",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 103,
          count: 1,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/noi-dung-blogs/",
          name: "Nội dung / Blogs",
          slug: "noi-dung-blogs",
          taxonomy: "category",
          parent: 98,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/103",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=103",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 102,
          count: 7,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/media-video/",
          name: "Media / Video",
          slug: "media-video",
          taxonomy: "category",
          parent: 98,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/102",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=102",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 101,
          count: 0,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/thong-bao-web/",
          name: "Thông báo Web",
          slug: "thong-bao-web",
          taxonomy: "category",
          parent: 98,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/101",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=101",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 100,
          count: 1,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/thong-bao-app/",
          name: "Thông báo App",
          slug: "thong-bao-app",
          taxonomy: "category",
          parent: 98,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 3,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/100",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=100",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 99,
          count: 0,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/web-app/lien-he/",
          name: "Liên hệ",
          slug: "lien-he",
          taxonomy: "category",
          parent: 98,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 4,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/99",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/98",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=99",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 95,
      count: 8,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/uu-dai/",
      name: "Ưu đãi",
      slug: "uu-dai",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 3,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/95",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=95",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 97,
          count: 3,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/uu-dai/khuyen-mai/",
          name: "Khuyến mại",
          slug: "khuyen-mai",
          taxonomy: "category",
          parent: 95,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/97",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/95",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=97",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 96,
          count: 5,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/uu-dai/voucher-coupon/",
          name: "Voucher/Coupon",
          slug: "voucher-coupon",
          taxonomy: "category",
          parent: 95,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/96",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/95",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=96",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 90,
      count: 18,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/quyen-loi/",
      name: "Quyền lợi",
      slug: "quyen-loi",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 4,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/90",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=90",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 94,
          count: 4,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/quyen-loi/nhom-khach-hang/",
          name: "Nhóm khách hàng",
          slug: "nhom-khach-hang",
          taxonomy: "category",
          parent: 90,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/94",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/90",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=94",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 93,
          count: 6,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/quyen-loi/tich-luy-mua-hang/",
          name: "Tích lũy mua hàng",
          slug: "tich-luy-mua-hang",
          taxonomy: "category",
          parent: 90,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/93",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/90",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=93",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 92,
          count: 4,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/quyen-loi/chinh-sach-affiliate/",
          name: "Chính sách affiliate",
          slug: "chinh-sach-affiliate",
          taxonomy: "category",
          parent: 90,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/92",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/90",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=92",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 91,
          count: 4,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/quyen-loi/quyen-loi-khac/",
          name: "Quyền lợi khác",
          slug: "quyen-loi-khac",
          taxonomy: "category",
          parent: 90,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 3,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/91",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/90",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=91",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 83,
      count: 23,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/cai-dat/",
      name: "Cài đặt",
      slug: "cai-dat",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 5,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/83",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=83",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 87,
          count: 2,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/cai-dat/quan-ly-nhan-vien-cai-dat/",
          name: "Quản lý nhân viên",
          slug: "quan-ly-nhan-vien-cai-dat",
          taxonomy: "category",
          parent: 83,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: -1,
            vi_tri: 2,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/87",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/83",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=87",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 84,
          count: 19,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/cai-dat/quan-ly-sp-dv/",
          name: "Quản lý SP/DV",
          slug: "quan-ly-sp-dv",
          taxonomy: "category",
          parent: 83,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 5,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/84",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/83",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=84",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 81,
      count: 43,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/bao-cao-huong-dan-su-dung-new/",
      name: "Báo cáo",
      slug: "bao-cao-huong-dan-su-dung-new",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 6,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/81",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=81",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 82,
          count: 40,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/bao-cao-huong-dan-su-dung-new/hoat-dong/",
          name: "Hoạt động",
          slug: "hoat-dong",
          taxonomy: "category",
          parent: 81,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/82",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/81",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=82",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
    {
      id: 76,
      count: 54,
      description: "",
      link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/",
      name: "Hệ thống",
      slug: "xem-them",
      taxonomy: "category",
      parent: 70,
      meta: [],
      acf: {
        thumbnail_category: "",
        anh_noi_bat: "",
        danh_muc_hien_tai: [],
        file_mp3: "",
        mo_hinh_he_thong: "",
        chuc_nang_co_ban: "",
        cau_hinh_luong_nv: "",
        ky_dien_tu_danh_gia: "",
        giai_phap_vi_dien_tu: "",
        giai_phap_the_tien: "",
        affiliate_marketing: "",
        telesale_cham_soc_khach_hang: "",
        kich_hoat_thanh_toan_tu_dong: "",
        app_khach_hang: "",
        website_gioi_thieu: "",
        vi_tri: 7,
      },
      _links: {
        self: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
            targetHints: {
              allow: ["GET"],
            },
          },
        ],
        collection: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/categories",
          },
        ],
        about: [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
          },
        ],
        up: [
          {
            embeddable: true,
            href: "https://old.ezs.vn/wp-json/wp/v2/categories/70",
          },
        ],
        "wp:post_type": [
          {
            href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=76",
          },
        ],
        curies: [
          {
            name: "wp",
            href: "https://api.w.org/{rel}",
            templated: true,
          },
        ],
      },
      children: [
        {
          id: 188,
          count: 4,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/bat-dinh-vi/",
          name: "Bật định vị",
          slug: "bat-dinh-vi",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: "",
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/188",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=188",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 80,
          count: 3,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/cau-hinh-luong/",
          name: "Cấu hình lương",
          slug: "cau-hinh-luong",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 0,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/80",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=80",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 169,
          count: 11,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/khac-xem-them/",
          name: "Thông tin cơ bản",
          slug: "khac-xem-them",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: "",
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/169",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=169",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 79,
          count: 1,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/cai-dat-may-in/",
          name: "Cài đặt máy in",
          slug: "cai-dat-may-in",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 1,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/79",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=79",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 78,
          count: 24,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/cong-cu-admin/",
          name: "Công cụ Admin",
          slug: "cong-cu-admin",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 2,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/78",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=78",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 77,
          count: 1,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/cai-dat-thong-bao/",
          name: "Cài đặt thông báo",
          slug: "cai-dat-thong-bao",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 4,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/77",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=77",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 131,
          count: 7,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/xoa-cache/",
          name: "Xóa cache",
          slug: "xoa-cache",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 5,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/131",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=131",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
        {
          id: 135,
          count: 5,
          description: "",
          link: "https://old.ezs.vn/category/huong-dan-su-dung-new/xem-them/them-icon-truy-cap-nhap-nhanh/",
          name: "Thêm icon truy cập nhập nhanh",
          slug: "them-icon-truy-cap-nhap-nhanh",
          taxonomy: "category",
          parent: 76,
          meta: [],
          acf: {
            thumbnail_category: "",
            anh_noi_bat: "",
            danh_muc_hien_tai: [],
            file_mp3: "",
            mo_hinh_he_thong: "",
            chuc_nang_co_ban: "",
            cau_hinh_luong_nv: "",
            ky_dien_tu_danh_gia: "",
            giai_phap_vi_dien_tu: "",
            giai_phap_the_tien: "",
            affiliate_marketing: "",
            telesale_cham_soc_khach_hang: "",
            kich_hoat_thanh_toan_tu_dong: "",
            app_khach_hang: "",
            website_gioi_thieu: "",
            vi_tri: 6,
          },
          _links: {
            self: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/135",
                targetHints: {
                  allow: ["GET"],
                },
              },
            ],
            collection: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/categories",
              },
            ],
            about: [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/taxonomies/category",
              },
            ],
            up: [
              {
                embeddable: true,
                href: "https://old.ezs.vn/wp-json/wp/v2/categories/76",
              },
            ],
            "wp:post_type": [
              {
                href: "https://old.ezs.vn/wp-json/wp/v2/posts?categories=135",
              },
            ],
            curies: [
              {
                name: "wp",
                href: "https://api.w.org/{rel}",
                templated: true,
              },
            ],
          },
        },
      ],
    },
  ];

  const isOpen = (children) => {
    if (!children || children.length === 0) return;
    let index = children.findIndex((x) => pathname.includes(x.slug));
    return index > -1;
  };

  return (
    <>
      <div
        className={clsx(
          "h-full flex flex-col transition-transform absolute z-50 bg-white md:relative -translate-x-full md:!translate-x-0 group-[.is-sidebar]:translate-x-0"
        )}
      >
        <PerfectScrollbar
          options={perfectScrollbarOptions}
          className="relative overflow-hidden border-r grow"
        >
          <div className="flex flex-col items-center p-5 border-b">
            <div>
              <img
                className="rounded-full w-[75px]"
                src={Avatar}
                alt="EZS.VN"
              />
            </div>
            <div className="mt-4 text-sm font-bold uppercase">Admin System</div>
            <div className="mt-1 text-xs font-medium text-center text-danger">
              <div>EZS Hà Nội</div>
              <div className="flex items-end">
                Administrator <ChevronDownIcon className="w-3 ml-1.5" />
              </div>
            </div>
          </div>
          <Sidebar
            width="200px"
            backgroundColor="#f7f9fa"
            className="!border-r-0"
          >
            <Menu
              renderExpandIcon={({ open }) => (
                <div>
                  <ChevronRightIcon
                    className={clsx("w-4 transition", open && "rotate-90")}
                  />
                </div>
              )}
              menuItemStyles={{
                button: ({ level }) => {
                  if (level === 1)
                    return {
                      paddingLeft: "30px",
                      height: "42px",
                      [`&.ps-active`]: {
                        background: "#1BC5BD",
                        color: "#fff",
                      },
                    };
                },
              }}
            >
              {data &&
                data.map((item, index) => (
                  <SubMenu
                    label={
                      <div
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      ></div>
                    }
                    key={index}
                    className="text-sm font-bold uppercase border-b"
                    defaultOpen={isOpen(item.children)}
                    active={isOpen(item.children)}
                  >
                    {item.children &&
                      item.children.map((sub, i) => (
                        <MenuItem
                          component={<Link to={`${sub.slug}`} />}
                          key={i}
                          className="font-semibold text-gray-700 normal-case border-t"
                          active={pathname.includes(sub.slug)}
                        >
                          {
                            <div
                              dangerouslySetInnerHTML={{ __html: sub.name }}
                            ></div>
                          }
                        </MenuItem>
                      ))}
                  </SubMenu>
                ))}
            </Menu>
          </Sidebar>
        </PerfectScrollbar>
      </div>
      {/* <div
        className="fixed z-10 w-full h-full top-0 left bg-black/[.2] md:hidden"
      ></div> */}
    </>
  );
}

export default SidebarPage;
