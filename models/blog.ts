export interface Blog {
  id?: string | number;
  title: string;
  tag: EBlogCate;
  publishDate: Date;
  readTime: number;
}

export enum EBlogCate {
  ALL = "Tất cả",
  DES_WEBSITE = "Thiết Kế Website",
  DES_APP_MOBILE = "Thiết Kế App Mobile",
  PROD_MANAGEMENT = "Quản Lý Sản Xuất",
  SALES_MANAGEMENT = "Quản lý bán bàng",
  FOSO_ACHIEVEMENT = "Báo Chí Nói Về FOSO",
  FOSO_NEWS = "Tin Tức FOSO",
}
