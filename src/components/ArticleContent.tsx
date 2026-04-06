"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

function Cite({ n, href }: { n: number; href?: string }) {
  return (
    <a
      className="citation-ref"
      href={href || `#ref-${n}`}
      title={`Nguồn trích dẫn ${n}`}
    >
      {n}
    </a>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="article-heading">
      {children}
    </h2>
  );
}

export default function ArticleContent() {
  return (
    <div className="article-body">
      {/* Section 1 */}
      <FadeInSection>
        <section id="dan-nhap">
          <SectionHeading id="dan-nhap-heading">
            Dẫn Nhập Tổng Quan Về Không Gian Phụng Vụ Và Thần Học Mùa Chay Năm 2026
          </SectionHeading>
          <p>
            Trong truyền thống và nhịp độ của năm phụng vụ Kitô giáo, Mùa Chay luôn được định vị như một khoảng thời gian ân sủng đặc biệt, một cơ hội mang tính cánh chung để người tín hữu quay trở về với Thiên Chúa qua các thực hành sám hối, cầu nguyện và bác ái. Báo cáo nghiên cứu này tiến hành một cuộc rà soát và phân tích giải phẫu chuyên sâu đối với chương trình &ldquo;Hành trình bốn mươi ngày&rdquo; Mùa Chay năm 2026, được triển khai trên nền tảng truyền thông Công giáo Dòng Tên (dongten.net).<Cite n={1} /> Lộ trình tu đức này không chỉ đơn thuần là một tập hợp các bài suy niệm rời rạc, mà là một hệ thống kiến trúc thần học được cấu trúc chặt chẽ, dựa trên ấn phẩm gốc &ldquo;40 Days in the Desert: A Lenten Journey with Our Lord&rdquo; thuộc chuỗi xuất bản &ldquo;My Catholic Life&rdquo;.<Cite n={2} /> Bản chất của lộ trình này là sự mô phỏng lại một cách sinh động bốn mươi ngày chay tịnh của Đức Giêsu Kitô trong hoang địa, từ đó dẫn dắt người đọc đi xuyên qua các cạm bẫy của bảy mối tội đầu, vượt qua những thử thách tinh thần, để cuối cùng tiến vào Tuần Thánh và hiệp thông trọn vẹn với mầu nhiệm Vượt Qua.<Cite n={1} />
          </p>
          <p>
            Điểm tựa quy chiếu nền tảng cho toàn bộ hành trình tâm linh của năm 2026 được định hình trực tiếp bởi Sứ điệp Mùa Chay của Đức Thánh Cha, chính thức ban hành vào ngày 13 tháng 02 năm 2026.<Cite n={1} /> Sứ điệp này mang chủ đề trọng tâm: &ldquo;Lắng nghe và Ăn chay – Mùa Chay là thời gian hoán cải&rdquo;.<Cite n={1} />
          </p>

          <div className="scripture-quote">
            <p>
              Việc &ldquo;lắng nghe&rdquo; đòi hỏi một thái độ tĩnh lặng nội tâm triệt để, gạt bỏ những tiếng ồn của thế tục để Lời Chúa có thể vang dội và bắt rễ sâu trong tâm hồn. Sự &ldquo;ăn chay&rdquo; không chỉ được thu hẹp trong phạm trù tiết chế ẩm thực hay thể lý, mà được mở rộng thành một thái độ khắc kỷ toàn diện. Yếu tố thứ ba, &ldquo;cùng nhau&rdquo;, mang một ý nghĩa hiệp hành sâu sắc, nhắc nhở rằng tiến trình hoán cải chưa bao giờ là một nỗ lực mang tính cá nhân chủ nghĩa.
            </p>
          </div>

          <p>
            Lời nguyện cốt lõi được lặp đi lặp lại xuyên suốt hành trình là lời nài xin Thiên Chúa ban cho sự hiểu biết và khả năng &ldquo;cảm nếm sâu xa hơn tình yêu của Chúa&rdquo;, từ đó khơi gợi lòng yêu mến Ngài mãnh liệt hơn.<Cite n={5} /> Các tác giả của chương trình nhấn mạnh một nguyên lý thần học nền tảng: chỉ có tình yêu mới là động lực đích thực làm cho Lời của Thiên Chúa trở nên rực sáng, biến việc tuân giữ các giới răn và sự hy sinh khắc khổ trở nên nhẹ nhàng, êm ái.<Cite n={5} />
          </p>
          <p>
            Để hỗ trợ cho tiến trình này, hệ sinh thái nội dung của dongten.net trong Mùa Chay 2026 còn tích hợp các chuyên mục bổ trợ mang tính thực hành cao như &ldquo;Phút Cầu Nguyện&rdquo;, &ldquo;Học hỏi Phúc Âm và Suy tư Chúa Nhật&rdquo;, và đặc biệt là chuỗi bài tập &ldquo;Linh thao - Linh đạo&rdquo; theo phương pháp truyền thống của Thánh I-Nhã.<Cite n={1} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 2 - Structure */}
      <FadeInSection>
        <section id="cau-truc">
          <SectionHeading id="cau-truc-heading">
            Cấu Trúc Tổng Thể Và Lộ Trình Sư Phạm Của Hành Trình Bốn Mươi Ngày
          </SectionHeading>
          <p>
            Việc phân bổ nội dung của bốn mươi ngày không phải là một sự lắp ghép cơ học, mà tuân theo một tiến trình sư phạm tâm lý và thần học vô cùng tinh vi. Tiến trình này đưa người thao viên trải qua ba giai đoạn kinh điển: <em>con đường thanh tẩy (via purgativa)</em>, <em>con đường soi sáng (via illuminativa)</em> và <em>con đường hiệp nhất (via unitiva)</em>.
          </p>

          {/* TABLE 1: 40-Day Journey Overview */}
          <div className="table-scroll-hint">← Vuốt ngang để xem đầy đủ →</div>
          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Phân Kỳ Tâm Linh</th>
                  <th>Ngày Phụng Vụ</th>
                  <th>Chủ Đề Suy Niệm</th>
                  <th>Định Hướng Thần Học &amp; Mục Vụ</th>
                </tr>
              </thead>
              <tbody>
                {/* Phase 1 */}
                <tr style={{ background: "var(--citation-bg)" }}>
                  <td colSpan={4} style={{ fontWeight: 700, fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
                    Giai đoạn 1: Tiến vào Hoang Địa và Sự Khắc Kỷ Thể Lý
                  </td>
                </tr>
                <tr><td></td><td>Ngày 1 (Thứ Tư Lễ Tro)</td><td>Hành trình cùng Chúa</td><td>Khởi động ý chí bước vào kỷ luật Mùa Chay, nhận thức thân phận tro bụi.</td></tr>
                <tr><td></td><td>Ngày 2 (Thứ Năm sau Lễ Tro)</td><td>Hoang địa</td><td>Thiết lập không gian tách biệt, cắt đứt các ràng buộc thế tục.</td></tr>
                <tr><td></td><td>Ngày 3 (Thứ Sáu)</td><td>Sự Hy sinh</td><td>Thực hành giữ chay kiêng thịt, biến nỗi đau thành tình yêu tự hiến.</td></tr>
                <tr><td></td><td>Ngày 4 (Thứ Bảy)</td><td>Sự Khô khan</td><td>Đối diện với sự thiếu vắng cảm xúc an ủi trong đời sống cầu nguyện.</td></tr>
                <tr><td></td><td>CN I Mùa Chay</td><td>Cơn Đói</td><td>Nhận thức giới hạn sinh lý và định hướng lại cơn đói khát tâm linh.</td></tr>
                <tr><td></td><td>Ngày 5 (Thứ Hai Tuần 1)</td><td>Sự Cằn cỗi</td><td>Chấp nhận sự trống rỗng như điều kiện cần để ân sủng hoạt động.</td></tr>
                <tr><td></td><td>Ngày 6 (Thứ Ba Tuần 1)</td><td>Sự Cô tịch</td><td>Chuyển hóa cảm giác cô lập thành không gian hiệp thông với Thiên Chúa.</td></tr>
                <tr><td></td><td>Ngày 7 (Thứ Tư Tuần 1)</td><td>Cơn Nóng</td><td>Lãnh nhận ơn kiên nhẫn siêu nhiên để chịu đựng những khắc nghiệt.</td></tr>
                <tr><td></td><td>Ngày 8 (Thứ Năm Tuần 1)</td><td>Cơn Khát</td><td>Thông hiệp với cơn khát cứu rỗi các linh hồn của Đức Giêsu.</td></tr>
                <tr><td></td><td>Ngày 9 (Thứ Sáu Tuần 1)</td><td>Sám hối</td><td>Ý thức về hậu quả của tội lỗi và thực hành các biện pháp đền tạ.</td></tr>
                <tr><td></td><td>Ngày 10 (Thứ Bảy Tuần 1)</td><td>Kẻ Cám dỗ</td><td>Chuẩn bị tâm lý đối diện với sự xuất hiện trực tiếp của ác thần.</td></tr>

                {/* Phase 2 */}
                <tr style={{ background: "var(--citation-bg)" }}>
                  <td colSpan={4} style={{ fontWeight: 700, fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
                    Giai đoạn 2: Trận Chiến Tâm Trí và Sự Xảo Trá của Ma Quỷ
                  </td>
                </tr>
                <tr><td></td><td>CN II Mùa Chay</td><td>Sự Tương phản</td><td>Đối chiếu vinh quang Biến Hình với thực tại khắc nghiệt của Thập giá.</td></tr>
                <tr><td></td><td>Ngày 11–15 (Tuần 2)</td><td>Sáng tạo, Kiên trì, Căn tính, Tự phụ, Quyền lực</td><td>Giải phẫu những cám dỗ nền tảng về cái tôi, sự an toàn và quyền thống trị.</td></tr>
                <tr><td></td><td>CN III Mùa Chay</td><td>Nước Hằng Sống</td><td>Nhận diện ân sủng như nguồn nước duy nhất xoa dịu cơn khát hiện sinh.</td></tr>
                <tr><td></td><td>Ngày 17–22 (Tuần 3)</td><td>Nơi Thánh, Vinh Quang Phù Phiếm, Giả Định, Xuyên Tạc, Thử Thách, Hân Hoan</td><td>Nhận diện chiến thuật ngụy biện và xuyên tạc chân lý của ma quỷ.</td></tr>
                <tr><td></td><td>Ngày 23–26 (Tuần 4)</td><td>Đỉnh Cao, Ngẫu Tượng, Thờ Phượng, Thiên Thần</td><td>Đỉnh điểm cám dỗ: khát vọng quyền lực, phồn vinh, và sự an ủi phục hồi.</td></tr>

                {/* Phase 3 */}
                <tr style={{ background: "var(--citation-bg)" }}>
                  <td colSpan={4} style={{ fontWeight: 700, fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
                    Giai đoạn 3: Giải Phẫu Bảy Mối Tội Đầu và Sự Chữa Lành
                  </td>
                </tr>
                <tr><td></td><td>CN IV Mùa Chay</td><td>Được Nhìn Thấy</td><td>Mầu nhiệm chữa lành người mù: sự soi sáng tâm hồn.</td></tr>
                <tr><td></td><td>Ngày 27–28</td><td>Lười biếng/Siêng năng, Ganh tị/Hân hoan</td><td>Đấu tranh chống chán nản; từ bỏ sự đố kỵ hẹp hòi.</td></tr>
                <tr><td></td><td>CN V Mùa Chay</td><td>Nước Mắt</td><td>Sự rung cảm của Thiên Chúa trước nỗi đau tử vong.</td></tr>
                <tr><td></td><td>Ngày 29–34</td><td>Tham ăn, Nóng giận, Tham lam, Dục vọng, Kiêu ngạo, Hòa Giải</td><td>Nhổ rễ bảy mối tội đầu; phục hồi qua Bí tích Hòa Giải.</td></tr>

                {/* Phase 4 */}
                <tr style={{ background: "var(--citation-bg)" }}>
                  <td colSpan={4} style={{ fontWeight: 700, fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
                    Giai đoạn 4: Tuần Thánh, Mầu Nhiệm Vượt Qua và Hy Vọng
                  </td>
                </tr>
                <tr><td></td><td>CN Lễ Lá</td><td>Tuần Thánh Khởi Đầu</td><td>Cảnh báo sự mong manh của vinh quang thế gian.</td></tr>
                <tr><td></td><td>Ngày 35 (Thứ Tư)</td><td>Lòng Sùng Kính</td><td>Tình yêu dâng hiến vô vị lợi tại Bêtania.</td></tr>
                <tr><td></td><td>Ngày 36 (Thứ Năm)</td><td>Sự Phản Bội</td><td>Nỗi đau bị phản bội bởi người thân tín nhất.</td></tr>
                <tr><td></td><td>Ngày 37 (Thứ Sáu)</td><td>Sự Chối Bỏ</td><td>Sự yếu đuối của bản tính con người qua sự gục ngã của Tông đồ.</td></tr>
                <tr><td></td><td>Ngày 38 (Thứ Bảy)</td><td>Bí tích Thánh Thể</td><td>Mầu nhiệm tự hiến, lập Giao Ước Mới trong Bữa Tiệc Ly.</td></tr>
                <tr><td></td><td>Ngày 39 (CN Phục Sinh)</td><td>Cái Chết</td><td>Sự vâng phục tột cùng của Đức Giêsu trên Thập giá.</td></tr>
                <tr><td></td><td>Ngày 40 (Thứ Bảy Tuần Thánh)</td><td>Niềm Trông Đợi Trong Hy Vọng</td><td>Sự thinh lặng của mộ đá và niềm cậy trông tuyệt đối của Đức Maria.</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Việc cấu trúc hành trình theo bốn giai đoạn rõ rệt cho thấy một sự thấu hiểu sâu sắc về động lực học tâm linh. Chương trình không vội vàng đưa người tín hữu vào ngay những mầu nhiệm cao siêu của Thập giá, mà bắt đầu bằng việc xử lý những nhu cầu cơ bản nhất của thân xác.
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 3 - Phase 1 Analysis */}
      <FadeInSection>
        <section id="giai-doan-1">
          <SectionHeading id="giai-doan-1-heading">
            Phân Tích Giai Đoạn Một: Kinh Nghiệm Hoang Địa Và Tính Khắc Kỷ Thể Lý
          </SectionHeading>
          <p>
            Kinh nghiệm hoang địa trong Mùa Chay hoàn toàn không nhằm mục đích thúc đẩy một lối sống khổ dâm hay thù ghét thân xác. Trái lại, nó là một nỗ lực sư phạm nhằm lột bỏ các lớp vỏ bọc an toàn giả tạo mà nền văn minh vật chất tạo ra, buộc con người phải đối diện với thực tại trần trụi và mỏng giòn của mình trước mặt Thiên Chúa.<Cite n={4} />
          </p>

          <div className="scripture-quote">
            <p>
              Sự khô khan ở đây là một hiện tượng tâm lý - tâm linh vô cùng phổ biến nhưng ít được thấu hiểu đầy đủ. Việc cầu nguyện và ăn chay không phải lúc nào cũng sản sinh ra sự an ủi cảm xúc hay những trải nghiệm thần bí ngọt ngào. Trong truyền thống thần bí Công giáo, tình trạng này thường được gọi là &ldquo;Đêm đen của linh hồn&rdquo;.
            </p>
          </div>

          <p>
            Đáng chú ý nhất là bài phân tích về &ldquo;Cơn Nóng&rdquo; trong Ngày Thứ Bảy.<Cite n={6} /> Bài suy niệm phác họa cái nóng khô hanh, bốc lửa của hoang địa vùng Giuđê không chỉ như một bối cảnh môi trường, mà như một tác nhân tàn phá sinh lý học con người. Điểm sáng thần học cốt lõi: Đức Giêsu không dùng quyền năng siêu nhiên để làm mát không khí, mà sử dụng một đặc tính vô giá là <strong>sự kiên nhẫn</strong>.<Cite n={6} /> Việc Đức Giêsu tự nguyện hứng chịu cái nóng thiêu đốt liên tục suốt 40 ngày là phương thế để Ngài giành lấy và ban tặng cho nhân loại ơn kiên nhẫn siêu nhiên.<Cite n={6} />
          </p>
          <p>
            Tiếp nối mạch suy tư, Ngày Thứ Tám (Cơn Khát) chuyển hóa cơn khát vật lý thành cơn khát thần học về sự cứu rỗi các linh hồn, tạo nên đường dây liên kết từ hoang địa đến tận lời kêu &ldquo;Ta khát&rdquo; của Chúa trên Thập Giá.<Cite n={1} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 4 - Phase 2 Analysis */}
      <FadeInSection>
        <section id="giai-doan-2">
          <SectionHeading id="giai-doan-2-heading">
            Phân Tích Giai Đoạn Hai: Trận Chiến Tâm Trí Và Kỹ Thuật Xảo Trá Của Ác Thần
          </SectionHeading>
          <p>
            Sau khi cơ thể đã đạt đến giới hạn kiệt quệ, cuộc chiến thực sự mới bùng nổ, và lần này chiến trường chính là tâm trí. Trọng tâm nằm ở việc nhận diện cách thức ma quỷ thao túng và sử dụng chính những khái niệm Kinh Thánh để dệt lên &ldquo;Những Giả Định Sai Lạc&rdquo; và &ldquo;Sự Xuyên Tạc&rdquo;.<Cite n={1} />
          </p>

          <div className="scripture-quote">
            <p>
              Hành động &ldquo;thử thách Thiên Chúa&rdquo; phản ánh một tình trạng đức tin ấu trĩ và chưa trưởng thành, nơi con người đòi hỏi Thiên Chúa phải liên tục can thiệp bằng các phép lạ nhãn tiền để phục vụ cho sự an toàn cá nhân, thay vì phó thác hoàn toàn vào sự quan phòng tĩnh lặng của Ngài.
            </p>
          </div>

          <p>
            Chương trình cung cấp công cụ phân định thần loại qua chủ đề &ldquo;Niềm Hân Hoan&rdquo;.<Cite n={1} /> Vui vẻ là phản ứng tâm lý phụ thuộc hoàn toàn vào các tác nhân bên ngoài; ngược lại, <strong>niềm hân hoan</strong> là hoa trái nội tại của Chúa Thánh Thần một trạng thái bình an sâu thẳm không thể bị lay chuyển, vẫn tồn tại vững bền ngay cả giữa muôn vàn đau khổ.<Cite n={1} />
          </p>
          <p>
            Đỉnh điểm của cám dỗ: ác thần đưa ra mồi nhử mạnh mẽ nhất sự phồn vinh, vinh hoa lợi lộc và sự thống trị thế gian.<Cite n={1} /> Lời đáp trả dứt khoát &ldquo;chỉ thờ phượng một mình Thiên Chúa&rdquo; là hành động tái thiết lập toàn bộ trật tự bản thể luận của vũ trụ. Giai đoạn khép lại bằng sự xuất hiện êm ái của &ldquo;Các Thiên Thần&rdquo; sự an ủi và phục hồi sau những trận chiến ác liệt.<Cite n={1} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 5 - Phase 3 - Seven Deadly Sins */}
      <FadeInSection>
        <section id="giai-doan-3">
          <SectionHeading id="giai-doan-3-heading">
            Phân Tích Giai Đoạn Ba: Giải Phẫu Bảy Mối Tội Đầu
          </SectionHeading>
          <p>
            Bước sang tuần lễ thứ năm, hành trình tiến vào giai đoạn nội quan sâu sắc nhất. Chương trình sử dụng cấu trúc phân loại truyền thống của Bảy Mối Tội Đầu (Septem peccata mortalia) dưới thủ pháp đối chiếu lưỡng phân với các nhân đức đối lập:<Cite n={1} />
          </p>

          {/* TABLE 2: Seven Deadly Sins vs Virtues */}
          <div className="table-scroll-hint">← Vuốt ngang để xem đầy đủ →</div>
          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Mối Tội Đầu</th>
                  <th>Nhân Đức Đối Lập</th>
                  <th>Bản Chất Của Cuộc Chiến Nội Tâm</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Sự Lười biếng (Acedia)</td><td>Sự Siêng năng (Diligence)</td><td>Chống lại sự chán nản thiêng liêng, sự tê liệt ý chí trước việc lành.</td></tr>
                <tr><td>Sự Ganh tị (Envy)</td><td>Niềm Hân hoan (Joyful Rejoicing)</td><td>Loại bỏ thói ích kỷ, tập vui mừng trước hồng ân của tha nhân.</td></tr>
                <tr><td>Thói Mê ăn uống (Gluttony)</td><td>Biết Tự chủ (Self-control)</td><td>Lập lại trật tự cho các bản năng sinh tồn.</td></tr>
                <tr><td>Sự Nóng giận (Anger)</td><td>Sự Nhẫn nại (Patience)</td><td>Kiểm soát cảm xúc bùng phát, noi gương sự hiền lành của Chúa.</td></tr>
                <tr><td>Sự Tham lam (Greed)</td><td>Sự Quảng đại (Generosity)</td><td>Giải phóng bản thân khỏi sự ràng buộc của tài sản.</td></tr>
                <tr><td>Sự Dâm dục (Lust)</td><td>Sự Khiết tịnh (Purity)</td><td>Tôn trọng phẩm giá thánh thiêng của thân xác.</td></tr>
                <tr><td>Sự Kiêu ngạo (Pride)</td><td>Sự Khiêm nhường (Humility)</td><td>Đập tan cái nhìn sai lạc về tầm quan trọng của cái tôi.</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Bài suy niệm Ngày 31 (Tham lam hay Quảng đại?) phát hiện khái niệm &ldquo;lòng tham lam thiêng liêng&rdquo;:<Cite n={7} /> đối với những người tiến bộ trong cầu nguyện, ma quỷ khiến họ khao khát cảm xúc ngọt ngào tâm linh đến mức bám víu vào cảm xúc đó hơn là bám víu vào chính Thiên Chúa.<Cite n={7} /> Đỉnh cao tuyệt đối của sự quảng đại được chỉ ra tại đồi Canvê, nơi Đức Giêsu trao tặng cả Mẹ Maria cho nhân loại.<Cite n={7} />
          </p>
          <p>
            Ngay tại tâm điểm của sự khủng hoảng, chương trình đặt Bí tích Hòa Giải vào Ngày 34, ngay trước thềm Tuần Thánh.<Cite n={8} /> Bí tích này, như ẩn dụ &ldquo;tắm mát sau ngày nắng gắt&rdquo;, là sự gột rửa linh hồn, phục hồi tự do nội tâm.<Cite n={8} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 6 - Phase 4 */}
      <FadeInSection>
        <section id="giai-doan-4">
          <SectionHeading id="giai-doan-4-heading">
            Phân Tích Giai Đoạn Bốn: Mầu Nhiệm Vượt Qua Và Đỉnh Cao Của Sự Tự Hiến
          </SectionHeading>
          <p>
            Tuần Thánh là trung tâm điểm, là nhịp đập trái tim của toàn bộ năm phụng vụ. Lộ trình đưa người đọc hoàn toàn đắm chìm vào cuộc Thương Khó.<Cite n={1} /> Lòng Sùng Kính (Ngày 35) được khắc họa qua hành động xức dầu thơm của Maria tại Bêtania một hành vi sùng kính mang tính tiên tri.<Cite n={1} />
          </p>
          <p>
            Cái Chết của Đức Giêsu (Ngày 39) không được trình bày như bi kịch thất bại, mà trong nhãn quan chiến thắng: Ngài đón nhận cái chết với &ldquo;niềm hy vọng và niềm vui, vượt qua nỗi sợ hãi&rdquo;.<Cite n={1} />
          </p>

          <h3 id="ngay-40" className="article-heading" style={{ fontSize: "1.3rem", marginTop: "2rem" }}>
            Đỉnh Cao Của Niềm Hy Vọng: Ngày Thứ Bốn Mươi
          </h3>

          <div className="scripture-quote">
            <p>
              Trái ngược hoàn toàn với sự hoang mang của các môn đệ, Đức Maria mang trong lòng sự bình an nội tâm kỳ lạ và &ldquo;tràn ngập niềm mong chờ hân hoan&rdquo;. Dù tâm hồn Mẹ vừa bị một lưỡi gươm đâm thấu trên đồi Canvê, Mẹ là thụ tạo duy nhất trên thế gian vẫn giữ vững ngọn lửa Đức Tin cháy sáng trong ngày Thứ Bảy tăm tối.<Cite n={2} />
            </p>
          </div>

          <p>
            Hệ luận tâm linh: Thập giá, dù nặng nề, luôn là phương thế bắt buộc dẫn người tín hữu thông phần vào niềm vui hoàn hảo của sự Phục Sinh.<Cite n={2} /> Thái độ sống đúng đắn không phải là cam chịu thụ động, mà là một &ldquo;niềm trông đợi trong thầm lặng nhưng đầy hy vọng&rdquo;.<Cite n={2} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 7 - Ignatian Spirituality */}
      <FadeInSection>
        <section id="linh-thao">
          <SectionHeading id="linh-thao-heading">
            Chiều Kích Linh Thao I-Nhã: Sự Song Hành Của Chiêm Niệm Và Hành Động
          </SectionHeading>
          <p>
            Một trong những đặc điểm nổi bật nhất là sự tích hợp hữu cơ của phương pháp Linh thao (Spiritual Exercises) do Thánh I-Nhã Loyola sáng lập.<Cite n={1} /> Hành trình Linh thao chia làm bốn phần (Weeks):
          </p>

          <h3 id="linh-thao-p1" className="article-heading" style={{ fontSize: "1.2rem" }}>
            Phần I: Hy vọng, Sám hối và Khát khao (Bài tập 1–10)
          </h3>
          <p>
            Tương ứng với giai đoạn tiến vào hoang địa, Linh thao tuần I xoay quanh việc tự nhận thức về tình trạng tội lỗi, nhưng dưới ánh sáng của tình yêu Thiên Chúa. Người thao viên phải đạt đến kinh nghiệm: &ldquo;Xin tránh xa con, vì con là kẻ tội lỗi&rdquo;.<Cite n={1} />
          </p>

          <h3 id="linh-thao-p2" className="article-heading" style={{ fontSize: "1.2rem" }}>
            Phần II: Chúa Kitô mời gọi tôi phục vụ (Bài tập 11–20)
          </h3>
          <p>
            Giai đoạn tập trung chiêm ngắm cuộc đời công khai của Chúa Giêsu. Thao viên được mời gọi xin ơn hiểu biết Chúa sâu xa hơn. Yếu tố quan trọng tại Bài 14 (&ldquo;Buông...&rdquo;): thao viên phải cắt đứt quá khứ ràng buộc, trở nên tự do để phục vụ tha nhân.<Cite n={1} />
          </p>

          <h3 id="linh-thao-p3" className="article-heading" style={{ fontSize: "1.2rem" }}>
            Phần III: Tôi đau khổ vì tôi yêu thương (Bài tập 21–30)
          </h3>
          <p>
            Phương pháp I-Nhã đòi hỏi thao viên phải sử dụng tối đa trí tưởng tượng và các giác quan nội tâm (áp dụng ngũ quan) để hiện diện ngay tại hiện trường cuộc khổ nạn.<Cite n={1} /> Động lực tâm lý: &ldquo;không muốn để những người mình yêu phải chịu đau khổ một mình&rdquo;.<Cite n={1} />
          </p>

          <h3 id="linh-thao-p4" className="article-heading" style={{ fontSize: "1.2rem" }}>
            Phần IV: Tôi sẽ sống trong hy vọng (Bài tập 31)
          </h3>
          <p>
            Hành trình kết thúc tại &ldquo;Ngôi mộ trống&rdquo;, tái khẳng định chân lý tuyệt đối rằng tình yêu luôn mãnh liệt và quyền năng hơn sự chết.<Cite n={1} />
          </p>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* Section 8 - Conclusion */}
      <FadeInSection>
        <section id="ket-luan">
          <SectionHeading id="ket-luan-heading">
            Kết Luận: Hệ Luận Tâm Linh Và Ứng Dụng Thực Hành
          </SectionHeading>
          <p>
            Thông qua cuộc phân tích toàn diện, báo cáo kết luận rằng đây là một kiến trúc tâm linh vĩ đại, đạt đến sự hội tụ hài hòa giữa chiều sâu Thần học Phụng vụ, tâm lý học hành vi và linh đạo thực hành.<Cite n={1} />
          </p>

          <div className="scripture-quote">
            <p>
              Bản chất của Mùa Chay 2026 là một cuộc thanh tẩy để tái định hình tình yêu. Mọi sự hy sinh chỉ có giá trị khi chúng ta xin Chúa ban ơn &ldquo;cảm nếm sâu xa hơn tình yêu của Chúa dành cho chúng ta&rdquo;.<Cite n={5} /> Chính tình yêu ấy là phương thuốc chữa lành mọi rạn nứt, là sức mạnh giải phóng con người khỏi thói ích kỷ, và là ánh sáng rực rỡ nhất biến đổi một Mùa Chay khô khan thành một hành trình hoán cải tràn ngập bình an, niềm vui và hạnh phúc đích thực.
            </p>
          </div>

          <p>
            Kết quả thực sự của Mùa Chay sẽ được đo lường bằng việc, sau 40 ngày, người tín hữu đã trở nên đồng hình đồng dạng với Đức Kitô đến mức độ nào trong khả năng quảng đại trao ban và trắc ẩn với nỗi đau của nhân loại.
          </p>

          <motion.div 
            className="flex items-center justify-center gap-4 mt-20 mb-8 opacity-40 select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-24 bg-gold" style={{ background: "var(--gold)" }} />
            <span className="text-xl text-gold" style={{ color: "var(--gold)" }}>Ω</span>
            <div className="h-px w-24 bg-gold" style={{ background: "var(--gold)" }} />
          </motion.div>
        </section>
      </FadeInSection>

      <div className="gold-separator my-10" />

      {/* References Section */}
      <FadeInSection>
        <section id="nguon-trich-dan">
          <SectionHeading id="nguon-trich-dan-heading">
            Nguồn Trích Dẫn
          </SectionHeading>
          <div className="space-y-0">
            <div className="reference-item" id="ref-1">
              <strong>[1]</strong> Mùa Chay Archives - Dòng Tên-Dòng Chúa Giêsu. <a href="https://dongten.net/category/cau-nguyen/mua-chay/" target="_blank" rel="noopener noreferrer">https://dongten.net/category/cau-nguyen/mua-chay/</a>
            </div>
            <div className="reference-item" id="ref-2">
              <strong>[2]</strong> Ngày Thứ Bốn Mươi: Niềm Trông Đợi Trong Hy Vọng - Dòng Tên. <a href="https://dongten.net/ngay-thu-bon-muoi-niem-trong-doi-trong-hy-vong/" target="_blank" rel="noopener noreferrer">https://dongten.net/ngay-thu-bon-muoi-niem-trong-doi-trong-hy-vong/</a>
            </div>
            <div className="reference-item" id="ref-3">
              <strong>[3]</strong> 40 Days in the Desert: A Lenten Journey with Our Lord - My Catholic Life! <a href="https://mycatholic.life/books/40-days-in-the-desert-a-lenten-journey-with-our-lord/" target="_blank" rel="noopener noreferrer">https://mycatholic.life/books/40-days-in-the-desert/</a>
            </div>
            <div className="reference-item" id="ref-4">
              <strong>[4]</strong> 40 Days in the Desert - Everand. <a href="https://www.everand.com/book/699647751/40-Days-in-the-Desert-A-Lenten-Journey-with-Our-Lord" target="_blank" rel="noopener noreferrer">https://www.everand.com/book/699647751/</a>
            </div>
            <div className="reference-item" id="ref-5">
              <strong>[5]</strong> &ldquo;Đấng hiện diện nơi kín đáo&rdquo; (Thứ Tư Lễ Tro) - Dòng Tên. <a href="https://dongten.net/dang-hien-dien-noi-kin-dao-1822015-thu-tu-le-tro/" target="_blank" rel="noopener noreferrer">https://dongten.net/dang-hien-dien-noi-kin-dao/</a>
            </div>
            <div className="reference-item" id="ref-6">
              <strong>[6]</strong> Ngày Thứ Bảy: Cơn Nóng - Dòng Tên. <a href="https://dongten.net/ngay-thu-bay-con-nong/" target="_blank" rel="noopener noreferrer">https://dongten.net/ngay-thu-bay-con-nong/</a>
            </div>
            <div className="reference-item" id="ref-7">
              <strong>[7]</strong> Ngày Thứ Ba Mươi Mốt: Tham lam hay Quảng đại? - Dòng Tên. <a href="https://dongten.net/ngay-thu-ba-muoi-mot-tham-lam-hay-quang-dai/" target="_blank" rel="noopener noreferrer">https://dongten.net/ngay-thu-ba-muoi-mot-tham-lam-hay-quang-dai/</a>
            </div>
            <div className="reference-item" id="ref-8">
              <strong>[8]</strong> Ngày Thứ Ba Mươi Tư: Bí tích Hòa Giải - Dòng Tên. <a href="https://dongten.net/ngay-thu-ba-muoi-tu-bi-tich-hoa-giai/" target="_blank" rel="noopener noreferrer">https://dongten.net/ngay-thu-ba-muoi-tu-bi-tich-hoa-giai/</a>
            </div>
            <div className="reference-item" id="ref-9">
              <strong>[9]</strong> Feasts and Solemnities - My Catholic Life! <a href="https://mycatholic.life/books/catholic-daily-reflections-series-three/weeks-1-17-of-ordinary-time/feasts-and-solemnities/" target="_blank" rel="noopener noreferrer">https://mycatholic.life/books/catholic-daily-reflections/feasts-and-solemnities/</a>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
