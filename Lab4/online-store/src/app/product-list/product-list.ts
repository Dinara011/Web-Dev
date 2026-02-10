import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256Gb',
      description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
      price: 728562 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p35/p4d/29468313.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h6f/86319874408478.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-titan-113138420/'
    },
    {
      id: 2,
      name: 'SPLAT зубная паста Отбеливание Плюс 100 мл',
      description: 'Зубная паста Professional Отбеливание Плюс со фтором ухаживает за зубами и безопасно отбеливает их благодаря уникальному чистящему комплексу Sp.White System. Натуральный фермент папаин и высокомолекулярный компонент полидон эффективно расщепляют налет, способствуют сохранению белизны. Ионы калия снижают повышенную чувствительность зубов. Фторид-ионы эффективно защищают от кариеса.',
      price: 1403,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/86536768389150.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/86536768389150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h8d/86536768421918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/haf/86536768454686.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-otbelivanie-pljus-100-ml-100194785/?c=396430100'
    },
    {
      id: 3,
      name: 'Смарт-очки 30380663 черный',
      description: 'Смарт-очки с Камерой элегантным дизайном и чёрными затемнёнными линзами. Защищают глаза от солнца и добавляют стиль в любой образ, сочетая в себе практичность и современные технологии.',
      price: 17884,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p79/59380369.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p79/59380369.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pc7/59380371.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-ochki-30380663-chernyi-144305943/?c=396430100'
    },
    {
      id: 4,
      name: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      description: 'Умная колонка Яндекс. Станция Лайт 2 фиолетового цвета ориентирована на детей. Она использует нейросеть YandexGPT, поэтому может отвечать на любые вопросы, находить информацию, рассказывать сказки и включать музыку по настроению. Ассистент реагирует на эмоции, по интонации определяет, в каком настроении находится ребенок.',
      price: 34848,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=396430100'
    },
    {
      id: 5,
      name: 'AirPods Pro 2nd Gen',
      description: 'Наушники с активным шумоподавлением Type-C.',
      price: 109000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84108189696030.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113677582/'
    },
    {
      id: 6,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 571828,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
    
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=396430100'
    },
    {
      id: 7,
      name: 'Клавиатура DARK PROJECT ALU87B Celestial фиолетовый',
      description: 'Механическая TKL-клавиатура для тех, кто ценит точность, премиальные материалы и максимальный комфорт. ALU87 Celestial сочетает абсолютно бесшумные переключатели и продвинутую шумоизоляцию, создавая ощущение печати «в воздухе».',
      price: 51339,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p85/59005329.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p85/59005329.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/p82/59005331.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dark-project-alu87b-celestial-fioletovyi-142873651/?c=396430100'
    },
    {
      id: 8,
      name: 'Блендер погружной Slaouwo HB-2075 черный',
      description: 'огружной блендер Slaouwo HB-2075 — мощный и универсальный помощник на вашей кухне, который сочетает в себе высокую производительность и удобство использования. С его помощью вы сможете легко готовить смузи, пюре и другие блюда.',
      price: 7299,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pe9/66997264.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/blender-pogruzhnoi-slaouwo-hb-2075-chernyi-108151055/?c=396430100'
    },
    {
      id: 9,
      name: 'Apple Watch Series 9',
      description: 'Умные часы для здоровья и спорта.',
      price: 195000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-temno-sinii-temno-sinii-113398437/'
    },
    {
      id: 10,
      name: 'Игровое кресло Sport&Fitness SFBRFRGC14Combo8, черный, красный',
      description: 'Игровое кресло и гарнитура ULTRA-S — это комплект, который превратит ваш рабочий или игровой уголок в зону максимального комфорта и полного погружения. Кресло выполнено из прочной экокожи, а сиденье состоит из слоя латекса и губки, что дарит мягкость и поддержку на протяжении всего дня. Оно отлично подходит как для учёбы и работы, так и для длительных игровых сессий',
      price: 37900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pd0/59950050.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/pd0/59950054.jpg?format=gallery-medium',
       'https://resources.cdn-kaspi.kz/img/m/p/p54/pd0/59950051.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lego-technic-42096-porsche-911-rsr-belyi-100295171/'
    }
  ];

  shareProduct(platform: string, product: Product) {
    const productUrl = encodeURIComponent(product.link);
    const message = encodeURIComponent(`Қарашы мынаны: ${product.name}`);
    let link = '';

    if (platform === 'whatsapp') {
      link = `https://wa.me/?text=${message} ${productUrl}`;
    } else if (platform === 'telegram') {
      link = `https://t.me/share/url?url=${productUrl}&text=${message}`;
    }

    window.open(link, '_blank');
  }

  changeImage(product: Product, img: string) {
    product.image = img;
  }
  
}