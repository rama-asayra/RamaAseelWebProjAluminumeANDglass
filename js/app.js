
(function(){
  let currentLang = localStorage.getItem('lang') || 'en';
  const translations = {
      "en": {"siteName": "Asayra Aluminum Trading",
          "home": "Home", "products": "Products", "cart": "Cart", "heroTitle": "Premium Aluminum Parts",
          "heroDesc": "High-quality, durable, and affordable.", "shopNow": "Shop Now",
          "footer": "© 2025 Asayra Aluminum Trading. All rights reserved.", "searchPlaceholder": "Search...",
          "allCategories": "All Categories", "catBrackets": "Brackets", "catRods": "Rods", "catSheets": "Sheets",
          "catProfiles": "Profiles", "catTubes": "Tubes", "catAccessories": "Accessories", "ourProducts": "Our Products",
          "addToCart": "Add to Cart", "viewDetails": "View Details", "yourCart": "Your Shopping Cart", "checkout": "Checkout",
          "total": "Total", "product1": "Universal Aluminum Bracket #1", "desc1": "High-strength bracket for structural framing.",
          "product2": "6061 Aluminum Rod 10mm #2", "desc2": "Precision rod suitable for machining and DIY.",
          "product3": "Aluminum Sheet 2mm #3", "desc3": "Flat sheet ideal for fabrication and panels.",
          "product4": "T-Slot Aluminum Profile 2020 #4", "desc4": "Extruded profile for modular builds.",
          "product5": "Aluminum Tube 1-inch #5", "desc5": "Seamless tube for fluid and structural use.",
          "product6": "Corner Connector Kit #6", "desc6": "Accessories kit for assembly and mounting.",
          "product7": "Universal Aluminum Bracket #7", "desc7": "High-strength bracket for structural framing.",
          "product8": "6061 Aluminum Rod 10mm #8", "desc8": "Precision rod suitable for machining and DIY.",
          "product9": "Aluminum Sheet 2mm #9", "desc9": "Flat sheet ideal for fabrication and panels.",
          "product10": "T-Slot Aluminum Profile 2020 #10", "desc10": "Extruded profile for modular builds.",
          "product11": "Aluminum Tube 1-inch #11", "desc11": "Seamless tube for fluid and structural use.",
          "product12": "Corner Connector Kit #12", "desc12": "Accessories kit for assembly and mounting.",
          "product13": "Universal Aluminum Bracket #13", "desc13": "High-strength bracket for structural framing.",
          "product14": "6061 Aluminum Rod 10mm #14", "desc14": "Precision rod suitable for machining and DIY.",
          "product15": "Aluminum Sheet 2mm #15", "desc15": "Flat sheet ideal for fabrication and panels.",
          "product16": "T-Slot Aluminum Profile 2020 #16", "desc16": "Extruded profile for modular builds.",
          "product17": "Aluminum Tube 1-inch #17", "desc17": "Seamless tube for fluid and structural use.",
          "product18": "Corner Connector Kit #18", "desc18": "Accessories kit for assembly and mounting.",
          "product19": "Universal Aluminum Bracket #19", "desc19": "High-strength bracket for structural framing.",
          "product20": "6061 Aluminum Rod 10mm #20", "desc20": "Precision rod suitable for machining and DIY.",
          "product21": "Aluminum Sheet 2mm #21", "desc21": "Flat sheet ideal for fabrication and panels.",
          "product22": "T-Slot Aluminum Profile 2020 #22", "desc22": "Extruded profile for modular builds.",
          "product23": "Aluminum Tube 1-inch #23", "desc23": "Seamless tube for fluid and structural use.",
          "product24": "Corner Connector Kit #24", "desc24": "Accessories kit for assembly and mounting.",
          "product25": "Universal Aluminum Bracket #25", "desc25": "High-strength bracket for structural framing.",
          "product26": "6061 Aluminum Rod 10mm #26", "desc26": "Precision rod suitable for machining and DIY.",
          "product27": "Aluminum Sheet 2mm #27", "desc27": "Flat sheet ideal for fabrication and panels.",
          "product28": "T-Slot Aluminum Profile 2020 #28", "desc28": "Extruded profile for modular builds.",
          "product29": "Aluminum Tube 1-inch #29", "desc29": "Seamless tube for fluid and structural use.",
          "product30": "Corner Connector Kit #30", "desc30": "Accessories kit for assembly and mounting.",
          "product31": "Universal Aluminum Bracket #31", "desc31": "High-strength bracket for structural framing.",
          "product32": "6061 Aluminum Rod 10mm #32", "desc32": "Precision rod suitable for machining and DIY.", "product33":
              "Aluminum Sheet 2mm #33", "desc33": "Flat sheet ideal for fabrication and panels.",
          "product34": "T-Slot Aluminum Profile 2020 #34", "desc34": "Extruded profile for modular builds.",
          "product35": "Aluminum Tube 1-inch #35", "desc35": "Seamless tube for fluid and structural use.",
          "product36": "Corner Connector Kit #36", "desc36": "Accessories kit for assembly and mounting.",
          "product37": "Universal Aluminum Bracket #37", "desc37": "High-strength bracket for structural framing.",
          "product38": "6061 Aluminum Rod 10mm #38", "desc38": "Precision rod suitable for machining and DIY.",
          "product39": "Aluminum Sheet 2mm #39", "desc39": "Flat sheet ideal for fabrication and panels.",
          "product40": "T-Slot Aluminum Profile 2020 #40", "desc40": "Extruded profile for modular builds.",
          "product41": "Aluminum Tube 1-inch #41", "desc41": "Seamless tube for fluid and structural use.",
          "product42": "Corner Connector Kit #42", "desc42": "Accessories kit for assembly and mounting.",
          "product43": "Universal Aluminum Bracket #43", "desc43": "High-strength bracket for structural framing.",
          "product44": "6061 Aluminum Rod 10mm #44", "desc44": "Precision rod suitable for machining and DIY.",
          "product45": "Aluminum Sheet 2mm #45", "desc45": "Flat sheet ideal for fabrication and panels.",
          "product46": "T-Slot Aluminum Profile 2020 #46", "desc46": "Extruded profile for modular builds.",
          "product47": "Aluminum Tube 1-inch #47", "desc47": "Seamless tube for fluid and structural use.",
          "product48": "Corner Connector Kit #48", "desc48": "Accessories kit for assembly and mounting.",
          "product49": "Universal Aluminum Bracket #49", "desc49": "High-strength bracket for structural framing.",
          "product50": "6061 Aluminum Rod 10mm #50", "desc50": "Precision rod suitable for machining and DIY.",
          "hs1_title": "Sunroom",
          "hs1_desc": "Beautiful aluminum glass sunroom.",

          "hs2_title": "Sliding Door",
          "hs2_desc": "High-performance aluminum sliding doors.",

          "hs3_title": "Swing Door",
          "hs3_desc": "Elegant swing door with premium hardware.",

          "hs4_title": "Casement Window",
          "hs4_desc": "Secure and modern casement window.",

          "hs5_title": "Tilt & Turn Window",
          "hs5_desc": "Multi-functional tilt & turn system.",

          "hs6_title": "Folding Door",
          "hs6_desc": "Foldable door system for wide openings.",

          "hs7_title": "Entry Door",
          "hs7_desc": "Strong aluminum entry door.",

          "hs8_title": "Sliding Window",
          "hs8_desc": "Quiet and smooth sliding window.",
          "whyChoose": "Why Choose Our Products?",
          "feat1_title": "Premium Quality",
          "feat1_text": "All products are manufactured with high-grade aluminum alloy for superior durability and performance.",
          "feat2_title": "Energy Efficient",
          "feat2_text": "Advanced thermal break technology and double glazing for optimal energy savings year-round.",
          "feat3_title": "Secure & Safe",
          "feat3_text": "Multi-point locking systems and reinforced frames ensure maximum security for your property.",

          "footerTitle1": "Premium Glass & Aluminum",
          "footerDesc1": "Your trusted partner for high-quality aluminum and glass solutions.",

          "quickLinks": "Quick Links",
          "categories": "Categories",
          "aboutUs": "About Us",

          "ourProductss": "Our Products",
          "win": "Windows",
          "doors": "Doors",
          "partitions": "Partitions",
          "railings": "Railings",
          "facades": "Facades",
          "shower": "Shower Enclosures",

          "connect": "Connect With Us",
          "followUs": "Follow us on social media for updates and inspiration",

          "footerRights": "© 2025 Premium Glass & Aluminum. All rights reserved.",
          "privacy": "Privacy Policy",
          "terms": "Terms of Service",
          "cookies": "Cookie Policy",

          "aboutWhy": "WHY CHOOSE US",
          "aboutTitle": "Excellence in Every Detail",
          "aboutLead": "With over 25 years of experience, we deliver premium aluminum and glass solutions that combine beauty, durability, and energy efficiency.",

          "feat11_title": "Premium Quality Materials",
          "feat1_desc": "High-grade aluminum and tempered glass for lasting durability",

          "feat22_title": "Professional Installation",
          "feat2_desc": "Expert team with years of experience and training",

          "feat33_title": "Custom Solutions",
          "feat3_desc": "Tailored designs to match your specific requirements",

          "feat4_title": "Competitive Pricing",
          "feat4_desc": "Best value for money without compromising quality",

          "aboutLearnMore": "Learn More About Us ➜",

          "aboutNav":"ABOUT US",
          ////
          "about_title":"About Our Company",

          "about_subtitle": "Leading manufacturer of premium aluminum and glass solutions since 1970",
          "about_company_header":"About Our Company",
          "about_company_p1":"Our journey began over 25 years ago with a clear mission: to provide the highest-quality aluminum and glass products backed by exceptional service and innovation.\n" +
              "            Today, we proudly serve homeowners, contractors, architects, and large-scale developers with advanced solutions tailored to diverse project requirements.",


          "about_company_p2":" We specialize in energy-efficient systems, precision engineering, and custom designs that bring visions to life. Our manufacturing facility is equipped with state-of-the-art machinery, and our team consists of certified professionals dedicated to excellence.",
          "about_company_p3":"Our long-standing commitment to quality, innovation, and customer satisfaction continues to drive our success and position us as a leader in the aluminum and glass industry.",
          "years_experience":"Years Experience",
          "happy_clients":"Happy Clients",
          "projects_completed":"Projects Completed",
          "success_rate":"Success Rate",
          "our_mission_title":"Our Mission",
          "our_mission_text":"To provide innovative, high-quality aluminum and glass solutions that enhance\n" +
                  " living spaces while exceeding customer expectations.",
          "our_vision_title":"Our Vision",
          "our_vision_text":"To be the leading provider recognized for innovation, quality, and customer\n" +
                  "satisfaction, creating lasting relationships with our clients.",
          "cat_title": "Some Of Our Categories",

          "cat_windows_title": "Windows",
          "cat_windows_desc": "High quality aluminum and glass windows.",

          "cat_doors_title": "Doors",
         "cat_doors_desc": "Modern door systems for all spaces.",

          "cat_shower_title": "Shower Enclosures",
          "cat_shower_desc": "Elegant shower glass solutions.",

          "cat_facades_title": "Facades",
          "cat_facades_desc": "Curtain walls and building facades.",

          "cat_profiles_title": "Profiles Aluminum",
          "cat_profiles_desc": "Advanced aluminum profile systems.",

          "cat_sheets_title": "Sheets Aluminum",
         "cat_sheets_desc": "Durable aluminum sheets.",

          "cat_railings_title": "Railings",
          "cat_railings_desc": "Safe & stylish railing solutions.",

         "cat_blinds_title": "Blinds",
         "cat_blinds_desc": "Modern blinds and shading systems.",

          "show_all_btn": "Show All Categories",

          "history_title": "Our History",

          "year_1970": "1970",
          "hist_1970": "Company foundation and first aluminum projects.",

          "year_1980": "1980",
          "hist_1980": "Expansion in production and new machinery.",

          "year_1990": "1990",
          "hist_1990": "Entry into glass and facade solutions.",

          "year_2000": "2000",
          "hist_2000": "Major commercial projects completed.",

          "year_2010": "2010",
          "hist_2010": "Technological upgrades and factory expansion.",

          "year_2020": "2020",
          "hist_2020": "Leadership growth & international presence.",

          "cat":"CATEGORIES",


          "cat_title1": "All Categories",

          "cat_windows_title1": "Windows",
          "cat_windows_desc1": "High quality aluminum and glass windows.",

          "cat_doors_title1": "Doors",
          "cat_doors_desc1": "Modern door systems for all spaces.",

          "cat_shower_title1": "Shower",
          "cat_shower_desc1": "Elegant shower glass solutions.",

          "cat_facades_title1": "Facades",
          "cat_facades_desc1": "Curtain walls and building facades.",

          "cat_profiles_title1": "Profiles",
          "cat_profiles_desc1": "Advanced aluminum profile systems.",

          "cat_sheets_title1": "Sheets",
          "cat_sheets_desc1": "Durable aluminum sheets.",

          "cat_railings_title1": "Railings",
          "cat_railings_desc1": "Safe & stylish railing solutions.",

          "cat_blinds_title1": "Blinds",
          "cat_blinds_desc1": "Modern blinds systems.",

          "cat_brackets_title": "Brackets",
          "cat_brackets_desc": "Strong and durable aluminum brackets.",

          "cat_rods_title": "Rods",
          "cat_rods_desc": "High quality aluminum rods.",

          "cat_tubes_title": "Tubes",
          "cat_tubes_desc": "Precision aluminum tubes.",

          "cat_accessories_title": "Accessories",
          "cat_accessories_desc": "Complete accessories for aluminum systems."



      },
      "ar": {
          "siteName": "شركة عصايرة لتجارة الألمنيوم", "home": "الرئيسية", "products": "المنتجات", "cart": "السلة",
          "heroTitle": "قطع ألمنيوم عالية الجودة", "heroDesc": "متينة وبأسعار مناسبة.", "shopNow": "تسوق الآن",
          "footer": "© 2025 شركة عصايرة لتجارة الألمنيوم. جميع الحقوق محفوظة.", "searchPlaceholder": "بحث...",
          "allCategories": "كل الفئات", "catBrackets": "حاملات", "catRods": "قضبان", "catSheets": "ألواح",
          "catProfiles": "بروفيلات", "catTubes": "أنابيب", "catAccessories": "إكسسوارات",
          "ourProducts": "منتجاتنا", "addToCart": "أضف إلى السلة", "viewDetails": "عرض التفاصيل",
          "yourCart": "سلة التسوق", "checkout": "إتمام الشراء", "total": "المجموع",
          "product1": "حامل ألمنيوم متعدد الاستخدام رقم 1", "desc1": "حامل قوي لهيكلة الإطارات.",
          "product2": "قضيب ألمنيوم 6061 بقطر 10مم رقم 2", "desc2": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product3": "لوح ألمنيوم سماكة 2مم رقم 3", "desc3": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product4": "بروفيل ألمنيوم T-Slot 2020 رقم 4", "desc4": "بروفيل مُقذف لبناءات معيارية.",
          "product5": "أنبوب ألمنيوم 1 إنش رقم 5", "desc5": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product6": "مجموعة موصلات زاوية رقم 6", "desc6": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product7": "حامل ألمنيوم متعدد الاستخدام رقم 7", "desc7": "حامل قوي لهيكلة الإطارات.",
          "product8": "قضيب ألمنيوم 6061 بقطر 10مم رقم 8", "desc8": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product9": "لوح ألمنيوم سماكة 2مم رقم 9", "desc9": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product10": "بروفيل ألمنيوم T-Slot 2020 رقم 10", "desc10": "بروفيل مُقذف لبناءات معيارية.",
          "product11": "أنبوب ألمنيوم 1 إنش رقم 11", "desc11": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product12": "مجموعة موصلات زاوية رقم 12", "desc12": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product13": "حامل ألمنيوم متعدد الاستخدام رقم 13", "desc13": "حامل قوي لهيكلة الإطارات.",
          "product14": "قضيب ألمنيوم 6061 بقطر 10مم رقم 14", "desc14": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product15": "لوح ألمنيوم سماكة 2مم رقم 15", "desc15": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product16": "بروفيل ألمنيوم T-Slot 2020 رقم 16", "desc16": "بروفيل مُقذف لبناءات معيارية.",
          "product17": "أنبوب ألمنيوم 1 إنش رقم 17", "desc17": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product18": "مجموعة موصلات زاوية رقم 18", "desc18": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product19": "حامل ألمنيوم متعدد الاستخدام رقم 19", "desc19": "حامل قوي لهيكلة الإطارات.",
          "product20": "قضيب ألمنيوم 6061 بقطر 10مم رقم 20",
          "desc20": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product21": "لوح ألمنيوم سماكة 2مم رقم 21",
          "desc21": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product22": "بروفيل ألمنيوم T-Slot 2020 رقم 22", "desc22": "بروفيل مُقذف لبناءات معيارية.",
          "product23": "أنبوب ألمنيوم 1 إنش رقم 23", "desc23": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product24": "مجموعة موصلات زاوية رقم 24", "desc24": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product25": "حامل ألمنيوم متعدد الاستخدام رقم 25", "desc25": "حامل قوي لهيكلة الإطارات.",
          "product26": "قضيب ألمنيوم 6061 بقطر 10مم رقم 26", "desc26": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product27": "لوح ألمنيوم سماكة 2مم رقم 27", "desc27": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product28": "بروفيل ألمنيوم T-Slot 2020 رقم 28", "desc28": "بروفيل مُقذف لبناءات معيارية.",
          "product29": "أنبوب ألمنيوم 1 إنش رقم 29", "desc29": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product30": "مجموعة موصلات زاوية رقم 30", "desc30": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product31": "حامل ألمنيوم متعدد الاستخدام رقم 31", "desc31": "حامل قوي لهيكلة الإطارات.",
          "product32": "قضيب ألمنيوم 6061 بقطر 10مم رقم 32", "desc32": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product33": "لوح ألمنيوم سماكة 2مم رقم 33", "desc33": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product34": "بروفيل ألمنيوم T-Slot 2020 رقم 34", "desc34": "بروفيل مُقذف لبناءات معيارية.",
          "product35": "أنبوب ألمنيوم 1 إنش رقم 35", "desc35": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product36": "مجموعة موصلات زاوية رقم 36", "desc36": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product37": "حامل ألمنيوم متعدد الاستخدام رقم 37", "desc37": "حامل قوي لهيكلة الإطارات.",
          "product38": "قضيب ألمنيوم 6061 بقطر 10مم رقم 38", "desc38": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product39": "لوح ألمنيوم سماكة 2مم رقم 39", "desc39": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product40": "بروفيل ألمنيوم T-Slot 2020 رقم 40", "desc40": "بروفيل مُقذف لبناءات معيارية.",
          "product41": "أنبوب ألمنيوم 1 إنش رقم 41", "desc41": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product42": "مجموعة موصلات زاوية رقم 42", "desc42": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product43": "حامل ألمنيوم متعدد الاستخدام رقم 43", "desc43": "حامل قوي لهيكلة الإطارات.",
          "product44": "قضيب ألمنيوم 6061 بقطر 10مم رقم 44", "desc44": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "product45": "لوح ألمنيوم سماكة 2مم رقم 45", "desc45": "لوح مسطح مثالي للتصنيع والواجهات.",
          "product46": "بروفيل ألمنيوم T-Slot 2020 رقم 46", "desc46": "بروفيل مُقذف لبناءات معيارية.",
          "product47": "أنبوب ألمنيوم 1 إنش رقم 47", "desc47": "أنبوب بدون لحام للاستخدامات الهيكلية والسوائل.",
          "product48": "مجموعة موصلات زاوية رقم 48", "desc48": "مجموعة إكسسوارات للتجميع والتركيب.",
          "product49": "حامل ألمنيوم متعدد الاستخدام رقم 49", "desc49": "حامل قوي لهيكلة الإطارات.",
          "product50": "قضيب ألمنيوم 6061 بقطر 10مم رقم 50", "desc50": "قضيب دقيق مناسب للتصنيع والأعمال اليدوية.",
          "hs1_title": "غرفة زجاجية",
          "hs1_desc": "غرفة زجاجية ألمنيوم جميلة.",

          "hs2_title": "باب سحاب",
          "hs2_desc": "أبواب سحاب ألمنيوم عالية الأداء.",

          "hs3_title": "باب مفصلي",
          "hs3_desc": "باب مفصلي أنيق مع إكسسوارات ممتازة.",

          "hs4_title": "نافذة مفصلية",
          "hs4_desc": "نافذة مفصلية آمنة وعصرية.",

          "hs5_title": "نافذة تلت & تيرن",
          "hs5_desc": "نظام متعدد الوظائف للفتح والإمالة.",

          "hs6_title": "باب قابل للطي",
          "hs6_desc": "نظام باب قابل للطي للمساحات الواسعة.",

          "hs7_title": "الباب الرئيسي",
          "hs7_desc": "باب رئيسي من الألمنيوم قوي ومتين.",

          "hs8_title": "نافذة سحاب",
          "hs8_desc": "نافذة سحاب سلسة وهادئة.",
          "whyChoose": "لماذا تختار منتجاتنا؟",
          "feat1_title": "جودة ممتازة",
          "feat1_text": "جميع المنتجات مصنوعة من سبائك الألمنيوم عالية الجودة لضمان المتانة والأداء.",
          "feat2_title": "كفاءة عالية في استهلاك الطاقة",
          "feat2_text": "تقنية العزل الحراري والزجاج المزدوج لتوفير طاقة مثالي طوال العام.",
          "feat3_title": "آمن ومحمي",
          "feat3_text": "أنظمة قفل متعددة النقاط وهياكل معززة لضمان أعلى مستوى من الأمان.",

          "footerTitle1": "شركة بريميوم للزجاج والألمنيوم",
          "footerDesc1": "شريكك الموثوق لحلول الألمنيوم والزجاج عالية الجودة.",

          "quickLinks": "روابط سريعة",
          "categories": "الفئات",
          "aboutUs": "من نحن",

          "ourProductss": "منتجاتنا",
          "win": "نوافذ",
          "doors": "أبواب",
          "partitions": "فواصل",
          "railings": "درابزين",
          "facades": "واجهات",
          "shower": "غرف استحمام",

          "connect": "تواصل معنا",
          "followUs": "تابعنا على وسائل التواصل الاجتماعي للحصول على التحديثات والإلهام",

          "footerRights": "© 2025 شركة بريميوم للزجاج والألمنيوم. جميع الحقوق محفوظة.",
          "privacy": "سياسة الخصوصية",
          "terms": "شروط الاستخدام",
          "cookies": "سياسة ملفات الارتباط",

          "aboutWhy": "لماذا نحن",
          "aboutTitle": "التميز في كل تفصيل",
          "aboutLead": "بخبرة تزيد عن 25 عامًا، نقدم حلول ألمنيوم وزجاج تجمع بين الجمال والمتانة وكفاءة الطاقة.",

          "feat11_title": "مواد عالية الجودة",
          "feat1_desc": "ألمنيوم عالي المتانة وزجاج مقسى لضمان عمر طويل",

          "feat22_title": "تركيب احترافي",
          "feat2_desc": "فريق متخصص يملك سنوات من الخبرة والتدريب",

          "feat33_title": "حلول مخصصة",
          "feat3_desc": "تصاميم مخصصة لتناسب احتياجاتك الخاصة",

          "feat4_title": "أسعار منافسة",
          "feat4_desc": "أفضل جودة بأفضل سعر دون أي تنازل",

          "aboutLearnMore": "اعرف المزيد عنا ➜",
///////////////////
          "aboutNav":"معلومات عن الشركة",
          "about_title":"معلومات عن الشركة",
          "about_subtitle":"الشركة الرائدة في تصنيع حلول الألمنيوم والزجاج المتميزة منذ عام 1970",
          "about_company_header":"معلومات عن الشركة",
          "about_company_p1":"بدأت رحلتنا منذ أكثر من 25 عامًا برسالة واضحة: توفير منتجات الألمنيوم والزجاج عالية الجودة، مدعومة بخدمة استثنائية وابتكار. واليوم، نفخر بخدمة أصحاب المنازل والمقاولين والمهندسين المعماريين وكبار المطورين بحلول متطورة مصممة خصيصًا لتلبية متطلبات مشاريعهم المتنوعة.",
          "about_company_p2":"نتخصص في أنظمة موفرة للطاقة، وهندسة دقيقة، وتصميمات مخصصة تُجسّد الرؤى. مصنعنا مجهز بأحدث الآلات، ويتكون فريقنا من محترفين معتمدين ملتزمين بالتميز.",
          "about_company_p3":"إن التزامنا الراسخ بالجودة والابتكار ورضا العملاء لا يزال يُسهم في نجاحنا ويضعنا في صدارة صناعة الألمنيوم والزجاج.",
          "years_experience":"سنوات الخبرة",
          "happy_clients":"عملاء سعداء",
          "projects_completed":"المشاريع المكتملة",
          "success_rate":"معدل النجاح",
          "our_mission_title":"عنوان مهمتنا",
          "our_mission_text":"توفير حلول مبتكرة وعالية الجودة من الألمنيوم والزجاج تعمل على تحسين مساحات المعيشة مع تجاوز توقعات العملاء.",
          "our_vision_title":"رؤيتنا",
          "our_vision_text":"أن نكون المزود الرائد المعترف به للابتكار والجودة ورضا العملاء، وبناء علاقات دائمة مع عملائنا.",

          "cat_title1": "بعض فئات منتجاتنا",

          "cat_windows_title1": "نوافذ",
          "cat_windows_desc1": "نوافذ ألمنيوم وزجاج عالية الجودة.",

          "cat_doors_title1": "أبواب",
         "cat_doors_desc1": "أنظمة أبواب حديثة لجميع المساحات.",

          "cat_shower_title1": "شاور بوكس",
          "cat_shower_desc1": "حلول زجاج أنيقة لغرف الاستحمام.",

          "cat_facades_title1": "واجهات",
          "cat_facades_desc1": "واجهات مباني وستائر زجاجية.",

          "cat_profiles_title1": "بروفيلات ألمنيوم",
          "cat_profiles_desc1": "أنظمة بروفيلات ألمنيوم متطورة.",

          "cat_sheets_title1": "ألواح ألمنيوم",
          "cat_sheets_desc1": "ألواح ألمنيوم عالية المتانة.",

          "cat_railings_title1": "درابزين",
          "cat_railings_desc1": "حلول درابزين آمنة وعصرية.",

          "cat_blinds_title1": "ستائر",
          "cat_blinds_desc1": "أنظمة ستائر وتظليل حديثة.",

          "show_all_btn": "عرض جميع الفئات",

          "history_title": "تاريخ شركتنا",

          "year_1970": "1970",
          "hist_1970": "تأسيس الشركة وأولى مشاريع الألمنيوم.",

          "year_1980": "1980",
          "hist_1980": "توسّع في الإنتاج وإضافة آلات جديدة.",

          "year_1990": "1990",
          "hist_1990": "الدخول في حلول الزجاج والواجهات.",

          "year_2000": "2000",
          "hist_2000": "إنجاز مشاريع تجارية كبرى.",

          "year_2010": "2010",
          "hist_2010": "تحديث تقني وتوسعة المصنع.",

          "year_2020": "2020",
          "hist_2020": "نمو القيادة والتواجد الدولي.",

          "cat":"الفئات",

          "cat_title": "جميع الفئات",

          "cat_windows_title": "شبابيك",
          "cat_windows_desc": "شبابيك ألمنيوم وزجاج عالية الجودة.",

          "cat_doors_title": "أبواب",
          "cat_doors_desc": "أنظمة أبواب حديثة لكل المساحات.",

          "cat_shower_title": "مغاسل دوش",
          "cat_shower_desc": "حلول زجاج الدوش الأنيقة.",

          "cat_facades_title": "واجهات",
          "cat_facades_desc": "واجهات مباني وستائر زجاجية.",

          "cat_profiles_title": "بروفيلات",
          "cat_profiles_desc": "أنظمة بروفيلات ألمنيوم متطورة.",

          "cat_sheets_title": "ألواح",
          "cat_sheets_desc": "ألواح ألمنيوم قوية ومتينة.",

          "cat_railings_title": "درابزين",
          "cat_railings_desc": "حلول درابزين آمنة وأنيقة.",

          "cat_blinds_title": "ستائر",
          "cat_blinds_desc": "أنظمة ستائر حديثة.",

          "cat_brackets_title": "براكتات",
          "cat_brackets_desc": "حوامل ألمنيوم قوية ومتينة.",

          "cat_rods_title": "قضبان",
          "cat_rods_desc": "قضبان ألمنيوم عالية الجودة.",

          "cat_tubes_title": "أنابيب",
          "cat_tubes_desc": "أنابيب ألمنيوم دقيقة ومقواة.",

          "cat_accessories_title": "إكسسوارات",
          "cat_accessories_desc": "إكسسوارات كاملة لأنظمة الألمنيوم."



      }};
    window.translations = translations;//

////////////////////////////////////////////////////
  // Globe Dropdown
    const langDrop = document.querySelector(".language-dropdown");
    const langBtn = document.querySelector(".lang-btn");

    langBtn.addEventListener("click", () => {
        langDrop.classList.toggle("active");
    });


    document.addEventListener("click", (e) => {
        if (!langDrop.contains(e.target)) langDrop.classList.remove("active");
    });
/////////////////////////////////////
  function applyTranslations() {
    const langData = translations[currentLang];
    document.documentElement.setAttribute('lang', currentLang);
    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (!key) return;
      // Inputs with placeholder
      if (el.tagName === 'INPUT') {
        el.setAttribute('placeholder', langData[key] || el.getAttribute('placeholder'));
      } else {
        el.textContent = langData[key] || el.textContent;
      }
    });
  }

    function initLanguageButtons() {
        document.querySelectorAll(".lang-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = btn.dataset.change;

                currentLang = selected;
                localStorage.setItem("lang", selected);

                applyTranslations();

                document.body.setAttribute('dir', selected === 'ar' ? 'rtl' : 'ltr');
                document.documentElement.setAttribute('lang', selected);

                document.querySelector(".language-dropdown").classList.remove("active");
            });
        });
    }


    function initFilters() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const cards = document.querySelectorAll('.product-card');
    function filter() {
      const term = (searchInput?.value || '').toLowerCase();
      const cat = categoryFilter ? categoryFilter.value : 'all';
      cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const matchesSearch = name.includes(term);
        const matchesCategory = cat === 'all' || card.dataset.category === cat;
        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
      });
    }
    if (searchInput) searchInput.addEventListener('input', filter);
    if (categoryFilter) categoryFilter.addEventListener('change', filter);
  }

  
