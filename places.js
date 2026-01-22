// places.js
// Not: tags otomatik üretilecek: [mekân adı] + [film adları]

window.PLACES = [
    {
        id: "taskisla",
        name: "Taşkışla",
        type: "Kışla / Okul",
        district: "Şişli",
        coords: {
            lat: 41.04111042529698,
            lon: 28.98981200517511
        },
        shortText: "Taşkışla, 19. yüzyılda Mekteb-i Tıbbiye-i Şahane için inşa edilmiş; günümüzde İTÜ Mimarlık Fakültesi olarak kullanılan anıtsal bir yapıdır.",
        description: `Taşkışla, İstanbul’un Şişli ilçesinde Taksim ile Maçka arasında konumlanan; 1846–1852 yılları arasında İngiliz mimar William James Smith tarafından Yeni Rönesans üslubunda, Mekteb-i Tıbbiye-i Şahane (Askerî Tıbbiye) için hastane olarak tasarlanmış anıtsal bir yapıdır.

1853–1856 Kırım Savaşı sırasında Fransız askerlerinin tedavisi amacıyla hastane olarak kullanılan yapı, savaş sonrasında bir süre atıl kalmış; 1860 yılında onarılarak Dolmabahçe Sarayı’nı korumaya yönelik askerî işlevle kullanılmaya başlanmıştır. Cumhuriyet’in ilanından sonra Maarif Vekâleti’ne devredilen yapı, 1926–1931 yılları arasında farklı kullanımlara sahne olmuş; 1943–1950 yılları arasındaki onarımın ardından İstanbul Teknik Üniversitesi Rektörlüğü ile Mimarlık-İnşaat Fakültesi’ne tahsis edilmiştir.

1983 yılında birinci derece korunması gerekli tarihî yapı olarak tescillenen Taşkışla, 1989’da alınan yargı kararıyla İstanbul Teknik Üniversitesi bünyesinde kalmış; 1999 Gölcük Depremi sonrası yeniden onarılmış ve günümüzde İTÜ Mimarlık Fakültesi olarak kullanılmaktadır.

Yapı; dikdörtgen planlı, ortası avlulu, bir bodrum ve iki tam katlı kurgusuyla; köşeleri vurgulanmış, katları yatay silmelerle ayrılmış ve ikinci kat pencereleri üçgen alınlıklarla belirginleştirilmiştir. Batı cephesindeki sekiz sütunlu portikten girilen yapıda, iç avlu etrafında dolaşan koridorlara açılan büyük mekânlardan oluşan bir plan şeması hâkimdir.`,
        placeImages: [
            "mekanlar/taskisla.jpeg"],

        films: [
            {
                title: "Otobüs Yolcuları",
                year: 1961,
                note: "Filmde Taşkışla’nın orta bahçesi İstanbul Üniversitesi olarak kullanılmıştır.",
                stills: [
                    "assets/otobus-yolculari/taskisla-amfi.png",
                    "assets/otobus-yolculari/taskisla.png",
                    "assets/otobus-yolculari/taskislaa.png"

                ]
            },
            {
                title: "Vesikalı Yarim",
                year: 1968,
                note: "",
                stills: [
                    "assets/vesikali-yarim/taskisla.jpeg"
                ]
            }
        ]
    },


    {
        id: "rumeli-hisari",
        name: "Rumeli Hisarı",
        type: "Hisar / Askeri Yapı",
        district: "Sarıyer",
        coords: { lat: 41.08486364818424, lon: 29.056709342749684 }, // merkez dot için
        shortText: "Rumeli Hisarı, İstanbul Boğazı’nın Avrupa yakasında, en dar noktasında yer alan anıtsal bir savunma yapısıdır.",
        description: "Fatih Sultan Mehmed tarafından 1452 yılında, İstanbul’un fethinden hemen önce inşa edilmiştir.\n\nHisar, üç büyük kule ve bunları birbirine bağlayan surlardan oluşur.",
        placeImages: [
            "mekanlar/rumeli.png"
        ],
        films: [
            {
                title: "Ümitler Kırılınca", year: 1962, note: "", stills: [
                    "assets/umitler-kirilinca/rumeli-hisar.jpeg"
                ]
            },
            {
                title: "Azap", year: 1973, note: "", stills: [

                ]
            },
            {
                title: "İstanbul 79",
                year: 1979,
                note: "",
                stills: [
                    "assets/istanbul79/istanbul79_rumelihisari.jpeg"
                ]
            }
        ],


        polygon: [
            [41.086027114602075, 29.055736682017795],
            [41.08557919930249, 29.05578239493039],
            [41.08475227072745, 29.055685889890896],
            [41.08440388566612, 29.055751919655847],
            [41.083921503301696, 29.05545224611211],
            [41.08383727744621, 29.05670173241245],
            [41.0845417085489, 29.056696653199765],
            [41.08488243610083, 29.056782999815482],
            [41.085196363292994, 29.05633094989264],
            [41.085812728173124, 29.056396979655972],
            [41.086027114602075, 29.055736682017795]
        ]
    },

    {
        id: "inonu-stadyumu",
        name: "Dolmabahçe Stadı (İnönü Stadyumu)",
        type: "Stadyum / Spor Yapısı",
        district: "Beşiktaş",
        coords: { lat: 41.03957091939591, lon: 28.994218290475317 },
        shortText: "Dolmabahçe Stadı (günümüzde Tüpraş Stadyumu), Dolmabahçe Sarayı’nın yakınında yer alan bir spor yapısıdır.",
        description: "1939’da hazırlanan projelerle başlayan süreç, savaş koşulları nedeniyle ertelenmiş; yapı farklı dönemlerde yenilenmiştir.\n\n2013’te yıkılarak yeniden inşa edilmiştir.",
        placeImages: [
            "mekanlar/inonu.png"
        ],
        films: [
            {
                title: "Aşka Kinim Var", year: 1962, note: "", stills: [
                    "assets/aska-kinim-var/dolmabahce-stadyumu.jpeg"
                ]
            },
            {
                title: "Vesikalı Yarim ", year: 1981, note: "", stills: [
                    "assets/vesikali-yarim/taskisla.jpeg"
                ]
            }
        ]
    },

    {
        id: "akm",
        name: "Atatürk Kültür Merkezi (AKM)",
        type: "Kültür Yapısı",
        district: "Beyoğlu",
        coords: { lat: 41.036577764477414, lon: 28.988267659336543 },
        shortText: "AKM, Taksim Meydanı’nda konumlanan ve Cumhuriyet döneminin simgesel kültür yapılarından biridir.",
        description: "Hayati Tabanlıoğlu’nun tasarladığı özgün yapı 1969’da açılmış; 2018’de yıkılıp Murat Tabanlıoğlu tarafından yeniden inşa edilmiştir.\n\n2021’den bu yana hizmet verir.",
        placeImages: [
            "mekanlar/akm.jpg"
        ],
        films: [
            { title: "Salak Milyoner", year: 1974, note: "", stills: [] },
            {
                title: "Şoför Nebahat", year: 1970, note: "", stills: [
                    "assets/sofor-nebahat/akm-sofor.jpeg",
                    "assets/sofor-nebahat/akmakm.jpeg"

                ]
            }
        ]
    },

    {
        id: "taksim-meydani",
        name: "Taksim Meydanı",
        type: "Meydan / Kamusal Alan",
        district: "Beyoğlu",
        shortText: "Taksim Meydanı, İstanbul’un modern kamusal yaşamının güçlü odaklarından biridir.",
        description: "Ulaşım ağlarının düğümlendiği, kültür ve ticaret akslarıyla çevrelenen meydan; Yeşilçam’da kalabalık ve kentli modernlik imgelerini hızla kuran bir arka plan üretir.",
        placeImages: [
            "mekanlar/taksim-meydani.jpg"
        ],
        films: [
            { title: "Salak Milyoner", year: 1974, note: "", stills: [] },
            {
                title: "Neşeli Günler", year: 1978, note: "", stills: [
                    "assets/neseli-gunler/meydan.jpeg",
                    "assets/neseli-gunler/taksimms.jpeg"

                ]
            },
            { title: "Taşı Toprağı Altın Şehir", year: 1978, note: "", stills: [] },
            {
                title: "İstanbul 79",
                year: 1979,
                note: "",
                stills: [
                    "assets/istanbul79/istanbul79_taksimmeydan.jpeg",
                    "assets/istanbul79/istanbul79_taksimmeydan-anit.jpeg"
                ]
            },

        ],
        polygon: [
            [41.0376830055022, 28.98591371283814],
            [41.037668932379034, 28.98477559070517],
            [41.03647552060508, 28.984592744853643],
            [41.03681609551094, 28.985764450918964],
            [41.03664440094394, 28.987018251041206],
            [41.03724392264775, 28.98733170107178],
            [41.0375000546687, 28.985872665810945],
            [41.0376830055022, 28.98591371283814]
        ]
    },

    {
        id: "tarabya-oteli",
        name: "Tarabya Oteli (Büyük Tarabya Oteli)",
        type: "Otel / Konaklama Yapısı",
        district: "Sarıyer",
        coords: { lat: 41.13967490125856, lon: 29.05729081301277 },
        shortText: "Tarabya Oteli, Boğaziçi kıyısında konumlanan önemli bir temsil ve konaklama yapısıdır.",
        description: "Tokatlıyan Oteli’nin bulunduğu alanda; 1954 yangını sonrası genişletilen arazi üzerinde 1957–1965 arasında Kadri Eroğan tarafından tasarlanan Büyük Tarabya Oteli inşa edilmiştir.",
        placeImages: [
            "mekanlar/tarabyaotl.jpg"
        ],
        films: [
            {
                title: "Beş Tavuk Bir Horoz", year: 1974, note: "", stills: [
                    "assets/bes-tavuk-bir-horoz/tarabya-otel.jpeg"
                ]
            },
            {
                title: "Erikler Çiçek Açtı", year: 1968, note: "", stills: [
                    "assets/erikler-cicek-acti/tarabya.jpeg",
                    "assets/erikler-cicek-acti/tarabyya.jpeg"
                ]
            },
            { title: "Afili Delikanlılar", year: 1964, note: "", stills: [] },
            { title: "Küçük Hanımın Şoförü", year: 1962, note: "", stills: [] }
        ]
    },

    {

        id: "beyazit-meydani",
        name: "Beyazıt Meydanı",
        type: "Meydan / Kamusal Alan",
        district: "Fatih",

        shortText: "Beyazıt Meydanı, İstanbul Üniversitesi ana kapısı, Beyazıt Camii ve Kapalıçarşı çevresinde konumlanan; Roma döneminden günümüze uzanan çok katmanlı bir kamusal alandır.",

        description: "Beyazıt Meydanı, Roma dönemindeki Forum Tauri’ye kadar uzanan geçmişiyle Bizans ve Osmanlı dönemlerinde farklı işlevler ve mekânsal düzenlemelerle sürekli dönüşüm geçirmiştir.\n\nCumhuriyet döneminde meydan, modern kentcilik anlayışları doğrultusunda yeniden biçimlendirilmiştir. 1920’lerde meydana eklenen havuz düzenlemesi ve 1950’lerde Ordu Caddesi’nin genişletilmesiyle yapılan müdahaleler, alanın yaya karakterini zayıflatarak meydanı giderek bir trafik alanına dönüştürmüştür.\n\nBu dönüşüm, 1960 yılında açılan Beyazıt Meydanı Düzenleme Yarışması ile eleştirel biçimde yeniden değerlendirilmiştir. Yarışmayı kazanan Turgut Cansever, meydanı mutlak yayalaştırma, kot farklarını setler ve rampalarla çözme ve tarihî yapılar arasındaki mekânsal ilişkiyi güçlendirme hedefiyle bir proje önermiştir.\n\nRoma’dan Osmanlı’ya ve modern döneme uzanan katmanlı yapısıyla Beyazıt Meydanı, İstanbul’da kamusal alanın nasıl tanımlandığına dair tartışmaları yansıtan önemli bir kentsel mekân olarak varlığını sürdürmektedir.",

        placeImages: [
            "mekanlar/beyazit.png"
        ],

        films: [
            {
                title: "Otobüs Yolcuları",
                year: 1961,
                note: "",
                stills: [
                    "assets/otobus-yolculari/beyazit.png"
                ]
            },
            {
                title: "Azap",
                year: 1973,
                note: "",
                stills: []
            }
        ],


        polygon: [
            [41.01096073455153, 28.964854588481813],
            [41.0107976789827, 28.964379198363616],
            [41.01026774559867, 28.963460831088156],
            [41.009808466551306, 28.96390020680394],
            [41.010101970690414, 28.964332379639075],
            [41.009960654045756, 28.96454126317593],
            [41.01017262889883, 28.965005848974215],
            [41.010457978585976, 28.964735740952534],
            [41.0106998454481, 28.965124696503466],
            [41.01096073455153, 28.964854588481813]
        ]
    },

    {
        id: "darcan-kosku",
        name: "Darcan Köşkü",
        type: "Konut",
        district: "Bakırköy (Yeşilköy)",

        coords: { lat: 40.95832721378136, lon: 28.8279264073237 },

        shortText: "Darcan Köşkü (eski adıyla Arnavut Hayreddin Bey Köşkü), Yeşilköy’de yer alan ve 19. yüzyıl sivil mimarisinin öne çıkan konut örneklerinden biridir.",

        description: "Darcan Köşkü, Art Nouveau tarzındaki dekoratif ögeleriyle dönemin kent içi konut mimarisinin önemli örneklerinden biri olarak kabul edilir ve birinci derece tarihi eser grubunda yer alır. Osmanlı’nın son dönem aydınlarından Hayreddin Bey’e II. Abdülhamid tarafından hediye edilen köşk, ölümünden sonra oğlu Mehmed Sami Bey’e, ardından eşi Nimet Hanım’a intikal etmiştir.\n\n2022 ortasında başlayan restorasyon çalışması yaklaşık iki yıl sürmüş; yapının planı ve mimari karakteri korunarak özgün tarihi ve kültürel nitelikleriyle yenilenmesi hedeflenmiştir. Restorasyon sürecinde, köşkün mimari dili korunarak eski ihtişamına kavuşması sağlanmıştır.",

        placeImages: ["mekanlar/darcan.png"],

        films: [
            { title: "Şaşkın Damat", year: 1975, note: "", stills: [] },


            { title: "Tosun Paşa", year: 1976, note: "", stills: [] },


            {
                title: "Neşeli Günler", year: 1978, note: "", stills: [
                    "assets/neseli-gunler/darcan.jpeg"
                ]
            },
            {
                title: "Kanlı Nigar", year: 1981, note: "", stills: [
                    "assets/kanli-nigar/darcan-kosk.jpeg"

                ]
            }
        ]
    },

    {
        id: "4-levent",
        name: "4. Levent (Bloklar)",
        type: "Konut",
        district: "Beşiktaş",

        shortText: "4. Levent, Türkiye’de erken modern toplu konut anlayışının önemli örneklerinden biri olarak kabul edilen, Büyükdere Caddesi aksına yakın konumlanan planlı bir yerleşim alanıdır.",

        description: "4. Levent, İstanbul’un Beşiktaş ilçesinde, Büyükdere Caddesi aksına bitişik konumlanan ve Türkiye’de erken modern toplu konut anlayışının önemli örneklerinden biri olarak kabul edilir. Mahalle, 1940’ların sonundan itibaren Kemal Ahmet Aru ve Rebii Gorbon tarafından etaplar halinde tasarlanmış; son uygulama etabı olan 4. Levent, 1950’li yılların sonunda tamamlanmıştır. Bu dönem, Türkiye’de sanayileşme ve kent içi göçün hızlandığı, konut sorununa planlı çözümler arandığı bir sürece karşılık gelmektedir.\n\n4. Levent’i özgün kılan önemli özelliklerden biri, konut cephelerine yerleştirilen mozaik ve duvar resimleridir. Bedri Rahmi Eyüboğlu, Nurullah Berk, Sabri Berkel ve Eren Eyüboğlu gibi sanatçıların eserleri, mimarlık ile plastik sanatlar arasında doğrudan bir ilişki kurarak Türkiye’de modern dönemin ilk kamusal sanat uygulamaları arasında yer almıştır. Bu yönüyle 4. Levent, modern konut alanı olmasının yanı sıra Cumhuriyet dönemi mimarlık ve sanat anlayışının birlikte okunabildiği önemli bir kentsel miras olarak değerlendirilmektedir.",

        placeImages: [
            "mekanlar/dortduncu_levent.jpg"
        ],

        films: [
            {
                title: "Otobüs Yolcuları", year: 1961, note: "", stills: [
                    "assets/otobus-yolculari/dorduncu-levent.png"
                ]
            },
            {
                title: "Pantolon Bankası", year: 1965, note: "", stills: [
                    "assets/pantolon-bankasi/dorduncu-levent-mozaik.jpeg",
                    "assets/pantolon-bankasi/dorduncu-levent.jpeg"
                ]
            },
            { title: "Vefasız", year: 1972, note: "", stills: [] },


            { title: "Ah Nerede", year: 1975, note: "", stills: [] }

        ],

        polygon: [
            [41.089232678793685, 29.010759353507265],
            [41.089221906597814, 29.010468429522266],
            [41.08918969376288, 29.01018030757815],
            [41.08913635054731, 29.009897762719724],
            [41.089062390726085, 29.00962351626],
            [41.08896852664093, 29.00936020956279],
            [41.08885566233738, 29.009110378596482],
            [41.0887248848552, 29.008876429504294],
            [41.08857745375589, 29.008660615426674],
            [41.08841478898851, 29.00846501479909],
            [41.08823845721066, 29.008291511334534],
            [41.08805015669663, 29.00814177588338],
            [41.08785170097809, 29.0080172503454],
            [41.08764500137519, 29.00791913378861],
            [41.0874320485863, 29.007848370908597],
            [41.08721489351382, 29.007805642939],
            [41.086995627511, 29.007791361100576],
            [41.08677636223986, 29.00780566265138],
            [41.08655920933425, 29.007848409575814],
            [41.086346260064175, 29.007919189924717],
            [41.086139565196824, 29.0080173217931],
            [41.085941115248566, 29.00814185989699],
            [41.08575282131778, 29.008291604685454],
            [41.085576496683196, 29.008465113899902],
            [41.08541383934454, 29.00866071646898],
            [41.08526641567396, 29.00887652860511],
            [41.085135645335036, 29.009110471947402],
            [41.08502278761474, 29.009360293576396],
            [41.08492892929986, 29.0096235877077],
            [41.08485497421418, 29.009897818855826],
            [41.08480163451743, 29.010180346245367],
            [41.08476942384939, 29.010468449234644],
            [41.08475865238519, 29.010759353507265],
            [41.08476942384939, 29.011050257779893],
            [41.08480163451743, 29.01133836076917],
            [41.08485497421418, 29.011620888158706],
            [41.08492892929986, 29.01189511930683],
            [41.08502278761474, 29.012158413438137],
            [41.085135645335036, 29.01240823506713],
            [41.08526641567396, 29.012642178409425],
            [41.08541383934454, 29.012857990545555],
            [41.085576496683196, 29.01305359311463],
            [41.08575282131778, 29.013227102329083],
            [41.085941115248566, 29.013376847117545],
            [41.086139565196824, 29.013501385221435],
            [41.086346260064175, 29.01359951708982],
            [41.08655920933425, 29.013670297438722],
            [41.08677636223986, 29.013713044363154],
            [41.086995627511, 29.01372734591396],
            [41.08721489351382, 29.01371306407553],
            [41.0874320485863, 29.01367033610594],
            [41.08764500137519, 29.01359957322592],
            [41.08785170097809, 29.013501456669136],
            [41.08805015669663, 29.013376931131152],
            [41.08823845721066, 29.013227195680003],
            [41.08841478898851, 29.013053692215447],
            [41.08857745375589, 29.012858091587862],
            [41.0887248848552, 29.01264227751024],
            [41.08885566233738, 29.012408328418054],
            [41.08896852664093, 29.012158497451747],
            [41.089062390726085, 29.01189519075454],
            [41.08913635054731, 29.011620944294812],
            [41.08918969376288, 29.011338399436386],
            [41.089221906597814, 29.01105027749227],
            [41.089232678793685, 29.010759353507265]
        ]
    },

    {
        id: "baltalimani-kemik-hastanesi",
        name: "Baltalimanı Kemik Hastanesi",
        type: "Sağlık Yapısı / Hastane",
        district: "Sarıyer",

        coords: {
            lat: 41.09568025648062,
            lon: 29.05357770338489
        },

        shortText: "Baltalimanı Kemik Hastanesi, Osmanlı döneminde saray olarak inşa edilmiş; Cumhuriyet döneminde sağlık yapısına dönüştürülmüş önemli bir tarihî yapıdır.",

        description: "Baltalimanı Sarayı, 19. yüzyılın ilk yarısında Sadrazam Mustafa Reşit Paşa (1800–1858) tarafından, yaklaşık 1600 m²lik bir alan üzerinde, iki katlı ve kâgir olarak inşa ettirilmiştir. Yapı, Sultan Abdülmecid I’in kızı Fatma Sultan ile evlendirilen Mustafa Reşit Paşa’nın oğlu Galip Paşa’nın ikametine tahsis edilmiştir. Galip Paşa’nın vefatının ardından saray, Hazine tarafından satın alınmıştır.\n\nMediha Sultan’ın Londra Sefaret Kâtibi Damat Ferit Paşa ile evlenmesinden sonra yapı, Damat Ferit Paşa Sarayı olarak anılmaya başlanmış ve 1922 yılına kadar yazlık saray işleviyle kullanılmıştır.\n\nCumhuriyet döneminde bir süre metruk kalan yapı; yağmur ve çevresel etkiler nedeniyle ciddi bozulmalar yaşamış, iç mekân süslemeleri zarar görmüştür. 1943 yılında Sağlık Bakanlığı’na devredilen yapı, gerekli onarım ve düzenlemelerin ardından 19 Haziran 1944’te 85 yataklı “Kemik ve Mafsal Veremi Hastanesi” olarak hizmete açılmıştır.\n\n1955 yılında Baltalimanı Kemik Hastalıkları Hastanesi Deniz ve Güneş Tedavi Enstitüsü, 1960 yılında ise Baltalimanı Kemik Hastalıkları Hastanesi adını almıştır.",

        placeImages: [
            "mekanlar/kemikhast.png"
        ],

        films: [
            {
                title: "Şoför Nebahat",
                year: 1970,
                note: "",
                stills: [
                    "assets/sofor-nebahat/kemik-sofor.jpeg"
                ]
            }
        ]
    },

    {
        id: "eyup-mezarligi",
        name: "Eyüp Mezarlığı",
        type: "Meydan / Kamusal Alan",
        district: "Eyüpsultan",

        shortText: "Eyüp Mezarlığı, Osmanlı’dan günümüze uzanan, İstanbul’un en önemli tarihî ve manevî mezarlık alanlarından biridir.",

        description: "Eyüp Mezarlığı, İstanbul’un Eyüpsultan ilçesinde, Haliç kıyısında konumlanan ve Osmanlı döneminden günümüze ulaşan en önemli tarihî mezarlık alanlarından biridir. Mezarlığın oluşumu, Eyüp Sultan Camii ve çevresinde şekillenmiş; fetih sonrası İstanbul’un manevî merkezlerinden biri hâline gelmiştir.\n\nOsmanlı döneminde Eyüp, manevî değeri yüksek bir bölge olarak kabul edildiğinden; devlet adamları, ulema, tarikat mensupları, şairler ve askerlerin defin alanı olarak kullanılmıştır. Bu yönüyle mezarlık, yalnızca bir gömü alanı değil; Osmanlı toplumsal yapısını, mezar taşı tipolojilerini ve ölüm kültürünü okuyabildiğimiz katmanlı bir tarihî peyzaj niteliği taşır.",

        placeImages: [
            "mekanlar/eyup_mezarligi.png"
        ],

        films: [
            {
                title: "Şoför Nebahat",
                year: 1970,
                note: "",
                stills: [
                    "assets/sofor-nebahat/mezarlik.jpeg"
                ]
            },
            {
                title: "Birleşen Yollar",
                year: 1970,
                note: "",
                stills: []
            }
        ],

        polygon: [
            [41.054471731850526, 28.934243712527262],
            [41.0534595202443, 28.933599959692742],
            [41.053748725149944, 28.932860328777224],
            [41.05350083530925, 28.932463119581882],
            [41.05336656125493, 28.931997426041477],
            [41.052664200200155, 28.931819366747362],
            [41.05136274666057, 28.931504338765194],
            [41.05156932830644, 28.93076470784851],
            [41.05088760641334, 28.930600345423443],
            [41.05086694806357, 28.93025792370318],
            [41.05017488960837, 28.93034010491519],
            [41.049792704954086, 28.930929070274715],
            [41.04990632765106, 28.931285188863967],
            [41.04986501032877, 28.931874154222413],
            [41.04949315326667, 28.93218918220572],
            [41.04870811478969, 28.932586391400974],
            [41.04834658076223, 28.932449422712892],
            [41.04812965939291, 28.932997297465306],
            [41.049637764596724, 28.933901290807],
            [41.05058805971083, 28.934010865757074],
            [41.05090826475586, 28.933860200199916],
            [41.051455708481285, 28.933805412724922],
            [41.05234400370114, 28.934284803133266],
            [41.055783452293014, 28.937709020336996],
            [41.05593837817722, 28.93754465791085],
            [41.05596936330997, 28.93698308628936],
            [41.05563885447205, 28.936353030323886],
            [41.05563885447205, 28.935914730522597],
            [41.05543228560478, 28.935353158901165],
            [41.055731810250535, 28.93517509960597],
            [41.05607264698139, 28.935270977688077],
            [41.05618625883287, 28.935161402738004],
            [41.05656840634748, 28.934846374754756],
            [41.05629987048812, 28.93433959060937],
            [41.05597969168457, 28.933887593937953],
            [41.05535998634767, 28.93395607828205],
            [41.05486421787435, 28.934243712527262],
            [41.054471731850526, 28.934243712527262]
        ]
    },

    {
        id: "haydarpasa-gari",
        name: "Haydarpaşa Garı",
        type: "Ulaşım Yapısı",
        district: "Kadıköy",
        coords: {
            lat: 40.99611199057557,
            lon: 29.01907611739992
        },
        shortText: "Haydarpaşa Garı, İstanbul’un ulaşım tarihinin simgesel yapılarından biri olarak Anadolu’ya açılan demiryolu hatlarının başlangıç noktasıdır.",
        description: "Haydarpaşa Garı, İstanbul’un Kadıköy ilçesinde, Marmara Denizi kıyısında konumlanan ve kentin ulaşım tarihinin en önemli yapılarından biridir. Yapı, 1906–1908 yılları arasında Alman mimarlar Otto Ritter ve Helmuth Cuno tarafından tasarlanmış; 1908 yılında hizmete açılmıştır.\n\nNeo-Rönesans etkiler taşıyan anıtsal mimarisi, taş cepheleri, köşe kuleleri ve simetrik plan kurgusuyla Haydarpaşa Garı, Osmanlı’nın son döneminde demiryollarına verilen stratejik önemi yansıtır. Anadolu’ya açılan demiryolu hatlarının başlangıç noktası olarak tasarlanan yapı, uzun yıllar boyunca İstanbul’un ulaşım ve kent belleğinde merkezi bir rol üstlenmiştir.\n\nZaman içinde çeşitli yangın ve onarım süreçlerinden geçen Haydarpaşa Garı, 2010 yılında meydana gelen yangının ardından kapsamlı restorasyon çalışmalarına konu olmuştur. 2014 yılından bu yana ise tren seferlerine ara verilmiştir.",
        placeImages: [
            "mekanlar/haydarpasa1.jpg"
        ],
        films: [
            {
                title: "Ver Elini İstanbul", year: 1962, note: "", stills: [
                    "assets/ver-elini-istanbul/haydarpasaa.jpeg"
                ]
            },
            { title: "Azap", year: 1973, note: "", stills: [] },
            { title: "Taşı Toprağı Altın Şehir", year: 1978, note: "", stills: [] }
        ]
    },

    {
        id: "buyuk-londra-oteli",
        name: "Büyük Londra Oteli",
        type: "Otel / Konaklama Yapısı",
        district: "Beyoğlu",
        coords: {
            lat: 41.03238355763801,
            lon: 28.975247549799718
        },
        shortText: "Büyük Londra Oteli, 19. yüzyıl sonundan itibaren Beyoğlu’nun erken turizm ve konaklama kültürünü temsil eden tarihî otellerden biridir.",
        description: "Büyük Londra Oteli, İstanbul’un Rumeli yakasında, Beyoğlu’nun Tepebaşı semtinde yer alan tarihî bir oteldir. Yapı, 1891 yılında konut olarak inşa edilmiş; kısa süre sonra otele dönüştürülerek hizmete açılmıştır. İstanbul’un 19. yüzyılda Batılı gezginler için bir turizm destinasyonu hâline gelmesiyle birlikte faaliyete geçen ilk otellerden biri olarak öne çıkar.\n\nOtel, Kallavi Sokak ile Meşrutiyet Caddesi’nin (eski adıyla Tepebaşı Caddesi) kesiştiği ada üzerinde konumlanır. Yapı, L. Adamopoulos ve N. Aperghis adlı iki ortak tarafından kâgir olarak inşa ettirilmiştir. Ön cephesinde, 1870 sonrası Beyoğlu’nda çok sayıda yapı gerçekleştirmiş olan Guglielmo Semprini’nin adı yer alır. Ön cephede yoğun süsleme, yan cephelerde ise daha sade bir dil benimsenmiş; yapı eklektik üslupta tasarlanmıştır. Beş katlı yapının ön cephesindeki iki karyatid, binanın simgesel öğeleri arasında yer alır.\n\nMülkiyeti 1926’da Moulatich, 1930’lardan itibaren ise Ceneviz kökenli D’Andria ailesine geçen Büyük Londra Oteli, Tepebaşı’ndaki Pera Palas ve Tokatlıyan gibi büyük otellerle bir süre rekabet etmiş; 1930’lu yıllardan itibaren eski canlılığını yitirmiş ve 1950’lerde gözden düşmüştür.",
        placeImages: [
            "mekanlar/londra.png"
        ],
        films: [
            {
                title: "Ver Elini İstanbul",
                year: 1962,
                note: "",
                stills: [
                    "assets/ver-elini-istanbul/buyuklondra.png",
                    "assets/ver-elini-istanbul/buyuklondra(1).png"
                ]
            }
        ]
    },

    {
        id: "zeyrek-camii",
        name: "Zeyrek Camii (Pantokrator Manastırı)",
        type: "Kültür Yapısı",
        district: "Fatih",
        coords: {
            lat: 41.01970642156431,
            lon: 28.957251301152382
        },
        shortText: "Zeyrek Camii, Bizans döneminde Pantokrator Manastırı olarak inşa edilmiş; İstanbul’un fethinden sonra medrese ve cami işlevleriyle çok katmanlı bir kullanım süreci yaşamıştır.",
        description: "Zeyrek Camii, Bizans döneminde Pantokrator Manastırı olarak, Haliç’e hâkim bir tepe üzerinde kurulmuş; yapımına 1124 yılı dolaylarında İmparator II. Ioannes Komnenos’un eşi İmparatoriçe Eirene tarafından başlanmış ve mimarı Nikeforos olan kompleks, birbirine bitişik üç kiliseden oluşmuştur. Pantokrator Manastırı; kiliselerin yanı sıra elli yataklı bir hastane, kütüphane, yaşlılar yurdu, tıp mektebi, eczahane ve ayazma gibi birimleriyle Orta Bizans döneminin en gelişmiş manastır komplekslerinden biri olarak işlev görmüştür.\n\nİstanbul’un fethinin ardından yapı, Fâtih Sultan Mehmed tarafından medreseye dönüştürülerek Osmanlı döneminin ilk eğitim kurumlarından biri hâline getirilmiş; kiliseler cami ve derslik olarak kullanılmıştır. Medresenin ilk müderrislerinden Molla Zeyrek Efendi, yapıya günümüzdeki adını vermiştir. 1766 depremi sonrasında III. Mustafa döneminde kapsamlı onarımlar geçiren yapı, bu süreçte Osmanlı baroku etkili süsleme ve mimari unsurlarla yeniden düzenlenmiştir.\n\nZeyrek Camii; Orta Bizans mimarisine özgü gömme tuğla tekniği, haç planlı kiliseleri, kubbeli örtü sistemi, opus sectile mermer döşemeleri ve Bizans–Osmanlı dönemlerine ait çok katmanlı bezemeleri ile dikkat çeker. 20. ve 21. yüzyıllarda çeşitli restorasyonlardan geçen yapı, son olarak 2019 yılında yeniden ziyarete açılmış olup, günümüzde yalnızca güney bölümü cami olarak kullanılmaktadır.",
        placeImages: [
            "mekanlar/zeyrek.png"
        ],
        films: [
            {
                title: "Karakolda Ayna Var",
                year: 1966,
                note: "",
                stills: []
            },
            {
                title: "Battal Gazi Destanı",
                year: 1971,
                note: "",
                stills: []
            }
        ]
    },

    {
        id: "bebek-parki",
        name: "Bebek Parkı",
        type: "Meydan / Kamusal Alan",
        district: "Beşiktaş (Bebek)",

        shortText: "Bebek Parkı, Boğaziçi kıyı bandında yer alan ve 20. yüzyıl başından günümüze kamusal açık alan olarak kullanılan önemli bir park alanıdır.",

        description: "Bebek Parkı, İstanbul’un Beşiktaş ilçesinde, Bebek semtinde Boğaziçi kıyısında konumlanan bir park alanıdır. Alan, 18. yüzyılda Hümayunabad Kasrı’nın bahçesi olarak düzenlenmiş; II. Meşrutiyet sonrasında, 1908 yılında park işlevi kazanmıştır. Bedrettin Dalan’ın belediye başkanlığı döneminde gerçekleştirilen kamulaştırmalarla park alanı yeniden düzenlenmiş ve bu süreçte Gürdal Duyar tarafından yapılan Şair Fuzuli heykeli parkın merkezine yerleştirilmiştir.\n\nPark, Sabancı Vakfı tarafından 2008 yılında kapsamlı bir yenilemeden geçirilmiş ve Türkan Sabancı Bebek Parkı adını almıştır. Yenileme ve peyzaj tasarımı, İtalyan mimar Ermanno Casasco ve ekibi tarafından gerçekleştirilmiştir. Günümüzde park, yaklaşık 16.000 m²lik toplam alanıyla Bebek kıyı bandının önemli kamusal açık alanlarından biri olarak değerlendirilmektedir.",

        placeImages: [
            "mekanlar/bebekparki.jpg"
        ],

        films: [
            {
                title: "Şoför Nebahat", year: 1970, note: "", stills: [
                    "şofor-nebahat/bebekparki.jpeg"
                ]
            },
            {
                title: "Neşeli Günler", year: 1978, note: "", stills: [
                    "assets/neseli-gunler/bebek.jpeg"

                ]
            }
        ],

        // Leaflet polygon formatı: [lat, lon]
        polygon: [
            [41.07660026920763, 29.044250249290627],
            [41.076612881223156, 29.043100024354857],
            [41.0754304942661, 29.043338434613872],
            [41.074935461944335, 29.043589392781428],
            [41.07499537051274, 29.043932368943985],
            [41.075335902390776, 29.044128952842385],
            [41.07660026920763, 29.044250249290627]
        ]
    },

    {
        id: "gezi-parki",
        name: "Gezi Parkı",
        type: "Meydan / Kamusal Alan",
        district: "Beyoğlu (Taksim)",

        shortText: "Gezi Parkı, Taksim Meydanı’nın hemen kuzeyinde yer alan ve İstanbul’un merkezindeki en önemli kamusal açık alanlardan biridir.",

        description: "Gezi Parkı’nın bulunduğu alan, 16. yüzyıldan itibaren Pangaltı Ermeni Mezarlığı (Surp Agop Ermeni Mezarlığı) olarak kullanılmış; Kanuni Sultan Süleyman döneminde Ermeni cemaatine mezarlık olarak tahsis edilmiştir. 19. yüzyıl sonu ve 20. yüzyıl başlarında mezarlık alanı çeşitli müdahalelere konu olmuş, 1939 yılında devlet tarafından istimlak edilerek bu işlevi sona ermiştir; bu süreçte Surp Krikor Lusavoriç Kilisesi yıkılmış ve bazı mezar taşları park düzenlemelerinde kullanılmıştır.\n\nAlan, 1806 yılında inşa edilen Topçu Kışlası (Taksim Kışlası) ile yeni bir kimlik kazanmış; yapı, 1909’daki 31 Mart Olayları sırasında isyancıların karargâhı olmuş ve ağır hasar görmüştür. Kışla, 1922 yılında iç avlusuna tribünler eklenerek Taksim Stadı’na dönüştürülmüş; Türkiye Millî Futbol Takımı ilk resmî maçını 26 Ekim 1923’te burada oynamıştır. Henri Prost’un imar planı doğrultusunda, dönemin valisi Lütfi Kırdar tarafından 1940 yılında kışla ve stadyum yıktırılmıştır.\n\nBu müdahalenin ardından alan, Cumhuriyet döneminde İstanbul’da düzenlenen ilk park olarak Gezi Parkı kimliğini kazanmıştır. Merdivenleri, teraslı oturma alanları ve yeşil düzenlemeleriyle kent merkezinde önemli bir açık alan hâline gelen park, bir dönem “İnönü Gezisi” adıyla da anılmış; 1991–1992 yıllarında yenilenmiş ve 2013’te Taksim Yayalaştırma Projesi kapsamında park altındaki bazı yapılar kaldırılarak yeniden düzenlenmiştir. Günümüzde Gezi Parkı, İstanbul’un merkezinde tarihsel katmanlarıyla öne çıkan önemli bir kentsel açık alan niteliğini sürdürmektedir.",

        placeImages: [
            "mekanlar/gezi-parki.jpg"
        ],

        films: [
            {
                title: "Neşeli Günler", year: 1978, note: "", stills: [

                ]
            },
            { title: "Taşı Toprağı Altın Şehir", year: 1978, note: "", stills: [] }
        ],

        // Leaflet polygon: [lat, lon]
        polygon: [
            [41.04024753857331, 28.987690838203463],
            [41.04047221278745, 28.986616906996858],
            [41.037634166375454, 28.98573894863867],
            [41.037314878496545, 28.98759677123627],
            [41.0389231276221, 28.988121978467916],
            [41.03940795972298, 28.98743215404403],
            [41.04024753857331, 28.987690838203463]
        ]
    },

    {
        id: "sait-halim-pasa-yalisi",
        name: "Sait Halim Paşa Yalısı",
        type: "Konut",
        district: "Yeniköy",

        coords: {
            lat: 41.1204414538208,
            lon: 29.07000083596364
        },

        shortText: "Sait Halim Paşa Yalısı, Boğaziçi kıyısında yer alan ve ‘Arslanlı Yalı’ adıyla da bilinen, Osmanlı’nın geç dönemine ait seçkin bir yalı örneğidir.",

        description: "Sait Halim Paşa Yalısı, İstanbul’un Yeniköy semtinde, Boğaziçi kıyısında konumlanan ve rıhtımındaki iki aslan heykeli nedeniyle “Arslanlı Yalı” adıyla da anılan tarihî bir yapıdır. Yalı, 19. yüzyılın son çeyreğinde neo-klasik üslupta ve ahşap bağdadi teknikle inşa edilmiştir. Cephelerinde ampir etkiler görülürken, iç mekânlarında arabesk ve eklektik bezeme anlayışı öne çıkar; bu zengin dekorasyon yapıya küçük bir Doğu sarayını andıran bir karakter kazandırır.\n\nPlan şemasında harem ve selamlık bölümleri aynı çatı altında çözümlenmiş, mekânlar ahşap ve camekânlı bölmelerle ayrılmıştır. Orta mekânı, anıtsal merdiveni, deniz cephesindeki balkonu ve çatıdaki fener bölümü yapının mimari kimliğini belirleyen başlıca unsurlar arasındadır. Arka cephesinde yer alan geniş bahçe ve koruluk alanı, yalının Boğaziçi peyzajıyla kurduğu ilişkiyi güçlendirmiştir.\n\nYalı, 2 Ağustos 1914’te Osmanlı Devleti’nin I. Dünya Savaşı’na giriş sürecini belirleyen Türk–Alman İttifakı’nın burada imzalanmış olması nedeniyle tarihsel açıdan da büyük önem taşır. Cumhuriyet döneminde farklı işlevlerle kullanılan yapı, 1995’teki yangın sonrası Prof. Dr. Doğan Kuban başkanlığında restore edilmiş; 2005’ten itibaren özel sektör tarafından işletilerek günümüzde düğün, davet ve organizasyonlara ev sahipliği yapan tarihî bir yapı olarak kullanılmaktadır.",

        placeImages: [
            "mekanlar/halimpasa.jpeg"
        ],

        films: [
            { title: "Tosun Paşa", year: 1976, note: "", stills: [] },
            {
                title: "Bizim Aile", year: 1975, note: "", stills: [
                    "assets/bizim-aile/halimpasa.jpeg"
                ]
            }
        ]
    },


    {
        id: "iii-ahmet-cesmesi",
        name: "III. Ahmet Çeşmesi",
        type: "Kültür Yapısı",
        district: "Fatih",
        coords: {
            lat: 41.008240175306696,
            lon: 28.98126948455584
        },
        shortText: "III. Ahmet Çeşmesi, Lâle Devri’nin en karakteristik mimari yapılarından biri olarak Topkapı Sarayı ile Ayasofya arasında yer alan anıtsal bir meydan çeşmesidir.",
        description: `III. Ahmet Çeşmesi, İstanbul’da Topkapı Sarayı Bâb-ı Hümâyun Kapısı ile Ayasofya arasında yer alan ve Lâle Devri’nin en karakteristik mimari yapılarından biri olarak kabul edilen anıtsal bir meydan çeşmesidir. Yapı, Sultan III. Ahmed’in emri ve Nevşehirli Damat İbrahim Paşa’nın teşvikiyle, 1728–1729 yıllarında inşa edilmiştir.

Klasik Osmanlı su yapılarının yalınlığından ayrılan çeşme; dört cepheli, köşeleri yumuşatılmış dikdörtgen planı, her cephede yer alan çeşme nişleri ve köşelerdeki sebil düzeniyle öne çıkar. Geniş ve dalgalı hatlı ahşap saçak, dekoratif kubbecikler, mukarnaslı ve çinili kuşaklar ile rokoko etkili lale ve akantus motifleri, Batı etkilerinin Osmanlı bezeme sanatına girmeye başladığı dönemi yansıtır.

III. Ahmet Çeşmesi, yalnızca bir hayrat yapısı değil; Osmanlı şehir estetiğinde meydanın görsel odağı olarak kurgulanmış bir mimari simgedir. Bu simgesel niteliği sayesinde, 18. ve 19. yüzyıllarda Avrupa’da düzenlenen uluslararası sergi ve yayınlarda Osmanlı sanatını temsilen gravür, çizim ve maketlerle yer almış; Osmanlı mimarisinin Batı’daki algısının oluşumunda etkili olmuştur. Günümüzde de Lâle Devri estetiğinin en rafine örneklerinden biri olarak İstanbul’un kültürel belleğinde özel bir konuma sahiptir.`,
        placeImages: [
            "mekanlar/ahmet_cesme.png"

        ],
        films: [
            {
                title: "Karakolda Ayna Var",
                year: 1966,
                note: "",
                stills: []
            },
            {
                title: "Kanlı Nigar",
                year: 1981,
                note: "Jenerikte görsel olarak kullanılıyor.",
                stills: [
                    "assets/kanli-nigar/ahmet-cesme.jpeg"
                ]
            }
        ]

    },

    {
        id: "muammer-karaca-evi",
        name: "Muammer Karaca Evi",
        type: "Konut",
        district: "Bakırköy / Yeşilyurt",
        coords: {
            lat: 40.9594383822222,
            lon: 28.826611723206895
        },
        shortText: "Muammer Karaca Evi, 1950’li yıllarda Yeşilyurt’ta inşa edilmiş ve Yeşilçam filmlerinde sıkça kullanılan modern bir konut yapısıdır.",
        description: `Muammer Karaca Evi, İstanbul’un Bakırköy ilçesindeki Yeşilyurt Mahallesi’nde 1950’li yıllarda mimar Neyyire Perran Doğancı tarafından tasarlanmış, dönemin modern mimarisini yansıtan iki katlı bir villa olarak inşa edilmiştir. 

1955–1962 yılları arasında yapıldığı düşünülen bu konut, sahibi tiyatrocu ve sinema sanatçısı Muammer Karaca’nın film sektöründeki ilişkileri sayesinde uzun yıllar Türk filmlerinin “zengin ev” sahnelerine mekân olmuştur. Yapının en az 23 filmde set olarak kullanıldığı bilinmektedir.

İç mekân düzeni, bahçe ile salon arasındaki akışkan ilişki ve modern yaşam tarzını yansıtan mimari detaylarıyla hem sinema izleyicileri hem de mimarlık meraklıları için dikkat çekici bir örnek olmuştur. Günümüzde yapı ayakta değildir ve yerinde bir apartman bulunmaktadır; ancak Yeşilçam filmlerindeki görüntüleriyle kolektif bellekte yaşamaya devam etmektedir.`,
        placeImages: ["mekanlar/muarremkaracaevi.jpeg",
            "mekanlar/muarrem-karaca-evi-12.webp"
        ],
        films: [
            { title: "Gençlik Hülyaları", year: 1962, note: "", stills: [] },
            { title: "Küçük Hanımın Şoförü", year: 1962, note: "", stills: [] },
            { title: "Afili Delikanlılar", year: 1964, note: "", stills: [] },
            { title: "Kırık Hayatlar", year: 1965, note: "", stills: [] },
            { title: "Cibali Karakolu", year: 1967, note: "", stills: [] },
            { title: "Yumurcak", year: 1969, note: "", stills: [] },
            { title: "Kalbimin Efendisi", year: 1970, note: "", stills: [] },
            {
                title: "Ateş Parçası", year: 1971, note: "", stills: [
                    "assets/ates-parcasi/karacaa.jpeg",
                    "assets/ates-parcasi/karacaevi.jpeg"
                ]
            },
            { title: "Güllü", year: 1971, note: "", stills: [] },
            { title: "Küçük Sevgilim", year: 1971, note: "", stills: [] },
            { title: "Satın Alınan Koca", year: 1971, note: "", stills: [] },
            { title: "Vurguncular", year: 1971, note: "", stills: [

            ] },
            { title: "Zehra", year: 1972, note: "", stills: [] },
            { title: "Beş Tavuk Bir Horoz", year: 1974, note: "", stills: [
                "assets/bes-tavuk-bir-horoz/karacaevi.jpeg"
            ] },
            { title: "Evcilik Oyunu", year: 1975, note: "", stills: [] },
            { title: "Gece Kuşu Zehra", year: 1975, note: "", stills: [] },
            { title: "Küçük Bey", year: 1975, note: "", stills: [] },
            { title: "Şaşkın Damat", year: 1975, note: "", stills: [] },
            { title: "Güngörmüşler", year: 1976, note: "", stills: [] }
        ]

    },


    {
        id: "cinar-otel",
        name: "Çınar Otel",
        type: "Otel / Konaklama Yapısı",
        district: "Bakırköy / Yeşilköy",
        coords: {
            lat: 40.959046110440084,
            lon: 28.83649198215332
        },
        shortText: "Çınar Otel, 1958’de açılan ve Yeşilköy sahilinde konumlanan, 1950’ler modern mimarlığını temsil eden önemli bir konaklama yapısıdır.",
        description: `Çınar Otel, İstanbul’un Yeşilköy semtinde, Marmara Denizi kıyısında konumlanan ve 1958 yılında hizmete açılan modern bir konaklama yapısıdır. Otel, II. Dünya Savaşı sonrasında Türkiye’de turizmin geliştirilmesine yönelik devlet politikaları doğrultusunda, uluslararası ölçekte hizmet verebilecek nitelikte bir yapı olarak tasarlanmıştır. Denizle doğrudan ilişki kuran konumu ve açık alan kullanımı, yapının hem prestijli hem de temsil gücü yüksek bir yerleşim olarak kurgulandığını göstermektedir.

Yapının mimari projesi, Rana Zıpçı, Ahmet Akın ve Emin Ertam tarafından hazırlanmıştır. Çınar Otel, 1950’ler modern mimarlık anlayışının belirgin özelliklerini taşıyan yalın ve işlev odaklı bir tasarıma sahiptir. Yatayda uzanan kütle düzeni, cephede tekrarlanan pencere modülasyonu ve süslemeden arındırılmış mimari diliyle dikkat çeker. Plan şemasında tüm odaların deniz manzarasına yönlendirilmiş olması, manzaranın tasarımın temel belirleyicilerinden biri olduğunu ortaya koyar. Betonarme taşıyıcı sistem ve geniş açıklıklar, dönemin uluslararası otel mimarlığıyla kurulan ilişkiyi güçlendirmiştir.

Çınar Otel, açıldığı tarihten itibaren İstanbul’un sosyal ve kültürel yaşamında önemli bir yer edinmiş; uzun yıllar boyunca modern yaşam tarzının ve kentin batıya açılan yüzünün simgelerinden biri olarak değerlendirilmiştir. Zamanla geçirdiği yenilemeler ve işlevsel dönüşümler, yapının özgün mimari kimliğinin tartışılmasına yol açmış; nihayetinde yıkım süreci, İstanbul’daki modern mimarlık mirasının korunmasına dair önemli bir örnek olarak gündeme gelmiştir.`,
        placeImages: [
            "mekanlar/cinar_hotel.png"
        ],
        films: [
            { title: "Allah Seviniz Dedi", year: 1962, note: "", stills: [] },
            { title: "Kahpe", year: 1963, note: "", stills: [] },
            { title: "Maceralar Kralı", year: 1963, note: "", stills: [] },
            { title: "Melek mi Şeytan mı?", year: 1971, note: "", stills: [] },
            { title: "Hamza Dalsın Osman Çalsın", year: 1977, note: "", stills: [] },
            { title: "Yuvasız Kuşlar", year: 1979, note: "", stills: [] }
        ]
    },


    {
        id: "yoros-kalesi",
        name: "Yoros Kalesi",
        type: "Hisar / Askerî Yapı",
        district: "Beykoz / Anadolu Kavağı",
        coords: {
            lat: 41.17860667836237,
            lon: 29.094917367946323
        },
        shortText: "Yoros Kalesi, Boğaz ile Karadeniz’in birleştiği noktada konumlanan, Bizans ve Osmanlı dönemlerinde stratejik öneme sahip bir savunma yapısıdır.",
        description: `Yoros Kalesi, İstanbul’un Beykoz ilçesinde, Anadolu Kavağı’nın kuzeyinde, Boğaz ile Karadeniz’in birleştiği stratejik noktada yer alan tarihî bir savunma yapısıdır. Kale, Bizans döneminde “Hieron” adıyla anılan, kutsal ya da dağ anlamına gelen tepe üzerinde kurulmuş; Bizans’ın kuzey deniz rotasını gözetlemek amacıyla uzun süre kullanılmıştır. Bölge, antik çağdan itibaren ticaret ve deniz trafiğinin belirlendiği bir başlangıç noktası olarak da önem taşımıştır.

Tarih boyunca Yoros Kalesi birçok kez el değiştirmiştir. İlk Osmanlı egemenliği 1305 yılında sağlanmış, daha sonra Cenevizliler tarafından ele geçirilmiş ve 14. yüzyılın sonunda yeniden Osmanlı hâkimiyetine geçmiştir. Sultan Bayezid I döneminde kale güçlendirilmiş; sonraki dönemlerde de Osmanlılar tarafından askerî amaçlarla kullanılmıştır.

Kale, tepenin doğal formuna uyumlu, düzensiz planlı bir yerleşim gösterir. İç bölüm (üst kale) tepe üzerindeki hâkim noktada konumlanırken, daha büyük dış surlar yamaç boyunca uzanır. Ana giriş cephesi, iki büyük yuvarlak burç arasında yer almakta olup tuğla–taş karışımı duvar örgüsüyle inşa edilmiştir. Kale içinde Bizans dönemine ait tuğla ve devşirme malzemeler dikkat çeker; surların bazı bölümleri günümüze kadar kısmen ulaşmıştır.

Yoros Kalesi, uzun tarihî süreci, Boğaz’a hâkim konumu ve günümüze ulaşan mimari kalıntılarıyla İstanbul’un kuzey savunma hattının önemli bir parçası olarak varlığını sürdürmekte; günümüzde ise manzara ve tarihî değeriyle ziyaretçilerin ilgisini çekmektedir.`,
        placeImages: [
            "mekanlar/yoros.png"
        ],
        films: [

            {
                title: "Tarkan: Mars’ın Kılıcı",
                year: 1969,
                note: "",
                stills: [
                    "assets/tarkan-marsin-kilici/yoros-kalesi.png"
                ]
            }
        ]
    },


    {
        id: "macka-silahhanesi",
        name: "Maçka Silahhanesi",
        type: "Kışla / Okul",
        district: "Maçka / Şişli",
        coords: {
            lat: 41.04465119813881,
            lon: 28.99507770239154
        },
        shortText: "Maçka Silahhanesi, 19. yüzyıl Osmanlı askerî ıslahat sürecinin ürünü olan; günümüzde İTÜ Maçka Yerleşkesi olarak kullanılan anıtsal bir yapıdır.",
        description: `Maçka Silahhanesi, İstanbul’un Maçka semtinde yer alan ve Sultan Abdülaziz’in emriyle 1873–1875 yılları arasında, dönemin Sermimâr-ı Devlet’i Sarkis Balyan tarafından inşa ettirilen anıtsal bir askerî yapıdır. Osmanlı İmparatorluğu’nun son döneminde yürütülen askerî ıslahat süreci kapsamında tasarlanan yapı, dönemin ileri yapım tekniklerini ve mimari anlayışını yansıtmaktadır.

Üç katlı olarak inşa edilen silahhane, geniş dikdörtgen planı, orta aksın iki yanında yer alan simetrik çift avlulu şeması ve aksiyal kurgulu cephe düzeniyle dikkat çeker. Güneybatı cephesindeki anıtsal giriş; yüksek pencereler, armalar ve balkonla vurgulanmış; bu cephe, uzun bir kentsel yüzeyin dengeli ve görkemli biçimde ele alınmasına örnek oluşturmuştur.

Osmanlı’nın son döneminde Jandarma Kumandanlığı, Cumhuriyet döneminde ise çeşitli askerî eğitim kurumları tarafından kullanılan yapı, 1955 yılında İstanbul Teknik Üniversitesi’ne tahsis edilmiştir. Bu süreçte dış kabuğu korunmuş, iç mekânları eğitim işlevine uygun biçimde yeniden düzenlenmiştir. Günümüzde Maçka Silahhanesi, İTÜ Maçka Yerleşkesi’nin ana binası olarak Yabancı Diller Yüksekokulu bünyesinde kullanılmakta ve eğitim işlevini sürdürmektedir.`,
        placeImages: [
            "mekanlar/maçka.png"
        ],
        films: [
            {
                title: "Karakolda Ayna Var",
                year: 1966,
                note: "",
                stills: []
            }
        ]
    },

    {
        id: "hilton-istanbul",
        name: "Hilton İstanbul Oteli",
        type: "Otel / Konaklama Yapısı",
        district: "Şişli",
        coords: {
            lat: 41.04445,
            lon: 28.98947
        },
        shortText: "Hilton Istanbul Bosphorus, Türkiye’de Uluslararası Üslup’un en erken ve nitelikli örneklerinden biri olarak modern mimarlığın simge yapılarındandır.",
        description: `Hilton Istanbul Bosphorus, 1952–1955 yılları arasında inşa edilmiş olup Türkiye’de Uluslararası Üslup’un en erken ve nitelikli örneklerinden biridir. Yapı, II. Millî Mimarlık Dönemi’nin anıtsal ve simgesel yaklaşımından uzaklaşarak, yalınlık, işlevsellik ve rasyonel planlama ilkeleriyle bu dönemin kapanışını temsil eder.

Yaklaşık 21 × 100 m boyutlarında dikdörtgenler prizması formundaki kütle; sade geometrisi, yatay etkiyi öne çıkaran cephe düzeni ve süslemeden arındırılmış yüzeyleriyle modernist bir duruş sergiler. Cephelerdeki ölçülü açıklıklar ve dengeli oranlar, yapının strüktürel mantığını açıkça okunur kılar. İç mekân organizasyonu, işlevsel dolaşım şemaları ve standartlaşmış kat planlarıyla uluslararası otelcilik mimarisinin prensiplerini yansıtır.

Proje, Skidmore, Owings & Merrill (SOM) tarafından tasarlanmış; Sedat Hakkı Eldem’in yerel danışmanlığıyla Türkiye koşullarına uyarlanmıştır. Dönemi için ileri kabul edilen prefabrikasyon ve hızlı kat yapım teknikleri, yapının kısa sürede tamamlanmasını sağlamış ve sonraki büyük ölçekli yapılara örnek olmuştur.

Hilton Istanbul Bosphorus, mimari dili, strüktürel netliği ve modern yaşam biçimini mekâna yansıtma biçimiyle, Türkiye’de modern mimarlığın ve çağdaş turizm yapılarının gelişiminde öncü ve referans bir yapı olarak kültür envanterinde önemli bir yere sahiptir.`,
        placeImages: [
            "mekanlar/hilton.png"
        ],
        films: [
            { title: "Katilin Kızı", year: 1964, note: "", stills: [] },
            { title: "Hırsız", year: 1965, note: "", stills: [] },
            { title: "Ah Güzel İstanbul", year: 1966, note: "", stills: [] },
            { title: "Birleşen Yollar", year: 1970, note: "", stills: [] },
            { title: "Oyun Bitti", year: 1971, note: "", stills: [] },
            { title: "Üç Arkadaş", year: 1971, note: "", stills: [] },
            { title: "Vurguncular", year: 1971, note: "", stills: [
                "assets/vurguncular/hilton-resepsiyon.jpeg",
                "assets/vurguncular/hilton.jpeg"
            ] },
            { title: "Turist Ömer", year: 1973, note: "", stills: [] },
            { title: "Vurgun", year: 1973, note: "", stills: [] },
            { title: "Yaz Bekarı", year: 1974, note: "", stills: [] },
            { title: "Beş Tavuk Bir Horoz", year: 1974, note: "", stills: [
                "assets/bes-tavuk-bir-horoz/hilton.jpeg"
            ] },
            { title: "Ne Umduk Ne Bulduk", year: 1976, note: "", stills: [] },
            { title: "Bizim Kız", year: 1977, note: "", stills: [] }
        ]
    },


    {
        id: "vakko-beyoglu-magazasi",
        name: "Vakko Beyoğlu Mağazası",
        type: "Kültür Yapısı",
        district: "Beyoğlu / İstiklal",
        coords: {
            lat: 41.03432,
            lon: 28.97967
        },
        shortText: "Vakko Beyoğlu Mağazası (1962), Türkiye’de modern mağazacılık ve departmanlı mağaza anlayışının erken ve etkili örneklerinden biridir.",
        description: `Vakko Beyoğlu Mağazası, 1962 yılında İstanbul’da İstiklal Caddesi No:123’te açılmış olup, Türkiye’de modern mağazacılık ve departmanlı mağaza anlayışının erken ve etkili örneklerinden biridir. Yapı, yalnızca yeni bir perakende modeli sunmakla kalmamış, aynı zamanda bu anlayışı destekleyen çağdaş bir mekânsal kurgu ortaya koymuştur.

Mağazanın mimari dekorasyon proje ve uygulaması, mimar Ercüment Rıza Tarcan tarafından gerçekleştirilmiş; yapı yaklaşık 15 ay gibi kısa bir sürede tamamlanmıştır. Yedi katlı olarak tasarlanan mağaza, her katın belirli bir ürün grubuna veya işleve ayrıldığı düşey organizasyon şeması ile dönemin “tek kat–tek vitrin” temelli alışveriş alışkanlıklarını sorgulayan yenilikçi bir yaklaşım sergilemiştir.

Cephede kullanılan kristal ve alüminyum ağırlıklı modern malzeme dili, yapının gündüz ve gece algısını güçlendirmiş; mağazayı Beyoğlu’nun geleneksel ticaret dokusu içinde ışık ve şeffaflık üzerinden tanımlanan modernist bir odak hâline getirmiştir. İç mekânda ise aydınlatma elemanları, sergileme üniteleri ve satış bankolarında tekrar eden altıgen geometrili tasarım öğeleri, katlar arasında bütüncül bir mimari dil kurulmasını sağlamıştır.

Üst katlarda yer alan sanat galerisi ve çay salonu, yapının yalnızca bir alışveriş mekânı değil, aynı zamanda sosyal ve kültürel bir buluşma alanı olarak kurgulandığını göstermektedir. Bu özellikleriyle Vakko Beyoğlu Mağazası, 1960’lar İstanbul’unda modern yaşam biçiminin, mimarlık ve perakende mekânı üzerinden ifadesi olarak kültür envanterinde önemli bir yere sahiptir.`,
        placeImages: [
            "mekanlar/vakko.png"
        ],
        films: [
            { title: "Ah Nerede", year: 1975, note: "", stills: [] }
        ]
    },

    {
        id: "sarol-villasi",
        name: "Sarol Villası",
        type: "Konut",
        district: "Etiler",
        coords: {
            lat: 41.08095,
            lon: 29.04155,
            approx: true,


        },
        shortText: "Sarol Villası, 1950’lerde Etiler Yapı Kooperatifi içinde yer alan ancak ölçek ve mimari diliyle ayrışan modernist bir konuttur.",
        description: `Sarol Villası, 1950’li yılların ortasında İstanbul’un Etiler semtinde, Etiler Yapı Kooperatifi yerleşimi kapsamında inşa edilmiş; ancak mimari dili ve ölçeğiyle kooperatifteki diğer konut tiplerinden belirgin biçimde ayrılan istisnai bir yapıdır. Villa, dönemin Demokrat Parti milletvekillerinden Mükerrem Sarol için yapılmıştır.

Yerleşimin genelinde Kemal Ahmet Aru tarafından tasarlanan ve “modern Türk evi” anlayışını yansıtan, eğimli çatılı ve bahçeli konut tipleri uygulanırken; Sarol Villası bu şemadan koparak açıkça modernist bir mimari dil benimsemiştir. Yaklaşık 700 m² büyüklüğündeki yapı, Boğaz’a hâkim konumda, kooperatif planı dışında kalan yaklaşık 5.000 m²’lik geniş bir parsel üzerinde yer almıştır.

Yapının mimarisi; betonarme strüktür, geniş açıklıklar, üçgen ve eğik beton plaklar, büyük cam yüzeyler ve yüzme havuzu gibi unsurlarla tanımlanır. Bu özellikleriyle villa, kooperatifin orta sınıfa yönelik ölçülü konut anlayışından uzaklaşarak lüks ve temsil değeri yüksek bir modernist konut örneği sunar. Mimarı kesin olarak bilinmemekle birlikte, tasarım yaklaşımı uluslararası modern mimarlık etkileriyle ilişkilendirilir.

Sarol Villası, yalnızca mimarisiyle değil, politik ve toplumsal tartışmaların odağında yer almasıyla da dikkat çeker. Yapının maliyeti ve ayrıcalıklı konumu, 1950’ler Türkiye’sinde konut kooperatifleri, devlet kredileri ve siyasal nüfuz ilişkilerine dair eleştirilerin sembollerinden biri hâline gelmiştir.`,
        placeImages: [
            "mekanlar/sarol.png"
        ],
        films: [
            {
                title: "Acı Hayat",
                year: 1962,
                note: "Filmde modernist ve yeni zengin yaşam tarzını temsil eden mekân olarak kullanılmıştır.",
                stills: [

                ]
            }
        ]
    },

    {
        id: "ihlamur-kasri",
        name: "Ihlamur Kasrı",
        type: "Kasır / Saray Yapısı",
        district: "Beşiktaş",
        coords: {
            lat: 41.05127,
            lon: 29.00140
        },
        shortText: "Ihlamur Kasrı, Tanzimat Dönemi’nde inşa edilmiş, batı etkili Osmanlı saray mimarisinin seçkin örneklerinden biridir.",
        description: `Ihlamur Kasrı, 1849–1855 yılları arasında Nikogos Balyan tarafından tasarlanmış olup, Tanzimat Dönemi Osmanlı saray mimarisinin batı etkili seçkin örnekleri arasında yer alır. Yapı topluluğu, Merasim Köşkü ve Maiyet Köşkü olmak üzere iki ana kütleden oluşur.

Merasim Köşkü, kütlesel kompozisyonu, barok etkili anıtsal merdiveni, hareketli cephe plastiği ve zengin kabartmalarıyla öne çıkar. Cephelerde simetriye dayalı düzen, pilastrlar, yuvarlatılmış köşeler ve plastik yüzey hareketleriyle güçlendirilmiştir. İç mekânda, 19. yüzyıl Osmanlı süsleme anlayışını yansıtan kalem işleri, tavan bezemeleri ve Avrupa kökenli mobilyalarla oluşturulmuş eklektik bir mekânsal bütünlük dikkat çeker.

Maiyet Köşkü, Merasim Köşkü’ne kıyasla daha küçük ölçekli ve sade bir mimari anlayış sergiler. Daha sınırlı süsleme kullanımı, bu yapının padişahın maiyeti ve günlük kullanımlar için tasarlandığını ortaya koyar. Her iki yapıda da iç-dış mekân ilişkisi, geniş açıklıklar ve bahçeye yönelimli planlama ile güçlendirilmiştir.

Kasırların yer aldığı bahçe düzeni; teraslar, havuzlar, fıskiyeler ve nişantaşları ile Osmanlı peyzaj geleneğini yansıtırken, simetrik akslar ve düzenlenmiş setlerle Avrupa bahçe anlayışıyla bütünleşir. Bu yönüyle Ihlamur Kasrı, mimari kütle, bezeme ve peyzajın birlikte ele alındığı bütüncül bir saray kompleksi niteliği taşır.

Ihlamur Kasrı, mimari diliyle geleneksel Osmanlı saray mimarisi ile Batılı üsluplar arasındaki geçişi açık biçimde ortaya koyan, 19. yüzyıl İstanbul’unda saray mimarlığının dönüşümünü temsil eden önemli bir yapıdır.`,
        placeImages: [
            "mekanlar/ihlamur.png"
        ],
        films: [
            {
                title: "Senede Bir Gün",
                year: 1966,
                note: "",
                stills: []
            }
        ]
    },

    {
        id: "sadikoglu-villasi",
        name: "Sadıkoğlu Villası",
        type: "Konut / Villa",
        district: "Büyükada",
        coords: {
            lat: 40.86360839413243,
            lon: 29.115919487772686
        },
        shortText: "Sadıkoğlu Villası, 1950’ler modern mimarisini temsil eden ve Yeşilçam filmlerine ev sahipliği yapmış nitelikli bir Büyükada konutudur.",
        description: `Sadıkoğlu Villası, 1953 yılında mimar Emin Necip Uzman tarafından tasarlanmış olup, Büyükada’da Dilburnu koyuna cepheli, arka cephesi Nizam Caddesi’ne bitişik bir parsel üzerinde yer almaktadır. Yapı, geçmişte Tevfik Rüştü Aras ve ailesine konut olarak hizmet vermiş, ayrıca Yeşilçam filmlerine mekân olmasıyla tanınmıştır.

Cadde kotu ile deniz seviyesi arasındaki yaklaşık 12,00 m’lik kot farkı, yapının sokaktan 6,00 m aşağıda oluşturulan bir teras üzerine yerleştirilmesini gerektirmiş; kademeli teraslar aracılığıyla bahçe ve denizle güçlü bir ilişki kurulmuştur. Denize erişim rampa ve merdiven ile sağlanmaktadır.

Plan şeması, iki kat boyunca yükselen açık bir hol etrafında gelişmekte; servis mekânları ana kütleye dik bir kola, yaşam alanları ise teraslara yöneltilmiştir. Deniz cephesindeki kısmi bodrum kat, bahçeye açılarak terasların devamı olarak değerlendirilmiştir.

Mimari dil; batı cephesindeki balkon çıkmaları, tek yana kırılmış metal çatı, taş kaplamalar ve soğuk demir korkuluklar ile tanımlanır. Sadıkoğlu Villası, topografyaya uyumlu yerleşimi ve ölçülü modern mimari yaklaşımıyla Büyükada’nın 1950’ler konut mimarisini temsil eden nitelikli bir örnektir.`,
        placeImages: [
            "mekanlar/sadikoglu.png"
        ],
        films: [
            {
                title: "Evcillik Oyunu",
                year: 1975,
                note: "",
                stills: []
            }
        ]
    },


    {
        id: "necmi-sahin-villasi",
        name: "Necmi Şahin Villası",
        type: "Konut / Villa",
        district: "Bayramoğlu",
        coords: {
            lat: 40.789365327897855,
            lon: 29.334630805471278
        },
        shortText: "Necmi Şahin Villası, 1960’lar Türkiye’sinde orta yüzyıl modern mimarlığının özgün ve sinemayla ilişkilenen örneklerinden biridir.",
        description: `Necmi Şahin Villası, 1960–1965 yılları arasında, mimar Yılmaz Şanlı tarafından tasarlanmış olup, Bayramoğlu’nda yer almaktadır. Yapı, mimarın Türkiye’de orta yüzyıl modern mimarlığının özgün temsilcileri arasında değerlendirilen üretimi içinde önemli bir konuma sahiptir.

Villa, denizle kurduğu güçlü mekânsal ilişki, iskeleden yapıya doğru uzanan kırık açılı yerleşim kararları, parçalı kütle kompozisyonu ve açılı geometrilerin egemen olduğu plastik mimari dili ile tanımlanır. Kütlelerin birbiriyle kurduğu ilişkide iç ve dış mekân sürekliliği ön planda tutulmuş; ön ve arka bahçe, veranda ve iç mekânlar bütüncül bir tasarım anlayışıyla ele alınmıştır. Yapıda yer alan düşey etkili şömine kütlesi, mimarın karakteristik tasarım öğelerinden biri olarak öne çıkar.

Necmi Şahin Villası, özgün mimari dili ve güçlü mekânsal kurgusu sayesinde uzun yıllar Türk sinemasında sıkça kullanılan bir film mekânı olmuş; bu yönüyle yalnızca bir konut yapısı değil, aynı zamanda kültürel bellekte yer etmiş ikonik bir mimari unsur niteliği kazanmıştır. Yapı, bağlamla kurduğu ilişki, plastik değerleri ve iç mekân tasarımıyla, 1960’lar Türkiye’sinde modern konut mimarisinin nitelikli örneklerinden biri olarak değerlendirilmektedir.`,
        placeImages: [
            "mekanlar/necmi_sahin_villasi.png"
        ],
        films: [
            {
                title: "İstasyon",
                year: 1977,
                note: "",
                stills: []
            },
            {
                title: "İşte Bizim Hikâyemiz",
                year: 1978,
                note: "",
                stills: []
            }
        ]
    },


    {
        id: "galata-kulesi",
        name: "Galata Kulesi",
        type: "Kule / Kamusal Yapı",
        district: "Beyoğlu",
        coords: {
            lat: 41.02552248235284,
            lon: 28.974257515598566
        },
        shortText: "Galata Kulesi, Bizans’tan Ceneviz ve Osmanlı dönemlerine uzanan çok katmanlı geçmişiyle İstanbul siluetinin en belirleyici anıtsal yapılarından biridir.",
        description: `Galata Kulesi (Galata Kulesi Müzesi), İstanbul’un Beyoğlu ilçesinde, Galata semtinde yer alan ve kentin siluetinde yüzyıllardır belirleyici rol oynayan anıtsal bir yapıdır. İlk çekirdeğinin Bizans döneminde bir gözetleme ve fener kulesi olarak ortaya çıktığı, günümüzdeki kâgir silindirik formunun ise Cenevizliler tarafından 1348 yılında Galata sur sisteminin baş kulesi olarak inşa edildiği kabul edilmektedir. Romanesk üsluptaki kule, bu dönemde tepesindeki haç nedeniyle *Turris Sancte Crucis* adıyla anılmıştır.

Osmanlı döneminde zindan, ambar, gözlemevi ve özellikle 18. yüzyıldan itibaren yangın gözetleme kulesi olarak kullanılan yapı, 1509 depremi sonrası II. Bayezid döneminde onarılmış; bu müdahaleye ait tuğla kuşaklar günümüzde de izlenebilmektedir. 1831 yangını sonrasında II. Mahmud döneminde gerçekleştirilen kapsamlı onarım ile kule, ampir üslupta bir cihannüma katı ve külah ile yeniden biçimlendirilmiş; bu görünüm yapının tarihsel kimliğinde belirleyici olmuştur.

1875 fırtınası sonrası eklenen ve özgün mimariyle uyumsuz olan üst katlar, 1960’lı yıllarda yapısal sorunlara yol açmış; bu nedenle kule, 1964–1967 yılları arasında Köksal Anadol ve Ersin Arıoğlu tarafından hazırlanan projeler doğrultusunda kapsamlı bir onarım ve strüktürel takviye sürecinden geçirilmiştir. Bu çalışmalarda, kulenin II. Mahmud dönemi (1832) siluetine geri döndürülmesi esas alınmış; ahşap döşemeler betonarmeye dönüştürülmüş ve yeni taşıyıcı sistemler minimum müdahale ilkesiyle uygulanmıştır.

Yaklaşık 62,6 m yüksekliğe sahip olan yapı, kalın kâgir beden duvarları, dairesel planlı kat organizasyonu ve taş-tuğla örgü sistemiyle Orta Çağ savunma mimarisinin karakteristik özelliklerini yansıtır. Günümüzde müze ve sergi işlevleriyle düzenlenen kule, üst katlarındaki seyir terasıyla İstanbul panoramasını sunmakta; 2020 yılından bu yana Galata Kulesi Müzesi adıyla kamusal bir kültür odağı olarak kullanılmaktadır.`,
        placeImages: [
            "mekanlar/galatakulesi.png"
        ],
        films: [
            {
                title: "Ver Elini İstanbul",
                year: 1962,
                note: "",
                stills: [
                    "assets/ver-elini-istanbul/galata-kulesi.png"
                ]
            }
        ]
    },

    {
        id: "eyupsultan-camii",
        name: "Eyüp Sultan Camii",
        type: "Cami / Külliye",
        district: "Eyüpsultan",
        coords: {
            lat: 41.048017061789665,
            lon: 28.933716183680104
        },
        shortText: "Eyüp Sultan Camii, İstanbul’un fethinden sonra inşa edilen ilk selâtin camisi olup, Osmanlı’nın dinî ve tören geleneğinde merkezi bir yere sahiptir.",
        description: `Eyüp Sultan Camii, zamanla adını aldığı Eyüp ilçesinin merkezinde yer alan Eyüp Sultan Külliyesi’nin ana yapısıdır. Külliyenin çekirdeğini, sahabeden Halid b. Zeyd Ebû Eyyûb el-Ensârî’ye ait türbe oluşturur. Kabrin, fetihten sonra Akşemseddin tarafından keşfedildiğine dair rivayet üzerine II. Mehmed (Fatih) tarafından türbe inşa ettirilmiş; ardından cami, medrese, imaret ve hamam eklenerek külliye teşekkül etmiştir. Türbenin Osmanlı’da kılıç kuşanma (taklîd-i seyf) törenlerine mekân olması ve halkın sürekli ziyaret pratiği, külliyeyi yüzyıllar boyunca onarımlar ve eklerle büyüyen, çevresinde yoğun hazire ve türbe dokusuyla bir “İslam nekropolü” karakteri kazanan odak haline getirmiştir.

Caminin ilk inşası kaynaklarda 863/1459 olarak verilir ve İstanbul’un ilk selâtin camii olması bakımından önem taşır. Ancak yapı, 1766 depreminde ağır hasar görmüş; III. Selim döneminde 1212/1798’de başlatılan onarımın mümkün olmadığı anlaşılınca cami tamamen yıkılarak 1798–1800 yılları arasında yeniden inşa edilmiştir. Günümüzde görülen cami bu yeniden yapımın ürünüdür. Bu süreçte harim kuzeye doğru genişletilmiş; cami–türbe arasındaki iç avluyu kuşatan medrese hücreleri, avludaki şadırvan havuzu ve üzerindeki Sinan Paşa Kasrı gibi bazı öğeler ortadan kaldırılmış; iç avlu “hâcet/kısmet çeşmeleri” ve çevrili kutsal alan vurgusuyla yeniden düzenlenmiştir.

III. Selim devri camisi, Batı etkilerinin arttığı bir dönemde inşa edilmesine karşın, plan ve strüktürde klasik Osmanlı merkezî kubbeli geleneğe yakındır. Yaklaşık 16 m çapındaki ana kubbe, sekiz taşıyıcıyla kurulan şemada yarım kubbe ve eksedralarla desteklenir. Mihrap, kıble duvarından taşan dikdörtgen bir çıkıntı içinde ele alınmıştır. Harim; kuzey, doğu ve batı yönlerinde iki katlı mahfil ve galerilerle çevrilirken, hünkâr mahfili ve ona bağlanan geçiş sistemi külliyenin tören ve protokol işlevleriyle uyumlu bir kurgu oluşturur. Kesme küfeki taşı duvar örgüsü, iç mekânda yoğun mermer kullanımı, barok etkili ayrıntılar ve sınırlı bezeme ile birlikte ağırbaşlı ve dengeli bir mimari ifade üretir. Bu karakter, erken tarihli ve uzun minarelerin oluşturduğu siluetle birlikte Eyüp Sultan Camii’ni döneminin barok eğilimlerinden kısmen uzaklaştırarak klasik çizgiye yaklaştıran bir örnek hâline getirir.`,
        placeImages: [
            "mekanlar/eyupsultsancami.png"
        ],
        films: [
            {
                title: "Şoför Nebahat",
                year: 1970,
                note: "",
                stills: [
                    "assets/sofor-nebahat/eyupsultan.png"
                ]
            }
        ]
    },

    {
        id: "sultanahmet-camii",
        name: "Sultan Ahmed Camii",
        type: "Cami / Külliye",
        district: "Fatih",
        coords: {
            lat: 41.00534108725495,
            lon: 28.976749213102096
        },
        shortText: "Sultan Ahmed Camii, klasik Osmanlı cami mimarisinin son büyük ve en yetkin temsilcilerinden biri olarak kabul edilen, 17. yüzyılın başına tarihlenen anıtsal bir selâtin camisidir.",
        description: `Sultan I. Ahmed tarafından XVII. yüzyılın başında yaptırılan Sultan Ahmed Camii ve külliyesi, 1609–1620 yılları arasında devrin başmimarı Sedefkâr Mehmed Ağa tarafından inşa edilmiştir. Külliye; cami, hünkâr kasrı, sıbyan mektebi, medrese, arasta, hamam, darülkurra, türbe, sebiller ve çeşmelerden oluşan geniş bir yapı topluluğu olarak Atmeydanı çevresinde konumlanır. Yerleşimde kesin bir simetri yerine, mevcut anıtlar, arsa sınırları ve topografya dikkate alınarak serbest ve işlev odaklı bir düzen tercih edilmiştir. Günümüze ulaşamayan bazı birimlere rağmen, cami ve revaklı avlu düzeni külliyenin ana kimliğini günümüzde de belirgin biçimde yansıtır.

Cami, klasik Osmanlı mimarisinin merkezi kubbeli ve revaklı avlulu şemasını geliştirerek sürdüren anıtsal bir yapıdır. Altı minaresiyle döneminin en dikkat çekici selâtin camisi olup, bu özellik Osmanlı mimarlığında istisnai bir örnek olarak kalmıştır. Kareye yakın planlı harimde, dört büyük filayağı üzerine oturan ana kubbe; dört yönde yarım kubbeler ve onların ardındaki eksedralarla kademeli biçimde genişletilerek dengeli ve ferah bir iç mekân oluşturulmuştur. Taşıyıcı sistem sivri kemerlerle duvar payelerine bağlanırken, köşelerde küçük kubbelerle örtü düzeni tamamlanmıştır. Bu strüktürel kurgu, dış cephede ağırlık kuleleri ve payandalar aracılığıyla okunur hâle getirilmiştir.

Harime, revaklı avluya açılan mukarnaslı cümle kapısı başta olmak üzere yan ve kıble yönlerindeki kapılarla girilir. İç mekân, mihrap duvarı dışında üç yönden mahfillerle çevrilidir. Altı sıra hâlinde düzenlenen pencereler sayesinde cami son derece aydınlıktır; alt kotlarda dikdörtgen, üst kotlarda sivri ve yuvarlak kemerli açıklıklar tercih edilmiştir. Mermer mihrap ve minber klasik üslubun olgun örnekleri arasında yer alır. Duvarların alt kesimlerini kaplayan sır altı tekniğinde İznik ve Kütahya çinileri ile üst bölümlerdeki kalem işi süslemeler, yapıya “Mavi Camii” olarak anılmasını sağlayan zengin fakat dengeli bir bezeme karakteri kazandırır. Bu yönleriyle Sultan Ahmed Camii, klasik Osmanlı cami mimarisinin doruk noktalarından biri olarak değerlendirilir.`,
        placeImages: [
            "mekanlar/sultanahmet.png"
        ],
        films: [
            {
                title: "Erikler Çiçek Açtı",
                year: 1968,
                note: "",
                stills: [
                    "assets/erikler-cicek-acti/sultan-ahmet.jpeg"
                ]
            },
            {
                title: "Birleşen Yollar",
                year: 1970,
                note: "",
                stills: []
            }
        ]
    },

    {
        id: "kilic-ali-pasa-camii",
        name: "Kılıç Ali Paşa Camii",
        type: "Cami / Külliye",
        district: "Beyoğlu (Tophane)",
        coords: {
            lat: 41.026377583297176,
            lon: 28.98092992273257
        },
        shortText: "Kılıç Ali Paşa Camii, Mimar Sinan’ın geç döneminde Ayasofya şemasını Osmanlı klasik mimarisi içinde yeniden yorumladığı, denizle doğrudan ilişkili anıtsal bir camidir.",
        description: `İstanbul Tophane’de deniz kıyısında konumlanan Kılıç Ali Paşa Camii, Kaptanıderyâ Kılıç Ali Paşa tarafından XVI. yüzyılın sonlarında bir külliye içinde inşa ettirilmiştir. Külliye; dış avlu duvarı içinde yer alan cami, bitişiğindeki medrese ve tek hamamdan oluşur; kıble tarafında ise kurucunun türbesi ve bir hazîre bulunmaktadır. Yapı, dönemin liman ve iskele düzeniyle doğrudan ilişki kuran konumuyla, denizcilik kimliğini mimariye yansıtan nadir örneklerden biridir.

Kitâbesine göre 988/1580 yılında tamamlanan cami, Osmanlı klasik mimarisinin başmimarı Mimar Sinan’ın geç dönem eserlerindendir. Plan kurgusunda Ayasofya’ya açık bir göndermede bulunur; ancak Sinan, bu büyük Bizans yapısının şemasını daha küçük ölçekte, statik ve mekânsal açıdan geliştirilmiş bir yorumla yeniden ele almıştır. Dikdörtgen planlı harimde dört büyük payenin taşıdığı, pandantiflerle geçilen yaklaşık 12,7 m çapındaki merkezi kubbe yer alır; kubbe, kıble ekseninde iki yarım kubbe ile dengelenmiştir. Yanlarda yer alan güçlü payandalar, Ayasofya benzerliğini vurgularken aynı zamanda yapıya statik güvenlik kazandırır.

Beş kubbeli klasik son cemaat yerine ek olarak, önde eğimli çatılı ikinci bir son cemaat mekânı bulunur. Mihrap, yarım kubbeli bir çıkıntı içinde düzenlenmiş; minber ve mihrap beyaz mermerden, sade fakat özenli bir işçilikle yapılmıştır. Harim ve son cemaat yerinde XVI. yüzyıl İznik çinileri yoğun biçimde kullanılmış, özellikle kıble duvarı bu bezemeyle öne çıkarılmıştır. Minare zaman içinde onarımlar geçirmiş olsa da günümüzde yeniden kurşun kaplı sivri külâhıyla klasik görünümüne kavuşmuştur. Bu özellikleriyle Kılıç Ali Paşa Camii, Sinan’ın Ayasofya geleneğini Osmanlı mimarlığı içinde yeniden yorumladığı en nitelikli örneklerden biri olarak değerlendirilir.`,
        placeImages: [
            "assets/erikler-cicek-acti/kilic-ali-pasa.jpeg"
        ],
        films: [
            {
                title: "Erikler Çiçek Açtı",
                year: 1968,
                note: "",
                stills: [
                    "assets/erikler-cicek-acti/kilic-ali-pasa.jpeg"
                ]
            }
        ]
    }



















];
