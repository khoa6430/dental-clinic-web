export const siteConfig = {
  name: "Nha Khoa Thu Mảnh",
  slogan: "Nụ cười tự tin - Sức khỏe trọn vẹn",
  description:
    "Nha Khoa Thu Mảnh - Nơi mang đến giải pháp chăm sóc răng miệng toàn diện với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm.",
  url: "https://nhakhoathumanh.vn",
  phone: "0901 234 567",
  email: "nhakhoathumanh@gmail.com",
  address: "123 Đường Lý Thường Kiệt, Quận 10, TP. Hồ Chí Minh",
  workingHours: "Thứ 2 - Chủ Nhật: 8:00 - 20:00",
  social: {
    facebook: "https://facebook.com/nhakhoathumanh",
    instagram: "https://instagram.com/nhakhoathumanh",
    youtube: "https://youtube.com/nhakhoathumanh",
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
    description:
      "Niềng răng trong suốt Invisalign, mang lại nụ cười hoàn hảo",
    price: "Từ 15.000.000đ",
  },
  {
    id: "cay-ghep-implant",
    icon: "Puzzle",
    title: "Cấy Ghép Implant",
    description:
      "Giải pháp phục hồi răng mất vĩnh viễn, bền đẹp tự nhiên",
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
    description:
      "Luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu",
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
    name: "Nguyễn Thị Lan",
    rating: 5,
    content:
      '"Dịch vụ tuyệt vời, bác sĩ rất tận tâm. Tôi rất hài lòng với kết quả niềng răng tại đây."',
  },
  {
    name: "Trần Văn Minh",
    rating: 5,
    content:
      '"Phòng khám sạch sẽ, nhân viên thân thiện. Tôi đã làm implant ở đây và rất hài lòng."',
  },
  {
    name: "Lê Thị Hương",
    rating: 5,
    content:
      '"Giá cả hợp lý, chất lượng tốt. Tôi sẽ giới thiệu cho bạn bè và người thân."',
  },
] as const;
