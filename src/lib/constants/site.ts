const zaloOaId = process.env.NEXT_PUBLIC_ZALO_OA_ID?.trim() || "";
const defaultZaloPhone = "0941829179";
const zaloUrl = `https://zalo.me/${zaloOaId || defaultZaloPhone}`;

export const siteConfig = {
  name: "Nha Khoa Thu Mảnh",
  slogan: "Nụ cười tự tin - Sức khỏe trọn vẹn",
  description:
    "Nha Khoa Thu Mảnh - Nơi mang đến giải pháp chăm sóc răng miệng toàn diện với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm.",
  url: "https://nhakhoathumanh.com",
  phone: "0941 829 179",
  email: "nhakhoathumanh@gmail.com",
  address: "Số 11, Đường số 20, khu phố Hưng Thịnh, Đồng Nai",
  plusCode: "W3RG+CR2",
  googleRating: "4.7/5",
  workingHours: "Cả tuần, 24 giờ mỗi ngày (24/7)",
  zaloOaId,
  zaloUrl,
  social: {
    facebook: "https://facebook.com/nhakhoathumanh",
    instagram: "https://instagram.com/nhakhoathumanh",
    youtube: "https://youtube.com/nhakhoathumanh",
    zalo: zaloUrl,
  },
} as const;

export const navLinks = [
  { name: "Trang Chủ", href: "/" },
  { name: "Dịch Vụ", href: "/dich-vu" },
  { name: "Giới Thiệu", href: "/gioi-thieu" },
  { name: "Đặt Lịch", href: "/dat-lich" },
  { name: "Liên Hệ", href: "/lien-he" },
] as const;

export const stats = [
  { value: "15+", label: "Năm Kinh Nghiệm" },
  { value: "3,000+", label: "Khách Hàng Hài Lòng" },
  { value: "1", label: "Bác Sĩ Giàu Kinh Nghiệm" },
  { value: "100%", label: "Trang Thiết Bị Hiện Đại" },
] as const;

export const services = [
  {
    id: "tay-trang-rang",
    icon: "Sparkles",
    title: "Tẩy Trắng Răng",
    description: "Công nghệ tẩy trắng hiện đại, an toàn và hiệu quả",
    price: "Từ 2.000.000đ",
  },
  {
    id: "nieng-rang",
    icon: "SmilePlus",
    title: "Niềng Răng",
    description: "Niềng răng trong suốt Invisalign, mang lại nụ cười hoàn hảo",
    price: "Từ 15.000.000đ",
  },
  {
    id: "cay-ghep-implant",
    icon: "Puzzle",
    title: "Cấy Ghép Implant",
    description: "Giải pháp phục hồi răng mất vĩnh viễn, bền đẹp tự nhiên",
    price: "Từ 18.000.000đ/răng",
  },
  {
    id: "boc-rang-su",
    icon: "Crown",
    title: "Bọc Răng Sứ",
    description: "Răng sứ cao cấp, thẩm mỹ cao, độ bền vượt trội",
    price: "Từ 3.000.000đ/răng",
  },
] as const;

