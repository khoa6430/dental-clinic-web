import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-foreground">
          Trang Không Tồn Tại
        </h2>
        <p className="mb-8 text-muted-foreground">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di
          chuyển.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <Home size={18} />
            Về Trang Chủ
          </Link>
        </Button>
      </div>
    </div>
  );
}
