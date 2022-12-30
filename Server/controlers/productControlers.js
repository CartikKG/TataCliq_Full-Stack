const Post=require('../models/product.model');
// const array=[
//     {
//       "id": "1",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013762626_437Wx649H_202212040916001.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Rust Derby Shoes",
//       "strikedprice": "1647",
//       "price": "1497",
//       "product_type": "casual"
//     },
//     {
//       "id": "2",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013746697_437Wx649H_202207100049231.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Cashew Brown Derby Shoes",
//       "strikedprice": "1731",
//       "price": "1574",
//       "product_type": "casual"
//     },
//     {
//       "id": "3",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015182916_437Wx649H_202211051717151.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Tan Floater Sandals",
//       "strikedprice": "1429",
//       "price": "1299",
//       "product_type": "sandals & floater"
//     },
//     {
//       "id": "4",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013746688_437Wx649H_202207100049131.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Black Boat Shoes",
//       "strikedprice": "2197",
//       "price": "1997",
//       "product_type": "casual"
//     },
//     {
//       "id": "5",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013490891_437Wx649H_202212040917201.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Brown Boat Shoes",
//       "strikedprice": "2527",
//       "price": "2297",
//       "product_type": "casual"
//     },
//     {
//       "id": "6",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013490878_437Wx649H_202212040916001.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Black Casual Boots",
//       "strikedprice": "2582",
//       "price": "2347",
//       "product_type": "boots"
//     },
//     {
//       "id": "7",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014346838_437Wx649H_202209062200001.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Brown Floater Sandals",
//       "strikedprice": "1427",
//       "price": "1297",
//       "product_type": "sandals & floater"
//     },
//     {
//       "id": "8",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000012548644_437Wx649H_202203221240481.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Camel Outdoor Shoes",
//       "strikedprice": "2197",
//       "price": "1997",
//       "product_type": "sports shoes"
//     },
//     {
//       "id": "9",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013285892_437Wx649H_202205291522551.jpeg",
//       "brand": "Woodland",
//       "name": "Woodland Men's Khaki Floater Sandals",
//       "strikedprice": "1427",
//       "price": "1297",
//       "product_type": "sandals & floater"
//     },
//     {
//       "id": "10",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/3oeCeDi",
//       "brand": "Woodland",
//       "name": "Woodland Men's Tan Boat Shoes",
//       "strikedprice": "2527",
//       "price": "2297",
//       "product_type": "casual"
//     },
//     {
//       "id": "11",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/3mmbZs7",
//       "brand": "Woodland",
//       "name": "Woodland Men's Khaki Outdoor Shoes",
//       "strikedprice": "2197",
//       "price": "1997",
//       "product_type": "sports shoes"
//     },
//     {
//       "id": "12",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/3CQhNAz",
//       "brand": "Woodland",
//       "name": "Woodland Men's Navy Casual Sneakers",
//       "strikedprice": "1922",
//       "price": "1747",
//       "product_type": "sneakers"
//     },
//     {
//       "id": "13",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/39Fiss6",
//       "brand": "U.S. Polo Assn",
//       "name": "U.S. Polo Assn. Men's ATLAS2.0 Grey Casual Sneakers",
//       "strikedprice": "3541",
//       "price": "3219",
//       "product_type": "sneakers"
//     },
//     {
//       "id": "14",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/3uezDKw",
//       "brand": "U.S. Polo Assn",
//       "name": "U.S. Polo Assn. Men's XYLON2.0 Grey Casual Sneakers",
//       "strikedprice": "3959",
//       "price": "3599",
//       "product_type": "sneakers"
//     },
//     {
//       "id": "15",
//       "department": "footwear",
//       "category": "men",
//       "img": "https://bit.ly/3zI7aO9",
//       "brand": "U.S. Polo Assn",
//       "name": "U.S. Polo Assn. Men's GAZETTE2.0 Off White Casual Sneakers",
//       "strikedprice": "3959",
//       "price": "3599",
//       "product_type": "sneakers"
//     },
//     {
//       "id": "16",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/2XW00ZG",
//       "brand": "samsung",
//       "name": "Samsung Galaxy A03s 32 GB (Blue) 3 GB RAM, Dual SIM 4G",
//       "strikedprice": "12649",
//       "price": "11499",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "17",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3CQk4f5",
//       "brand": "nokia",
//       "name": "Nokia C20 Plus 32 GB (Blue) 3 GB RAM, Dual SIM 4G",
//       "strikedprice": "10967",
//       "price": "9970",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "18",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3zNzjUj",
//       "brand": "realme",
//       "name": "realme GT 128 GB (Dashing Blue) 8 GB RAM, Dual SIM 5G",
//       "strikedprice": "41799",
//       "price": "37999",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "19",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/2Wjrat1",
//       "brand": "vivo",
//       "name": "Vivo Y53s 128 GB (Fantastic Rainbow) 8 GB RAM, Dual SIM 4G",
//       "strikedprice": "21394",
//       "price": "19449",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "20",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3kMtMck",
//       "brand": "apple",
//       "name": "Apple iPhone 11 (64GB) - Green",
//       "strikedprice": "54890",
//       "price": "49900",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "21",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3ig2wky",
//       "brand": "realme",
//       "name": "realme GT Master Edition 256 GB (Voyager Grey) 8 GB RAM, Dual SIM 5G",
//       "strikedprice": "32996",
//       "price": "29996",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "22",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3EXGw84",
//       "brand": "vivo",
//       "name": "Vivo Y12G 32 GB (Phantom Black) 3 GB RAM, Dual SIM 4G",
//       "strikedprice": "11935",
//       "price": "10850",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "23",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/2ZCNy1L",
//       "brand": "oppo",
//       "name": "OPPO Reno 6 128 GB (Aurora) 8 GB RAM, Dual SIM 5G",
//       "strikedprice": "32978",
//       "price": "29980",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "24",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/2ZCNE9D",
//       "brand": "samsung",
//       "name": "Samsung Galaxy Z Flip3 256 GB (Cream) 8 GB RAM, Dual SIM 5G",
//       "strikedprice": "97899",
//       "price": "88999",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "25",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/39Gifoq",
//       "brand": "oneplus",
//       "name": "OnePlus 9 256 GB (Winter Mist) 12 GB RAM, Dual SIM 5G",
//       "strikedprice": "56089",
//       "price": "50990",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "26",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/3CRXF0Z",
//       "brand": "xiaomi",
//       "name": "Xiaomi Redmi 9A 32 GB (Nature Green) 2 GB RAM, Dual SIM 4G",
//       "strikedprice": "8303",
//       "price": "7548",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "27",
//       "department": "electronics",
//       "category": "mobile phones",
//       "img": "https://bit.ly/39IZ7X6",
//       "brand": "oneplus",
//       "name": "OnePlus 9R 128 GB (Lake Blue) 8 GB RAM, Dual SIM 5G",
//       "strikedprice": "43999",
//       "price": "39999",
//       "product_type": "smartphones"
//     },
//     {
//       "id": "28",
//       "department": "beauty & grooming",
//       "category": "bath,body & hygiene",
//       "img": "https://bit.ly/3EV3w7v",
//       "brand": "pears",
//       "name": "Pears Pure & Gentle Body Wash with Glycerine & Natural Oils - 500 ml",
//       "strikedprice": "384",
//       "price": "349",
//       "product_type": "body care"
//     },
//     {
//       "id": "29",
//       "department": "beauty & grooming",
//       "category": "bath,body & hygiene",
//       "img": "https://bit.ly/3AOXKC2",
//       "brand": "mCaffeine",
//       "name": "mCaffeine Naked & Raw Tan Removal Coffee Body Scrub - 100 gm",
//       "strikedprice": "468",
//       "price": "425",
//       "product_type": "face care"
//     },
//     {
//       "id": "30",
//       "department": "beauty & grooming",
//       "category": "bath,body & hygiene",
//       "img": "https://bit.ly/3CRxxDj",
//       "brand": "L'OCCITANE",
//       "name": "L'OCCITANE Savon Gourmand Almonds Delicious Soap 50 gm (Unisex)",
//       "strikedprice": "550",
//       "price": "500",
//       "product_type": "Bar soap"
//     },
//     {
//       "id": "31",
//       "department": "beauty & grooming",
//       "category": "fragrances & perfumes",
//       "img": "https://bit.ly/3kJxFyu",
//       "brand": "Titan",
//       "name": "Skinn by Titan Escapade Country Road Eau de Perfum for Men - 100 ml",
//       "strikedprice": "2635",
//       "price": "2395",
//       "product_type": "fragrances"
//     },
//     {
//       "id": "32",
//       "department": "beauty & grooming",
//       "category": "fragrances & perfumes",
//       "img": "https://bit.ly/3EQAPZk",
//       "brand": "Studiowest",
//       "name": "Studiowest Ibiza Power by Westside Perfume Body Spray For Men - 100gm",
//       "strikedprice": "248",
//       "price": "225",
//       "product_type": "fragrances"
//     },
//     {
//       "id": "33",
//       "department": "beauty & grooming",
//       "category": "fragrances & perfumes",
//       "img": "https://bit.ly/3kJS5aL",
//       "brand": "Nautica",
//       "name": "Nautica Voyage Sport Eau de Toilette for Men - 100 ml",
//       "strikedprice": "2349",
//       "price": "2135",
//       "product_type": "fragrances"
//     },
//     {
//       "id": "34",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/2Y5qE2C",
//       "brand": "Mamaearth",
//       "name": "Mamaearth Anti Hair Fall Spa Range with Onion Hair Oil + Onion Shampoo + Onion Conditioner - 550 ml",
//       "strikedprice": "1207",
//       "price": "1097",
//       "product_type": "shampoo & conditioner"
//     },
//     {
//       "id": "35",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3EWERiU",
//       "brand": "Biotique",
//       "name": "Biotique Bio Neem Margosa Anti - Dandruff Shampoo & Conditioner - 340 ml",
//       "strikedprice": "296",
//       "price": "269",
//       "product_type": "shampoo & conditioner"
//     },
//     {
//       "id": "36",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3uiTtEq",
//       "brand": "Nat Habit",
//       "name": "Nat Habit Soybean Methi Summer Hair Oil Rough Dry Damage Repair - 200 ml",
//       "strikedprice": "560",
//       "price": "509",
//       "product_type": "shampoo & conditioner"
//     },
//     {
//       "id": "37",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3zM7Ylo",
//       "brand": "Keratherapy",
//       "name": "Keratherapy Keratin Infused Moisture Shampoo - 300 ml",
//       "strikedprice": "1590",
//       "price": "1445",
//       "product_type": "shampoo & conditioner"
//     },
//     {
//       "id": "38",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3idwBkG",
//       "brand": "Wishcare",
//       "name": "Wishcare Argan Biotin Shampoo + Argan Vanilla Conditioner - 600 ml",
//       "strikedprice": "879",
//       "price": "799",
//       "product_type": "shampoo & conditioner"
//     },
//     {
//       "id": "39",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3zNeTKQ",
//       "brand": "Revlon",
//       "name": "Revlon 24HR Kajal Intense Black - 0.35 gm",
//       "strikedprice": "494",
//       "price": "449",
//       "product_type": "eye"
//     },
//     {
//       "id": "40",
//       "department": "beauty & grooming",
//       "category": "hair",
//       "img": "https://bit.ly/3COVewb",
//       "brand": "Faces Canada",
//       "name": "Faces Canada Ultimate Pro HD Mini Whopper Lashes Mascara 5 gm",
//       "strikedprice": "725",
//       "price": "659",
//       "product_type": "eye"
//     },
//     {
//       "id": "41",
//       "department": "beauty & grooming",
//       "category": "",
//       "img": "https://bit.ly/3ujTIz5",
//       "brand": "Makeup Revolution",
//       "name": "Makeup Revolution Reloaded Combo III - 30 gm",
//       "strikedprice": "1155",
//       "price": "1050",
//       "product_type": "eye"
//     },
//     {
//       "id": "42",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3AKeydg",
//       "brand": "HP",
//       "name": "HP Laptop 15s-fq2071TU i5 11th Gen 8GB 512GBSSD+32GBOptane 15.6 inch W10+MSO INT Graphics Jet Black",
//       "strikedprice": "59390",
//       "price": "53991",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "43",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3kTZu7D",
//       "brand": "Lenovo",
//       "name": "Lenovo IdeaPad Slim 3 2021 Thin&amp;Light 82KT00BXIN Ryzen 5 5500U 8GB 512GBSSD 14 in W10H+MSO INT Grey",
//       "strikedprice": "56236",
//       "price": "51124",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "44",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3B34JHL",
//       "brand": "Apple",
//       "name": "Apple MacBook Air MGN63HN/A M1 chip|8 GB|256 GB SSD|13.3 inch|Mac OS|Integrated Graphics|Space Grey",
//       "strikedprice": "96784",
//       "price": "87985",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "45",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3F2avLM",
//       "brand": "Dell",
//       "name": "Dell Inspiron 5301 Thin&amp;Light Laptop D560378WIN9S i5|11thGen|8GB|512GBSSD|13.3in|W10H+MSO|INT|Silver",
//       "strikedprice": "67749",
//       "price": "61590",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "46",
//       "department": "electronics",
//       "category": "Air conditioner",
//       "img": "https://bit.ly/3uldFFv",
//       "brand": "Voltas",
//       "name": "Voltas 1.3 Ton Maha Adjustable Inverter 5 Star Copper (2021 Range) 165V ADX (R-32) Split AC (White)",
//       "strikedprice": "37939",
//       "price": "34490",
//       "product_type": "split ac"
//     },
//     {
//       "id": "47",
//       "department": "electronics",
//       "category": "Air conditioner",
//       "img": "https://bit.ly/3CWGkno",
//       "brand": "Hitachi",
//       "name": "Hitachi 1.0 Ton Inverter 3 Star Merai 3100S Champion RSFG312HDEA Split AC (White)",
//       "strikedprice": "32439",
//       "price": "29490",
//       "product_type": "split ac"
//     },
//     {
//       "id": "48",
//       "department": "electronics",
//       "category": "Air conditioner",
//       "img": "https://bit.ly/2Y8TdMD",
//       "brand": "Voltas",
//       "name": "Voltas 1.5 Ton 5 Star Copper 185 LZH (R-32) Window AC (White)",
//       "strikedprice": "30789",
//       "price": "27990",
//       "product_type": "window ac"
//     },
//     {
//       "id": "49",
//       "department": "electronics",
//       "category": "air cooler",
//       "img": "https://bit.ly/3zOSgG6",
//       "brand": "Voltas",
//       "name": "Voltas JetMax 70L Desert Air Cooler (White)",
//       "strikedprice": "13079",
//       "price": "11890",
//       "product_type": "Desert Air Cooler"
//     },
//     {
//       "id": "50",
//       "department": "electronics",
//       "category": "Computer Parts",
//       "img": "https://bit.ly/39HlQCG",
//       "brand": "Logitech",
//       "name": "Logitech M170 Wireless Mouse (Black)",
//       "strikedprice": "659",
//       "price": "599",
//       "product_type": "Keyboard & Mouse"
//     },
//     {
//       "id": "51",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3ikd3v5",
//       "brand": "Dell",
//       "name": "Dell Inspiron 5406 2-in-1 Laptop D560365WIN9S i3|11th Gen|4GB|256GBSSD|14 inch|W10H+MSO|INT|Silver",
//       "strikedprice": "53119",
//       "price": "48290",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "52",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3zVmerX",
//       "brand": "Apple",
//       "name": "Apple MacBook Air MGND3HN/A M1 chip|8 GB|256 GB SSD|13.3 inch|Mac OS|Integrated Graphics|Gold",
//       "strikedprice": "97887",
//       "price": "88988",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "53",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3zWPTRw",
//       "brand": "Lenovo",
//       "name": "Lenovo IdeaPad Slim 3 2021 Thin&Light 82H801FKIN i3 11th Gen 8GB 512GBSSD 15.6in W10+MSO INT Grey",
//       "strikedprice": "48391",
//       "price": "43992",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "54",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3mcLViK",
//       "brand": "Asus",
//       "name": "Asus TUF F15 Gaming Laptop FX506LI-HN270T i5 10th Gen 8GB 1TBSSD 15.6 inch W10 4GB Bonfire Black",
//       "strikedprice": "72593",
//       "price": "65994",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "55",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3mg39Mu",
//       "brand": "HP",
//       "name": "HP Thin & Light Laptop 15s-ey1004AU Ryzen 5 4500U 8GB 256GBSSD 15.6 inch W10+MSO INT Silver",
//       "strikedprice": "50918",
//       "price": "46289",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "56",
//       "department": "electronics",
//       "category": "laptop",
//       "img": "https://bit.ly/3AP1CTs",
//       "brand": "Asus",
//       "name": "Asus TUF A15 Gaming Laptop FA566IC-HN007T Ryzen 7 4800H 8GB 512GBSSD 15.6 inch W10H 4GB Eclipse Gray",
//       "strikedprice": "83925",
//       "price": "76295",
//       "product_type": "notebook & macbook"
//     },
//     {
//       "id": "57",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/39RPKnX",
//       "brand": "Samsung",
//       "name": "Samsung Galaxy Watch 4 LTE 44mm SM-R875FZGAINU Smartwatch (Green)",
//       "strikedprice": "35199",
//       "price": "31999",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "58",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3AXycmb",
//       "brand": "Noise",
//       "name": "Noise ColorFit Pro 3 Smartwatch (Jet Black)",
//       "strikedprice": "4949",
//       "price": "4499",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "59",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/2WpoVEz",
//       "brand": "Fitbit",
//       "name": "Fitbit Sense Advanced Health Smartwatch (Carbon/Graphite)",
//       "strikedprice": "24239",
//       "price": "22035",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "60",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3CWtGVz",
//       "brand": "Xiaomi",
//       "name": "Xiaomi Mi XMSH10HM Smart Band 5 Fitness Tracker (Black)",
//       "strikedprice": "2639",
//       "price": "2399",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "61",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/2Y9E3GU",
//       "brand": "Apple",
//       "name": "New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band",
//       "strikedprice": "36067",
//       "price": "32788",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "62",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/2Wr4OWw",
//       "brand": "Amazfit",
//       "name": "Huami Amazfit GTR 2 Classic Edition Smartwatch (Black)",
//       "strikedprice": "14849",
//       "price": "13499",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "63",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/2Y1VmcE",
//       "brand": "Boat",
//       "name": "boAt Storm Smartwatch (Active Black)",
//       "strikedprice": "3299",
//       "price": "2999",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "64",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3oiI4U1",
//       "brand": "Boat",
//       "name": "boAt Airdopes 138 T TWS Earbuds with Sleek Design, IWP, Type C Port (Active Black)",
//       "strikedprice": "1209",
//       "price": "1099",
//       "product_type": "headsets"
//     },
//     {
//       "id": "65",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3CRA8x4",
//       "brand": "Boat",
//       "name": "boAt Rockerz 450 T Wireless Headphone with Immersive Audio & Upto 15H Playtime (Luscious Black)",
//       "strikedprice": "1429",
//       "price": "1299",
//       "product_type": "headsets"
//     },
//     {
//       "id": "66",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3ikFOYN",
//       "brand": "Apple",
//       "name": "Apple AirPods Pro Compatible with Siri (White)",
//       "strikedprice": "23638",
//       "price": "21489",
//       "product_type": "headsets"
//     },
//     {
//       "id": "67",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3EZNBou",
//       "brand": "Boat",
//       "name": "boAt Rockerz 450 Pro T Bluetooth On-Ear Headphone with Mic (Black)",
//       "strikedprice": "1869",
//       "price": "1699",
//       "product_type": "headsets"
//     },
//     {
//       "id": "68",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/39LJXjG",
//       "brand": "Boat",
//       "name": "boAt Rockerz 255 Pro T Wireless Earphone with ASAP Charge, Enhanced Bass & Bt V5.0 (Blazing Yellow)",
//       "strikedprice": "1319",
//       "price": "1199",
//       "product_type": "headsets"
//     },
//     {
//       "id": "69",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3upyfVB",
//       "brand": "Hammer",
//       "name": "Hammer Bash Over The Ear Bluetooth Headphone With Mic (Black)",
//       "strikedprice": "2464",
//       "price": "2240",
//       "product_type": "headsets"
//     },
//     {
//       "id": "70",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/3CYsJME",
//       "brand": "Jbl",
//       "name": "Jbl Tune T110Bt Bluetooth Earphone With Mic (Blue)",
//       "strikedprice": "1649",
//       "price": "1499",
//       "product_type": "headsets"
//     },
//     {
//       "id": "71",
//       "department": "electronics",
//       "category": "wearable Devices",
//       "img": "https://bit.ly/2Yerl9L",
//       "brand": "Audio-Technica",
//       "name": "Audio-Technica ATH-M30x Headphones Black",
//       "strikedprice": "7148",
//       "price": "6498",
//       "product_type": "headsets"
//     },
//     {
//       "id": "72",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3mdnodq",
//       "brand": "Ray-Ban",
//       "name": "Ray-Ban 0RB3025I Fern Green Anti-Reflective Icons Aviator - 55 mm",
//       "strikedprice": "4938",
//       "price": "4489",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "73",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3kQqlkI",
//       "brand": "Ray-Ban",
//       "name": "Ray-Ban 0RB3025I Ocean Blue Mirrored Icons Aviator - 58 mm",
//       "strikedprice": "9569",
//       "price": "8699",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "74",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3m3bSkU",
//       "brand": "Ray-Ban",
//       "name": "Ray-Ban RB4165 Anti-Reflective Justin Square Everglasses - 55 mm",
//       "strikedprice": "9119",
//       "price": "8290",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "75",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3kQgVWh",
//       "brand": "Fastrack",
//       "name": "Fastrack M203SL5 Light Grey Anti-Reflective Square Sunglasses",
//       "strikedprice": "1979",
//       "price": "1799",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "76",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/2Y2MbZX",
//       "brand": "Fastrack",
//       "name": "Fastrack C070PR2F Purple Gradient Round Sunglasses",
//       "strikedprice": "1517",
//       "price": "1379",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "77",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3oiYOuz",
//       "brand": "Fossil",
//       "name": "Fossil 2018042IK55HA Brown Cat Eye Sunglasses",
//       "strikedprice": "4477",
//       "price": "4070",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "78",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3F4Ull6",
//       "brand": "Fossil",
//       "name": "Fossil 20226380750QT Green Round Sunglasses",
//       "strikedprice": "4498",
//       "price": "4089",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "79",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3kSbcQ7",
//       "brand": "Daniel Klein",
//       "name": "Daniel Klein DK4287P-C3 Brown Polarized Shield Sunglasses",
//       "strikedprice": "1117",
//       "price": "1015",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "80",
//       "department": "eyewear",
//       "category": "sunglasses",
//       "img": "https://bit.ly/3CYuQ32",
//       "brand": "Daniel Klein",
//       "name": "Daniel Klein DK3233P-C1 Purple Polarized Aviator",
//       "strikedprice": "1198",
//       "price": "1089",
//       "product_type": "sunglasses"
//     },
//     {
//       "id": "81",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008467863_437Wx649H_202012292027401.jpeg",
//       "brand": "ETA",
//       "name": "ETA by Westside Dark Pink Slim Fit T-Shirt",
//       "strikedprice": "1649",
//       "price": "1499",
//       "product_type": "T-shirts & Shirts"
//     },
//     {
//       "id": "82",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010665893_437Wx649H_202109211947041.jpeg",
//       "brand": "LACOSTE",
//       "name": "Lacoste Yellow L.12.12 Classic Fit",
//       "strikedprice": "5280",
//       "price": "4800",
//       "product_type": "T-shirts & Shirts"
//     },
//     {
//       "id": "83",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010368972_437Wx649H_202108211730241.jpeg",
//       "brand": "WES Casuals",
//       "name": "WES Casuals by Westside Black Slim",
//       "strikedprice": "1429",
//       "price": "1299",
//       "product_type": "T-shirts & Shirts"
//     },
//     {
//       "id": "84",
//       "department": "Men's Clothing",
//       "category": "Formal Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010478836_437Wx649H_202109021224191.jpeg",
//       "brand": "WES Formals",
//       "name": "WES Formals by Westside Olive",
//       "strikedprice": "1099",
//       "price": "999",
//       "product_type": "T-shirts & Shirts"
//     },
//     {
//       "id": "85",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008495399_437Wx649H_202101080128391.jpeg",
//       "brand": "Spykar",
//       "name": "Spykar Navy Lightly Washed Jeans",
//       "strikedprice": "2309",
//       "price": "2099",
//       "product_type": "Jeans"
//     },
//     {
//       "id": "86",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008682246_437Wx649H_202101291819201.jpeg",
//       "brand": "Nuon Men",
//       "name": "Nuon by Westside Charcoal Nuo-Flex",
//       "strikedprice": "1869",
//       "price": "1699",
//       "product_type": "Jeans"
//     },
//     {
//       "id": "87",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008767738_437Wx649H_202102112028341.jpeg",
//       "brand": "ETA",
//       "name": "ETA by Westside Light Grey Slim Fit Chinos",
//       "strikedprice": "1869",
//       "price": "1699",
//       "product_type": "Trousers & Chinos"
//     },
//     {
//       "id": "88",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009195408_437Wx649H_202103302226401.jpeg",
//       "brand": "ColorPlus",
//       "name": "ColorPlus Beige Cotton Regular Fit",
//       "strikedprice": "1137",
//       "price": "1034",
//       "product_type": "Trousers & Chinos"
//     },
//     {
//       "id": "89",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i4/437Wx649H/MP000000006216159_437Wx649H_20191226103754.jpeg",
//       "brand": "Cotton On",
//       "name": "Cotton On Cream Cotton Relaxed Fit",
//       "strikedprice": "2463",
//       "price": "2239",
//       "product_type": "Shorts"
//     },
//     {
//       "id": "90",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010363325_437Wx649H_202108211106001.jpeg",
//       "brand": "Ascot",
//       "name": "Ascot by Westside Tan Relaxed-Fit",
//       "strikedprice": "2199",
//       "price": "1999",
//       "product_type": "Jackets"
//     },
//     {
//       "id": "91",
//       "department": "Men's Clothing",
//       "category": "Casual Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009598990_437Wx649H_202105220002091.jpeg",
//       "brand": "GANT",
//       "name": "GANT Navy Printed Sweatshirt",
//       "strikedprice": "3959",
//       "price": "3599",
//       "product_type": "Sweatshirts"
//     },
//     {
//       "id": "92",
//       "department": "Men's Clothing",
//       "category": "Formal Wear",
//       "img": "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006312514_437Wx649H_20200115023916.jpeg",
//       "brand": "WES Formals",
//       "name": "WES Formals by Westside Black",
//       "strikedprice": "1099",
//       "price": "999",
//       "product_type": "Trousers"
//     },
//     {
//       "id": "93",
//       "department": "Men's Clothing",
//       "category": "Formal Wear",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009887112_437Wx649H_202107011535511.jpeg",
//       "brand": "Blackberrys",
//       "name": "Blackberrys Grey Full Sleeves Slim Fit",
//       "strikedprice": "8795",
//       "price": "7995",
//       "product_type": "Suits"
//     },
//     {
//       "id": "94",
//       "department": "Electronics",
//       "category": "Storage Devices",
//       "img": "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007814540_437Wx649H_202009251147201.jpeg",
//       "brand": "Synology",
//       "name": "Synology DiskStation DS220",
//       "strikedprice": "36739",
//       "price": "33399",
//       "product_type": "Cloud Storage"
//     },
//     {
//       "id": "95",
//       "department": "Electronics",
//       "category": "Printer & Parts",
//       "img": "https://img.tatacliq.com/images/i4/437Wx649H/MP000000005394129_437Wx649H_20190901034002.jpeg",
//       "brand": "Epson",
//       "name": "Epson T6641/T6642/T6643",
//       "strikedprice": "1683",
//       "price": "1530",
//       "product_type": "Cartridge & Toner"
//     },
//     {
//       "id": "96",
//       "department": "Electronics",
//       "category": "Camera",
//       "img": "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007641214_437Wx649H_20200905201616.jpeg",
//       "brand": "Godrej",
//       "name": "Godrej See Thru 1MP HD Full CCTV",
//       "strikedprice": "15872",
//       "price": "14429",
//       "product_type": "Security Cameras"
//     },
//     {
//       "id": "97",
//       "department": "Electronics",
//       "category": "Laptop",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010009194_437Wx649H_202107161733001.jpeg",
//       "brand": "Asus",
//       "name": "Asus TUF F15 Gaming Laptop",
//       "strikedprice": "72593",
//       "price": "65994",
//       "product_type": "Notebook & Macbook"
//     },
//     {
//       "id": "98",
//       "department": "Electronics",
//       "category": "Head Phones",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008486238_437Wx649H_202101071309481.jpeg",
//       "brand": "Boat",
//       "name": "boAt Airdopes 138 T TWS Earbuds",
//       "strikedprice": "1209",
//       "price": "1099",
//       "product_type": "headsets"
//     },
//     {
//       "id": "99",
//       "department": "Electronics",
//       "category": "Wearable Devices",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010452079_437Wx649H_202108281852111.jpeg",
//       "brand": "Samsung",
//       "name": "Samsung Galaxy Watch 4 LTE 44mm",
//       "strikedprice": "35199",
//       "price": "31999",
//       "product_type": "Fitness Tracker"
//     },
//     {
//       "id": "100",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010373225_437Wx649H_202108212226241.jpeg",
//       "brand": "Lil Tomatoes",
//       "name": "Li'l Tomatoes Kids Orange Cotton",
//       "strikedprice": "428",
//       "price": "389",
//       "product_type": "T-shirts & Shirts"
//     },
//     {
//       "id": "101",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i4/437Wx649H/MP000000006951754_437Wx649H_20200516220200.jpeg",
//       "brand": "GAP",
//       "name": "GAP Kids Light Brown Cotton",
//       "strikedprice": "1374",
//       "price": "1249",
//       "product_type": "Jeans"
//     },
//     {
//       "id": "102",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009970395_437Wx649H_202107102131171.jpeg",
//       "brand": "Lil Tomatoes",
//       "name": "Li'l Tomatoes Kids Black & Blue Cotton",
//       "strikedprice": "811",
//       "price": "737",
//       "product_type": "Shorts & Dungarees"
//     },
//     {
//       "id": "103",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009841812_437Wx649H_202106242154401.jpeg",
//       "brand": "Puma",
//       "name": "Puma Kids Black Logo Print Shorts",
//       "strikedprice": "1154",
//       "price": "1049",
//       "product_type": "Sportswear"
//     },
//     {
//       "id": "104",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i4/437Wx649H/MP000000005286513_437Wx649H_20190825212754.jpeg",
//       "brand": "612 League",
//       "name": "612 League Kids Red & White Floral",
//       "strikedprice": "1548",
//       "price": "1407",
//       "product_type": "Ethnic Wear"
//     },
//     {
//       "id": "105",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009119765_437Wx649H_202103192245331.jpeg",
//       "brand": "HOP",
//       "name": "HOP Kids by Westside White",
//       "strikedprice": "549",
//       "price": "499",
//       "product_type": "Inner Wear"
//     },
//     {
//       "id": "106",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008717132_437Wx649H_202102041037281.jpeg",
//       "brand": "Cherry Crumble",
//       "name": "Cherry Crumble By Nitt Hyman Kids",
//       "strikedprice": "1319",
//       "price": "1199",
//       "product_type": "Night Suits"
//     },
//     {
//       "id": "107",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i5/437Wx649H/MP000000005918473_437Wx649H_20191115033539.jpeg",
//       "brand": "Pepe Jeans",
//       "name": "Pepe Jeans Kids Red Cotton Sweater",
//       "strikedprice": "1187",
//       "price": "1079",
//       "product_type": "Winter Wear"
//     },
//     {
//       "id": "108",
//       "department": "Kids",
//       "category": "Boys Clothing",
//       "img": "https://img.tatacliq.com/images/i4/437Wx649H/MP000000005286513_437Wx649H_20190825212754.jpeg",
//       "brand": "612 League",
//       "name": "612 League Kids Red & White Floral",
//       "strikedprice": "1548",
//       "price": "1407",
//       "product_type": "Ethnic Wear"
//     },
//     {
//       "id": "109",
//       "department": "Home",
//       "category": "Bed Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008454871_437Wx649H_202012271433111.jpeg",
//       "brand": "Spaces",
//       "name": "Spaces Atrium Light Grey Cotton 144 TC",
//       "strikedprice": "1100",
//       "price": "1000",
//       "product_type": "Bed Sheets"
//     },
//     {
//       "id": "110",
//       "department": "Home",
//       "category": "Bed Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000007396151_437Wx649H_202109212027431.jpeg",
//       "brand": "Saral Home",
//       "name": "Saral Home Majesty Grey 350 TC Bed",
//       "strikedprice": "1786",
//       "price": "1624",
//       "product_type": "Bed Linen"
//     },
//     {
//       "id": "111",
//       "department": "Home",
//       "category": "Bath Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009883874_437Wx649H_202107010046471.jpeg",
//       "brand": "Fabindia",
//       "name": "Fabindia Orchid White & Gold Cotton",
//       "strikedprice": "1023",
//       "price": "930",
//       "product_type": "Towels"
//     },
//     {
//       "id": "112",
//       "department": "Home",
//       "category": "Bath Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008653959_437Wx649H_202101241643591.jpeg",
//       "brand": "Saral Home",
//       "name": "Saral Home Blue Microfibre 1041 GSM",
//       "strikedprice": "824",
//       "price": "749",
//       "product_type": "Bath Mats & Rugs"
//     },
//     {
//       "id": "113",
//       "department": "Home",
//       "category": "Furnishing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008712808_437Wx649H_202102031801311.jpeg",
//       "brand": "Bianca",
//       "name": "BIANCA Fluffy Micro-Fiber Cushion",
//       "strikedprice": "791",
//       "price": "719",
//       "product_type": "Cushions"
//     },
//     {
//       "id": "114",
//       "department": "Home",
//       "category": "Furnishing",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009875796_437Wx649H_202108190310491.jpeg",
//       "brand": "Fabindia",
//       "name": "Fabindia Chanderi Pink Cotton Cushion",
//       "strikedprice": "759",
//       "price": "690",
//       "product_type": "Cushion Covers"
//     },
//     {
//       "id": "115",
//       "department": "Home",
//       "category": "Lamps & Lights",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010613464_437Wx649H_202109160421011.jpeg",
//       "brand": "DecorativeRay",
//       "name": "DecorativeRay Black Iron Gate Lamp",
//       "strikedprice": "1649",
//       "price": "1499",
//       "product_type": "Bulbs"
//     },
//     {
//       "id": "116",
//       "department": "Home",
//       "category": "Lamps & Lights",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010631158_437Wx649H_202109171809531.jpeg",
//       "brand": "DecorativeRay",
//       "name": "DecorativeRay Black & Gold Iron",
//       "strikedprice": "16829",
//       "price": "15299",
//       "product_type": "Chandeliers"
//     },
//     {
//       "id": "117",
//       "department": "Home",
//       "category": "Kitchen",
//       "img": "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007337359_437Wx649H_20200722125730.jpeg",
//       "brand": "Meyer",
//       "name": "Meyer Copper Cookware Set",
//       "strikedprice": "1571",
//       "price": "1428",
//       "product_type": "Cookware"
//     },
//     {
//       "id": "118",
//       "department": "Home",
//       "category": "Glassware & Bar",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008938205_437Wx649H_202102272105341.jpeg",
//       "brand": "Goodhomes",
//       "name": "Goodhomes Transparent Glass",
//       "strikedprice": "934",
//       "price": "849",
//       "product_type": "Drinking Glasses"
//     },
//     {
//       "id": "119",
//       "department": "Home",
//       "category": "Serveware",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010626140_437Wx649H_202109171301461.jpeg",
//       "brand": "AMEFA",
//       "name": "AMEFA Blue & Silver Stainless Steel",
//       "strikedprice": "5389",
//       "price": "4899",
//       "product_type": "Cutlery"
//     },
//     {
//       "id": "120",
//       "department": "Home",
//       "category": "Wellness",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009610347_437Wx649H_202108161938341.jpeg",
//       "brand": "RESONANCE",
//       "name": "Resonance Spices & Pumpkin Fragrance",
//       "strikedprice": "248",
//       "price": "225",
//       "product_type": "Candles"
//     },
//     {
//       "id": "121",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008702889_437Wx649H_202103052017571.jpeg",
//       "brand": "Mamaearth",
//       "name": "Mamaearth Ubtan Natural Face Wash - Pack of 2",
//       "strikedprice": "548",
//       "price": "498",
//       "product_type": "Cleansers"
//     },
//     {
//       "id": "122",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008713292_437Wx649H_202109221318321.jpeg",
//       "brand": "The Face Shop Jeju Volcanic Lava Cleansing Foam",
//       "name": "Mamaearth Ubtan Natural Face Wash - Pack of 2",
//       "strikedprice": "875",
//       "price": "795",
//       "product_type": "Cleansers"
//     },
//     {
//       "id": "123",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009912461_437Wx649H_202107031136501.jpeg",
//       "brand": "O3+",
//       "name": "O3+ Deep Concern 1 Pore Clean Up Cleanser",
//       "strikedprice": "810",
//       "price": "736",
//       "product_type": "Cleansers"
//     },
//     {
//       "id": "124",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009871407_437Wx649H_202106292316521.jpeg",
//       "brand": "AMINU",
//       "name": "AMINU The Azure Copper Peptide Serum",
//       "strikedprice": "5060",
//       "price": "4600",
//       "product_type": "Moisturizers and Serums"
//     },
//     {
//       "id": "125",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008923132_437Wx649H_202102261831471.jpeg",
//       "brand": "Thalgo",
//       "name": "Thalgo Collagen Eyes Roll-On",
//       "strikedprice": "4059",
//       "price": "3690",
//       "product_type": "Moisturizers and Serums"
//     },
//     {
//       "id": "126",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009083883_437Wx649H_202103142204051.jpeg",
//       "brand": "Plum",
//       "name": "Plum Hello Aloe Caring Day Gel Moisturiser",
//       "strikedprice": "439",
//       "price": "399",
//       "product_type": "Moisturizers and Serums"
//     },
//     {
//       "id": "127",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010201951_437Wx649H_202108071239181.jpeg",
//       "brand": "VLCC",
//       "name": "VLCC Activated Bamboo Charcoal Facial Kit",
//       "strikedprice": "248",
//       "price": "225",
//       "product_type": "Facial Peels and Treatments"
//     },
//     {
//       "id": "128",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009394753_437Wx649H_202104201823551.jpeg",
//       "brand": "O3+",
//       "name": "O3+ Meladerm Vitamin C Gel Bleach",
//       "strikedprice": "545",
//       "price": "495",
//       "product_type": "Facial Peels and Treatments"
//     },
//     {
//       "id": "129",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008974984_437Wx649H_202103041453121.jpeg",
//       "brand": "Ethiglo",
//       "name": "Ethiglo Oral Skin Lightening Tablets",
//       "strikedprice": "770",
//       "price": "700",
//       "product_type": "Facial Peels and Treatments"
//     },
//     {
//       "id": "130",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008759701_437Wx649H_202102110216401.jpeg",
//       "brand": "The Moms Co.",
//       "name": "The Moms Co. Natural Vita Rich Under Eye Cream",
//       "strikedprice": "391",
//       "price": "355",
//       "product_type": "Moisturizers and Serums"
//     },
//     {
//       "id": "131",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009458639_437Wx649H_202104282016261.jpeg",
//       "brand": "BIOTIQUE",
//       "name": "Biotique Bio Sea Weed Revitalizing",
//       "strikedprice": "197",
//       "price": "179",
//       "product_type": "Moisturizers and Serums"
//     },
//     {
//       "id": "132",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009161546_437Wx649H_202103252104551.jpeg",
//       "brand": "Khadi Natural",
//       "name": "Khadi Natural Neem-tulsi Face",
//       "strikedprice": "308",
//       "price": "280",
//       "product_type": "Mask"
//     },
//     {
//       "id": "133",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008519448_437Wx649H_202108041848011.jpeg",
//       "brand": "Ustraa",
//       "name": "Ustraa De-Tan Cream for Men",
//       "strikedprice": "226",
//       "price": "205",
//       "product_type": "Mens Skincare"
//     },
//     {
//       "id": "134",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009037562_437Wx649H_202103111208571.jpeg",
//       "brand": "Bryan & Candy",
//       "name": "Bryan & Candy New York",
//       "strikedprice": "352",
//       "price": "320",
//       "product_type": "Mens Skincare"
//     },
//     {
//       "id": "135",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008659274_437Wx649H_202101261624301.jpeg",
//       "brand": "Truefitt & Hill",
//       "name": "Truefitt & Hill Authentic No. 10",
//       "strikedprice": "1650",
//       "price": "1500",
//       "product_type": "Mens Skincare"
//     },
//     {
//       "id": "136",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009582528_437Wx649H_202105191743381.jpeg",
//       "brand": "Keeo Skin",
//       "name": "Keeo Skin Essentials",
//       "strikedprice": "659",
//       "price": "599",
//       "product_type": "Mens Skincare"
//     },
//     {
//       "id": "137",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008742350_437Wx649H_202107291448111.jpeg",
//       "brand": "St.Botanica",
//       "name": "St.Botanica Vitamin C, E & Hyaluronic Acid De Pigmentation Cream",
//       "strikedprice": "879",
//       "price": "799",
//       "product_type": "Other Skin Care"
//     },
//     {
//       "id": "138",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009829500_437Wx649H_202106232110301.jpeg",
//       "brand": "Dr. Batra's",
//       "name": "Dr. Batra's Skin Firming Serum",
//       "strikedprice": "1271",
//       "price": "1155",
//       "product_type": "Other Skin Care"
//     },
//     {
//       "id": "139",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010000757_437Wx649H_202107151604471.jpeg",
//       "brand": "VLCC",
//       "name": "VLCC Charcoal Scrub",
//       "strikedprice": "520",
//       "price": "473",
//       "product_type": "Other Skin Care"
//     },
//     {
//       "id": "140",
//       "department": "Beauty & Grooming",
//       "category": "Skin Care",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010000757_437Wx649H_202107151604471.jpeg",
//       "brand": "VLCC",
//       "name": "VLCC Charcoal Scrub",
//       "strikedprice": "520",
//       "price": "473",
//       "product_type": "Other Skin Care"
//     },
//     {
//       "id": "141",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010002332_437Wx649H_202107151909471.jpeg",
//       "brand": "Hajamat",
//       "name": "Hajamat Ace III 3 Blade Manual",
//       "strikedprice": "593",
//       "price": "539",
//       "product_type": "Mens Shaving"
//     },
//     {
//       "id": "142",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008519435_437Wx649H_202101091630241.jpeg",
//       "brand": "Ustraa",
//       "name": "Ustraa Razor Cartridges",
//       "strikedprice": "536",
//       "price": "487",
//       "product_type": "Mens Shaving"
//     },
//     {
//       "id": "143",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009332568_437Wx649H_202104140042271.jpeg",
//       "brand": "Old Spice",
//       "name": "Old Spice Fresh Lime",
//       "strikedprice": "143",
//       "price": "130",
//       "product_type": "Mens Shaving"
//     },
//     {
//       "id": "144",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009350129_437Wx649H_202104151351521.jpeg",
//       "brand": "Bombay Shaving Company",
//       "name": "Bombay Shaving Company Dexter V6",
//       "strikedprice": "604",
//       "price": "549",
//       "product_type": "Mens Shaving"
//     },
//     {
//       "id": "145",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009332507_437Wx649H_202104140040331.jpeg",
//       "brand": "Gillette",
//       "name": "Gillette Mach 3 Shaving Blades",
//       "strikedprice": "1386",
//       "price": "1260",
//       "product_type": "Mens Shaving"
//     },
//     {
//       "id": "146",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008519381_437Wx649H_202108032059011.jpeg",
//       "brand": "Ustraa",
//       "name": "Ustraa Beard Growth Oil",
//       "strikedprice": "576",
//       "price": "524",
//       "product_type": "Beard and Moustache Care"
//     },
//     {
//       "id": "147",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009350108_437Wx649H_202104151348331.jpeg",
//       "brand": "Bombay Shaving Company",
//       "name": "Bombay Shaving Company Black Beard Bib",
//       "strikedprice": "384",
//       "price": "349",
//       "product_type": "Beard and Moustache Care"
//     },
//     {
//       "id": "148",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008752722_437Wx649H_202102101650491.jpeg",
//       "brand": "Beardo",
//       "name": "Beardo Beard Serum",
//       "strikedprice": "386",
//       "price": "351",
//       "product_type": "Beard and Moustache Care"
//     },
//     {
//       "id": "149",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008526448_437Wx649H_202101100110351.jpeg",
//       "brand": "Tabac",
//       "name": "Tabac Original Beard Oil",
//       "strikedprice": "536",
//       "price": "487",
//       "product_type": "Beard and Moustache Care"
//     },
//     {
//       "id": "150",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009372278_437Wx649H_202104172041101.jpeg",
//       "brand": "Ustraa",
//       "name": "Ustraa De Tan Face Scrub & Face Cream",
//       "strikedprice": "495",
//       "price": "450",
//       "product_type": "Mens Grooming Sets"
//     },
//     {
//       "id": "151",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008568419_437Wx649H_202101152357271.jpeg",
//       "brand": "Bombay Shaving Company",
//       "name": "Bombay Shaving Company 4 Step Beard Growth Kit",
//       "strikedprice": "604",
//       "price": "549",
//       "product_type": "Mens Grooming Sets"
//     },
//     {
//       "id": "152",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009166628_437Wx649H_202107161140251.jpeg",
//       "brand": "Beardo",
//       "name": "Beardo Beard Activator",
//       "strikedprice": "825",
//       "price": "750",
//       "product_type": "Mens Grooming Sets"
//     },
//     {
//       "id": "153",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008544051_437Wx649H_202101130055011.jpeg",
//       "brand": "Uncle Tony",
//       "name": "Uncle Tony Travellers Pack",
//       "strikedprice": "1462",
//       "price": "1329",
//       "product_type": "Mens Grooming Sets"
//     },
//     {
//       "id": "154",
//       "department": "Beauty & Grooming",
//       "category": "Mens Grooming",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008525469_437Wx649H_202101092237461.jpeg",
//       "brand": "Hunter 1114",
//       "name": "Hunter 1114 Black Diamond Shampoo & Body Wash",
//       "strikedprice": "1122",
//       "price": "1020",
//       "product_type": "Mens Grooming Sets"
//     }
//   ]
//   const getPosst=()=>{
//     let tempArray=[]
//     for (let index = 0; index < array.length; index++) {
//         const object={
             
