const pytania_rzym = [
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim:",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Obrona konieczna przez prawo rzymskie:",
      "answers": [
        "Była zakazana",
        "Była dozwolona tylko wobec bezprawnych działań urzędników państwowych",
        "Była dozwolona dla odparcia bezprawnego zamachu"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Maksyma Vim vi repellere licet pochodzi od:",
      "answers": [
        "Gajusa",
        "Ulpiana",
        "Cesarza Augusta"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Postępowanie legisakcyjne:",
      "answers": [
        "Uregulowane było w ustawie XII tablic",
        "Przewidywało zarówno procedury rozpoznawcze, jak i egzekucyjne",
        "Zostało zniesione przez lex Aebutia ok. 130 r. przed Chr"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Proces kognicyjny:",
      "answers": [
        "Stanowił konkurencję dla postępowania legisakcyjnego",
        "Czerpał swoją podstawę z autorytetu cesarza",
        "Umożliwiał rozstrzygnięcie sprawy z pominięciem posłępowania zwyczajnego"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Postępowanie formułkowe:",
      "answers": [
        "Opierało się na zasadzie pisemności",
        "Wykluczało ustne przedstawianie swoichiracji przed sędzią",
        "Nie było oparte na zasadzie formalizmu procesowego"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Pierwsza faza postępowania legisakcyjnego toczyła się przed:",
      "answers": [
        "Senatorami",
        "Zgromadzeniem ludowym",
        "Od 367 r. przed Chr. — pretorem"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Przeprowadzenie drugiej fazy postępowania formułkowego powierzano:",
      "answers": [
        "Od 367 r. przed Chr. — pretorem",
        "Zgromadzeniu ludowemu",
        "Sędziemu prywatnemu lub sądowi kolegialnemu"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Czynności sędziego mógł wykonywać:",
      "answers": [
        "Senator",
        "Edyl",
        "Pretor"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "In ius vacatio w procesie legisakcyjnym i formułkowym:",
      "answers": [
        "Przeprowadzali woźni sądowi",
        "Stanowiło nieformalny akt prywatny powoda",
        "Polegało na przymusowym doprowadzeniu pozwanego do sądu po uprzednim obezwładnieniu go i związaniu"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Podmiotem inicjującym proces cywilny mógł być:",
      "answers": [
        "Powód",
        "Pozwany",
        "Urzędnik posiadający imperium"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Wyrok zasądzający mógł zapaś, jeżeli:",
      "answers": [
        "Powód udowodnił okoliczności faktyczne",
        "Norma prawna przewidywała istnienie roszczenia po stronie powoda",
        "Pozwany wyraził na to zgodę"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Osoba niedojrzała (impuber) sui iuris:",
      "answers": [
        "Nie mogła być powodem",
        "Musiała być reprezentowana w procesie przez swojego opiekuna",
        "Nie mogła być pozwanym"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Zgodnie z zasadą Si in ius vacat, ito pozwany:",
      "answers": [
        "Miał obowiązek stawić się do sądu, jeżeli uznawał roszczenie powoda za zasadne",
        "Miał obowiązek stawić się do sądu, jeżeli uznawał roszczenie powoda za bezzasadne",
        "Miał obowiązek stawić się do sądu niezależnie od tego, czy jego zdaniem roszczenie powoda było zasadne czy bezzasadne"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Osoba bezpodstawnie pozbawiona wolności:",
      "answers": [
        "Mogła samodzielnie wytoczyć powództwo o zwolnienie z niewoli",
        "Przed sądem traktowana była jako osoba wolna do chwili wydania wyroku rozstrzygającego spór o wolność",
        "Przed sądem traktowana była jako niewolnik do chwili wydania wyroku rozstrzygającego spór o wolność"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Sądownictwo sporne należało w III w. przed Chr. do:",
      "answers": [
        "Konsulów",
        "Edylów",
        "Pretorów"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Przed udzieleniem skargi sprawa była badana przez:",
      "answers": [
        "Sędziego pod kątem tego, czy może on orzekać w danej sprawie",
        "Pretora pod kątem istnienia przesłanek procesowych",
        "Konsula w celu ustalenia, czy ma w niej orzekać sędzia czy pretor"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Pozwany:",
      "answers": [
        "Mógł uznać powództwo",
        "Mógł podnieść zarzuty procesowe",
        "Mógł wnosić o oddalenie powództwa"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Ciężar dowodu to:",
      "answers": [
        "Obowiązek spoczywający wyłącznie na powodzie",
        "Obowiązek przedstawienia dowodów na poparcie swoich twierdzeń",
        "Obowiązek, którego niewypełnienie najczęściej prowadziło do przegrania procesu"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Tytułem egzekucyjnym w rzymskim procesie cywilnym był:",
      "answers": [
        "Tylko wyrok zasądzający świadczenie",
        "Tylko uznanie powództwa przez pozwanego",
        "Zarówno wyrok zasądzający świadczenie, jak i uznanie powództwa"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "W zakresie właściwości rzeczowej:",
      "answers": [
        "Pretorzy zajmowali się sprawami o zasądzenie należności z tytułu pożyczki",
        "Konsulowie podejmowali czynności w sprawach adopcyjnych",
        "Edylowie kurulni zajmowali się sprawami z tytułu roszczeń związanych z wadami fizycznymi niewolników"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "W przypadku zbiegu właściwości miejscowej kilku organów wybór miejscowości, w której będzie toczyć się proces należał do:",
      "answers": [
        "Pretora",
        "Pozwanego",
        "Powoda"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Litis contestatio:",
      "answers": [
        "To powaga rzeczy osądzonej",
        "To formalne zawiązanie sporu",
        "Określało treść i podstawę prawną roszczenia powoda oraz granice dalszego rozpoznania sprawy"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Denegatio actionis:",
      "answers": [
        "Mogło być spowodowane brakiem. przestanek procesowych",
        "Mogło być spowodowane oczywistą bezzasadnością powództwa",
        "Mogło być spowodowaną sprzecznością żądania skargi z zasad słuszności"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Paremia audiatur et altem pars:",
      "answers": [
        "Nakazuje sędziemu wysłuchanie argumentów obu stron procesowych",
        "Nakazuje łagodniejsze traktowanie pozwanego (altera pars)",
        "Nakazuje sędziemu prowadzenie postępowania tylko w obecności obu stron postępowania"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Wśród rzymskich środków dowodowych można wymienić:",
      "answers": [
        "Dokumenty",
        "Zeznania świadków",
        "Oględziny"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Określ części formułki procesowej: Sekstus niech będzie sędzią (A). Jeżeli się okaże, że srebrna waza, o którą toczy się spór, jest Marka (B), i jeżeli ta waza na wezwanie sędziego nie zostanie zwrócona Markowi przez Gajusa (C), ile ta waza jest warta, taką sumę pieniędzy zasądź, sędzio, od Gajusa na rzecz Marka; jeśli się nie okaże, uwolnij (D).",
      "answers": [
        "A — nominatio, B — intentio, C — formula arbitraria, D — condemnatio",
        "A — condemnatio, B — norninatio, C — intentio, D — praescriptio",
        "A — nominatio, B — condemnatio, C — exceptio, D — intentio"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Po niekorzystnym wyroku powód postanowił ponownie wytoczyć powództwo o zwrot pożyczki. Pretor:",
      "answers": [
        "Przed udzieleniem skargi postawi powodowi warunek przedstawienia nowych dowodów na poparcie jego twierdzeń",
        "Przed udzieleniem skargi postawi powodowi warunek przedstawienia zgody pozwanego na ponowne wytoczenie powództwa",
        "Odmówi udzielenia skargi"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Actiones preiudiciales:",
      "answers": [
        "Były nieznane w rzymskim procesie cywilnym",
        "Służyły ustaleniuprawa lub stosunku prawnego",
        "Miały zwykle znaczenieprzygotowawcze przed procesem o zasądzenie świadczenia"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "W procesie formułkowym strona niezadowolona z wyroku:",
      "answers": [
        "Mogła odwołać się do konsula",
        "Nie mogła złożyć odwołania",
        "Mogła domagać się ponownego rozpatrzenia sprawy przez tego samego sędziego"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "W odróżnieniu od procesu formułkowego, w procesie kognicyjnym:",
      "answers": [
        "Strony nie miały wpływu na wybór sędziego",
        "Wezwanie do sądu miało charakter prywatny i ustny",
        "Nie obowiązała zasada kondemnacji pieniężnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W procesie formułkowym:",
      "answers": [
        "Stawiennictwo w charakterze pozwanego było obowiązkowe",
        "Stawiennictwo w charakterze świadka było obowiązkowe",
        "Przyjęcie funkcji sędziego było co do zasady obowiązkowe"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proszę wskazać zdanie(a) prawdziwe:",
      "answers": [
        "W procesie formułkowym sędzia musiał mieć wykształcenie prawnicze",
        "W procesie formułkowym sędzia mógł w określonych wypadkach odmówić przyjęcia funkcji",
        "W procesie formułkowym sędzia nieponosił odpowiedzialności za wydanie niesprawiedliwego wyroku"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "W formułkach prejudycjalnych brak:",
      "answers": [
        "Intentio",
        "Condemnatio",
        "Demonstratio"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Środki niezbędne do życia (beneficjum competentiae) pozostawiano dłużnikowi przy:",
      "answers": [
        "Vento bonorum",
        "Cessio bonorum",
        "Egzekucji osobistej"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "W procesie formułkowym obowiązywała zasada:",
      "answers": [
        "Dowód z dokumentu miał większe znaczenie niż dowód z zeznań świadka",
        "Po litis contestatio można było wytoczyć po raz drugi sprawę o zwrot pożyczki, jeśli sędzia nie wydał wyroku",
        "Nie można było wnieść apelacji"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Postulatio actionis to:",
      "answers": [
        "Wniosek o udzielenie powództwa",
        "Odmowa udzielenia powództwa",
        "Udzielenie powództwa"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Tzw. clausula arbitraria miała za zadanie złagodzenie skutków zasady:",
      "answers": [
        "Si in ius vocat, ito",
        "Omnis condemnatio pecuniaria esse debet",
        "Lis infitiando crescit in duplum"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Jako zdolność do bycia podmiotem praw i obowiązków definiuje się:",
      "answers": [
        "Zdolność prawną",
        "Zdolność procesową",
        "Zdolność do czynności prawnych"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Gajus, Instytucje I,9: Najważniejszy podział w ramach prawa dotyczącego osób jest ten, że wszyscy ludzie są albo wolni, albo są niewolnikami. W tym fragmencie Gajus przedstawia podział osób ze względu na:",
      "answers": [
        "Status libertatis",
        "Status civitatis",
        "Status familiae"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Proszę wskazać zdanie(a) prawdziwe:",
      "answers": [
        "Obywatelstwo rzymskie mogło być przyznane przez cesarza",
        "O status libertatis dziecka zawsze decydował status libertatis ojca",
        "Lex Iunia Norbana dotyczyła kwestii wyzwalania niewolników"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Nasciturus:",
      "answers": [
        "Mógł być ustanowiony dziedzicem",
        "Korzyści przypadały mu dopiero po urodzeniu",
        "Nie był podmiotem prawa"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Źródłami niewolników były:",
      "answers": [
        "Urodzenie z matki niewolnicy",
        "Skazanie na pracę w kopalniach",
        "Popadnięcie w niewolę nieprzyjacielską"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Sytuacja prawna niewolników charakteryzowała się tym, że:",
      "answers": [
        "Mogli dokonywać jedynie czynności polepszających sytuację ich właściciela",
        "Mogli otrzymac peculium",
        "Mogli posiadać zdolność do czynności prawnych"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Do formalnych sposobów wyzwolenia niewolników należały:",
      "answers": [
        "Manumissio vindicta",
        "Manumissio testamento",
        "Manumissio per epistulam"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Manumissio in ecclesia zostało oficjalnie uznane przez:",
      "answers": [
        "Konstantyna Wielkiego",
        "Teodozjusza II",
        "Justyniana"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Na mocy lex Aelia Sentia co do zasady:",
      "answers": [
        "Właściciel nie mógł wyzwolić więcej niż 10 niewolników",
        "Wyzwalający musiał mieć co najmniej 20 lat",
        "Niewolnik musiał mieć co najmniej 30 lat"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Sytuacja prawna obywatela rzymskiego powracającego z niewoli była regulowanaprzez:",
      "answers": [
        "Ius postliminii",
        "Fictio legis Corneliae",
        "Lex Fufia Caninia"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Kategoria ingenui obejmowała:",
      "answers": [
        "Wyzwoleńców",
        "Wolnych od urodzenia",
        "Półwolnych"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Obowiązek rejestracji dzieci pochodzących z małżeństwa wprowadził cesarz",
      "answers": [
        "August",
        "Marek Aureliusz",
        "Dioklecjan"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Kategorie osób ze względu na status civitatis to:",
      "answers": [
        "Wolni, Latyni, Koloni",
        "Obywatele rzymscy, Latyni, Peregryni",
        "Obywatele rzymscy, Peregryni, Niewolnicy"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Constitutio Antoniniatta z 212 r. przyznawała obywatelstwo rzymskie wolnym mieszkańcom państwa rzymskiego, z wyjątkiem:",
      "answers": [
        "Latini veteres i Latini coloniarii",
        "Latini Iuniani peregrini certae civitatis",
        "Latini Iuniani i peregrini dediticii"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Wskaż zdanie(a) prawdziwe:",
      "answers": [
        "Status osoby sui iuris był niezależny od wieku",
        "Kobieta mogła być osobą sui iuris",
        "Jeśli syn alieni iuris został senatorem, wychodził spod władzy ojcowskiej."
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Utrata obywatelstwa i pozycji w rodzinie z jednoczesnym zachowaniem wolności określano jako:",
      "answers": [
        "Capitis deminutio maxima",
        "Capitis deminutio media",
        "Capitis deminutio minima"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Infamia mogła powstać m.in. wskutek zasądzenia z tzw. actiones famosae. Do tej kategorii należały:",
      "answers": [
        "Actio furti",
        "Actio de positis aut suspensis",
        "Actio iniuriarum"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Zdolność do czynności prawnych zależała od:",
      "answers": [
        "Wolności, obywatelstwa, marnotrawstwa",
        "Płci, wolności, stanu umysłowego, wieku",
        "Płci, wieku, stanu umysłowego, marnotrawstwa"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Pełna zdolność do czynności prawnych przysługiwała:",
      "answers": [
        "impuberes i prodigi",
        "furiosi i puberes",
        "puberes minores i puberes"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Impuberes:",
      "answers": [
        "Niektórych czynności nie mogli dokonywać wogóle (np. testament)",
        "Samodzielnie mogli dokonywać tylko czynności przysparzających",
        "Za zgodą opiekuna mogli dokonywać wszystkich pozostałych czynności"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Puberes minores viginti quinque annis:",
      "answers": [
        "Zawsze pozostawali pod kuratelą (cura minoris)",
        "Mieli pełną zdolność do czynności prawnych",
        "Przysługiwała im specjalna ochrona, np. w postaci restitutio in integrum"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Ulpian, D. 27, 10, 1: [...] takiego człowieka, który w swych wydatkach nie ma ani czasu, ani końca, lecz trwoni swój majątek [...]. W tym fragmencie zdefiniowany jest:",
      "answers": [
        "Marnotrawca",
        "Fraudator",
        "Złodziej"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Wśród wymogów ważności czynności prawnych wymienia się:",
      "answers": [
        "Oświadczenie woli powinno być zgodne z wewnętrznym przekonaniem",
        "Treść czynności prawnych nie może być sprzeczna z dobrymi obyczajami",
        "Przy tzw. czynnościach formalnych konieczne jest zachowanie odpowiedniej formy"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Darowizna między małżonkami, zakazana przez prawo mogła stać się ważna w momencie śmierci darczyńcy. Jest to przykład:",
      "answers": [
        "Konwersji czynności prawnej",
        "Wzruszenia czynności prawnej",
        "Konwalidacji czynności prawnej"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Elementy, które pod sankcją nieważności, musiały być zawarte w treści czynności prawnej to:",
      "answers": [
        "Essentalia negotii",
        "Naturalia negotii",
        "Accidentalia negotii"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Naturalia negotii:",
      "answers": [
        "Mogą być modyfikowane przez strony",
        "Obowiązują, o ile strony wyraźnie ich nie uchylą",
        "Strony nie mają wpływu na ich sformułowanie"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Warunek jest zdarzeniem:",
      "answers": [
        "Przyszłym i pewnym",
        "Przeszłym lub teraźniejszym",
        "Przyszłym i niepewnym"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Jeśli dotkniesz palcem nieba; warunek przytoczony przez Gajusa:",
      "answers": [
        "Jest niemożliwy do spełnienia i w związku z tym czynność jest nieważna",
        "Jest niemożliwy do spełnienia i w związku z tym jest uznany za niedodany, natomiast czynność pozostaje ważna",
        "Gest niemożliwy do spełnienia, ale skutki ważności czynności prawnej zależą od woli strony obciążonej warunkiem"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Zgodnie z definicją Papiniana warunki sprzeczne z dobrymi obyczajami to takie, które naruszają:",
      "answers": [
        "Pietas (powinność, poczucie obowiązku)",
        "Existimatio (dobre imię, godność)",
        "Verecundia (skromność, przyzwoitość)"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Warunek: jeśli publicznie zatańczysz na forum:",
      "answers": [
        "Jest sprzeczny z prawem",
        "Jest sprzeczny z dobrymi obyczajami",
        "Nie jest sprzeczny ani z prawem, ani z dobrymi obyczajami"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Czynność prawna wywiera skutki prawne od momentu spełnienia się warunku. Chodzi o warunek:",
      "answers": [
        "Zawieszający",
        "Rozwiązujący",
        "Potestatywny"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Warunek: jeśli się ożenisz, to:",
      "answers": [
        "Warunek potestatywny",
        "Warunek losowy",
        "Warunek mieszany"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Warunek lub termin mógł być dołączony do czynności prawnych nienależących do kategorii actus legiami. Do tej kategorii należały m.in.:",
      "answers": [
        "Emancypacja",
        "Adoptio",
        "Acceptilatio"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "W prawie klasycznym dołączenie polecenia (modus) do czynności prawnej powodowało, że:",
      "answers": [
        "Czynność była nieskuteczna do czasu wypełnienia polecenia",
        "Wykonanie polecenia nie miało wpływu na ważność czynności",
        "Czynność była skuteczna od razu"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "W wypadku reservatio mentalis:",
      "answers": [
        "Zastrzeżenie potajemne jest nieważne",
        "Czynność prawna jest nieważna",
        "Nie można się na nie powoływać w celu niewykonania czynności"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Oświadczenie woli złożone 'nie na serio' (per iocum') Powoduje, że:",
      "answers": [
        "Czynność prawna jest nieważna",
        "Czynność prawna pozostaje ważna",
        "Czynność jest ważna, ale wzruszalna"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Względna symulacja czynności prawnej powodowała następujące skutki:",
      "answers": [
        "Czynność symulowana była ważna",
        "Czynność symulowana i czynność dysymulowana zawsze były ważne",
        "Czynność symulowana była nieważna"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Błąd co do rodzaju czynności prawnej to:",
      "answers": [
        "Error in corpore",
        "Error in negotio",
        "Error in substantia"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Osoba pozwana o wykonanie czynności, którą zawarła pod wpływem podstępu, może zastosować:",
      "answers": [
        "Actio doli",
        "Exceptio doli",
        "Interdictum de dolo"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Czynność prawna dokonana pod wpływem groźby była:",
      "answers": [
        "Ważna",
        "Nieważna",
        "Ważna, ale wzruszalna"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Czynność prawna dokonana pod wpływem przymusu fizycznego była:",
      "answers": [
        "Ważna",
        "Nieważna",
        "Ważna, ale wzruszalna"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Quarnvis si liberum esset noluissem, tamen coactus volui. Reguła ta oznacza, że:",
      "answers": [
        "Osoba dokonująca czynności pod wpływem groźby wyraziła w ten sposób swoją wolę, choć gdyby nie pozostawała pod wpływem groźby, jej wola byłaby odmienna",
        "Osoba dokonująca czynności pod wpływem groźby nie wyrażała swojej woli i dlatego czynność była nieważna",
        "Osoba dokonująca czynności pod wpływem podstępu nie wyrażała swojej woli i dlatego czynność była nieważna"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Groźba, aby można się było na nią powoływać, musiała być:",
      "answers": [
        "Metus gravis",
        "Metus iniustus",
        "Metus praesens"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Groźba, aby można się było na nią powoływać, musiała być tego rodzaju, aby:",
      "answers": [
        "Przestraszyć 'każdego przeciętnego człowieka'",
        "Przestraszyć 'zapobiegliwego ojca rodziny'",
        "Przestraszyć 'człowieka odważnego'"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Do osób prawnych prawa publicznego należały:",
      "answers": [
        "Populus Romanus i instytucje dobroczynne",
        "Populus Romanus i municipia",
        "Fiscus i instytucje dobroczynne"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Stowarzyszenia określano jako:",
      "answers": [
        "Collegia",
        "Sodalitates",
        "Societates"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Według przekazów źródłowych pierwsze kolegia zawodowe (fletnistów, złotników) założył:",
      "answers": [
        "Pompiliusz",
        "Juliusz Cezar",
        "Oktawian August"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Lex Iulia de collegiis (z czasów Oktawiana Augusta) wprowadziła ograniczenia swobody zakładania stowarzyszeń:",
      "answers": [
        "Do założenia stowarzyszenia potrzebna była zgoda senatu (w okresie póżniejszym — cesarza)",
        "Do założenia stowarzyszenia konieczna była większa niż dotychczas liczba osób (wcześniej — 3; obecnie — 10)",
        "Stowarzyszenia musiały spełniać wymogi 'użyteczności'"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Fundacje alimentacyjne cesarzy:",
      "answers": [
        "Powstawały od czasów cesarza Nerwy",
        "Nie miały osohowoki prawnej",
        "Wspierały ubogie dzieci, nic  tylko płci męskiej"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Instytucje dobroczynne (tzw. piae causae):",
      "answers": [
        "Pozostawały zawsze pod nadzorem biskupa",
        "Uczestniczyły w obrocie prawno-majątkowym",
        "Mogły być tworzone tylko z majątku kościelnego"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Małżeństwo rzymskie:",
      "answers": [
        "Było instytucją monogamiczną",
        "Dopuszczało związek osób tej samej płci",
        "Dopuszczało możliwość posiadania dwóch żon w tym samym czasie"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "W okresie klasycznym warunkiem trwania małżeństwa:",
      "answers": [
        "Była osobista obecność męża przy zawarciu małżeństwa",
        "Było przeprowadzenie uroczysłoki weselnych zgodnych ze zwyczajami okrelonymi przez przodków",
        "Było affectio maritalis u obojga małżonków"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Małżeństwo rzymskie:",
      "answers": [
        "Wymagało wspólnego zamieszkiwania małżonków",
        "Było pojmowane raczej jako fakt społeczny niż stosunek prawny",
        "Mogło istnieć między osobami niedojrzałymi"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Dla zaistnienia iustum matrimonium konieczne było:",
      "answers": [
        "Posiadanie conubiurn przez nupturientów",
        "Osiągnięcie dojrzałości fizycznej nupturientów",
        "Uzyskanie zgody pretora miejskiego"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Małżeństwo, które nie spełniało wymogów iustum matrimonium:",
      "answers": [
        "Wymagało przeprowadzenia postępowania o stwierdzenie nieważności",
        "Nie wywoływało skutków prawnych wobec małżonków i ich dzieci typowych dla małżeństwa",
        "W niektórych przypadkach narażało małżonków na sankcje prawa karnego"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Zakaz małżeństw obejmował:",
      "answers": [
        "Senatorów",
        "Niedojrzałych",
        "Kobiety"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Małżeństwa nie mogli zawrzeć ze sobą:",
      "answers": [
        "Niewolnicy",
        "Niewolnik z osobą wolną",
        "Obywatel rzymski z osobą należącą do społeczności Latini veteres"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Lex Canuleia dopuściła małżeństwa między:",
      "answers": [
        "Niewolnikiem a kobietą stanu wolnego",
        "Senatorami i ekwitami",
        "Patrycjuszami i plebejuszami"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Od czasów SC Claudianum cesarz Klaudiusz nie mógł zawrzeć małżeństwa ze swoją:",
      "answers": [
        "Bratanicą",
        "Matką",
        "Siostrą"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Wymogiem zawarcia małżeństwa była:",
      "answers": [
        "Zgoda stron",
        "Nawiązanie faktycznego pożycia",
        "zachowanie formy przewidzianej przez ustawę"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Kobieta pozostająca pod władzą ojca:",
      "answers": [
        "Samodzielnie podejmowała decyzję o zawarciu małżeństwa",
        "Nie miała żadnego wpływu na zawarcie małżeństwa",
        "Obok własnej decyzji potrzebowała zgody zwierzchnika familijnego na zawarcie małżeństwa"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Od czasów cesarza Leona:",
      "answers": [
        "Kobieta nie mogła zerwać zaręczyn, jeżeli został wręczony zadatek zaręczynowy",
        "W razie zerwania zaręczyn z powodu pójścia do klasztoru kobieta musiała zwrócić zadatek zaręczynowy",
        "W razie zerwania zaręczyn z innych powodów niż wskazane w punkcie b kobieta musiała zwrócić zadatek zaręczynowy w podwójnej wysokości"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Mężczyzna posiadający konkubinę do czasów Konstantyna Wielkiego:",
      "answers": [
        "Mógł się ożenić",
        "Mógł wziąć kolejną konkubinę",
        "Musiał porzucić konkubinę, ponieważ konkubinat był zakazany przez prawo"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Marcja, będąca osobą sui iuris, postanowiła zawrzeć małżeństwo, w którym będzie podlegać władzy męża. Uznała jednak nie chce, by mąż przejął jej majątek, zwłaszcza że nie była pewna czy  małżeństwo będzie długotrwałe. Jedynym rozwiązaniem w takim przypadku było:",
      "answers": [
        "Sprzedanie majątku i rozdanie pieniędzy uzyskanych ze sprzedaży",
        "Przekazanie własności majątku na rzecz osoby zaufanej",
        "Zrzeczenie się własności majątku na rzecz cesarza"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Antonius i Kwinta zawarli małżeństwo, jednak Kwinta postanowiła pozostać osobą sui iuris. Aby mąż nie uznał, iż jej postępowanie jest podyktowane brakiem zaufania, powierzyła mu zarząd nad swoim majątkiem parafernalnym. Antonius doskonale gospodarował powierzonym mu mieniem. W takim przypadku, w razie braku odmiennej umowy małżonków, właścicielem dochodów z majątku paraferenalnego staje się:",
      "answers": [
        "Antonius",
        "Kwinta",
        "Antonius w 1/4 i Kwinta w 3/4"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Kobieta mogła wejść pod władzę męża dzięki:",
      "answers": [
        "Deductio in domum mariti",
        "Usurpatio trinoctii",
        "Confarreatio"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Adulterium to niezachowanie wierności:",
      "answers": [
        "Przez męża",
        "Przez konkubenta",
        "Przez żonę"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Praesumptio Muciana stosowano w przypadku wątpliwości co do:",
      "answers": [
        "Majątku uzyskanego przez żonę z niezindentyfikowanego źródła",
        "Określenia, czy wolą stron było zawarcie małżeństwa, czy konkubinatu",
        "Określenia, czy wolą stron było wejście żony pod władzę męża, czy też nie"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Z tekstu Ulpiana (D. 23,3,7 pr.-1: Zasady słuszności przemawiają, że mężowi powinny przypadać pożytki z majątku posagowego; skoro bowiem on ponosi ciężary małżeństwa, słuszne jest, aby także on pobierał pożytki. Jeśli pożytki zostaną pobrane w czasie małżeństwa, nie należą do posagu; jeśli zaś przed małżeństwem zostały pobrane, obracają się w posag [...]) wynika, że:",
      "answers": [
        "Pożytki przynoszone przez majątek posagowy przypadały w czasie małżeństwa mężowi",
        "Pożytki przynoszone przez majątek posagowy przypadały przed zawarciem małżeństwa właścicielowi majątku posagowego",
        "Pożytki przynoszone przez majątek posagowy przypadały w czasie małżeństwa wspólnym dzieciom stron"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Po trzech latach od zawarcia małżeństwa Kwintus i Antonia postanowili się rozstać. Antonia zażądała zwrotu 1000 sesterców, które wniosła w posagu. Kwintus odmówił zwrotu, podnosząc, że pieniądze te zostały już dawno wydane na zakup domu pod Rzymem.",
      "answers": [
        "Racja jest po stronie Kwintusa, ponieważ nie może on zwrócić pieniędzy, które już dawno wydał",
        "Racja jest po stronie Antonii, ponieważ zwrotowi podlega taka sama ilość pieniędzy, a nie te same pieniądze, które zostały przekazane jako posag",
        "Żadne z małżonków nie ma racji, ponieważ w przypadku bezpodstawnego rozwodu za zgodą stron na mocy ustawy XII tablic majątek posagowy podlegał konfiskacie"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Oratio divi Severi z 206 r.:",
      "answers": [
        "Wprowadziło zakaz darowizn między małżonkami",
        "Odwołało zakaz darowizn między małżonkami",
        "Ustanawiało konwalidację darowizny rzeczowej między małżonkami, jeżeli nie została ona odwołana przed śmiercią darczyńcy"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Posag miał na celu:",
      "answers": [
        "Dopomóc mężowi w ponoszeniu ciężarów małżeństwa",
        "Zabezpieczyć kobietę na przyszłość w przypadku rozwodu",
        "Odstraszać męża przed bezpodstawnym rozwodem"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Posag mógł być ustanowiony przez:",
      "answers": [
        "Kobietę",
        "Zwierzchnika familijnego kobiety",
        "Matkę lub dziadka macierzystego kobiety"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Actio rei uxoriae:",
      "answers": [
        "Przysługiwała przeciwko mężowi - w celu uzyskania przez żonę zwrotu posagu",
        "Przysługiwała przeciwko kobiecie - w celu wymuszenia przekazania przez nią posagu",
        "Przysługiwała przeciwko zwierzchnikowi familijnemu kobiety - w celu wymuszenia przekazania przez niego posagu"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Actio rerum amotarum:",
      "answers": [
        "Przysługiwała żonie przeciwko mężowi - w celu zmuszenia go do łożenia na utrzymanie rodziny",
        "Przysługiwała zwierzchnikowi familijnemu kobiety - w celu zmuszenia jej męża do rozwodu",
        "Przysługiwała mężowi przeciwko żonie z powodu przywłaszczonych przez nią przedmiotów"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W przypadku rozwodu mąż mógł zastosować retentiones:",
      "answers": [
        "Propter liberos - z powodu nakładów na wspólne dzieci",
        "Propter mores - z powodu złego prowadzenia się zony, zwłaszcza popełnienia przez nią cudzołóstwa",
        "Propter liberos - z powodu dokonania wyzwolenia niewolników na szkodę majątku posagowego"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Majątek posagowy w przypadku rozwodu:",
      "answers": [
        "Zawsze pozostawał przy mężu",
        "W części obejmującej nieruchomości podlegał zwrotowi natychmiast",
        "W części obejmującej pieniądze lub inne rzeczy zamienne podlegał zwrotowi w ciągu trzech lat"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Conventio in manum wprowadzało kobietę do rodziny:",
      "answers": [
        "Agancyjnej męża",
        "Kognacyjnej męża",
        "Agnacyjnej i kognacyjnej męża"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W okresie klasycznym małżeństwo rzymskie:",
      "answers": [
        "Rozwiązywało się na skutek popadnięcia małżonka w niewolę",
        "Nie rozwiązywało się na skutek popadnięcia małżonka w niewolę",
        "Odżywało na skutek powrotu małżonka z niewoli"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "w okresie klasycznym mąż:",
      "answers": [
        "Posiadający manus nad żoną nie mógł się z nią rozwieść",
        "Nieposiadający manus nad żoną nie mógł się z nią rozwieść",
        "Niezależnie od manus mógł rozwieść się z żoną"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Oblicz stopień pokrewieństwa pomiędzy Tobą a Twoją matką:",
      "answers": [
        "Pierwszy stopień w linii prostej",
        "Pierwszy stopień w linii bocznej",
        "Drugi stopień w linii prostej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Oblicz stopień pokrewieństwa pomiędzy Tobą a córką Twojego brata:",
      "answers": [
        "Pierwszy stopień w linii prostej",
        "Piąty stopień w linii bocznej",
        "Trzeci stopień w linii bocznej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Oblicz stopień pokrewieństwa pomiędzy Twoją wnuczką a prawnuczką siostry Twojej babci:",
      "answers": [
        "Pierwszy stopień w linii bocznej",
        "Dziewiąty stopień w linii bocznej",
        "Trzeci stopieni w linii bocznej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Dziecko wchodziło pod patria potestas:",
      "answers": [
        "Jeżeli urodziła je żona",
        "Jeżeli urodziło się ono w domu męża",
        "Jeżeli urodziło się ono inłra legitimum tempum"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Prawo do przeprowadzenia adrogacji przysługiwało:",
      "answers": [
        "Niedojrzałym mężczyznom alieni iuris",
        "Dojrzałym mężczyznom sui iuris",
        "Wyłącznie członkom rodziny cesarskiej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Adopcja:",
      "answers": [
        "Wymagała, aby adoptujący był starszy od adoptowanego",
        "Wymagała, aby adoptowany był starszy od adoptującego",
        "W prawie justyniańskim dzieliła się na pełną i niepełną"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Adopcja mogła zostać zastosowana jako forma nabycia władzy nad:",
      "answers": [
        "Żoną",
        "Spokrewnionym dzieckiem",
        "Niewolnikiem"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Przyczyną zakończenia patria potestas mogła być:",
      "answers": [
        "Śmierć zwierzchnika familijnego",
        "Kłótnia między zwierzchnikiem familijnym a dzieckiem",
        "Śmierć dziecka"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W ramach patria potestas zwierzchnik familijny w czasach cesarza Augusta mógł:",
      "answers": [
        "Karcić dziecko",
        "Sprzedać dziecko",
        "Emancypować dziecko"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Peculium:",
      "answers": [
        "Mogło być ustanowione na rzecz niewolnika",
        "Nie mogło być ustanowione na rzecz ojca rodziny",
        "Mogło być ustanowione na rzecz dziecka rodziny"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Dzieci pozamałżeńskie:",
      "answers": [
        "Mogły domagać się alimentów wyłącznie od ojca",
        "W sensie prawnym były spokrewnione wyłącznie z matką i jej krewnymi",
        "Były wliczane matce do spełnienia wymogów ius liberorum"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Prawo rzymskie przewidywało następujące formy legitymacji:",
      "answers": [
        "Per subsequens matrimonium",
        "Per pignoris capionem",
        "Per oblationem curiae"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Opieka ustawowa spoczywała w rękach:",
      "answers": [
        "Gentylów",
        "Agnatów",
        "Sąsiadów"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "tutela impuberum:",
      "answers": [
        "Przewidywała obowiązek troski o osobę pupila",
        "Przewidywała obowiązek troski o majątek pupila",
        "Ograniczała się do zatwierdzania niektórych czynności prawych niedojrzałego"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "tutela mulierum:",
      "answers": [
        "Przewidywała obowiązek troski o osobę pupilki",
        "Przewidywała obowiązek troski o majątek pupilki",
        "Ograniczała się do zatwierdzania niektórych czynności prawnych kobiety"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Termin negotium claudicans:",
      "answers": [
        "Obejmował niektóre czynności prawne niedojrzałego",
        "Odnosił się do sytuacji, w której ważność czynności prawnej zależała od jej potwierdzenia przez opiekuna",
        "Odnosił się do sytuacji, w której niedojrzały zawierał czynność prawną wyłącznie przysparzającą"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Curator furiosi:",
      "answers": [
        "Troszczył się o majątek marnotrawcy",
        "Miał na celu pieczę nad majątkiem podlegającego kurateli",
        "Powoływany był spośród najbliższych krewnych"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Curator prodigi:",
      "answers": [
        "Udzielał zgody na czynności obciążające majątek podlegającego kurateli",
        "Udzielał zgody na czynności powiększające majątek podlegającego kurateli",
        "Ustanawiany był dla osób trwoniących majątek"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Prawo rzymskie przewidywało m.in. następujące rodzaje kuratorów:",
      "answers": [
        "Curator absentis",
        "Curator debilium",
        "Curator ventris"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Lex Laetoria:",
      "answers": [
        "Wprowadzała obowiązkową kuratelę dla osób poniżej 25 roku życia",
        "Wprowadzała możliwość ustanowienia kuratora dla osób poniżej 25. roku życia",
        "Pozbawiała osoby poniżej 25, roku życia prawa zarządzania własnym majątkiem"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Małżeństwa nie można było zawrzeć z:",
      "answers": [
        "Adoptowaną córką",
        "Byłą teściową",
        "Wnuczką siostry prababci"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W okresie chrześcijańskim cesarze ograniczali swobodę rozwodów poprzez:",
      "answers": [
        "Ustanowienie nakazu pozostawania w małżeństwie dla kobiet do 40 roku życia",
        "Ustanowienie dla rozwodników kary zamknięcia w klasztorze",
        "Ustawianie tzw. słusznych przyczyn zezwalających na dokonanie rozwodu"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Przyznanie kobiecie przywileju zwanego ius trium liberorum powodowało następujące skutki:",
      "answers": [
        "Kobieta uwalniana była spod ustawowej opieki",
        "Kobieta mogła sprawować wysokie urzędy państwowe",
        "Kobieta mogła zawrzeć kolejne małżeństwo natychmiast po rozwiązaniu poprzedniego"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Koń to res:",
      "answers": [
        "Corporalis",
        "Immobilis",
        "Sacra"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Niewolnik to res:",
      "answers": [
        "Corporalis",
        "Immobilis",
        "Mancipi"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Stado słoni to:",
      "answers": [
        "Res corporalis",
        "Res mancipi",
        "Corpus ex distantibus"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Świątynia Jowisza to:",
      "answers": [
        "Res extra commercium",
        "Res sacra",
        "Przynależność bóstwa"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Grób, w którym pochowano zwłoki choćby jednej osoby:",
      "answers": [
        "To rzecz poświęcona bóstwom podziemnym",
        "To rzecz poświęcona bóstwom niebieskim",
        "To res sancta"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Do res mancipi należały:",
      "answers": [
        "Grunty orne położone na terenie Italii",
        "Grunty orne położone w Egipcie",
        "Grunty orne położone w Rzymie"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Pieniądze należą do rzeczy:",
      "answers": [
        "Ruchomych",
        "Zużywalnych",
        "Wyłączonych z obrotu"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Rzeczą niezużywalną jest:",
      "answers": [
        "Niewolnik",
        "Koń",
        "Jabłko"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Termin res quae non usu consumuntur to łacińskie określenie rzeczy: ",
      "answers": [
        "Niezamiennych",
        "Niezużywalnych",
        "Zużywalnych"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Termin res derelictue oznacza rzeczy:",
      "answers": [
        "Zgubione",
        "Znalezione",
        "Porzucone"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Res omnium communes:",
      "answers": [
        "Należały do bogów podziemnych",
        "Były wyłączone z obrotu prywatnoprawnego",
        "Mogły zostać zawłaszczone lub zasiedziane"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Do res incorporales należą:",
      "answers": [
        "Wierzytelności",
        "Grunty miejskie",
        "Niewolnicy"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Paulus, D. 41,1,31,1: [I..] są dawno ukryte pieniądze, o których pamięć zatarła się tak, że nie mają już właściciela. W ten sposób bowiem [...] staje się własnością tego, kto go znalazł, tak jakby nie nalezał do kogoś innego. W przeciwnym przypadku, jeśli ktoś ukrył coś pod ziemią albo z chęci zysku, albo z bojaźni, albo celem strzeżenia, nie jest [to]. W cytowanym fragmencie prawnik podaje definicję",
      "answers": [
        "Rzeczy porzuconej",
        "Rzeczy zgubionej",
        "Skarbu"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Własność to prawo:",
      "answers": [
        "Skuteczne erga omnes",
        "Rzeczowe",
        "Dające właścicielowi (niemal) pełne władztwo nad rzeczą"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Prawem rzeczowym ograniczonym w starożytnym Rzymie było:",
      "answers": [
        "Użytkowanie wieczyste",
        "Własność",
        "Służebność"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Possessio:",
      "answers": [
        "To synonim terminu własność",
        "To ograniczone prawo rzeczowe",
        "To prawnie chroniony stan faktyczny"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Na podstawie tekstu Gajusa określ, do jakiej reguły odwołuje się prawnik i jakie były zasady nabywania własności pożytków: Gajus, D. 6,1,44: Pożytki, które nie zostały odłączone [od rzeczy macierzystej], są uważane za część [składową] gruntu",
      "answers": [
        "Właścicielem pożytków zostaje zawsze właściciel rzeczy przynoszącej pożytki",
        "Własność pożytków można nabyć dopiero z momentem ich odłączenia od rzeczy głównej",
        "Własność pożytków nie może przysługiwać innej osobie niż właściciel rzeczy przynoszącej pożytki"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Kosz jabłek stanowi:",
      "answers": [
        "Pożytek naturalny",
        "Pożytek cywilny",
        "Pożytek prawa"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Do pożytków cywilnych zaliczano:",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Dochody z tytułu czynszu najmu rzeczy"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W razie ustanowienia emfiteuzy pożytki naturalne rzeczy przypadają:",
      "answers": [
        "Właścicielowi rzeczy",
        "Emfiteucie",
        "Osobie, która je pobierze"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "W razie ustanowienia użytkowania rzeczy pożytki naturalne przypadają:",
      "answers": [
        "Właścicielowi rzeczy",
        "Użytkownikowi",
        "Właścicielowi w 1/4 i użytkownikowi w 3/4"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Uprawnienie do zasiedzenia rzeczy przysługiwało:",
      "answers": [
        "Właścicielowi rzeczy",
        "Posiadaczowi suo nomine",
        "Dzierżycielowi rzeczy"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Osoba, która otrzymała rzeczy do używania bez gwarancji minimalnego czasu korzystania z rzeczy, to:",
      "answers": [
        "Posiadacz rzeczy",
        "Depozytariusz",
        "Prekarzysta"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Dzierżawa wieczysta to:",
      "answers": [
        "Emfiteuza",
        "Superficies",
        "Precarium"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Wedle rozstrzygnięcia prawnika Brutusa z II w. przed Chr.:",
      "answers": [
        "Dziecko niewolnicy nie stanowi pożytku",
        "Dziecko niewolnicy stanowi pożytek i przypada użytkownikowi niewolnicy",
        "Dziecko niewolnicy z chwilą urodzenia staje się wolne"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Elementami posiadania były:",
      "answers": [
        "Własność rzeczy",
        "Władztwo faktyczne nad rzeczą",
        "Wola zatrzymania rzeczy dla siebie"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Proces cywilny w prawie rzymskim",
      "answers": [
        "Służył przymusowej realizacji spornych praw podmiotowych",
        "Mógł być prowadzony tylko za zgodą powoda i pozwanego",
        "Pojawił się jako środek służący eliminacji samopocy ofensywnej"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Podstawami do dziedziczenia według ius civite były:",
      "answers": [
        "Ustawa i interdykt",
        "Testament i umowa",
        "Ustawa i testament"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Powołanie do spadku oznaczało:",
      "answers": [
        "W niektórych przypadkach prawny obowiązek nabycia spadku",
        "W niektórych przypadkach prawny zakaz nabycia spadku",
        "Zawsze prawną możność nabycia spadku"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "W skład spadku wchodzą:",
      "answers": [
        "Patria potestas",
        "Ususfructus",
        "Via"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Testament jest czynnością:",
      "answers": [
        "Jednostronną",
        "Odwołalną aż do śmierci",
        "która musi zawierać ustanowienie dziedzica"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Testament jest czynnością prawną sporządzaną na wypadek śmierci (morus causa), co oznacza, że:",
      "answers": [
        "Wywołuje skutki prawne z chwilą podpisania przez testatora",
        "Wywołuje skutki prawne z chwilą śmierci testatora",
        "Wywołuje skutki prawne z chwilą sporządzenia go w jakiejkolwiek przepisanej prawem."
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Forma testamentu, która wymaga złożenia podpisu przez testatora, to:",
      "answers": [
        "Testamentum iri procitictu",
        "Testamentum holographum",
        "Testamentum tripertitum"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Antoniusz żyjący w czasach cesarza Justyniana mógł sporządzić testament w formie:",
      "answers": [
        "Testamentum tripertitum",
        "Testamentum apud acta conditum",
        "Testamentum per aes et libram"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Przykładem testamentu szczególnego jest:",
      "answers": [
        "Testamentum militis",
        "Testamentum tripertitum",
        "Testamentum tempore pestis conditum"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Do essentictlia negotii. testamentu należy:",
      "answers": [
        "Dokonanie zapisów",
        "Podpis testatora",
        "Ustanowienie dziedzica"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Ustanowienie dziedzica mogło być obwarowane klauzulą:",
      "answers": [
        "'jeśli w ciągu miesiąca sprzedasz dom'",
        "'jeśli w ciągu miesiąca nic sprzedasz domu'",
        "'do chwili, gdy sprzedasz dom"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Ustanowienie dziedzica pod warunkiem rozwiązującym było niedopuszczalne, ponieważ sprzeciwiało się zasadzie:",
      "answers": [
        "Nemo pro parte testatus, pro parte intestatus decedere potest",
        "Praetor heredes facere non potest",
        "Sernel heres sernper heres"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Przyrzeczenie, określane jako cautio Muciana składane było w wypadku ustanowienia dziedzica pod warunkiem:",
      "answers": [
        "Zawieszającym kauzalnym dodatnim",
        "Zawieszającym potestatywnyrn dodatnim",
        "Zawieszającym potestatywnym ujemnym"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "'Dziedzicem niech będzie Paulus. Jeśli Paulus nie zostanie dzicem, dziedzicem niech będzie Luciusz'. To rozrządzenie testamentowe zawiera::",
      "answers": [
        "Institudo heredis i substitutio heredis",
        "Cautio Muciana i termin zawieszający",
        "Exheredatio i legat"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Liwiusz ustanowił dziedzicem syna, a następnie planował wykorzystać instytucję substytucji. Liwiusz może:",
      "answers": [
        "Ustanowić dla syna tylko jednego substytuta",
        "Ustanowić dla syna tylko dwóch substytutów",
        "Ustanowić dla syna dowolną ilość substytutów"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Testamenti factio activa nie przysługiwało:",
      "answers": [
        "Dwunastoletniernu chłopcu",
        "Osobie chorej psychicznie",
        "Niewolnikowi"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Osoby nieokreślone (personae incertae) przez długi czas pozbawione były testamentifactio passiva. Do tej grupy osób należały:",
      "answers": [
        "Kościoły",
        "Pewne grupy osób, np. ubodzy, jeńcy wojenni",
        "Instytucje dobroczynne"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Jeżeli testator ustanowił kilku dziedziców, nie określając ich udziałów:",
      "answers": [
        "Na spadku powstawała współwłasność",
        "Uznawano, że dziedzice są powołani w równych częściach",
        "Części należne każdemu z dziedziców ustalał sędzia"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Ustanowienie dziedzicem cudzego niewolnika:",
      "answers": [
        "Było niedopuszczalne",
        "Było dopuszczalne, dziedzicem zostawał niewolnik",
        "Było dopuszczalne, ale dziedzicem zostawał właściciel niewolnika"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Intestatus to spadkodawca, który:",
      "answers": [
        "Sporządził testament",
        "Sporządził testament, który okazał się nieważny",
        "Nie sporządził testamentu"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Dziedziczenie ustawowe następowało, gdy:",
      "answers": [
        "Spadkodawca nie zostawił testamentu",
        "Testament sporządzony przez spadkodawcę był nieważny",
        "Testament sporządzony przez spadkodawcę był nieskuteczny"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Dziedziczenie według ustawy XII tablic oparte było na systemie:",
      "answers": [
        "Agnacyjnym",
        "Kognacyjnym",
        "Agnacyjno-kognacyjnym"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Na mocy dziedziczenia według prawa pretorskiego żona in manu powoływana była w klasie:",
      "answers": [
        "Czwartej",
        "Pierwszej",
        "Drugiej i czwartej"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "W dziedziczeniu beztestamentowym według prawa pretorskiego emancypowany syn spadkodawcy dziedziczył:",
      "answers": [
        "W klasie pierwszej",
        "W klasie drugiej",
        "W ogóle nie dziedziczył"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "W dziedziczeniu beztestamentowym według prawa justyniańkiego wstępny spadkodawcy dziedziczył:",
      "answers": [
        "W klasie drugiej",
        "W klasie trzeciej",
        "W ogóle nie dziedziczył"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Na mocy dziedziczenia według prawa justyniańskiego rodzeństwo spadkodawcy powoływano w klasie:",
      "answers": [
        "Rodzone - w pierwszej; przyrodnie w drugiej",
        "Rodzone - w drugiej; przyrodnie w trzeciej",
        "Rodzone i przyrodnie w drugiej"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Gdy ojciec i dojrzały syn ustanowiony przez niego spadkobiercą zginęli we wspólnej katastrofie, przyjmowano, że:",
      "answers": [
        "Ojciec zmarł przed synem",
        "Syn zmarł przed ojcem",
        "Obaj zmarli w tym samym momencie"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Sui hetedes instituendi sunt vel exheredandi. Powyższa reguła oznacza:",
      "answers": [
        "Spadkodawca ma obowiązek zostawić swoim sui heredes część spadku",
        "Spadkodawca nie ma prawa wydziedziczyć nikogo z sui heredes",
        "Spadkodawca ma obowiązek ustanowienia sui heredes dziedzicami bądź wyraźnego ich wydziedziczenia"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Pominięcie syna w testamencie skutkowało:",
      "answers": [
        "Dopuszczeniem syna do dziedziczenia obok dziedziców testamentowych",
        "Dziedziczeniem zgodnie z wolą testatora",
        "Nieważnością testamentu"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Wydziedziczenie dzieci w testamencie bez poważnej przyczyny powodowało następujące skutki:",
      "answers": [
        "Testament był nieważny",
        "Testament był ważny i dziedziczono zgodnie z wolą testatora",
        "Wydziedziczonym przysługiwało powództwo w celu podważenia testamentu"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Członkowie najbliższej rodziny powinni otrzymać ze spadku co najmniej tzw. zachowek. Przed reformą Justyniana wynosił on:",
      "answers": [
        "1/4 spadku",
        "1/4 części, którą dana osoba otrzymałaby w dziedziczeniu ustawowym",
        "W zależności od wartości spadku było to 1/2 lub 1/3 spadku"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Zgodnie z Nowelą 115 Justyniana wydziedziczenie zstępnego było dopuszczalne, gdy:",
      "answers": [
        "Próbował otruć spadkodawcę",
        "Popadł w herezję",
        "Nie wykupił spadkodawcy z niewoli"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Dziedzic według ius civile móg1 żądać wydania spadku znajdującego się w posiadaniu innej osoby za pomocą:",
      "answers": [
        "Actio testamentaria",
        "Interdictum quorum bonorum",
        "hereditatis petitio"
      ],
      "poprawne": [2]
    }`),
  JSON.parse(`{
      "question": "Legitymację bierną przy hereditatis petitio posiadał:",
      "answers": [
        "Pro herede possessor",
        "Pro possessore possessor",
        "Fictus possessor"
      ],
      "poprawne": [0, 1, 2]
    }`),
  JSON.parse(`{
      "question": "Dziedzice domowi (domestici) nabywali spadek:",
      "answers": [
        "Poprzez oświadczenie woli w formie cretio",
        "Ipso iure",
        "Poprzez pro herede gestio"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Jeśli jeden ze współdziedziców nie przyjął spadku:",
      "answers": [
        "Jego część przyrastała do części pozostałych dziedziców za ich zgodą",
        "Jego część przyrastała do części pozostałych dziedziców nawet bez ich zgody",
        "Testament był nieważny"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Obowiązek dokonania zaliczenia na dział spadkowy odnosił się do:",
      "answers": [
        "Syna emancypowanego",
        "Córki, która otrzymała posag",
        "Nie dotyczył nikogo z najbliższej rodziny"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Skutkiem nabycia spadku było:",
      "answers": [
        "Confusio bonorum",
        "Collatio",
        "Obowiązek spłaty długów spadkowych"
      ],
      "poprawne": [0, 2]
    }`),
  JSON.parse(`{
      "question": "Sepciratio bonorum dokonywano w interesie:",
      "answers": [
        "Wierzycieli spadkowych",
        "Wierzycieli spadkobiercy",
        "Samego spadkobiercy"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Beneficium abstinendi mogło być przyznane:",
      "answers": [
        "Niewolnikowi ustanowionemu dziedzicem przez swojego właściciela",
        "Dziedzicom koniecznym (heredes necessarii)",
        "Dziedzicom dobrowolnym (heredes voluntarii)"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Zapisy:",
      "answers": [
        "Nie powodowały odpowiedzialności za długi spadkowe",
        "Stanowią przykład tzw. sukcesji syngularnej",
        "Ich wielkość nie mogła przekraczać 1/4 wartości czystej masy spadkowej"
      ],
      "poprawne": [0, 1]
    }`),
  JSON.parse(`{
      "question": "Rzecz, która należała do spadkodawcy w chwili sporządzania testamentu, a w chwili jego śmierci była własnością osoby trzeciej, uważano:",
      "answers": [
        "Za rzecz własną spadkodawcy, ponieważ w chwili powstania testamentu stanowiła jego własność",
        "Za rzecz cudzą i dlatego nie mogła być zapisana legatem per vindicationem",
        "Za rzecz, której wydania mógł żądać spadkobierca od aktualnego właściciela"
      ],
      "poprawne": [1]
    }`),
  JSON.parse(`{
      "question": "Legatem można było obciążyć:",
      "answers": [
        "Spadkobiercę",
        "Legatariusza",
        "Rodzinę spadkodawcy"
      ],
      "poprawne": [0]
    }`),
  JSON.parse(`{
      "question": "Rzecz nienależącą do spadkodawcy można było zapisać legatem:",
      "answers": [
        "Per vindicationem",
        "Per damnationem",
        "Sinendi modo"
      ],
      "poprawne": [1, 2]
    }`),
  JSON.parse(`{
      "question": "Legat damnacyjny:",
      "answers": [
        "Wywoływał skutek obligacyjny",
        "Wywoływał skutek rzeczowy",
        "Nie wywoływał żadnych skutków"
      ],
      "poprawne": [0]
    }`),
];
