import Image from "next/image";

export const BlogDetail = () => {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12 max-w-4xl mx-auto">
      <section>
        <h2 className="text-lg font-semibold text-primary">
          1. Quy trình 5S là gì?
        </h2>
        <p className="mt-2">
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Seiri</strong> (Ngăn nắp)
          </li>
          <li>
            <strong>Seiso</strong> (Sạch sẽ)
          </li>
          <li>
            <strong>Seiton</strong> (Trật tự)
          </li>
          <li>
            <strong>Shitsuke</strong> (Kỷ luật)
          </li>
          <li>
            <strong>Seiketsu</strong> (Tiêu chuẩn hóa)
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-primary">
          2. Lợi ích quy trình 5S đem lại
        </h2>
        <p className="mt-2">
          Quy trình 5S giúp doanh nghiệp tối ưu hóa quy trình và tạo môi trường
          làm việc ngăn nắp, sạch sẽ, và hiệu quả.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-primary">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Cải thiện môi trường làm việc:</strong> Giúp nơi làm việc
            gọn gàng, giảm tai nạn lao động.
          </li>
          <li>
            <strong>Tiết kiệm thời gian:</strong> Giúp doanh nghiệp giảm thời
            gian tìm kiếm vật tư.
          </li>
          <li>
            <strong>Tăng năng suất làm việc:</strong> Môi trường làm việc tối ưu
            giúp nhân viên làm việc hiệu quả hơn.
          </li>
          <li>
            <strong>Tiết kiệm chi phí:</strong> Giảm hao hụt vật tư, tối ưu hóa
            tài nguyên sử dụng.
          </li>
        </ul>
      </section>

      <section className="mt-6 flex flex-col items-center text-center">
        <Image src="/5s-banner.png" alt="5S Banner" width={400} height={250} />
        <h2 className="text-xl font-bold mt-4">
          TẠI SAO DOANH NGHIỆP CẦN QUY TRÌNH 5S?
        </h2>
      </section>
    </div>
  );
};
