// ===== PRODUCT DATA — REAL FROM madameliora.pt =====
const products = [

  // ── VESTIDOS ──────────────────────────────────────────────────
  { id: 1,  name: 'Vestido "Grace" - Detalhe Rose Gold',           cat: ['vestidos'],           price: 39.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75681736/resize/480/597?1775844065',  sizes: ['XS','S','M','L','XL'], desc: 'Vestido elegante com detalhe rose gold. Peça de edição limitada.' },
  { id: 2,  name: 'Vestido "Wave" - Decote Assimétrico',           cat: ['vestidos'],           price: 17.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75685335/resize/480/597?1775852863',  sizes: ['XS','S','M','L'],      desc: 'Vestido com decote assimétrico moderno e elegante.' },
  { id: 3,  name: 'Vestido Curto em Renda Floral - Preto',         cat: ['vestidos'],           price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76175619/resize/480/597?1777412044',  sizes: ['XS','S','M','L'],      desc: 'Vestido curto em renda floral preta. Sofisticado e feminino.' },
  { id: 4,  name: 'Vestido Longo "Madame Liora" - Recortes Laterais', cat: ['vestidos'],        price: 24.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266799/resize/480/597?1777733148',  sizes: ['XS','S','M','L','XL'], desc: 'Vestido longo exclusivo com recortes laterais elegantes.' },
  { id: 5,  name: 'Vestido Midi "Heritage" - Estampado de Bolinhas', cat: ['vestidos'],         price: 21.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266830/resize/480/597?1777733383',  sizes: ['XS','S','M','L'],      desc: 'Vestido midi com estampado clássico de bolinhas.' },
  { id: 6,  name: 'Vestido "Liquid Silk" - Decote em Cascata',     cat: ['vestidos'],           price: 21.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849485/resize/480/640?1779313871',  sizes: ['XS','S','M','L'],      desc: 'Vestido com efeito liquid silk e decote em cascata sedutor.' },
  { id: 7,  name: 'Vestido Midi "Elegance Twist" - Terracota',     cat: ['vestidos'],           price: 34.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77047069/resize/480/715?1779873694',  sizes: ['XS','S','M','L','XL'], desc: 'Vestido midi em tom terracota com detalhe twist. Tendência da estação.' },
  { id: 8,  name: 'Vestido Longo "Éden" - Decote Halter com Brilho', cat: ['vestidos'],         price: 44.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77331381/resize/480/715?1780429500',  sizes: ['XS','S','M','L'],      desc: 'Vestido longo maxi com decote halter e brilho especial para noite.' },
  { id: 9,  name: 'Vestido Curto "Sweetheart" - Renda e Decote Halter', cat: ['vestidos'],      price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77331528/resize/480/597?1780429940',  sizes: ['XS','S','M','L'],      desc: 'Vestido curto sweetheart com renda delicada e decote halter.' },
  { id: 10, name: 'Vestido "Floral Breeze" - Laço Frontal e Folho', cat: ['vestidos','novidades'], price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77507650/resize/480/715?1780788233', sizes: ['XS','S','M','L','XL'], desc: 'Vestido floral com laço frontal e detalhe de folho. Nova chegada!', new: true },
  { id: 11, name: 'Vestido "Arcadia Bow" - Laço nas Costas e Folho', cat: ['vestidos','novidades'], price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77507676/resize/480/715?1780788440', sizes: ['XS','S','M','L'], desc: 'Vestido com laço elegante nas costas e folho delicado.', new: true },
  { id: 12, name: 'Vestido Midi "Sculpt" - Corte Justo Preto',     cat: ['vestidos'],           price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76175683/resize/480/597?1777412252',  sizes: ['XS','S','M','L'],      desc: 'Vestido midi preto de corte justo. Elegante e modelador.' },
  { id: 13, name: 'Vestido Curto Floral Bordado com Brilho',       cat: ['vestidos'],           price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76175838/resize/480/597?1777412511',  sizes: ['XS','S','M','L'],      desc: 'Vestido curto floral bordado com aplicações de brilho.' },
  { id: 14, name: 'Vestido Curto Bordado - Cintura Ninho de Abelha', cat: ['vestidos'],         price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76175971/resize/480/597?1780525781',  sizes: ['XS','S','M','L','XL'], desc: 'Vestido curto bordado com cintura em efeito ninho de abelha.' },
  { id: 15, name: 'Vestido Curto "Glow" - Brilho Acetinado',       cat: ['vestidos'],           price: 21.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76176353/resize/480/597?1779659356',  sizes: ['XS','S','M','L'],      desc: 'Vestido curto com efeito brilho acetinado para ocasiões especiais.' },

  // ── PARTES DE CIMA ────────────────────────────────────────────
  { id: 16, name: 'Colete Blazer "Milano" - Laço nas Costas',      cat: ['tops'],               price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75680544/resize/480/597?1780525780',  sizes: ['XS','S','M','L','XL'], desc: 'Colete blazer elegante com laço sofisticado nas costas.' },
  { id: 17, name: 'Corpete "Enchanted Garden" - Floral com Laços', cat: ['tops'],               price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75766002/resize/480/597?1780525780',  sizes: ['XS','S','M','L'],      desc: 'Corpete floral encantador com detalhes em laços delicados.' },
  { id: 18, name: 'Top "Secret Garden" – Um Ombro & Flor 3D',      cat: ['tops'],               price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75696143/resize/480/597?1775914894',  sizes: ['XS','S','M','L'],      desc: 'Top de um ombro com flor escultural 3D. Único e fashion.' },
  { id: 19, name: 'Top "Silk Touch" - Decote Lingerie e Renda',    cat: ['tops','saldos'],      price: 10.00, oldPrice: 14.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75796619/resize/480/597?1776202209', sizes: ['XS','S','M','L'], desc: 'Top com decote lingerie e acabamento em renda. Em saldo!', sale: true },
  { id: 20, name: 'Top "Cloud Breeze" - Textura Leve e Alças Finas', cat: ['tops'],             price: 13.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75828219/resize/480/597?1776289531',  sizes: ['XS','S','M','L','XL'], desc: 'Top leve com textura aérea e alças finas delicadas.' },
  { id: 21, name: 'T-Shirt "Love Cat" - Aplicações com Brilho',    cat: ['tops'],               price: 13.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75796773/resize/480/597?1776202545',  sizes: ['XS','S','M','L','XL','XXL'], desc: 'T-shirt com estampa Love Cat e aplicações cintilantes.' },
  { id: 22, name: 'T-Shirt "Gingham Charm" - Laços e Pérolas',     cat: ['tops'],               price: 15.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829131/resize/480/597?1780525780',  sizes: ['XS','S','M','L'],      desc: 'T-shirt em gingham com detalhes de laços e pérolas.' },
  { id: 23, name: 'T-Shirt "Heart Ride" - Corações e Brilho',      cat: ['tops','novidades'],   price: 15.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77507582/resize/480/597?1780787695',  sizes: ['XS','S','M','L','XL'], desc: 'T-shirt com estampa de corações e detalhes brilhantes. Nova chegada!', new: true },
  { id: 24, name: 'Blusa "Garden Mist" - Floral em Contraste',     cat: ['tops'],               price: 15.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75797029/resize/480/597?1776203139',  sizes: ['XS','S','M','L','XL'], desc: 'Blusa floral em contraste elegante para o dia a dia.' },
  { id: 25, name: 'Blusa "Elegance Bow" - Gola Alta com Laço',     cat: ['tops','novidades'],   price: 15.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77507618/resize/480/597?1780787959',  sizes: ['XS','S','M','L'],      desc: 'Blusa de gola alta com laço lateral elegante. Nova chegada!', new: true },

  // ── SAIAS ─────────────────────────────────────────────────────
  { id: 26, name: 'Saia Curta "Urban Noir" - Efeito Pele',         cat: ['saias','saldos'],     price: 17.99, oldPrice: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75679703/resize/480/597?1775840245', sizes: ['XS','S','M','L'], desc: 'Saia curta em efeito pele. Estilo urbano e ousado.', sale: true },
  { id: 27, name: 'Saia Midi "Luna" - Brilho Acetinado',           cat: ['saias'],              price: 17.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75680795/resize/480/597?1775842499',  sizes: ['XS','S','M','L','XL'], desc: 'Saia midi com brilho acetinado elegante e fluido.' },
  { id: 28, name: 'Saia-Calção "Bella" – Alfaiataria com Cinto',   cat: ['saias','saldos'],     price: 16.00, oldPrice: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75686318/resize/480/597?1775854787', sizes: ['XS','S','M','L'], desc: 'Saia-calção de alfaiataria com cinto e racha lateral.', sale: true },
  { id: 29, name: 'Saia Midi "Cloud" – Textura em Relevo',         cat: ['saias'],              price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75686919/resize/480/597?1775855950',  sizes: ['XS','S','M','L','XL'], desc: 'Saia midi com textura em relevo e cintura elástica confortável.' },

  // ── CALÇAS ────────────────────────────────────────────────────
  { id: 30, name: 'Calças de Ganga "Liora" - Corte Modelador',     cat: ['calcas'],             price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829792/resize/480/597?1776291888',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga de corte modelador exclusivo da marca.' },
  { id: 31, name: 'Calças de Ganga "Liora" - Amarelo Manteiga',    cat: ['calcas'],             price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829909/resize/480/597?1776292167',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga em amarelo manteiga. Cor tendência.' },
  { id: 32, name: 'Calças de Ganga "Liora" - Verde Menta',         cat: ['calcas'],             price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829977/resize/480/597?1776292396',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga em verde menta refrescante.' },
  { id: 33, name: 'Calças de Ganga "Liora Wine" - Corte Evasé',    cat: ['calcas'],             price: 24.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75838333/resize/480/597?1776341880',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga wine com corte evasé favorecedor.' },
  { id: 34, name: 'Calças de Ganga - Corte Direito Assimétrico',   cat: ['calcas'],             price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849864/resize/480/597?1779314309',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga com corte direito e barra assimétrica.' },
  { id: 35, name: 'Calças de Ganga Redial - Corte Mom Fit',        cat: ['calcas'],             price: 31.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849970/resize/480/597?1779314464',  sizes: ['34','36','38','40','42'], desc: 'Calças de ganga mom fit com lavagem Redial exclusiva.' },
  { id: 36, name: 'Calças de Ganga "Bloom Stitch" - Bordado Floral', cat: ['calcas','novidades'], price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77511258/resize/480/715?1780833502', sizes: ['34','36','38','40','42'], desc: 'Calças de ganga com bordado floral exclusivo na barra. Nova chegada!', new: true },
  { id: 37, name: 'Calças "Lace Bow" - Perna Larga com Renda',     cat: ['calcas','novidades'], price: 18.00, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77511294/resize/480/597?1780833787',  sizes: ['XS','S','M','L','XL'], desc: 'Calças de perna larga com faixa de renda e laço. Nova chegada!', new: true },

  // ── CONJUNTOS ─────────────────────────────────────────────────
  { id: 38, name: 'Conjunto Alfaiataria "Saint-Tropez"',           cat: ['conjuntos'],          price: 24.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75680165/resize/480/597?1780525780',  sizes: ['XS','S','M','L'],      desc: 'Conjunto de alfaiataria elegante inspirado em Saint-Tropez.' },
  { id: 39, name: 'Conjunto "Glow" - Top Estruturado e Saia Midi', cat: ['conjuntos'],          price: 24.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75684793/resize/480/597?1775852076',  sizes: ['XS','S','M','L'],      desc: 'Conjunto completo com top estruturado e saia midi elegante.' },
  { id: 40, name: 'Conjunto "Champagne Glow" - Colete e Calças',   cat: ['conjuntos'],          price: 34.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75796485/resize/480/597?1780525780',  sizes: ['XS','S','M','L'],      desc: 'Conjunto champagne com colete e calças fluidas elegantes.' },
  { id: 41, name: 'Conjunto "Botanical" - Bordado Floral',         cat: ['conjuntos'],          price: 34.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266864/resize/480/597?1777733641',  sizes: ['XS','S','M','L'],      desc: 'Conjunto com bordado floral botânico detalhado.' },
  { id: 42, name: 'Conjunto "Brisa" - Top e Saia Longa',           cat: ['conjuntos'],          price: 34.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76850386/resize/480/597?1779315219',  sizes: ['XS','S','M','L','XL'], desc: 'Conjunto brisa com top e saia longa fluida. Leveza e elegância.' },

  // ── MALAS ─────────────────────────────────────────────────────
  { id: 43, name: 'Mala de Mão "Monogram Elite" – Design em Relevo', cat: ['malas'],            price: 19.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75685879/resize/480/597?1775853965',  sizes: ['Único'],               desc: 'Mala de mão com design monograma em relevo exclusivo.' },
  { id: 44, name: 'Mala de Mão "Mademoiselle" - Monograma e Berloque', cat: ['malas'],          price: 17.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75686077/resize/480/597?1775854295',  sizes: ['Único'],               desc: 'Mala mademoiselle com monograma e berloque decorativo.' },
  { id: 45, name: 'Mala "Liora Signature" - Estruturada 22 cm',    cat: ['malas'],              price: 22.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75765068/resize/480/480?1776114096',  sizes: ['Único'],               desc: 'Mala estruturada de 22 cm da coleção Liora Signature.' },
  { id: 46, name: 'Mala "Liora Ruby" - Estruturada em Vermelho',   cat: ['malas'],              price: 22.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75765192/resize/480/597?1776114332',  sizes: ['Único'],               desc: 'Mala estruturada em vermelho vibrante. Ousada e elegante.' },
  { id: 47, name: 'Mala Executiva Diana&Co - Modelo Firenze',      cat: ['malas'],              price: 32.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266954/resize/480/597?1777733970',  sizes: ['Único'],               desc: 'Mala executiva Diana&Co modelo Firenze. Elegância italiana.' },
  { id: 48, name: 'Mala de Ombro "Élégance" - Acolchoada Creme',  cat: ['malas'],              price: 24.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849766/resize/480/597?1779314196',  sizes: ['Único'],               desc: 'Mala de ombro acolchoada em creme. Suave e elegante.' },
  { id: 49, name: 'Mala de Ombro BAGCO 24 cm - Alça Extra',        cat: ['malas','novidades'],  price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77501583/resize/480/597?1780746967',  sizes: ['Único'],               desc: 'Mala BAGCO 24 cm com alça extra incluída. Nova chegada!', new: true },
  { id: 50, name: 'Mala BAGCO Duo 24 cm - Carteira e Alça',        cat: ['malas','novidades'],  price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77501618/resize/480/597?1780748258',  sizes: ['Único'],               desc: 'Mala BAGCO Duo com carteira e alça extra. Nova chegada!', new: true },
  { id: 51, name: 'Mala BAGCO Signature - Carteira e Alça',        cat: ['malas','novidades'],  price: 29.99, img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/77501624/resize/480/597?1780748420',  sizes: ['Único'],               desc: 'Mala BAGCO Signature com carteira e alça extra incluída.', new: true },

  // ── ACESSÓRIOS — PULSEIRAS ────────────────────────────────────
  { id: 52, name: 'Pulseira "Cleópatra" em Aço Inoxidável',        cat: ['pulseiras'],          price: 8.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75678701/resize/480/597?1775838499',  sizes: ['Único'],               desc: 'Pulseira Cleópatra em aço inoxidável. Durável e elegante.' },
  { id: 53, name: 'Bracelete "Butterfly Flower" em Aço Inoxidável', cat: ['pulseiras'],         price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266382/resize/480/597?1777729743',  sizes: ['Único'],               desc: 'Bracelete butterfly flower em aço inoxidável premium.' },
  { id: 54, name: 'Pulseira "Silver Heart" em Aço Inoxidável',     cat: ['pulseiras'],          price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266517/resize/480/597?1777731111',  sizes: ['Único'],               desc: 'Pulseira silver heart em aço inoxidável. Delicada e feminina.' },

  // ── ACESSÓRIOS — BRINCOS ──────────────────────────────────────
  { id: 55, name: 'Brincos "Golden Leaf" em Aço Inoxidável',       cat: ['brincos'],            price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75680544/resize/480/597?1780525780',  sizes: ['Único'],               desc: 'Brincos golden leaf em aço inoxidável banhado a ouro.' },
  { id: 56, name: 'Brincos "Emerald Royale" em Aço Inoxidável',    cat: ['brincos'],            price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266382/resize/480/597?1777729743',  sizes: ['Único'],               desc: 'Brincos emerald royale com pedra verde vibrante.' },
  { id: 57, name: 'Brincos "Petals Blush" em Aço Inoxidável',      cat: ['brincos'],            price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266517/resize/480/597?1777731111',  sizes: ['Único'],               desc: 'Brincos petals blush em tons rosé delicados.' },
  { id: 58, name: 'Brincos "Iridescent Heart" em Aço Inoxidável',  cat: ['brincos'],            price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75678701/resize/480/597?1775838499',  sizes: ['Único'],               desc: 'Brincos coração iridescente em aço inoxidável.' },
  { id: 59, name: 'Brincos "Golden Drop" em Aço Inoxidável',       cat: ['brincos'],            price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75766002/resize/480/597?1780525780',  sizes: ['Único'],               desc: 'Brincos pendentes golden drop banhados a ouro.' },
  { id: 60, name: 'Brincos Argola "Ribbed Chunky" em Aço Inox',    cat: ['brincos'],            price: 4.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75696143/resize/480/597?1775914894',  sizes: ['Único'],               desc: 'Argolas chunky ribbed em aço inoxidável. Modernas e versáteis.' },

  // ── ACESSÓRIOS — COLARES ──────────────────────────────────────
  { id: 61, name: 'Colar "Siren Drop" em Aço Inoxidável',          cat: ['colares'],            price: 3.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829792/resize/480/597?1776291888',  sizes: ['Único'],               desc: 'Colar siren drop minimalista em aço inoxidável.' },
  { id: 62, name: 'Colar "Pearl Drop" em Aço Inoxidável',          cat: ['colares'],            price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75829131/resize/480/597?1780525780',  sizes: ['Único'],               desc: 'Colar pearl drop com pérola sintética elegante.' },
  { id: 63, name: 'Colar "Textured Heart" em Aço Inoxidável',      cat: ['colares'],            price: 6.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/75838333/resize/480/597?1776341880',  sizes: ['Único'],               desc: 'Colar coração com textura em aço inoxidável premium.' },

  // ── ACESSÓRIOS — ANÉIS ────────────────────────────────────────
  { id: 64, name: 'Anel Ajustável "Twist" em Aço Inoxidável',      cat: ['aneis'],              price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849864/resize/480/597?1779314309',  sizes: ['Ajustável'],           desc: 'Anel twist ajustável em aço inoxidável. Versátil e moderno.' },
  { id: 65, name: 'Anel "Bold Dome" em Aço Inoxidável',            cat: ['aneis'],              price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849970/resize/480/597?1779314464',  sizes: ['Ajustável'],           desc: 'Anel bold dome statement em aço inoxidável.' },
  { id: 66, name: 'Anel "Parallel Zirconia" em Aço Inoxidável',    cat: ['aneis'],              price: 5.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76850386/resize/480/597?1779315219',  sizes: ['Ajustável'],           desc: 'Anel com zircónia paralela em aço inoxidável brilhante.' },

  // ── CARTEIRAS ─────────────────────────────────────────────────
  { id: 67, name: 'Carteira Coveri "Sweet Heart"',                 cat: ['malas'],              price: 7.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76266954/resize/480/597?1777733970',  sizes: ['Único'],               desc: 'Carteira compacta Coveri Sweet Heart para dinheiro e cartões.' },
  { id: 68, name: 'Carteira Compacta Coveri - Dinheiro e Cartões', cat: ['malas'],              price: 7.99,  img: 'https://cdnx.jumpseller.com/madame-liora-boutique/image/76849766/resize/480/597?1779314196',  sizes: ['Único'],               desc: 'Carteira compacta Coveri com múltiplos compartimentos.' },
];

// ── Novidades (IDs marcados como new) ─────────────────────────
const novidadesIds = products.filter(p => p.new).map(p => p.id);
// Adiciona tag 'novidades' a todos marcados como new
products.forEach(p => { if (p.new && !p.cat.includes('novidades')) p.cat.push('novidades'); });

// ── Saldos (IDs marcados como sale) ───────────────────────────
products.forEach(p => { if (p.sale && !p.cat.includes('saldos')) p.cat.push('saldos'); });

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('mlCart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('mlWishlist') || '[]');
let currentPage = 'home';
let currentCat = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHomeGrid();
  updateCartBadge();
  updateWishlistBadge();
  setupScrollHeader();
  setupDropdownNav();
  setupScrollObserver();
});

function setupScrollHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
  });
}

function setupDropdownNav() {
  document.querySelectorAll('.dropdown a[data-cat]').forEach(link => {
    link.addEventListener('click', e => { e.preventDefault(); filterCat(link.dataset.cat); });
  });
}

function setupScrollObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ===== RENDER CARD =====
function renderCard(p) {
  const inWish = wishlist.includes(p.id);
  const imgHTML = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-card__img">
        ${imgHTML}
        <div class="product-card__badges">
          ${p.new ? '<span class="badge-tag badge-tag--new">Novo</span>' : ''}
          ${p.sale ? '<span class="badge-tag badge-tag--sale">Saldo</span>' : ''}
        </div>
        <div class="product-card__actions" onclick="event.stopPropagation()">
          <button class="btn-add-cart" onclick="addToCart(${p.id})">Adicionar</button>
          <button class="btn-wishlist" onclick="toggleWishlistItem(${p.id})">${inWish ? '♥' : '♡'}</button>
        </div>
      </div>
      <div class="product-card__info">
        <p class="product-card__cat">${catLabel(p.cat[0])}</p>
        <p class="product-card__name">${p.name}</p>
        <div class="product-card__price">
          <span class="price-current">€${p.price.toFixed(2).replace('.',',')}</span>
          ${p.oldPrice ? `<span class="price-old">€${p.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
        </div>
      </div>
    </div>`;
}

function catLabel(cat) {
  const labels = { novidades:'Novidades', vestidos:'Vestidos', tops:'Tops & Blusas', calcas:'Calças', saias:'Saias', casacos:'Casacos', conjuntos:'Conjuntos', macaoes:'Macacões', malas:'Malas', brincos:'Brincos', colares:'Colares', pulseiras:'Pulseiras', aneis:'Anéis', saldos:'Saldos' };
  return labels[cat] || cat;
}

// ===== HOME GRID (novidades) =====
function renderHomeGrid() {
  const newItems = products.filter(p => p.new).slice(0, 8);
  const fallback = newItems.length < 8 ? products.slice(0, 8 - newItems.length) : [];
  document.getElementById('homeGrid').innerHTML = [...newItems, ...fallback].map(renderCard).join('');
}

// ===== NAVIGATION =====
function showHome() {
  document.getElementById('homePage').style.display = '';
  document.getElementById('shopPage').style.display = 'none';
  document.getElementById('productPage').style.display = 'none';
  currentPage = 'home';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCat(cat) {
  currentCat = cat;
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';
  currentPage = 'shop';
  const radio = document.querySelector(`input[name="catFilter"][value="${cat}"]`);
  if (radio) radio.checked = true;
  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyFilters() {
  const cat = document.querySelector('input[name="catFilter"]:checked')?.value || 'all';
  const price = document.querySelector('input[name="priceFilter"]:checked')?.value || 'all';
  const sort = document.getElementById('sortSelect')?.value || 'default';
  let list = [...products];
  if (cat !== 'all') list = list.filter(p => p.cat.includes(cat));
  if (price === '0-15') list = list.filter(p => p.price <= 15);
  else if (price === '15-25') list = list.filter(p => p.price > 15 && p.price <= 25);
  else if (price === '25-50') list = list.filter(p => p.price > 25 && p.price <= 50);
  else if (price === '50+') list = list.filter(p => p.price > 50);
  list = sortList(list, sort);
  const titles = { all:'Todos os Produtos', novidades:'✨ Novidades', vestidos:'Vestidos', tops:'Tops & Blusas', calcas:'Calças', saias:'Saias', casacos:'Casacos', conjuntos:'Conjuntos', macaoes:'Macacões', malas:'Malas', brincos:'Brincos', colares:'Colares', pulseiras:'Pulseiras', aneis:'Anéis', saldos:'🏷️ Saldos' };
  document.getElementById('shopTitle').textContent = titles[cat] || 'Produtos';
  document.getElementById('shopCount').textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = list.length ? list.map(renderCard).join('') : '<p style="color:var(--muted);padding:40px 0">Nenhum produto encontrado.</p>';
}

function sortProducts(val) { applyFilters(); }
function sortList(list, sort) {
  if (sort === 'price-asc') return [...list].sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') return [...list].sort((a,b) => b.price - a.price);
  if (sort === 'name') return [...list].sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

// ===== SEARCH =====
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
}

function searchProducts(val) {
  if (!val.trim()) return;
  const q = val.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';
  document.getElementById('shopTitle').textContent = `Resultados para "${val}"`;
  document.getElementById('shopCount').textContent = `${results.length} produto${results.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = results.length ? results.map(renderCard).join('') : '<p style="color:var(--muted);padding:40px 0">Nenhum produto encontrado.</p>';
  const radio = document.querySelector('input[name="catFilter"][value="all"]');
  if (radio) radio.checked = true;
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = 'none';
  document.getElementById('productPage').style.display = '';
  currentPage = 'product';
  const inWish = wishlist.includes(p.id);
  const related = products.filter(x => x.cat[0] === p.cat[0] && x.id !== p.id).slice(0, 4);
  const imgHTML = p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius)" loading="eager">` : '<span style="font-size:6rem">👗</span>';
  document.getElementById('productDetail').innerHTML = `
    <div class="product-detail__back" onclick="goBack()">← Voltar</div>
    <div class="product-detail__grid">
      <div class="product-detail__images">
        <div class="product-detail__main-img">${imgHTML}</div>
      </div>
      <div class="product-detail__info">
        <p class="product-detail__cat">${catLabel(p.cat[0])}</p>
        <h1 class="product-detail__name">${p.name}</h1>
        <div class="product-detail__price">
          <span class="price-current">€${p.price.toFixed(2).replace('.',',')}</span>
          ${p.oldPrice ? `<span class="price-old">€${p.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
        </div>
        <p class="product-detail__desc">${p.desc}</p>
        <div class="product-detail__size">
          <label>Tamanho</label>
          <div class="size-options">
            ${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
          </div>
        </div>
        <div class="product-detail__actions">
          <button class="btn-add-to-cart-detail" onclick="addToCartDetail(${p.id})">🛍️ Adicionar ao Carrinho</button>
          <button class="btn-wishlist-detail" onclick="toggleWishlistItem(${p.id})" id="wishBtn${p.id}">${inWish ? '♥ Remover dos Favoritos' : '♡ Adicionar aos Favoritos'}</button>
        </div>
        <div class="product-detail__meta">
          <span><strong>Disponibilidade:</strong> Em stock</span>
          <span><strong>Envio:</strong> 2–4 dias úteis · Grátis acima de €49,99</span>
          ${p.new ? '<span>✨ <strong>Novidade</strong> — Edição limitada sem reposição</span>' : ''}
          ${p.sale ? '<span>🏷️ <strong>Em saldo</strong> — Enquanto durar o stock</span>' : ''}
        </div>
      </div>
    </div>
    ${related.length ? `
    <div style="margin-top:60px">
      <div class="section-header"><span class="label">Também pode gostar</span></div>
      <div class="products-grid">${related.map(renderCard).join('')}</div>
    </div>` : ''}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectSize(btn, size) {
  btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function goBack() {
  document.getElementById('productPage').style.display = 'none';
  if (currentCat && currentCat !== 'all') {
    document.getElementById('shopPage').style.display = '';
    currentPage = 'shop';
  } else {
    showHome();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCartDetail(id) {
  const selectedSize = document.querySelector('.size-btn.active')?.textContent;
  const p = products.find(x => x.id === id);
  addToCartWithSize(id, selectedSize || p.sizes[0]);
}

// ===== CART =====
function addToCart(id) {
  const p = products.find(x => x.id === id);
  addToCartWithSize(id, p.sizes[0]);
}

function addToCartWithSize(id, size) {
  const p = products.find(x => x.id === id);
  const key = `${id}-${size}`;
  const existing = cart.find(x => x.key === key);
  if (existing) { existing.qty++; } else { cart.push({ key, id, size, qty: 1 }); }
  saveCart();
  showToast(`"${p.name}" adicionado ao carrinho 🛍️`);
}

function removeFromCart(key) { cart = cart.filter(x => x.key !== key); saveCart(); renderCartSidebar(); }

function changeQty(key, delta) {
  const item = cart.find(x => x.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.key !== key);
  saveCart(); renderCartSidebar();
}

function saveCart() { localStorage.setItem('mlCart', JSON.stringify(cart)); updateCartBadge(); renderCartSidebar(); }
function updateCartBadge() { document.getElementById('cartBadge').textContent = cart.reduce((s,x) => s+x.qty, 0); }

function renderCartSidebar() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><svg width="60" height="60" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg><p>O carrinho está vazio</p></div>`;
    footer.style.display = 'none'; return;
  }
  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    const sub = p.price * item.qty; total += sub;
    return `<div class="cart-item">
      <div class="cart-item__img">${p.img ? `<img src="${p.img}" alt="${p.name}">` : '👗'}</div>
      <div class="cart-item__info">
        <p class="cart-item__name">${p.name}</p>
        <p class="cart-item__size">Tamanho: ${item.size}</p>
        <div class="cart-item__row">
          <div class="cart-item__qty">
            <button onclick="changeQty('${item.key}',-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.key}',1)">+</button>
          </div>
          <span class="cart-item__price">€${sub.toFixed(2).replace('.',',')}</span>
        </div>
        <p class="cart-item__remove" onclick="removeFromCart('${item.key}')">Remover</p>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cartTotal').textContent = `€${total.toFixed(2).replace('.',',')}`;
  document.getElementById('cartShipping').textContent = total >= 49.99 ? '✅ Envio grátis incluído!' : `Faltam €${(49.99-total).toFixed(2).replace('.',',')} para envio grátis`;
  footer.style.display = '';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  if (document.getElementById('cartSidebar').classList.contains('open')) renderCartSidebar();
}

// ===== WISHLIST =====
function toggleWishlistItem(id) {
  if (wishlist.includes(id)) { wishlist = wishlist.filter(x => x !== id); showToast('Removido dos favoritos'); }
  else { wishlist.push(id); showToast(`Adicionado aos favoritos ♥`); }
  localStorage.setItem('mlWishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  const btn = document.getElementById(`wishBtn${id}`);
  if (btn) btn.textContent = wishlist.includes(id) ? '♥ Remover dos Favoritos' : '♡ Adicionar aos Favoritos';
}

function toggleWishlist() {
  if (!wishlist.length) { showToast('A sua lista de favoritos está vazia'); return; }
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';
  const list = products.filter(p => wishlist.includes(p.id));
  document.getElementById('shopTitle').textContent = '♥ Favoritos';
  document.getElementById('shopCount').textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = list.map(renderCard).join('');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (wishlist.length) { badge.textContent = wishlist.length; badge.style.display = 'flex'; }
  else { badge.style.display = 'none'; }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
