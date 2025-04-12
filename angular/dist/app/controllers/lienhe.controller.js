var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Contact from "../models/contact.model";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const lienhe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render("lienhe", { showHeaderFooter: true });
        // res.json()
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Lỗi về phía server");
    }
});
export const sendEmail = (firstName, lastName, email, message, purpose, createdAt) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Liên hệ mới từ ${firstName} ${lastName}`,
        html: `
   <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
  <!-- Header -->
  <div style="background-color: #2563eb; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">THÔNG TIN LIÊN HỆ MỚI</h1>
  </div>
  
  <!-- Content -->
  <div style="padding: 25px; background-color: #ffffff;">
    <!-- Avatar & Greeting -->
    <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <div style="width: 60px; height: 60px;display: flex; align-items: center; justify-content: center; margin-right: 15px;">
        <span style="color: white; font-size: 24px; font-weight: bold;">${firstName.charAt(0)}${lastName.charAt(0)}</span>
      </div>
      <div>
        <h2 style="margin: 0; color: #1e293b; font-size: 18px;">Xin chào,</h2>
        <p style="margin: 5px 0 0; color: #64748b;">Bạn có liên hệ mới từ ${firstName} ${lastName}</p>
      </div>
    </div>

    <!-- Contact Info -->
    <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
      <div style="display: flex; margin-bottom: 10px;">
        <div style="width: 120px; color: #64748b; font-weight: 500;">Họ tên:</div>
        <div style="color: #1e293b; font-weight: 500;">${firstName} ${lastName}</div>
      </div>
      <div style="display: flex; margin-bottom: 10px;">
        <div style="width: 120px; color: #64748b; font-weight: 500;">Email:</div>
        <div style="color: #1e293b;">
          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
        </div>
      </div>
      <div style="display: flex; margin-bottom: 10px;">
  <div style="width: 120px; color: #64748b; font-weight: 500;">Mục đích:</div>
  <div style="color: #1e293b;">
    <div style="display: inline-flex; align-items: center; background-color: ${purpose === 'freelancer' ? '#dbeafe' : '#f0fdf4'}; color: ${purpose === 'freelancer' ? '#1d4ed8' : '#166534'}; padding: 6px 12px; border-radius: 6px; font-size: 14px; margin-right: 8px;">
      <svg style="width: 16px; height: 16px; margin-right: 6px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        ${purpose === 'freelancer' ? `
        <!-- Icon freelancer (user) -->
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        ` : `
        <!-- Icon business (office) -->
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        `}
      </svg>
      ${purpose === 'freelancer' ? 'Tôi là freelancer, muốn hợp tác dự án' : 'Tôi là doanh nghiệp, muốn thuê bạn làm dự án'}
    </div>
  </div>
</div>

    <!-- Message -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #1e293b; font-size: 16px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Nội dung liên hệ</h3>
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; color: #334155; line-height: 1.6;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
      <p style="margin: 0;">Trân trọng,</p>
      <p style="margin: 5px 0 0; font-weight: 500; color: #1e293b;">${firstName} ${lastName}</p>
      <p style="margin: 20px 0 0;">© ${new Date().getFullYear()} - All rights reserved</p>
    </div>
  </div>
</div>
  `
    };
    console.log("📧 Đang gửi email đến:", email);
    yield transporter.sendMail(mailOptions);
});
export const postContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, message, email, createdAt, purpose } = req.body;
        const newContact = new Contact({ firstName, lastName, email, purpose, message });
        yield newContact.save();
        yield sendEmail(firstName, lastName, email, message, purpose, createdAt);
        res.json({
            success: true,
            message: "Liên hệ thành công!",
            contact: {
                id: newContact._id,
                name: `${firstName} ${lastName}`
            }
        });
    }
    catch (error) {
        console.error("Lỗi khi xử lý liên hệ:", error);
        res.status(500).json({ errorMessage: "Có lỗi xảy ra, vui lòng thử lại." });
    }
});
