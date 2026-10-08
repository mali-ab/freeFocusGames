---
title: "Tehniki Täzelenme: Fish Trace we Frog Memory Leap-i Arassa React/SVG-da Gaýtadan Ýazmak"
date: "2026-03-06"
excerpt: "Biz ýakynda meşhur kognitiw oýunlarymyz, Glowing Fish Trace we Frog Memory Leap-iň uly tehniki täzelenişini tamamladyk. Agir oýun dwigatellerinden (Phaser ýaly) arassa React we SVG arhitekturasyna geçmek bilen, öndürijiligi, mobil jogapkärçiligi we SEO tapylmagyny düýpli gowulandyrdyk."
coverImage: "/games/fish-trace.png"
author:
  name: "Üns Oýunlary Inženerçilik Topary"
  picture: "/authors/team.png"
keywords: "react oýun ösdürmek, svg animasiýa, phaser alternatiwasy, köp obýekt yzarlama oýuny, web öndürijiligini optimizirlemek, nextjs oýunlary, kognitiw öwretme oýunlary tehniki topluma, adhd web programmalary"
---

## Üýtgetmäniň zerurlygy

Ilki gezek **Glowing Fish Trace** (köp obýekt yzarlama oýunymyz) we **Frog Memory Leap** (Corsi blok basma synagyna esaslanýan giňişlik işjeň ýat oýunymyz) işe düşürenimizde, adaty web oýun dwigatellerine daýandyk. Bu dwigateller çylşyrymly 2D oýunlar üçin güýçli bolsa-da, biziň anyk ulanylyşymyz üçin birnäçe kemçilikleri döretdi:

1.  **Agir Bundle ölçegleri**: Ekranda birnäçe elementleri hereket etdirmek üçin tutuş fizika we render dwigatelini ýüklemek artykmaçdyr we sahypanyň ilkinji ýüklenişini haýalladýar.
2.  **Mobil jogapkärçilik meseleleri**: `<canvas>` elementini müňlerçe dürli mobil enjam ekranlarynda berk ölçegde ulanmak köplenç bulanık grafika, amatly däl gara zolaklar ýa-da kiçi, oýnap bolmaýan UI elementleri bilen netijelenýär.
3.  **Gara guty arhitektura**: Canvas elementi esasan DOM üçin "gara gutydyr". React ýagdaý dolandyryşy we standart web elýeterlilik (a11y) gurallary canvasyň içindäki obýektler bilen aňsatlyk bilen özara täsir edip bilmeýär.

## Çözüw: Arassa React + SVG + CSS Animasiýalar

Bu meseleleri çözmek üçin doly arhitektura gaýtadan ýazmak işini amala aşyrdyk. Agir baglanyşyklary aýyrdyk we oýun dwigatellerini **arassa React hooklary** bilen ýagdaý dolandyryşy we **Standart Wektor Grafika (SVG)** bilen renderleme üçin noldan gaýtadan gurdyk.

### 1. `useGameEngine` çemeleşmesi
Üçünji tarap framework tarapyndan berlen oýun aýlawy `update()` funksiýasyna daýanmagyň deregine, hususy React hooklaryny (meselem, `useFishEngine` we `useFrogEngine`) ornaşdyrdyk. Bu hooklar `requestAnimationFrame` ulanyp esasy oýun aýlawyny dolandyrýar, ýagdaý geçişlerini, çaknyşyk anyklama we dereje ösüşini standart React ömür aýlawynyň içinde doly dolandyrýar.

### 2. Takyk we ölçegli grafika üçin SVG
Oýun obýektlerini (balyklar, nilifer ýapraklary, gurbagalar) DOM-yň içinde SVG elementleri hökmünde renderlemek bilen çyzgiler) SVG elementleri hökmünde DOM-yň içinde renderlemek bilen, tükeniksiz ölçegliligi gazandyk. Uly 4K monitorda ýa-da kiçi smartfon ekranynda oýnaýan bolsaňyz-da, grafika bulanık canvas ulaldylmansyz takyk galýar.

Şeýle hem bu SVG aktiwleri üçin ýöriteleşdirilen React komponentlerini (meselem, `SunfishSVG.tsx` we `FrogSVG.tsx`) döretdik, bu bolsa grafika göni prop goşmaga mümkinçilik berýär. Sprit sahypalaryny çalyşmagyň deregine, React prop-y üýtgetmek bilen balygyň reňkini gökden ýagty sary reňke üýtgedip bileris.

### 3. Öndürijilik üçin CSS bilen dolandyrylýan animasiýalar
Gurbaga nilifer ýapragyna gonanda tolkun effekti ýa-da balygyň guýruk silkimesi ýaly animasiýalar üçin, mümkin boldugyça işi CSS animasiýalaryna we geçişlere geçirdik. Häzirki zaman brauzerler CSS transformasiýalaryny (`translate`, `scale`, `rotate`) enjam tizleşdirilen ulanmakda örän netijelidir, netijede pes derejeli mobil enjamlarda-da ýagty 60fps öndürijiligini gazanýar.

## Täsir

Bu göçüşiň netijeleri örän oňat boldy:

*   **Şimşek tizliginde ýükleniş wagtlary**: Interaktiw bolmak wagty (TTI) düýpli peseldi. Oýunçylar kognitiw maşklara dessine başlap bilerler.
*   **Kemçiliksiz mobil tejribe**: Standart CSS ýerleşiş usullaryny (Flexbox we proporsiýalar ýaly) ölçegli SVG-ler bilen birleşdirmek arkaly, oýunlar islendik enjamda doly gabat gelýär. Interaktiw zolaklar duýgur ekranlar üçin ýeterlik uly, öňki nägilelik nokatlaryny çözdik.

## Kognitiw öwretme üçin guruldy

Umumy düşündirişleri çalşyrmak bilen, bu programmalaryň ünsüni anyk kognitiw peýdalara gönükdirdik. **Glowing Fish Trace** üçin, tejribe **Köp Obýekt Yzarlama (MOT)**, sport görüş öwretmesi we ADHD üns maşklary üçin sazlanýar. **Frog Memory Leap** üçin, esasy mehanika **Corsi blok basma synagyny** şöhlelendirýär, işjeň ýady we kognitiw çeýeligi güýçlendirýär.

Bu ylmy esaslar kognitiw gowulaşma gözleýän ulanyjylara mugt gurallarymyzy has netijeli tapmaga we ulanmaga kömek edýär.

## Täze Tejribäni Synap Görüň

Bu oýunlaryň has çeýe, çalt we has jogapkär wersiýalaryny tejribe etmäge çagyrýarys:

*   [Glowing Fish Trace oýnaň](/fish-trace) - Wizual yzarmaňyzy we dowamly ünsüňizi gowulandyryň.
*   [Frog Memory Leap oýnaň](/frog-memory-leap) - Giňişlik işjeň ýadyňyzy synap görüň.

Biz Üns Oýunlary platformasyny iň gowy kognitiw öwretme gurallaryny üpjün etmek üçin yzygiderli gowulandyrmaga ygrarly. Täze täzelikler üçin gözlegde boluň!
