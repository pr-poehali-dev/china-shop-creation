import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const categories = [
  'Все товары',
  'Декор для дома',
  'Посуда и кухня',
  'Украшения',
  'Одежда',
  'Электроника',
  'Красота и здоровье'
];

const products = [
  {
    id: 1,
    name: 'Китайский шелковый фонарь',
    price: 1999,
    originalPrice: 2999,
    image: '/img/b04789ce-e321-402e-9597-5a13f10ba12e.jpg',
    category: 'Декор для дома',
    rating: 4.8,
    reviews: 156,
    discount: 33,
    badge: 'Хит продаж'
  },
  {
    id: 2,
    name: 'Фарфоровый чайный сервиз',
    price: 3499,
    originalPrice: 4999,
    image: '/img/1b2bd61d-de18-4b91-80ca-c251c2bfed54.jpg',
    category: 'Посуда и кухня',
    rating: 4.9,
    reviews: 89,
    discount: 30,
    badge: 'Премиум'
  },
  {
    id: 3,
    name: 'Нефритовый браслет',
    price: 5999,
    originalPrice: 7999,
    image: '/img/1e323e8e-d13a-42c8-9ad3-f84b03911226.jpg',
    category: 'Украшения',
    rating: 4.7,
    reviews: 234,
    discount: 25,
    badge: 'Эксклюзив'
  },
  {
    id: 4,
    name: 'Бамбуковый чайник для церемонии',
    price: 2799,
    originalPrice: 3599,
    image: '/img/b04789ce-e321-402e-9597-5a13f10ba12e.jpg',
    category: 'Посуда и кухня',
    rating: 4.6,
    reviews: 67,
    discount: 22,
    badge: 'Новинка'
  },
  {
    id: 5,
    name: 'Китайский веер ручной работы',
    price: 899,
    originalPrice: 1299,
    image: '/img/1b2bd61d-de18-4b91-80ca-c251c2bfed54.jpg',
    category: 'Декор для дома',
    rating: 4.5,
    reviews: 123,
    discount: 31,
    badge: 'Скидка'
  },
  {
    id: 6,
    name: 'Каллиграфический набор',
    price: 1599,
    originalPrice: 2199,
    image: '/img/1e323e8e-d13a-42c8-9ad3-f84b03911226.jpg',
    category: 'Декор для дома',
    rating: 4.4,
    reviews: 45,
    discount: 27,
    badge: 'Традиция'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все товары');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Все товары' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                China Store
              </h1>
              <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                Товары из Китая
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Каталог</a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={18} className="mr-1" />
                Корзина
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Откройте мир аутентичных товаров
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя уникальные изделия, от традиционных ремесел до современных инноваций, 
            по непревзойденным ценам. Быстрая доставка и безопасные платежи.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg animate-scale-in">
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Начать покупки
          </Button>
        </div>
      </section>

      {/* Search and Filters */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Каталог товаров</h3>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white font-medium">
                        -{product.discount}%
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 font-medium">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-gray-700">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} отзывов)
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-red-500">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()} ₽
                    </span>
                  </div>

                  <Badge variant="outline" className="mb-4">
                    {product.category}
                  </Badge>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      onClick={() => addToCart(product.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold"
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Eye" size={18} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
              <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Контактная информация</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации или оформления заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-red-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@chinastore.ru</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Адрес</h4>
              <p className="text-gray-600">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-red-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600 text-sm">Доставляем по всей России за 7-14 дней</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-yellow-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600 text-sm">100% оригинальные товары с гарантией</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-green-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Безопасная оплата</h4>
              <p className="text-gray-600 text-sm">Защищенные платежи всеми способами</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600 text-sm">Консультации в любое время</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              China Store
            </h2>
            <p className="text-gray-400 mb-6">
              Ваш надежный партнер в мире китайских товаров
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2024 China Store. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}