// Tiny click animation helper on all buttons/links with .btn or .add-to-cart/.view-details
function initClickAnimations() {
  const clickable = document.querySelectorAll('.btn, .add-to-cart, .view-details');
  clickable.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('clicked');
      setTimeout(() => el.classList.remove('clicked'), 160);
    });
  });
}

  function initModal() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    const closeBtn = modal.querySelector('.close');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalAdd = document.getElementById('modal-add');

    function openModal(card) {
      modalImg.src = card.querySelector('img').src;
      modalName.textContent = card.querySelector('h3').textContent;
      modalDesc.textContent = card.querySelector('.desc').textContent;
      modalPrice.textContent = card.querySelector('.price').textContent;
      modal.classList.remove('hide');
      modal.classList.add('show');
      modal.style.display = 'flex';

      // Attach add-to-cart for modal
      const priceText = card.querySelector('.price').textContent.replace('$','').trim();
      const price = parseFloat(priceText);
      modalAdd.onclick = () => {
        const name = modalName.textContent;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // cart.push({name, price});
          const id = card.dataset.id;
          cart.push({ id, price });

          localStorage.setItem('cart', JSON.stringify(cart));
        alert(name + ' added to cart!');
      };
    }

    function closeModal() {
      modal.classList.remove('show');
      modal.classList.add('hide');
      setTimeout(() => { modal.style.display = 'none'; }, 200);
    }

    document.querySelectorAll('.view-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        openModal(card);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initLanguageButtons();
    initFilters();
    initModal();
    initClickAnimations();
  });
})();

// house img in home
// document.querySelectorAll(".hotspot").forEach(h => {
//     h.addEventListener("click", function (e) {
//         e.stopPropagation();
//
//         // اخفاء كل الكروت
//         document.querySelectorAll(".hotspot").forEach(x => x.classList.remove("show"));
//
//         // اظهار الكرت الحالي
//         this.classList.add("show");
//     });
// });
//
// // اغلاق عند الضغط خارج النقطة
// document.addEventListener("click", () => {
//     document.querySelectorAll(".hotspot").forEach(h => h.classList.remove("show"));
// });
