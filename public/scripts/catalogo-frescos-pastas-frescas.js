const pastas = [
  {
    "nombre": "Capelettis Rellenos Con Pollo Y Verdura MENDIA 500 Gr",
    "plu": "461478"
  },
  {
    "nombre": "Tapa Casera Para Canelones",
    "plu": "6035"
  },
  {
    "nombre": "Bollo De Pizza",
    "plu": "44333"
  },
  {
    "nombre": "Masa P/Tortilla Coto X Unidad",
    "plu": "13216"
  },
  {
    "nombre": "Ñoquis De Papa Bandeja",
    "plu": "13646"
  },
  {
    "nombre": "Ravioles Ricota Olivia - 2 Planchas",
    "plu": "44326"
  },
  {
    "nombre": "Ravioles Pollo Y Verdura Olivia - 2 Planchas",
    "plu": "44327"
  },
  {
    "nombre": "Ñoquis De Espinaca Bandeja",
    "plu": "13716"
  },
  {
    "nombre": "Ñoquis De Calabaza Bandeja",
    "plu": "13699"
  },
  {
    "nombre": "Ñoquis Remolacha Bandeja",
    "plu": "13657"
  },
  {
    "nombre": "Ñoquis Al Pesto Bandeja",
    "plu": "13698"
  },
  {
    "nombre": "Ñoquis Al Huevo Bandeja",
    "plu": "13642"
  },
  {
    "nombre": "Ñoquis Primavera Bandeja",
    "plu": "13652"
  },
  {
    "nombre": "Masa Para Tortas Fritas Caseras",
    "plu": "44259"
  },
  {
    "nombre": "Panzottis De Ricota Y Queso X 2 Planchas",
    "plu": "44260"
  },
  {
    "nombre": "Panzottis De Verdura Y Jamón Cocido - 2 Planchas",
    "plu": "44263"
  },
  {
    "nombre": "Panzottis De Pollo Verdura Y Jamon - 2 Planchas",
    "plu": "12849"
  },
  {
    "nombre": "Ravioles Verdura Y Queso - 2 Planchas",
    "plu": "44297"
  },
  {
    "nombre": "Sorrentino Capresse - 2 Planchas",
    "plu": "88225"
  },
  {
    "nombre": "Tapas Para Empanadas Para Freir VIA VESPUCCI 330g",
    "plu": "478280"
  },
  {
    "nombre": "Tapas Para Empanadas Para Horno Hojaldrada 330gr",
    "plu": "478283"
  },
  {
    "nombre": "Tap.Empanada Rotisera Via Vespucc Paq 450 Grm",
    "plu": "508211"
  },
  {
    "nombre": "Sorrentino De Ricota, Jamon Y Mozzarella - 2 Planchas",
    "plu": "44267"
  },
  {
    "nombre": "Sorrentinos De Calabaza X 2 Planchas",
    "plu": "46991"
  },
  {
    "nombre": "Tap.Empanada Criolla Via Vespucc Paq 350 Grm",
    "plu": "508220"
  },
  {
    "nombre": "Ravioles De Ricota Y Queso - 2 Planchas",
    "plu": "44295"
  },
  {
    "nombre": "Ravioles De Pollo Y Jamón - 2 Planchas",
    "plu": "44299"
  },
  {
    "nombre": "Ravioles De Pollo Y Verdura - 2 Planchas",
    "plu": "44281"
  },
  {
    "nombre": "Ravioles De Ricota Y Nuez - 2 Planchas",
    "plu": "44283"
  },
  {
    "nombre": "Tapas Para Empanadas Criolla Mendia X12 Uni 520g",
    "plu": "547559"
  },
  {
    "nombre": "Empanadas Horno X 22 Uni",
    "plu": "481207"
  },
  {
    "nombre": "Tap.Empanada LA SALTEÑA Bli 605 Grm",
    "plu": "481206"
  },
  {
    "nombre": "Tapa P/Pascualina Horno Via Vespucc Bsa 400 Grm",
    "plu": "478286"
  },
  {
    "nombre": "Tapa Para Pascualinas Criollas Ciudad Del Lago 400 Grm",
    "plu": "536081"
  },
  {
    "nombre": "Ravioles De Espinaca Mendia 1 Kgm",
    "plu": "547884"
  },
  {
    "nombre": "Ñoquis Via Vespucci Bsa 1000 Grm",
    "plu": "478285"
  },
  {
    "nombre": "Tapas Para Empanadas Criolla/Freir Mendia Fwp 300 Grm",
    "plu": "532068"
  },
  {
    "nombre": "Ñoquis Papa Mendia 500 Grm\n",
    "plu": "461048"
  },
  {
    "nombre": "Tapas Para Empanadas Criollas Ciudad Del Lago X12 Un 300 Grm",
    "plu": "536082"
  },
  {
    "nombre": "Tapa P/Pascualina Hojaldre Villa Dagri Fwp 400 Grm\n",
    "plu": "475345"
  },
  {
    "nombre": "Tapa P/Pascualina Criolla Vb La Salteña Bsa 400 Grm\n",
    "plu": "263844"
  },
  {
    "nombre": "Ravioles De Ricotta Mendia 500 Grm",
    "plu": "547883"
  },
  {
    "nombre": "Ñoquis Papa Mendia Cja 1 Kgm",
    "plu": "229932"
  },
  {
    "nombre": "Ravioles Ricota SUMASA Bsa 460 Grm",
    "plu": "498111"
  },
  {
    "nombre": "Ravioles Pollo Y Verdur SUMASA Bsa 460 Grm",
    "plu": "498122"
  },
  {
    "nombre": "Tapa P/Pascualina Criolla Coto Fwp 400 Grm\n",
    "plu": "290327"
  },
  {
    "nombre": "Tapa P/Pascualina . COTO Bol 400 Grm",
    "plu": "26582"
  },
  {
    "nombre": "Tapa P/Pascualina Hojaldre Vb LA SALTEÑA Bsa 400 Gr",
    "plu": "263843"
  },
  {
    "nombre": "Tapa P/Pascualina C/Separa Ciudad Del  Bsa 400 Grm\n",
    "plu": "24897"
  },
  {
    "nombre": "Ravioles De Pollo Y Verdura MENDIA 1 Kg",
    "plu": "468763"
  },
  {
    "nombre": "Ñoquis De Papa Via Vespucc Paq 500 Grm",
    "plu": "508217"
  },
  {
    "nombre": "Tap.Empanada X18 Uni Crioll Signo De Or Fwp 450 Grm",
    "plu": "505628"
  },
  {
    "nombre": "Tap.Empanada X18 Uni Hojald Signo De Or Fwp 450 Grm",
    "plu": "505626"
  },
  {
    "nombre": "Tap.Empanada Rotiseras Signo De Or Paq 500 Grm\n",
    "plu": "168073"
  },
  {
    "nombre": "Tapa P/Pascualina Criolla Signo De Or Paq 380 Grm\n",
    "plu": "27212"
  },
  {
    "nombre": "Ravioles Pollo Via Vespucc Paq 1 Kgm",
    "plu": "508219"
  },
  {
    "nombre": "Ravioles Ricota Via Vespucc Paq 1 Kgm",
    "plu": "508218"
  },
  {
    "nombre": "Ravioles 4 Quesos Via Vespucc Paq 1 Kgm",
    "plu": "508221"
  },
  {
    "nombre": "Ravioles Pollo Y Verdur Via Vespucc Paq 1 Kgm",
    "plu": "508216"
  },
  {
    "nombre": "Tap.Empanada Rotiseras Mendia Bsa 460 Grm\n",
    "plu": "229933"
  },
  {
    "nombre": "Ravioles Muzza/Jamon Ciudad Del  Bli 500 Grm\n",
    "plu": "286626"
  },
  {
    "nombre": "Tap.Empanada Horno Ciudad Del Lago Bsa 300 Grm\n",
    "plu": "24171"
  },
  {
    "nombre": "Ravioles Pollo Y Verdur Via Vespucci Bsa 500 Grm",
    "plu": "478282"
  },
  {
    "nombre": "Ravioles Ricota Via Vespucc Paq 500 Grm",
    "plu": "508212"
  },
  {
    "nombre": "Ravioles 4 Quesos Via Vespucci Bsa 500 Grm",
    "plu": "478281"
  },
  {
    "nombre": "Ravioles Pollo Via Vespucc Paq 500 Grm",
    "plu": "508214"
  },
  {
    "nombre": "Tap.Empanada Hojaldre Mendia Fwp 520 Grm\n",
    "plu": "251644"
  },
  {
    "nombre": "Tap.Empanada Criolla X20 Mendia Bsa 520 Grm\n",
    "plu": "258362"
  },
  {
    "nombre": "Empanadas Freir X 15",
    "plu": "508919"
  },
  {
    "nombre": "Sorrentino De Nuez, Albahaca Y Ricota - 1 Plancha",
    "plu": "11730"
  },
  {
    "nombre": "Sorrentino Mediterraneo - 1 Plancha\n",
    "plu": "11731"
  },
  {
    "nombre": "Tap.Empanada Horno Mendia Bsa 390 Grm",
    "plu": "191132"
  },
  {
    "nombre": "Tap.Empanada Criolla Mendia Bsa 390 Grm\n",
    "plu": "191133"
  },
  {
    "nombre": "Tap.Empanada Hojaldre Villa Dagri Fwp 300 Grm\n",
    "plu": "475346"
  },
  {
    "nombre": "Tapas Para Empanadas Rotiseras VILLA DAGRI 450gr",
    "plu": "475348"
  },
  {
    "nombre": "Ravioles Cuatro Quesos Mendia Bli 500 Grm\n",
    "plu": "284216"
  },
  {
    "nombre": "Ravioles Pasteuriz Ricota Mozzarella Y Jamon MENDIA Bli 500 Grm",
    "plu": "256088"
  },
  {
    "nombre": "Ravioles Pasteuriz Pollo Y Verdur Mendia Bli 500 Grm\n",
    "plu": "256086"
  },
  {
    "nombre": "Tap.P/Pastel Pack X24 Villa Dagri Fwp 320 Grm",
    "plu": "475725"
  },
  {
    "nombre": "Tapas Para Empanadas Light LA SALTEÑA Bli 15 Uni 412 Grm",
    "plu": "35859"
  },
  {
    "nombre": "Tapas Para Pasteles Pack X24 U. 330g",
    "plu": "194584"
  },
  {
    "nombre": "Tapa P/Pascualina Criolla Mendia Bsa 400 Grm\n",
    "plu": "191131"
  },
  {
    "nombre": "Tapa P/Pascualina Hojaldre Mendia Bsa 400 Grm\n",
    "plu": "194585"
  },
  {
    "nombre": "Ravioles 4 Quesos Ciudad Del  Bli 500 Grm",
    "plu": "286623"
  },
  {
    "nombre": "Ravioles Pollo Y Verdur Ciudad Del  Bli 500 Grm\n",
    "plu": "286625"
  },
  {
    "nombre": "Tortelletis Pollo,Carne Y  Villa Dagri Bli 500 Grm",
    "plu": "507757"
  },
  {
    "nombre": "Tapa P/Pascualina . Signo De Or Paq 400 Grm\n",
    "plu": "27208"
  },
  {
    "nombre": "Tap.Empanada Criolla Punto&Pasta Bsa 300 Grm",
    "plu": "505529"
  },
  {
    "nombre": "Tapa P/Pascualina Criollas Light Mendia Bsa 400 Grm\n",
    "plu": "197278"
  },
  {
    "nombre": "Tapa P/Pascualina Criolla La Italiana Fwp 400 Grm\n",
    "plu": "488398"
  },
  {
    "nombre": "Ñoquis Semolin Villa Dagri Bli 500 Grm\n\n",
    "plu": "217955"
  },
  {
    "nombre": "Fideos Cordón Al Huevo - X Kg",
    "plu": "44341"
  },
  {
    "nombre": "Fideos Cordón De Morron X Kg",
    "plu": "44222"
  },
  {
    "nombre": "Fideos Finos Al Huevo X Kg",
    "plu": "44643"
  },
  {
    "nombre": "Tapas Para Empanadas Hojaldradas LA SALTEÑA X 12 Uni Bsa 330 Grm",
    "plu": "464572"
  },
  {
    "nombre": "Tapas Para Empanadas Criollas X 12 Uni LA SALTEÑA Bsa 330 Grm",
    "plu": "464571"
  },
  {
    "nombre": "Macarron X Kg\n",
    "plu": "44230"
  },
  {
    "nombre": "Fideos Al Huevo X Kg",
    "plu": "44225"
  },
  {
    "nombre": "Fideos Caseros Zanahoria Coto Xkg",
    "plu": "70868"
  },
  {
    "nombre": "Ñoquis . La Salteña Ban 300 Grm",
    "plu": "500615"
  },
  {
    "nombre": "Fideos Caseros Al Pesto X Kg",
    "plu": "6039"
  },
  {
    "nombre": "Mostachol Al Huevo X Kg\n",
    "plu": "44231"
  },
  {
    "nombre": "Fideos Fusilli Color X Kg",
    "plu": "44229"
  },
  {
    "nombre": "Fideos Fusilli Al Huevo X Kg",
    "plu": "44228"
  },
  {
    "nombre": "Fideos Cinta Al Huevo X Kg",
    "plu": "44219"
  },
  {
    "nombre": "Fideos Cordón De Espinaca X Kg",
    "plu": "44340"
  },
  {
    "nombre": "Fideos A La Crema X Kg",
    "plu": "44224"
  },
  {
    "nombre": "Raviol Quesos LA SALTEÑA X 900 Gr",
    "plu": "508920"
  },
  {
    "nombre": "Ravioles Espinac / Rico Villa Dagri Bli 500 Grm\n",
    "plu": "217832"
  },
  {
    "nombre": "Ravioles Pollo Y Espina Villa Dagri Bli 500 Grm\n",
    "plu": "217958"
  },
  {
    "nombre": "Ravioles Ricota Villa Dagri Bli 500 Grm\n",
    "plu": "217833"
  },
  {
    "nombre": "Ravioles Carne Y Verd. Villa Dagri Bli 500 Grm\n",
    "plu": "471858"
  },
  {
    "nombre": "Ravioles 4 Quesos Villa Dagri Bli 500 Grm\n",
    "plu": "217960"
  },
  {
    "nombre": "Ñoquis De Papa La Salteña 900g",
    "plu": "565178"
  },
  {
    "nombre": "Sorrentinos Rucula/Jm Cdro . Bja 1 Uni",
    "plu": "13873"
  },
  {
    "nombre": "Ñoquis De Papa La Salteña 300g",
    "plu": "565177"
  },
  {
    "nombre": "Panzotti Ricota Y Queso Villa Dagri Bli 500 Grm",
    "plu": "507755"
  },
  {
    "nombre": "Sorrentinos Salmon . Bja 1 Uni",
    "plu": "13870"
  },
  {
    "nombre": "Ravioles Pollo Y Espinaca La Salteña 900g",
    "plu": "565173"
  },
  {
    "nombre": "Ravioles Ricotta Mozzarella Danbo Parmesano La Salteña 900g",
    "plu": "565180"
  },
  {
    "nombre": "Tap.Empanada Sin Tacc La Salteña Fwp 330 Grm",
    "plu": "470275"
  },
  {
    "nombre": "Sorrentino Napolitano - 1 Plancha",
    "plu": "12997"
  },
  {
    "nombre": "Sorrentino De Panceta Y Verdeo - 1 Plancha",
    "plu": "12640"
  },
  {
    "nombre": "Sorrentinos Cver/Alb/Muzz/   Bja 1 Uni",
    "plu": "13144"
  },
  {
    "nombre": "Sorrentinos Caseros . Bja 1 Uni",
    "plu": "13875"
  },
  {
    "nombre": "Tapa P/Pascualina Con Semillas Manjar Fwp 400 Grm",
    "plu": "524155"
  },
  {
    "nombre": "Raviolitos De Queso La Salteña 300g",
    "plu": "565176"
  },
  {
    "nombre": "Tapa P/Pascualina Libre Gluten Manjar Fwp 400 Grm\n",
    "plu": "475166"
  },
  {
    "nombre": "Tap.Empanada Con Semillas Manjar Bli 330 Grm",
    "plu": "524154"
  },
  {
    "nombre": "Ravioles Espinaca Mozzarella Y Parmesano La Salteña 450g",
    "plu": "565174"
  },
  {
    "nombre": "Ravioles Ricotta La Salteña 450g",
    "plu": "565179"
  },
  {
    "nombre": "Ravioles Carne Y Verdura La Salteña 450g",
    "plu": "565175"
  },
  {
    "nombre": "Ravioles Jamon Y Mozzarella La Salteña 450g",
    "plu": "565172"
  },
  {
    "nombre": "Ravioles Pollo Y Espinaca La Salteña 450g",
    "plu": "565187"
  },
  {
    "nombre": "Ravioles Ricotta Mozzarella Danbo Y Parmesano La Salteña 450g",
    "plu": "565188"
  },
  {
    "nombre": "Tapa P/Pascualina Sin Tacc La Salteña Fwp 380 Grm",
    "plu": "470274"
  },
  {
    "nombre": "Ravioles De Salmon Rosado - 1 Plancha",
    "plu": "43718"
  },
  {
    "nombre": "Sorrentinos Salmon C/Tinta . Bja 1 Uni",
    "plu": "13866"
  },
  {
    "nombre": "Panqueques Cuadrado Tuzzvill Bsa 200 Grm\n",
    "plu": "67864"
  },
  {
    "nombre": "Panqueques Redondo Tuzzvill Bsa 200 Grm",
    "plu": "67863"
  },
  {
    "nombre": "Tapa Para Empanada Rotisera Criollas Manjar 420 Grm",
    "plu": "542658"
  },
  {
    "nombre": "Tapa Para Pascualina Hojaldre Manjar 380 Grm",
    "plu": "542660"
  },
  {
    "nombre": "Tapa Para Empanada Rotisera Hojal Manjar 420 Grm",
    "plu": "542659"
  },
  {
    "nombre": "Ñoquis Libre De Glute Manjar Bli 400 Grm",
    "plu": "475164"
  },
  {
    "nombre": "Ravioles Ricot Espi Sin Manjar Bli 400 Grm\n",
    "plu": "475165"
  },
  {
    "nombre": "Ravioles De Carne Manjar Bli 400 Grm",
    "plu": "542655"
  },
  {
    "nombre": "Ñoqui Con Salsa Manjar 350 Grm",
    "plu": "545076"
  },
  {
    "nombre": "Tortelloni De Salmón Rana 250 Grm",
    "plu": "546723"
  },
  {
    "nombre": "Cappelletti De Carne Rana 250 Grm",
    "plu": "546721"
  },
  {
    "nombre": "Tortellini De Jamón Y Queso Rana 250 Grm",
    "plu": "546720"
  },
  {
    "nombre": "Ravioli De Berenjena Con Salsa Manjar 350 Grm",
    "plu": "545071"
  },
  {
    "nombre": "Raviolones De Brocoli Con Salsa Manjar 350 Grm",
    "plu": "545073"
  },
  {
    "nombre": "Ravioli De Hongos Con Salsa Manjar 350 Grm",
    "plu": "545075"
  },
  {
    "nombre": "Masa Fila Delicias Cja 100 Grm\n",
    "plu": "31241"
  },
  {
    "nombre": "Masa Empanada China Delicias Paq 12 Uni",
    "plu": "464841"
  },
  {
    "nombre": "Masa Strudel Delicias Cja 80 Grm\n",
    "plu": "31255"
  }
]