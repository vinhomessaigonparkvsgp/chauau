/* CMS non-destructive binder for Vietkite Châu Âu static page.
   It keeps the existing index.html layout and only replaces text/images from /data/site.json.
   Add once before </body>: <script src="/assets/cms-bind.js" defer></script>
*/
(() => {
  'use strict';

  const BASELINE = {"seo": {"title": "Châu Âu Huyền Diệu | Vietkite Travel Luxury", "description": "Tour Châu Âu cao cấp cùng Vietkite Travel: Tây Âu, Đông Âu, Bắc Âu, khách sạn 4 sao, hỗ trợ Visa Schengen và trưởng đoàn tận tâm.", "canonical": "https://tourchauauvietkite.click/", "site_name": "Vietkite Travel", "og_image": "/CHÂU ÂU/Tháp Eiffel va khải hoàn môn.jpg", "robots": "index,follow"}, "theme": {"background": "#0d1724", "background_soft": "#132238", "cream": "#fff7e8", "gold": "#d7a84f", "gold_dark": "#9b6a21", "accent": "#1c7c73", "heading_font": "Georgia, 'Times New Roman', serif", "body_font": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}, "brand": {"name": "VIETKITE", "logo": "https://vietkite.com.vn/wp-content/uploads/2024/12/logo-cty-canh-dieu-viet-vietkite.jpg"}, "navigation": [{"label": "Trải nghiệm", "url": "#experience", "is_button": false}, {"label": "Hành trình", "url": "#tours", "is_button": false}, {"label": "Thư viện", "url": "#gallery", "is_button": false}, {"label": "Báo giá", "url": "#pricing", "is_button": false}, {"label": "Khách hàng", "url": "#customers", "is_button": false}, {"label": "Đăng ký ngay", "url": "#lead", "is_button": true}], "hero": {"badge": "✦ Cơ hội cuối cùng trong năm ✦", "title": "Chạm Vào|Châu Âu Huyền Diệu", "subtitle": "Cùng Vietkite Travel kiến tạo những ký ức không phai — hành trình đẳng cấp 4 sao qua trái tim Châu Âu.", "background_image": "/CHÂU ÂU/Tháp Eiffel va khải hoàn môn.jpg", "background_alt": "Tháp Eiffel và Khải Hoàn Môn tại Paris", "buttons": [{"text": "Nhận ưu đãi 7 triệu", "url": "#lead", "style": "primary"}, {"text": "Xem ảnh thực tế", "url": "#gallery", "style": "ghost"}], "highlight_label": "Ưu đãi giới hạn", "highlight_number": "-7 Triệu", "highlight_text": "Chỉ áp dụng cho nhóm khách đăng ký sớm. Tư vấn viên sẽ xác nhận điều kiện ưu đãi khi liên hệ."}, "about": {"eyebrow": "Về Vietkite Travel", "title": "Hơn 16 Năm Kiến Tạo Những Kỷ Niệm Vô Giá", "body": "Vietkite Travel – Thương hiệu hàng đầu chuyên tổ chức tour Châu Âu cao cấp. Chúng tôi không chỉ bán tour, chúng tôi tạo những kỷ niệm vô giá cho mỗi gia đình Việt.\nQuy trình xử lý hồ sơ chuyên nghiệp, tối ưu hóa hồ sơ cá nhân giúp đạt tỷ lệ đậu Visa Schengen cao nhất. Trưởng đoàn kinh nghiệm từ Việt Nam theo suốt hành trình, chăm sóc từng bữa ăn, giấc ngủ của bạn.", "image_1": "/CHÂU ÂU/Amsterdam hà lan.jpg", "image_1_alt": "Amsterdam Hà Lan", "image_2": "/CHÂU ÂU/Bảo tàng Louvre - PHÁP.jpg", "image_2_alt": "Bảo tàng Louvre Pháp", "stats": [{"number": "16+", "label": "Năm kinh nghiệm"}, {"number": "99%", "label": "Tỷ lệ đậu Visa"}, {"number": "5K+", "label": "Khách hài lòng"}]}, "tours": {"eyebrow": "3 Tuyến Đặc Quyền", "title": "Chọn Hành Trình Của Bạn", "subtitle": "Bay cùng Vietnam Airlines & Turkish Airlines 5★", "items": [{"badge": "Siêu VIP", "category": "Tây Âu", "country_count": "6 Quốc Gia", "title": "Tây Âu Hoa Lệ", "route": "Đức – Hà Lan – Bỉ – Pháp – Thụy Sĩ – Ý", "image": "/CHÂU ÂU/Tháp Eiffel va khải hoàn môn.jpg", "image_alt": "Tây Âu Hoa Lệ", "highlights": [{"text": "Tháp Eiffel & Paris ánh sáng"}, {"text": "Colosseum Rome cổ kính"}, {"text": "Interlaken – Thụy Sĩ thơ mộng"}, {"text": "Vườn Tulip Keukenhof Hà Lan"}], "old_price": "72.000.000 đ", "new_price": "64.900.000 đ", "button_text": "Đăng ký", "button_url": "#lead"}, {"badge": "⭐ Bán Chạy Nhất", "category": "Đông Âu", "country_count": "5 Quốc Gia", "title": "Đông Âu Cổ Kính", "route": "Đức – Séc – Slovakia – Hungary – Áo", "image": "/CHÂU ÂU/5. Cầu Charles & Lâu đài Prague (Cộng hòa Séc).jpg", "image_alt": "Đông Âu Cổ Kính", "highlights": [{"text": "Lâu đài Prague & Cầu Charles"}, {"text": "Neuschwanstein – cảm hứng Disney"}, {"text": "Thị trấn cổ tích Hallstatt"}, {"text": "10 Ngày 9 Đêm trọn vẹn"}], "old_price": "69.000.000 đ", "new_price": "63.900.000 đ", "button_text": "Đăng ký", "button_url": "#lead"}, {"badge": "Cao cấp", "category": "Bắc Âu", "country_count": "4 Quốc Gia", "title": "Bắc Âu Hùng Vĩ", "route": "Thụy Điển – Phần Lan – Na Uy – Đan Mạch", "image": "/CHÂU ÂU/Vịnh hẹp Geirangerfjord (Na Uy).jpg", "image_alt": "Bắc Âu Hùng Vĩ", "highlights": [{"text": "Du thuyền Vịnh Geirangerfjord"}, {"text": "Di sản thiên nhiên thế giới"}, {"text": "Dịch vụ 5 sao quốc tế"}, {"text": "11 Ngày trải nghiệm"}], "old_price": "112.000.000 đ", "new_price": "109.000.000 đ", "button_text": "Đăng ký", "button_url": "#lead"}]}, "gallery": {"eyebrow": "Thư Viện Hình Ảnh", "title": "Cảm Hứng Châu Âu", "subtitle": "Trọn bộ hình ảnh Châu Âu — Paris, Venice, Prague, Thụy Sĩ, Bắc Âu, Hà Lan và nhiều điểm đến nổi bật.", "items": [{"image": "/CHÂU ÂU/5. Cầu Charles & Lâu đài Prague (Cộng hòa Séc).jpg", "caption": "Cầu Charles và Lâu đài Prague, Séc", "alt": "Cầu Charles và Lâu đài Prague"}, {"image": "/CHÂU ÂU/Amsterdam hà lan.jpg", "caption": "Amsterdam, Hà Lan", "alt": "Amsterdam Hà Lan"}, {"image": "/CHÂU ÂU/Bảo tàng Louvre - PHÁP.jpg", "caption": "Bảo tàng Louvre, Pháp", "alt": "Bảo tàng Louvre"}, {"image": "/CHÂU ÂU/Cầu Charles & Lâu đài Prague (Cộng hòa Séc).jfif", "caption": "Cầu Charles và Lâu đài Prague", "alt": "Prague Séc"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan)+3.jpg", "caption": "Làng Santa Claus, Rovaniemi, Phần Lan", "alt": "Làng Santa Claus"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan).jpg", "caption": "Làng Santa Claus, Phần Lan", "alt": "Santa Claus Phần Lan"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan)_2.jpg", "caption": "Rovaniemi mùa đông, Phần Lan", "alt": "Rovaniemi mùa đông"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan)_3.jpg", "caption": "Không khí Giáng sinh tại Rovaniemi", "alt": "Giáng sinh Rovaniemi"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan)_4.jpg", "caption": "Làng Santa Claus tuyết trắng", "alt": "Santa Claus tuyết trắng"}, {"image": "/CHÂU ÂU/Làng Santa Claus (Rovaniemi, Phần Lan)_5.jpg", "caption": "Trải nghiệm Bắc Âu tại Phần Lan", "alt": "Bắc Âu Phần Lan"}, {"image": "/CHÂU ÂU/NAUY-2.jpg", "caption": "Phong cảnh Na Uy", "alt": "Phong cảnh Na Uy"}, {"image": "/CHÂU ÂU/NAUY.jpg", "caption": "Na Uy hùng vĩ", "alt": "Na Uy"}, {"image": "/CHÂU ÂU/Núi tuyết Titlis_cap treo.jpg", "caption": "Cáp treo núi tuyết Titlis", "alt": "Cáp treo Titlis"}, {"image": "/CHÂU ÂU/Núi tuyết Titlis_truot tuyet.jpg", "caption": "Trượt tuyết tại núi Titlis", "alt": "Trượt tuyết Titlis"}, {"image": "/CHÂU ÂU/Núi tuyết Titlis_trượt tuyết quanh năm.jpg", "caption": "Núi tuyết Titlis quanh năm", "alt": "Titlis quanh năm"}, {"image": "/CHÂU ÂU/Thành phố nổi Venice.jpg", "caption": "Thành phố nổi Venice, Ý", "alt": "Venice Ý"}, {"image": "/CHÂU ÂU/Thành phố nổi Venice_2.jpg", "caption": "Kênh đào Venice", "alt": "Kênh đào Venice"}, {"image": "/CHÂU ÂU/Thành phố nổi Venice_new.jpg", "caption": "Venice lãng mạn", "alt": "Venice lãng mạn"}, {"image": "/CHÂU ÂU/Tháp Eiffel va khải hoàn môn.jpg", "caption": "Tháp Eiffel và Khải Hoàn Môn", "alt": "Tháp Eiffel Khải Hoàn Môn"}, {"image": "/CHÂU ÂU/Tháp Eiffel.jpg", "caption": "Tháp Eiffel, Paris", "alt": "Tháp Eiffel Paris"}, {"image": "/CHÂU ÂU/Tháp Eiffel_2.jpg", "caption": "Paris và Tháp Eiffel", "alt": "Paris Tháp Eiffel"}, {"image": "/CHÂU ÂU/Tháp nghiêng Pisa_ý.jpg", "caption": "Tháp nghiêng Pisa, Ý", "alt": "Tháp nghiêng Pisa"}, {"image": "/CHÂU ÂU/Thị trấn Interlaken & Lucerne.jpg", "caption": "Interlaken và Lucerne, Thụy Sĩ", "alt": "Interlaken Lucerne"}, {"image": "/CHÂU ÂU/Thị trấn Interlaken & Lucerne_2.jpg", "caption": "Lucerne thơ mộng", "alt": "Lucerne"}, {"image": "/CHÂU ÂU/Vịnh hẹp Geirangerfjord (Na Uy).jpg", "caption": "Vịnh hẹp Geirangerfjord, Na Uy", "alt": "Vịnh Geirangerfjord"}, {"image": "/CHÂU ÂU/cung điện versailles (pháp).jpg", "caption": "Cung điện Versailles, Pháp", "alt": "Cung điện Versailles"}, {"image": "/CHÂU ÂU/cối xoay gió hà lan.jpg", "caption": "Cối xay gió Hà Lan", "alt": "Cối xay gió Hà Lan"}, {"image": "/CHÂU ÂU/Đấu trường La Mã.jpg", "caption": "Đấu trường La Mã, Ý", "alt": "Đấu trường La Mã"}]}, "pricing": {"eyebrow": "Bảng Giá Vàng", "title": "Báo Giá Đặc Quyền", "subtitle": "Bay cùng Vietnam Airlines & Turkish Airlines 5★", "items": [{"title": "Tây Âu Hoa Lệ", "subtitle": "Đức – Hà Lan – Bỉ – Pháp – Thụy Sĩ – Ý", "old_price": "72.000.000 đ", "new_price": "64.900.000 đ", "tag": "Siêu VIP", "featured": false, "features": [{"text": "Trải nghiệm Siêu VIP"}, {"text": "Khách sạn 4★ trung tâm"}, {"text": "Bữa ăn cao cấp mỗi ngày"}, {"text": "Visa Schengen hỗ trợ 99%"}], "button_text": "Chọn hành trình", "button_url": "#lead"}, {"title": "Đông Âu Cổ Kính", "subtitle": "10 Ngày 9 Đêm", "old_price": "69.000.000 đ", "new_price": "63.900.000 đ", "tag": "Bán chạy nhất", "featured": true, "features": [{"text": "Prague & Lâu đài Disney"}, {"text": "Hallstatt thị trấn cổ tích"}, {"text": "Trưởng đoàn tận tâm 24/7"}, {"text": "Neuschwanstein huyền thoại"}], "button_text": "ĐĂNG KÝ NGAY", "button_url": "#lead"}, {"title": "Bắc Âu Hùng Vĩ", "subtitle": "11 Ngày Trải Nghiệm", "old_price": "112.000.000 đ", "new_price": "109.000.000 đ", "tag": "Premium", "featured": false, "features": [{"text": "Du thuyền Vịnh Na Uy"}, {"text": "Di sản thế giới nghẹt thở"}, {"text": "Dịch vụ 5 sao quốc tế"}, {"text": "Khách sạn 4★ chuẩn quốc tế"}], "button_text": "Chọn hành trình", "button_url": "#lead"}]}, "testimonials": {"eyebrow": "Khách Hàng Nói Gì", "title": "Hàng Nghìn Gia Đình Hạnh Phúc", "subtitle": "Những chia sẻ thật từ khách hàng đã đồng hành cùng Vietkite Travel.", "items": [{"stars": "★★★★★", "quote": "Chưa bao giờ đi Châu Âu mà thảnh thơi đến thế. Hướng dẫn viên của Vietkite quá nhiệt tình, khách sạn 4 sao trung tâm đúng như cam kết!", "avatar": "/CHÂU ÂU/Tháp Eiffel.jpg", "name": "Chị Minh Anh", "meta": "Hà Nội · Tour Tây Âu"}, {"stars": "★★★★★", "quote": "Gia đình tôi 5 người, lo lắng về visa nhưng Vietkite xử lý cực nhanh. Tour Đông Âu Prague cực kỳ ấn tượng, con gái mê Hallstatt lắm!", "avatar": "/CHÂU ÂU/5. Cầu Charles & Lâu đài Prague (Cộng hòa Séc).jpg", "name": "Anh Trọng Hiếu", "meta": "TP.HCM · Tour Đông Âu"}, {"stars": "★★★★★", "quote": "Du thuyền Bắc Âu là trải nghiệm không thể quên trong đời. Vietkite lo từng chi tiết nhỏ, tôi chỉ việc tận hưởng. Năm sau chắc chắn đăng ký tiếp!", "avatar": "/CHÂU ÂU/Vịnh hẹp Geirangerfjord (Na Uy).jpg", "name": "Chị Lan Phương", "meta": "Đà Nẵng · Tour Bắc Âu"}]}, "lead": {"eyebrow": "⚡ Chỉ còn đúng 3 suất giá khuyến mãi cuối cùng!", "title": "Nhận Ưu Đãi Giảm 7 Triệu", "subtitle": "Ưu đãi chỉ áp dụng cho 15 khách hàng đăng ký sớm nhất!", "deadline": "2026-12-31T23:59:59+07:00", "form": {"title": "Đăng Ký Tư Vấn Miễn Phí", "subtitle": "Điền thông tin, tư vấn viên Vietkite sẽ liên hệ để gửi lịch trình và báo giá chi tiết.", "name_label": "Họ và tên", "name_placeholder": "Nhập họ và tên", "phone_label": "Số điện thoại", "phone_placeholder": "Nhập số điện thoại", "email_label": "Email", "email_placeholder": "Nhập email nếu có", "tour_label": "Tuyến tour quan tâm", "tour_placeholder": "— Chọn tuyến tour bạn quan tâm —", "tour_options": [{"label": "Tây Âu Hoa Lệ (6 Nước) – 64.900.000đ", "value": "Tây Âu Hoa Lệ"}, {"label": "Đông Âu Cổ Kính (5 Nước) – 63.900.000đ", "value": "Đông Âu Cổ Kính"}, {"label": "Bắc Âu Hùng Vĩ (4 Nước) – 109.000.000đ", "value": "Bắc Âu Hùng Vĩ"}], "button_text": "NHẬN ƯU ĐÃI GIẢM 7 TRIỆU NGAY", "privacy_note": "Thông tin của bạn được bảo mật tuyệt đối"}}, "footer": {"logo": "https://vietkite.com.vn/wp-content/uploads/2024/12/logo-cty-canh-dieu-viet-vietkite.jpg", "logo_alt": "Vietkite Travel", "title": "Đồng hành cùng bạn trong mọi chuyến đi", "description": "Công ty TNHH TM DV Du Lịch Vietkite — đơn vị lữ hành chuyên nghiệp tổ chức tour trong và ngoài nước, teambuilding, visa và vé máy bay từ năm 2011.", "contact_title": "Liên hệ", "phone": "0912.992.447", "addresses": [{"text": "VP 1: 276 Nơ Trang Long, Phường Bình Thạnh, TP HCM"}, {"text": "VP 2: 160/25/31 Bùi Đình Túy, Phường Bình Thạnh, TP HCM"}], "email": "info@vietkite.com.vn", "hours": "Thứ 2–6: 8:30–17:30 | Thứ 7: 8:30–12:00", "tax_code": "0311304593", "website": "https://vietkite.com.vn", "website_label": "vietkite.com.vn", "copyright": "© 2026 VIETKITE TRAVEL. All Rights Reserved."}, "floating_contact": {"label": "Zalo", "url": "https://zalo.me/0912992447"}};
  const DATA_URL = '/data/site.json';

  const normText = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
  const cleanPath = (s) => {
    if (!s) return '';
    let v = String(s).trim().replace(/^url\(["']?/, '').replace(/["']?\)$/,'');
    try { v = decodeURI(v); } catch (_) {}
    try {
      const u = new URL(v, window.location.origin);
      v = u.pathname;
    } catch (_) {}
    return v.replace(/^https?:\/\/raw\.githubusercontent\.com\/vinhomessaigonparkvsgp\/chauau\/(main|refs\/heads\/main)/i, '')
      .replace(/^\/+/, '/')
      .replace(/%20/g, ' ');
  };
  const sameAsset = (a,b) => cleanPath(a) === cleanPath(b) || cleanPath(a).endsWith(cleanPath(b)) || cleanPath(b).endsWith(cleanPath(a));
  const q = (sel, root=document) => root.querySelector(sel);
  const qa = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const setText = (el, value) => { if (el && value !== undefined && value !== null) el.textContent = String(value); };
  const setAttr = (el, attr, value) => { if (el && value) el.setAttribute(attr, String(value)); };
  const setHref = (el, value) => setAttr(el, 'href', value);
  const setImg = (img, src, alt) => {
    if (!img || !src) return;
    img.setAttribute('src', src);
    img.removeAttribute('srcset');
    if (alt) img.setAttribute('alt', alt);
  };
  const setBg = (el, src) => {
    if (!el || !src) return;
    el.style.backgroundImage = `url("${src}")`;
  };
  const titleHtml = (title) => {
    const parts = String(title || '').split('|').map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2) return `<span class="hero-title-main">${escapeHtml(parts[0])}</span><span class="hero-title-gold text-gold">${escapeHtml(parts.slice(1).join(' '))}</span>`;
    return escapeHtml(String(title || ''));
  };
  const escapeHtml = (s) => String(s).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));

  function walkStrings(obj, prefix = '', out = []) {
    if (obj == null) return out;
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
      out.push([prefix, String(obj)]);
      return out;
    }
    if (Array.isArray(obj)) {
      obj.forEach((v,i) => walkStrings(v, `${prefix}[${i}]`, out));
      return out;
    }
    if (typeof obj === 'object') {
      Object.keys(obj).forEach(k => walkStrings(obj[k], prefix ? `${prefix}.${k}` : k, out));
    }
    return out;
  }
  function getByPath(obj, path) {
    if (!path) return undefined;
    let cur = obj;
    for (const part of path.replace(/\[(\d+)\]/g, '.$1').split('.')) {
      if (!part) continue;
      if (cur == null) return undefined;
      cur = cur[part];
    }
    return cur;
  }

  function replaceTextNodes(oldText, newText) {
    if (!oldText || newText == null || oldText === newText) return;
    const variants = new Set([oldText, normText(oldText)]);
    if (oldText.includes('|')) {
      variants.add(oldText.replace(/\|/g, ' '));
      variants.add(oldText.replace(/\|/g, '\n'));
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.tagName;
        if (['SCRIPT','STYLE','TEXTAREA','INPUT','SELECT','OPTION'].includes(tag)) return NodeFilter.FILTER_REJECT;
        const t = node.nodeValue;
        return t && normText(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      let txt = node.nodeValue;
      variants.forEach(v => {
        if (!v) return;
        if (txt.includes(v)) txt = txt.split(v).join(newText);
        else if (normText(txt) === normText(v)) txt = txt.replace(txt.trim(), newText);
      });
      node.nodeValue = txt;
    });
  }

  function replaceAssets(oldSrc, newSrc) {
    if (!oldSrc || !newSrc || oldSrc === newSrc) return;
    qa('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (sameAsset(src, oldSrc)) setImg(img, newSrc, img.getAttribute('alt'));
    });
    qa('[style]').forEach(el => {
      const st = el.getAttribute('style') || '';
      if (!/background/i.test(st)) return;
      if (sameAsset(st, oldSrc) || st.includes(oldSrc) || st.includes(encodeURI(oldSrc))) setBg(el, newSrc);
    });
  }

  function updateSeo(data) {
    if (!data.seo) return;
    document.title = data.seo.title || document.title;
    const meta = (selector, attr, value) => { const el = q(selector); if (el && value) el.setAttribute(attr, value); };
    meta('meta[name="description"]', 'content', data.seo.description);
    meta('meta[name="robots"]', 'content', data.seo.robots);
    meta('meta[property="og:title"]', 'content', data.seo.title);
    meta('meta[property="og:description"]', 'content', data.seo.description);
    meta('meta[property="og:site_name"]', 'content', data.seo.site_name);
    meta('meta[property="og:image"]', 'content', data.seo.og_image);
    meta('meta[property="og:url"]', 'content', data.seo.canonical);
    const canon = q('link[rel="canonical"]'); if (canon && data.seo.canonical) canon.href = data.seo.canonical;
  }
  function updateTheme(data) {
    if (!data.theme) return;
    const root = document.documentElement;
    const map = {
      gold: '--gold', gold_dark: '--gold-dark', cream: '--cream', background: '--dark', background_soft: '--dark2', accent: '--accent'
    };
    Object.entries(map).forEach(([k,css]) => { if (data.theme[k]) root.style.setProperty(css, data.theme[k]); });
  }

  function updateStructural(data) {
    // Brand / logo
    if (data.brand) {
      qa('img').forEach(img => {
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';
        if (/vietkite|logo/i.test(src + ' ' + alt)) setImg(img, data.brand.logo, data.brand.name);
      });
      // Logo text if present
      qa('a, .brand, .logo, footer h3').forEach(el => { if (normText(el.textContent) === normText(BASELINE.brand?.name)) setText(el, data.brand.name); });
    }

    // Navigation labels / links without rebuilding the menu.
    if (Array.isArray(data.navigation)) {
      const navLinks = qa('#nav-links a, nav a').filter(a => data.navigation.some(n => normText(a.textContent) === normText(getByPath(BASELINE, `navigation[${data.navigation.indexOf(n)}].label`)) || /^Đăng ký/i.test(a.textContent)));
      data.navigation.forEach((item, i) => {
        const old = BASELINE.navigation?.[i];
        qa('a').forEach(a => {
          if (old && normText(a.textContent) === normText(old.label)) { setText(a, item.label); setHref(a, item.url); }
        });
      });
    }

    // Hero
    if (data.hero) {
      setBg(q('#hero-bg'), data.hero.background_image);
      setText(q('.hero-badge'), data.hero.badge);
      const ht = q('#hero-title'); if (ht && data.hero.title) ht.innerHTML = titleHtml(data.hero.title);
      setText(q('#hero-content p') || q('#hero p'), data.hero.subtitle);
      const hBtns = qa('#hero a.btn-gold, #hero a.btn-outline, #hero-content a');
      (data.hero.buttons || []).forEach((b, i) => { if (hBtns[i]) { setText(hBtns[i], b.text); setHref(hBtns[i], b.url); } });
    }

    // About
    if (data.about) {
      const section = q('#experience') || q('section');
      if (section) {
        setText(q('.section-eyebrow, .eyebrow', section), data.about.eyebrow);
        const h2 = q('h2', section); if (h2) setText(h2, data.about.title);
        const ps = qa('p', section); if (ps[0]) ps[0].textContent = data.about.body;
        const imgs = qa('img', section); setImg(imgs[0], data.about.image_1, data.about.image_1_alt); setImg(imgs[1], data.about.image_2, data.about.image_2_alt);
      }
      qa('.stat-card').forEach((card, i) => {
        const st = data.about.stats?.[i]; if (!st) return;
        const txts = qa('*', card).filter(el => el.children.length === 0);
        if (txts[0]) setText(txts[0], st.number);
        if (txts[1]) setText(txts[1], st.label);
      });
    }

    // Tours
    if (data.tours) {
      const sec = q('#tours');
      if (sec) {
        const heads = qa('h2', sec); if (heads[0]) setText(heads[0], data.tours.title);
        const p = q('p', sec); if (p) setText(p, data.tours.subtitle);
      }
      qa('.tour-card').forEach((card, i) => {
        const t = data.tours.items?.[i]; if (!t) return;
        setImg(q('img', card), t.image, t.image_alt);
        const hs = qa('h3', card); if (hs[0]) setText(hs[0], t.title);
        const leaf = qa('span, p, li, div', card).filter(el => el.children.length === 0 && normText(el.textContent));
        [t.badge, t.category, t.country_count, t.route, ...(t.highlights||[]).map(x=>x.text), t.old_price, t.new_price, t.button_text].filter(Boolean).forEach((v, idx) => {
          if (leaf[idx]) setText(leaf[idx], v);
        });
        const a = q('a', card); if (a) { setText(a, t.button_text); setHref(a, t.button_url); }
      });
    }

    // Gallery
    if (data.gallery) {
      const sec = q('#gallery');
      if (sec) { const h2=q('h2',sec); if(h2) setText(h2,data.gallery.title); const p=q('p',sec); if(p) setText(p,data.gallery.subtitle); }
      qa('.gallery-item').forEach((item, i) => {
        const g = data.gallery.items?.[i]; if (!g) return;
        setImg(q('img', item), g.image, g.alt || g.caption);
        const cap = q('.gallery-caption', item) || qa('*', item).filter(el => el.children.length === 0 && normText(el.textContent)).pop();
        setText(cap, g.caption);
      });
    }

    // Pricing
    if (data.pricing) {
      const sec = q('#pricing');
      if (sec) { const h2=q('h2',sec); if(h2) setText(h2,data.pricing.title); const p=q('p',sec); if(p) setText(p,data.pricing.subtitle); }
      qa('.price-card').forEach((card, i) => {
        const p = data.pricing.items?.[i]; if (!p) return;
        const h3 = q('h3', card); if (h3) setText(h3, p.title);
        const a = q('a', card); if (a) { setText(a, p.button_text); setHref(a, p.button_url); }
      });
    }

    // Testimonials
    if (data.testimonials) {
      const sec = q('#customers');
      if (sec) { const h2=q('h2',sec); if(h2) setText(h2,data.testimonials.title); const p=q('p',sec); if(p) setText(p,data.testimonials.subtitle); }
      qa('.testimonial-card').forEach((card, i) => {
        const it = data.testimonials.items?.[i]; if (!it) return;
        setImg(q('img', card), it.avatar, it.name);
        const h3 = q('h3', card); if (h3) setText(h3, it.name);
      });
    }

    // Lead / form / footer / floating contact basic structural update
    if (data.lead) {
      const sec = q('#lead') || q('#contact') || qa('section').find(s => /Đăng Ký|Ưu Đãi|Tư Vấn/i.test(s.textContent));
      if (sec) { const h2=q('h2',sec); if(h2) setText(h2,data.lead.title); }
      if (data.lead.deadline) window.CMS_COUNTDOWN_DEADLINE = data.lead.deadline;
    }
    if (data.footer) {
      const ft = q('footer');
      if (ft) {
        setImg(q('img', ft), data.footer.logo, data.footer.logo_alt);
        const h = q('h2,h3,h4', ft); if (h) setText(h, data.footer.title);
      }
    }
    if (data.floating_contact) {
      qa('a').forEach(a => {
        const txt = normText(a.textContent), href = a.href || '';
        if (/zalo/i.test(txt + href)) { setText(a, data.floating_contact.label); setHref(a, data.floating_contact.url); }
      });
    }
  }

  function updateByBaselineMap(data) {
    // This keeps the old HTML structure; it only swaps old CMS strings/assets with edited CMS values.
    walkStrings(BASELINE).forEach(([path, oldValue]) => {
      const newValue = getByPath(data, path);
      if (newValue == null) return;
      const p = path.toLowerCase();
      if (/(image|logo|avatar|og_image)$/.test(p) || /background_image$/.test(p)) replaceAssets(oldValue, String(newValue));
      else replaceTextNodes(oldValue, String(newValue));
    });
  }

  async function init() {
    try {
      const res = await fetch(DATA_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('Cannot load ' + DATA_URL);
      const data = await res.json();
      updateSeo(data);
      updateTheme(data);
      updateStructural(data);
      updateByBaselineMap(data);
      document.documentElement.setAttribute('data-cms-ready', 'true');
    } catch (err) {
      console.warn('[CMS] Không load được data/site.json:', err);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
