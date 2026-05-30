# Hướng dẫn bật CMS cho khách

Upload toàn bộ các file/folder trong gói này vào repo GitHub `vinhomessaigonparkvsgp/chauau`, đè `index.html` cũ.

Các file cần có:

- `index.html`
- `thank-you.html`
- `data/site.json`
- `admin/index.html`
- `admin/config.yml`
- `admin/preview.css`
- `images/uploads/.gitkeep`

Sau đó vào Netlify:

1. Project configuration → Identity → Enable Identity
2. Registration → chọn Invite only
3. Identity → Services → Git Gateway → Enable Git Gateway
4. Vào Identity → Invite users → nhập email khách
5. Khách mở link invite, tạo mật khẩu
6. Khách vào `/admin/` để sửa nội dung

Khách có thể thay:

- SEO title/description/ảnh chia sẻ
- Logo, menu
- Hero text + ảnh nền
- Giới thiệu + ảnh
- Tour + ảnh + giá + nút
- Thư viện ảnh
- Bảng giá
- Review khách hàng
- Form đăng ký
- Footer + liên hệ
- Nút Zalo

Ảnh khách upload mới sẽ nằm trong `images/uploads/`.
