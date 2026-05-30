# CMS Vietkite — giữ nguyên giao diện index cũ

Gói này KHÔNG có `index.html`, để tránh ghi đè giao diện cũ.

Upload các thư mục/file này lên root repo GitHub:

- `admin/`
- `data/site.json`
- `assets/cms-bind.js`
- `images/uploads/.gitkeep`

## Bước duy nhất cần chạm index

Để nội dung trong CMS hiện ra ngoài web, `index.html` phải nạp file kết nối CMS. Chỉ thêm 1 dòng này ngay trước `</body>`:

```html
<script src="/assets/cms-bind.js" defer></script>
```

Dòng này không đổi layout, không đổi CSS, không thay giao diện. Nó chỉ đọc `data/site.json` rồi thay text/ảnh đúng trên HTML cũ.

Nếu không thêm dòng này thì khách vẫn sửa được trong `/admin/`, nhưng web ngoài sẽ không đổi theo.

## Khách vào CMS

Sau khi bật Netlify Identity + Git Gateway và invite user, khách vào:

```text
https://domain-cua-khach/admin/
```

## Nguyên tắc để không vỡ giao diện

- Khách nên thay chữ/ảnh/giá/link trong các ô có sẵn.
- Không nên tự ý thêm quá nhiều item mới nếu không muốn layout dài bất thường.
- Ảnh upload mới nằm trong `images/uploads/`.