export const detailedServices = [
  {
    id: "tay-trang-rang",
    icon: "Sparkles",
    title: "Tẩy Trắng Răng",
    description:
      "Công nghệ tẩy trắng răng hiện đại Zoom Whitening, mang lại hàm răng trắng sáng tự nhiên chỉ sau 1 giờ.",
    price: "Từ 2.000.000đ",
    features: [
      "Sử dụng công nghệ ánh sáng lạnh",
      "Trắng sáng lên 3-5 tông",
      "Kết quả thấy ngay sau 1 lần điều trị",
      "An toàn, không làm tổn thương men răng",
    ],
  },
  {
    id: "nieng-rang",
    icon: "SmilePlus",
    title: "Niềng Răng",
    description:
      "Giải pháp chỉnh nha với nhiều phương pháp: niềng răng mắc cài kim loại, mắc cài sứ, niềng răng trong suốt Invisalign.",
    price: "Từ 15.000.000đ",
    features: [
      "Mắc cài kim loại tự động",
      "Mắc cài sứ thẩm mỹ",
      "Niềng răng trong suốt Invisalign",
      "Tư vấn phương án phù hợp nhất",
    ],
  },
  {
    id: "cay-ghep-implant",
    icon: "Shield",
    title: "Cấy Ghép Implant",
    description:
      "Giải pháp phục hồi răng mất vĩnh viễn, sử dụng trụ Implant từ Hàn Quốc, Mỹ, Thụy Sĩ chính hãng.",
    price: "Từ 18.000.000đ/răng",
    features: [
      "Implant Straumann (Thụy Sĩ)",
      "Implant Osstem (Hàn Quốc)",
      "Implant Nobel Biocare (Mỹ)",
      "Bảo hành dài hạn 10 năm",
    ],
  },
  {
    id: "boc-rang-su",
    icon: "Crown",
    title: "Bọc Răng Sứ",
    description:
      "Bọc răng sứ thẩm mỹ cao cấp: Răng sứ Cercon, Emax, Lava giúp hàm răng đều đẹp, trắng sáng tự nhiên.",
    price: "Từ 3.000.000đ/răng",
    features: [
      "Răng sứ Zirconia Cercon",
      "Răng sứ Emax (Đức)",
      "Răng sứ 3M Lava Plus",
      "Thẩm mỹ cao, độ bền vượt trội",
    ],
  },
  {
    id: "nho-rang-khon",
    icon: "Scissors",
    title: "Nhổ Răng Khôn",
    description:
      "Nhổ răng khôn an toàn, không đau với công nghệ Piezotome siêu âm hiện đại, hồi phục nhanh.",
    price: "Từ 1.000.000đ/răng",
    features: [
      "Công nghệ siêu âm Piezotome",
      "Chụp X-quang 3D ConeBeam CT",
      "Không đau, ít sưng chảy máu",
      "Hồi phục nhanh chóng",
    ],
  },
  {
    id: "dieu-tri-tuy",
    icon: "Heart",
    title: "Điều Trị Tủy",
    description:
      "Điều trị tủy răng bằng máy nội nha X-Smart hiện đại, làm sạch triệt để, không đau, hiệu quả cao.",
    price: "Từ 800.000đ/răng",
    features: [
      "Máy nội nha X-Smart Plus hiện đại",
      "Định vị chóp bằng máy điện tử",
      "Không đau, an toàn tuyệt đối",
      "Bảo tồn răng tối đa",
    ],
  },
  {
    id: "dieu-tri-nuou",
    icon: "ShieldCheck",
    title: "Điều Trị Nướu",
    description:
      "Điều trị viêm nướu, viêm nha chu, cạo vôi răng bằng sóng siêu âm, bảo vệ sức khỏe răng miệng.",
    price: "Từ 500.000đ",
    features: [
      "Cạo vôi răng siêu âm không ê buốt",
      "Điều trị viêm nướu, chảy máu chân răng",
      "Điều trị viêm nha chu chuyên sâu",
      "Hướng dẫn chăm sóc răng miệng",
    ],
  },
  {
    id: "nha-khoa-tre-em",
    icon: "Smile",
    title: "Nha Khoa Trẻ Em",
    description:
      "Chăm sóc răng miệng cho trẻ em: nhổ răng sữa không đau, trám răng, bôi vecni fluor ngừa sâu răng.",
    price: "Từ 200.000đ",
    features: [
      "Khám và tư vấn răng miệng cho bé",
      "Trám bít hố rãnh ngừa sâu răng",
      "Bôi Fluor chống sâu răng",
      "Nhổ răng sữa nhẹ nhàng, không đau",
    ],
  },
] as const;

export const whyChooseUs = [
  {
    icon: "UserCheck",
    title: "Bác Sĩ Chuyên Nghiệp",
    description:
      "Bác sĩ Thu Mảnh với hơn 15 năm kinh nghiệm, tận tâm chăm sóc từng khách hàng",
  },
  {
    icon: "MonitorCheck",
    title: "Trang Thiết Bị Hiện Đại",
    description:
      "Đầu tư công nghệ tiên tiến nhất từ các thương hiệu uy tín trên thế giới",
  },
  {
    icon: "HeartHandshake",
    title: "Dịch Vụ Tận Tâm",
    description: "Luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu",
  },
] as const;

export const treatmentProcess = [
  {
    step: "01",
    title: "Đặt Lịch Hẹn",
    description: "Đặt lịch qua website hoặc hotline",
  },
  {
    step: "02",
    title: "Thăm Khám",
    description: "Bác sĩ kiểm tra và tư vấn phương án",
  },
  {
    step: "03",
    title: "Điều Trị",
    description: "Thực hiện điều trị theo kế hoạch",
  },
  {
    step: "04",
    title: "Theo Dõi",
    description: "Chăm sóc và theo dõi sau điều trị",
  },
] as const;

export const testimonials = [
  {
    name: "Lê Đăng Khoa",
    rating: 5,
    content:
      '"Dịch vụ tuyệt vời, bác sĩ rất tận tâm. Tôi rất hài lòng với kết quả niềng răng tại đây."',
  },
  {
    name: "Lê Anh Tuấn",
    rating: 5,
    content:
      '"Phòng khám sạch sẽ, nhân viên thân thiện. Tôi đã làm implant ở đây và rất hài lòng."',
  },
  {
    name: "Lục Đan Trân",
    rating: 5,
    content:
      '"Giá cả hợp lý, chất lượng tốt. Tôi sẽ giới thiệu cho bạn bè và người thân."',
  },
] as const;
