import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Star, Clock, Heart, Bell, User, ChevronDown, IceCreamBowl as Bowl, Utensils as UtensilsCrossed, Soup, Coffee, Beef, Fish, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/theme-provider';

// Import pages
import UserProfile from '@/pages/user/profile';
import UserBookmarks from '@/pages/user/bookmarks';
import UserReviews from '@/pages/user/reviews';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ForgotPassword from '@/pages/auth/forgot-password';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/profile" element={<Layout><UserProfile /></Layout>} />
            <Route path="/bookmarks" element={<Layout><UserBookmarks /></Layout>} />
            <Route path="/reviews" element={<Layout><UserReviews /></Layout>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-primary">
                VietFood
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/restaurants" className="text-foreground/80 hover:text-foreground">
                  Nhà Hàng
                </Link>
                <Link to="/dishes" className="text-foreground/80 hover:text-foreground">
                  Món Ăn
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground">
                    Thêm <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Đánh Giá Cao</DropdownMenuItem>
                    <DropdownMenuItem>Địa Điểm Mới</DropdownMenuItem>
                    <DropdownMenuItem>Gần Đây</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" size="icon" onClick={() => navigate('/notifications')}>
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => navigate('/bookmarks')}>
                    <Heart className="h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => navigate('/profile')}>
                        Hồ sơ
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/reviews')}>
                        Đánh giá của tôi
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/bookmarks')}>
                        Đã lưu
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/settings')}>
                        Cài đặt
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => {
                        logout();
                        navigate('/login');
                      }}>
                        Đăng xuất
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate('/login')}>
                      Đăng nhập
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/register')}>
                      Đăng ký
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Search */}
      <div className="bg-[url('https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-6 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-center mb-6">Khám Phá Ẩm Thực Việt Nam</h1>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input 
                  placeholder="Tìm nhà hàng, món ăn..."
                  className="w-full"
                />
              </div>
              <div className="w-48">
                <Input 
                  placeholder="Địa điểm"
                  className="w-full"
                  icon={<MapPin className="h-4 w-4" />}
                />
              </div>
              <Button className="bg-primary">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button variant="outline" size="sm">
              <Star className="h-4 w-4 mr-1" /> Đánh Giá Cao
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-1" /> Đang Mở Cửa
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button variant="outline" size="sm">Buffet</Button>
            <Button variant="outline" size="sm">Ăn Vặt</Button>
            <Button variant="outline" size="sm">Giao Hàng</Button>
            <Button variant="outline" size="sm">Mang Về</Button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Khám Phá Món Ăn</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Phở & Bún', icon: Bowl },
            { name: 'Cơm', icon: UtensilsCrossed },
            { name: 'Bánh Mì', icon: Beef },
            { name: 'Hải Sản', icon: Fish },
            { name: 'Cháo', icon: Soup },
            { name: 'Cà Phê', icon: Coffee },
          ].map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2"
              onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
            >
              <category.icon className="h-8 w-8" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Restaurants */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Nhà Hàng Nổi Bật</h2>
          <Button variant="link" onClick={() => navigate('/restaurants')}>Xem Tất Cả</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Phở Hà Nội', type: 'Phở', rating: 4.8 },
            { name: 'Bún Chả 29', type: 'Bún Chả', rating: 4.6 },
            { name: 'Cơm Tấm Sài Gòn', type: 'Cơm', rating: 4.7 },
            { name: 'Bánh Mì Huế', type: 'Bánh Mì', rating: 4.5 },
          ].map((restaurant) => (
            <div 
              key={restaurant.name} 
              className="group cursor-pointer"
              onClick={() => navigate(`/restaurant/${restaurant.name.toLowerCase().replace(/ /g, '-')}`)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-card text-card-foreground">
                    <Clock className="h-3 w-3 mr-1" /> 15-25 phút
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold mb-1">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  {restaurant.rating}
                </span>
                <span>•</span>
                <span>$$</span>
                <span>•</span>
                <span>{restaurant.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collections */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Bộ Sưu Tập Đặc Sắc</h2>
            <Button variant="link" onClick={() => navigate('/collections')}>Xem Tất Cả</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Phở Ngon Hà Nội',
              'Món Ngon Miền Trung',
              'Đặc Sản Sài Gòn',
            ].map((collection) => (
              <div
                key={collection}
                className="relative h-[200px] rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/collection/${collection.toLowerCase().replace(/ /g, '-')}`)}
              >
                <img
                  src="https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={collection}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">{collection}</h3>
                    <p className="text-sm text-white/80">12 Địa Điểm</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;