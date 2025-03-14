import Image from "next/image";
import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="font-bold text-primary text-lg">{children}</h2>;
};

const ImageWithAlt = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="flex flex-col items-center text-center w-full gap-3">
      <div className="relative w-full h-[600px]">
        <Image src={src} alt={text} fill />
      </div>
      <div className="text-foreground-500 font-normal">{text}</div>
    </div>
  );
};

const QuoteLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="31"
      viewBox="0 0 48 31"
      fill="none"
    >
      <path
        d="M0.941125 22.4561C0.941125 20.0881 1.51713 17.7841 2.66913 15.5441C3.82113 13.2401 5.26113 11.1601 6.98913 9.30412C8.78113 7.38412 10.7651 5.72012 12.9411 4.31212C15.1811 2.84012 17.3571 1.68812 19.4691 0.856121L22.2531 4.88812C19.8851 6.68012 18.0931 8.28012 16.8771 9.68812C15.7251 11.0961 15.1491 12.5041 15.1491 13.9121C15.1491 16.1521 16.9411 18.5841 20.5251 21.2081C20.5251 22.7441 20.2371 24.1201 19.6611 25.3361C19.0851 26.5521 18.2851 27.5761 17.2611 28.4081C16.3011 29.2401 15.1811 29.8801 13.9011 30.3281C12.6851 30.7761 11.4051 31.0001 10.0611 31.0001C7.43713 31.0001 5.26113 30.2961 3.53313 28.8881C1.80513 27.4801 0.941125 25.3361 0.941125 22.4561ZM26.3811 22.4561C26.3811 20.0881 26.9571 17.7841 28.1091 15.5441C29.2611 13.2401 30.7011 11.1601 32.4291 9.30412C34.2211 7.38412 36.2051 5.72012 38.3811 4.31212C40.6211 2.84012 42.7971 1.68812 44.9091 0.856121L47.5971 4.88812C45.2931 6.68012 43.5331 8.28012 42.3171 9.68812C41.1651 11.0961 40.5891 12.5041 40.5891 13.9121C40.5891 16.1521 42.3811 18.5841 45.9651 21.2081C45.9651 22.7441 45.6771 24.1201 45.1011 25.3361C44.5251 26.5521 43.7251 27.5761 42.7011 28.4081C41.7411 29.2401 40.6211 29.8801 39.3411 30.3281C38.0611 30.7761 36.7491 31.0001 35.4051 31.0001C32.8451 31.0001 30.7011 30.2961 28.9731 28.8881C27.2451 27.4801 26.3811 25.3361 26.3811 22.4561Z"
        fill="#15AA7A"
      />
    </svg>
  );
};

