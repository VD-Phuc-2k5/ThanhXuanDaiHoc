import send_icon from "../../assets/icon/send-msg.svg";
import link_icon from "../../assets/icon/link-icon.svg";
import { contact_info } from "../../datas/data";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-wrap'>
      <div className='contact-comment'>
        <p>
          Thanh xuân đại học là quãng thời gian tuyệt vời nhất trong cuộc đời
          mỗi người. Đây không chỉ là thời gian học tập mà còn là giai đoạn khám
          phá bản thân, xây dựng những mối quan hệ ý nghĩa và trải nghiệm những
          kỷ niệm đáng nhớ. Những buổi tối thức khuya ôn bài, những chuyến đi du
          lịch cùng bạn bè, hay những khoảnh khắc "dở khóc dở cười" trong các
          hoạt động ngoại khóa đều tạo nên những ký ức khó quên. Tuy có những áp
          lực, căng thẳng trong học tập, nhưng chính những thử thách đó giúp
          chúng ta trưởng thành hơn. Đừng quên trân trọng từng khoảnh khắc, hãy
          sống hết mình và tận hưởng từng giây phút của thanh xuân đại học, vì
          đó chính là nền tảng cho những hành trình tiếp theo trong cuộc đời.
        </p>
        <div className='contact-comment-input'>
          <input
            type='text'
            placeholder='Hãy chia sẻ với tôi câu chuyện của bạn ...'
          />
          <div>
            <img src={link_icon} alt='link.svg' />
            <img src={send_icon} alt='send.svg' />
          </div>
        </div>
      </div>
      <div className='contact-info'>
        <h3>THÔNG TIN LIÊN HỆ</h3>

        <div className='contact-info-items'>
          {contact_info.map((contact_item, idx) => (
            <div className='contact-info-item' key={idx}>
              <img src={contact_item.icon} alt='icon.svg' />
              <input value={contact_item.content} readOnly />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