//         title:array[index].name,
//         img:array[index].img,
//         description:array[index].department,
//         brand:array[index].brand,
//         price:array[index].price,
//         strikedprice:array[index].strikedprice,
//         product_type:array[index].product_type,
//         department:array[index].name
//         }
//         tempArray.push(object)
        
//     }
//      Post.insertMany(tempArray);
//      console.log("OK")
//   }
//   getPosst();
const getAllPost=()=>{
    return Post.find()
}
const getPostByID=(id)=>{
    return Post.findById(id)
}
const deletePostByID= async(id,userId)=>{

let post = await Post.findById(id)

if (!post) {
    return ('Post does not exist');
}

if (String(post.userId._id) !== String(userId)) {
    return ('User can\'t delete the post')
}

post = await Post.findByIdAndDelete(id)

return post;
}
const patchPostByID=async(id, patch, userId)=>{
    const user = await Post.findById(id)
    let post = await Post.findById(id)
    if (!post) {
        return ('Post does not exist');
    }

    if (String(post.userId._id) !== String(userId)) {
        return ('User can\'t edit the post')
    }

  
    return Post.findByIdAndUpdate(id,patch,{new:true})

}

const createNewPost=async(body,id)=>{
    let ansa= await Post.create({
    title:body.title,
    img:body.img,
    description:body.description,
    brand:body.brand,
    price:body.price,
    strikedprice:body.strikedprice,
    product_type:body.product_type,
    department:body.department,
   })


   return ansa;
}
module.exports={
    getAllPost,
    getPostByID,
    deletePostByID,
    patchPostByID,
    createNewPost
}