export const BlogDetail = () => {
  return (
    <div className="text-gray-900 text-pretty text-base font-medium flex flex-col gap-6 mb-16">
      <ImageWithAlt src="/blog/blog-detail.png" text="Quy trình 5s là gì?" />
      <div className="flex flex-col py-4">
        <QuoteLeft />
        <p className="text-gray-700 italic text-lg text-center leading-relaxed w-[90%] mx-auto">
          Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
          dựng 5S cần yếu tố gì? Bài viết dưới đây của <strong>FOSO</strong> sẽ
          trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
          nên thành công của quy trình bạn nhé.
        </p>
      </div>
      <section id="section1" className="flex flex-col gap-4">
        <SectionTitle>1. Quy trình 5S là gì?</SectionTitle>
        <p>
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
        </p>
        <ul className="list-disc list-inside marker:text-primary">
          <li>
            <strong className="text-primary font-semibold">Seiri</strong> (Ngăn
            nắp)
          </li>
          <li>
            <strong className="text-primary font-semibold">Seiso</strong> (Sạch
            sẽ)
          </li>
          <li>
            <strong className="text-primary font-semibold">Seiton</strong> (Trật
            tự)
          </li>
          <li>
            <strong className="text-primary font-semibold">Shitsuke</strong> (Kỷ
            luật)
          </li>
          <li>
            <strong className="text-primary font-semibold">Seiketsu</strong>{" "}
            (Tiêu chuẩn hóa)
          </li>
        </ul>
      </section>

      <section id="section2" className="flex flex-col gap-4">
        <SectionTitle>2. Lợi ích quy trình 5S đem lại</SectionTitle>
        {[
          {
            id: 1,
            content:
              "Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.",
          },
          {
            id: 2,
            content:
              "Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.",
          },
          {
            id: 3,
            content:
              "Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.",
          },
        ].map((data) => (
          <p key={data.id}>{data.content}</p>
        ))}
      </section>
      <ImageWithAlt
        src="/blog/blog-detail-2.png"
        text="Tại sao doanh nghiệp cần quy trình 5S?"
      />

      <section id="section3" className="flex flex-col gap-4">
        <SectionTitle>
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </SectionTitle>
        <p>
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        {[
          {
            id: `section31`,

            title: "3.1 Cải thiện rõ nét môi trường làm việc",
            description:
              "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
          },
          {
            id: `section32`,
            title: "3.2 Tiết kiệm thời gian đáng kể",
            description:
              "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
          },
          {
            id: `section33`,
            title: "3.3 Tăng năng suất làm việc",
            description:
              "Nhờ vào quy trình 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các công cụ cần thiết và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
          },
          {
            id: `section34`,
            title: "3.4 Tiết kiệm chi phí",
            description:
              "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
          },
          {
            id: `section35`,
            title: "3.5 Tăng chất lượng sản phẩm",
            description:
              "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiếu lỗi sản xuất không mong muốn.",
          },
        ].map((item) => (
          <section key={item.title} id={item.id}>
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </section>
        ))}
      </section>
      <ImageWithAlt
        src="/blog/blog-detail-3.png"
        text="Quy trình 5s gồm các bước"
      />

      <section id="section4" className="flex flex-col gap-4">
        <SectionTitle>4. Quy trình 5S gồm các bước</SectionTitle>
        <p>
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </p>
      </section>
      {[
        {
          id: "section41",
          title: "4.1 Seiri (Ngăn nắp)",
          description:
            "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
        },
        {
          id: "section42",
          title: "4.2 Seiton (Sắp xếp)",
          description:
            "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
        },
        {
          id: "section43",
          title: "4.3 Seiso (Vệ sinh)",
          description:
            "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
        },
        {
          id: "section44",
          title: "4.4 Seiketsu (Tiêu chuẩn hóa)",
          description:
            "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu. ",
        },
        {
          id: "section45",
          title: "4.5 Shitsuke (Kỷ luật)",
          description:
            "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình",
        },
      ].map((item) => (
        <section id={item.id} key={item.title}>
          <h3 className="font-semibold text-primary">{item.title}</h3>
          <p className="mt-2 text-gray-700">{item.description}</p>
        </section>
      ))}
      <ImageWithAlt
        src="/blog/blog-detail-4.png"
        text="Các bước thực hiện quy trình 5s"
      />

      <section id="section5" className="flex flex-col gap-4">
        <SectionTitle>5. Quy trình được thực hiện như sau</SectionTitle>
        <p>
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        {[
          {
            id: "section51",
            title: "5.1 Giai đoạn chuẩn bị",
            description:
              "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.",
          },
          {
            id: "section52",
            title: "5.2 Triển khai rộng rãi ",
            description:
              "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.",
          },
          {
            id: "section53",
            title: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            description:
              "Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.",
          },
          {
            id: "section54",
            title: "5.4 Sàng lọc, sắp xếp và đánh giá",
            description:
              "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.",
          },
          {
            id: "section55",
            title: "5.5 Đánh giá",
            description:
              "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.",
          },
        ].map((item) => (
          <section id={item.id} key={item.title}>
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </section>
        ))}
      </section>

      <section id="section6" className="flex flex-col gap-4">
        <SectionTitle>6. Quy trình 5S có giống với Kaizen?</SectionTitle>
        <p>
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </p>
        <div className="border-l-4 border-primary pl-6 py-2 mb-6">
          <p className="text-lg italic text-gray-700">
            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
            doanh nghiệp.
          </p>
          <p className="text-lg italic text-gray-700">
            Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục
            và bền vững.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-6 py-2 mb-6 w-3/4">
          <p className="text-lg italic text-gray-700">
            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
            trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
            tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
          </p>
        </div>
        <p>
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
        </p>
      </section>

      <section id="section7" className="flex flex-col gap-4">
        <SectionTitle>7. Đối tượng nào nên áp dụng 5S?</SectionTitle>
        {[
          "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
          "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
        ].map((content, index) => (
          <p key={`${index}-section7`}>{content}</p>
        ))}
      </section>
      <ImageWithAlt
        src="/blog/blog-detail-5.png"
        text="Các yếu tố tạo nên thành công cho quy trình 5S"
      />

      <section id="section8" className="flex flex-col gap-4">
        <SectionTitle>
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </SectionTitle>
        <p>
          Các yếu tố tạo nên thành công cho quy trình 5S Và những nhân tố quyết
          định đến quá trình thành công của quy trình nhằm cải tiến môi trường
          làm việc của doanh nghiệp đó là từ phía:
        </p>
        <ul className="list-disc list-inside">
          {[
            "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
            "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.",
            "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",
          ].map((content, index) => (
            <li key={`section8-${index}`}>{content}</li>
          ))}
        </ul>
        <p>
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </p>
      </section>
    </div>
  );
};
