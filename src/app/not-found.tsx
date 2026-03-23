import Link from "next/link";
import Button from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-8xl font-bold mb-4"
          style={{ color: "var(--primary-500)" }}
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ color: "var(--gray-800)" }}
        >
          Trang Không Tồn Tại
        </h2>
        <p className="mb-8" style={{ color: "var(--gray-500)" }}>
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di
          chuyển.
        </p>
        <Button href="/" variant="primary" size="lg">
          <Home size={18} />
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}
