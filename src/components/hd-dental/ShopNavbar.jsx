import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, LogOut, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSiteAuth } from "@/context/SiteAuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ShopNavbar() {
  const { user, ready, skipped, logout } = useSiteAuth();
  const { itemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const showUserMenu = ready && !skipped;
  const showCartAction = ready && Boolean(user);

  const goToLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="HD Dental Logo"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain origin-left scale-125 md:scale-150 transition-transform"
          />
        </Link>

        <div className="flex items-center gap-3">
          {showCartAction && (
            <Link
              to="/gio-hang"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          )}

          {showUserMenu && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Tài khoản người dùng"
                >
                  <User className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-body">
                  {user ? user.name || user.email : "Tài khoản"}
                </DropdownMenuLabel>
                {user?.email ? (
                  <DropdownMenuLabel className="pt-0 text-xs font-normal text-muted-foreground">
                    {user.email}
                  </DropdownMenuLabel>
                ) : null}
                <DropdownMenuSeparator />

                {user ? (
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                    Đăng xuất
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={goToLogin}>
                    <LogIn className="w-4 h-4" />
                    Đăng nhập
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
