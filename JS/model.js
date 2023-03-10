const model = {
    modal: 'none',
    app: {
        currentPage: 'frontPage',
        currentUser: 'admin',
        currentPicture: 0, // 'img/picture1.jpg',  // src="/badebilde.jpg"
        editorPicture: 0,
        modalContent: '',
    },

    inputs: {

        adminPageBooking: {
            fleetChoice: 0,
            selectedDate: new Date(),
            selectedBooking: null,
        },
        adminPageComfort: {
            // tilgjenlig ekstraprodukter box
            price: 0,
            product: 0,
            // endre priser box
            weekdayPriceDay: 0,
            weekdayPriceHour: 0,
            weekendPriceDay: 0,
            weekendPriceHour: 0,
            // endre pakke box
            selectPackage: 0,
            packageProduct: '',
            weekendPrice: 0,
            weekdayPrice: 0,
            packageName: '',
            selectPackageDropdown: null,
            // legg til pakke box
            newPackageName: '',
            newPackageHour: 0,
            newPackageWeekdayPrice: 0,
            newPackageWeekendPrice: 0,
        },
        loginPage: {
            userName: '',
            password: '',
        },
        newUserPage: {
            name: '',
            adress: '',
            phone: '',
            email: '',
            password: '',
            confirmedPassword: '',
        },
        frontPage: {
        },
        bookingPage: {

            fleetChoice: 0, //setter til 0 stedet for null
            packageChoice: null,
            comfortChoices: [],
            selectedDate: new Date(),
            selectedHours: [],
            isDateSelected: false,//tester aa sette til true

        },
        blogPage: {
            titlePost: '',
            currentPost: '',
        },
    },

    data: { // Husk og fylle ut alle verdier
        users: [
            {
                name: 'admin',
                adress: 'admin adresse',
                phoneNumber: 'admin tlf',
                email: 'admin@mail',
                password: '1234',
            },
            {
                name: 'Petter Nesbo',
                adress: 'Tiurveien 12',
                phoneNumber: '98898899',
                email: 'PetterN@gmail.com',
                password: '1234',
            },
            {
                name: 'Ola Normann',
                adress: 'Ytre Enebakk 12',
                phoneNumber: '98898899',
                email: 'Ola.Normann@gmail.com',
                password: 'Sommer2020',
            },
            {
                name: 'Tina Tveiten',
                adress: 'Hytti Heiti 3',
                phoneNumber: '90609080',
                email: 'Tina.Tveiten@gmail.com',
                password: 'Sommer2020',
            },

        ],
        packageOptions: [
            {
                id: 0,
                name: 'Jentekveld (6 stk)',
                price: {
                    weekdayPrice: 1800,
                    weekendPrice: 3250,
                },
                hours: 7,
                comforts: [
                    { name: 'Snorkel', quantity: 3, },
                    { name: 'H??ndkl??r', quantity: 6, },
                    { name: 'Mineralvann', quantity: 6, },
                    { name: 'Aroma essens', quantity: 1, },
                    { name: 'Solkrem', quantity: 1, },
                ],
            },
          
            {
                id: 2,
                name: 'Familie pakke (4 stk)',
                price: {
                    weekdayPrice: 1904,
                    weekendPrice: 2304,
                },
                hours: 3,
                comforts: [
                    { name: 'Badebukse', quantity: 4, },
                    { name: 'H??ndkl??r', quantity: 4, },
                    { name: 'Mineralvann', quantity: 4, },
                    { name: 'Aroma essens', quantity: 1, },
                    { name: 'Solkrem', quantity: 4, },
                ],
            },
        
            {
                id: 4,
                name: 'Standard pakke (2 stk)',
                price: {
                    weekdayPrice: 1504,
                    weekendPrice: 2304,
                },
                hours: 2,
                comforts: [
                    { name: 'Snorkel', quantity: 1, },
                    { name: 'Badebukse', quantity: 2, },
                    { name: 'H??ndkl??r', quantity: 2, },
                ],

            },
        ],

        comforts: [
            {
                id: 0,
                name: 'Snorkel',
                price: 100,
            },
            {
                id: 1,
                name: 'Badebukse',
                price: 300,
            },
            {
                id: 2,
                name: 'H??ndkler',
                price: 150,
            },
            {
                id: 3,
                name: 'Mineralvann',
                price: 50,
            },
            {
                id: 4,
                name: 'Aroma essens',
                price: 120,
            },
            {
                id: 5,
                name: 'Solkrem',
                price: 200,
            },
        ],

        bookings: [
            {
                orderId: 0,
                fleetId: 0,
                chosenPackage: null,
                chosenComforts: [1, 0, 0],
                chosenDate: new Date("2023-03-13"),// string av booket dato
                chosenHours: [9, 10, 11, 12, 13, 14, 15, 16],
                customer: 'Ola Normann',
                totalPrice: 3599,
            },
            {
                orderId: 1,
                fleetId: 0,
                chosenPackage: null,
                chosenComforts: [1, 3, 3, 3],
                chosenDate: new Date("2023-03-14"),// string av booket dato
                chosenHours: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                customer: 'Petter Nesbo',
                totalPrice: 6599,
            },
            {
                orderId: 2,
                fleetId: 0,
                chosenPackage: null,
                chosenComforts: [1, 4, 4, 4],
                chosenDate: new Date("2023-03-15"),// string av booket dato
                chosenHours: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                customer: 'Tina Tveiten',
                totalPrice: 7500,
            },
        ],
        fleets: [
            {
                id: 0,
                name: 'Skarven',
                img: `<img src="img/fleetskarvenBooking.jpeg" alt="fl??te1" width="288" height="162">`,
                border: '#efe2cd',
            },
            {
                id: 1,
                name: 'M??ken',
                img: `<img src="img/fleetmakenBooking.jpeg" alt="fl??te2" width="288" height="162">`,
                border: '#efe2cd',
            },
        ],

        blogPosts: [
            {
                postId: 0,
                postTitle: 'Forbedre din mentale helse',
                postText: `5 enkle m??ter ?? forbedre din mentale helse p??": ?? forbedre din mentale helse kan v??re enkle endringer i din daglige rutine, som ?? f?? nok s??vn, spise sunn mat, bevege deg regelmessig, ta pauser og sosialisere deg med venner og familie.
                "Hvordan takle stress og angst": Stress og angst er vanlige utfordringer som mange opplever. ?? takle disse utfordringene kan inneb??re ?? bruke avslapningsteknikker som dyp pusting, yoga og meditasjon, eller ?? s??ke profesjonell hjelp fra en terapeut.
                "Betydningen av ?? ta vare p?? din mentale helse": Din mentale helse er like viktig som din fysiske helse, og det ?? ta vare p?? din mentale helse kan ha en positiv innvirkning p?? livskvaliteten din. Dette kan inkludere ?? opprettholde sunne relasjoner, sette grenser og ta tid til ?? gj??re ting du liker.
                "Hvordan h??ndtere depresjon": Depresjon er en alvorlig tilstand som kan p??virke livet ditt p?? mange m??ter. ?? h??ndtere depresjon kan inneb??re ?? f?? profesjonell hjelp fra en terapeut, ta medisiner og endre livsstilen din, som ?? f?? nok s??vn, spise sunn mat og mosjonere regelmessig.
                "Hvordan st??tte noen med en mental helseutfordring": Hvis du kjenner noen som sliter med en mental helseutfordring, kan du hjelpe ved ?? v??re st??ttende, lytte til dem og oppmuntre dem til ?? s??ke profesjonell hjelp n??r det er n??dvendig. Du kan ogs?? l??re deg mer om mental helse og hvordan du kan bidra til ?? bryte ned stigma rundt temaet.`,
                postPicture: 'img/mentalhealth.jpg',
            },
            {
                postId: 1,
                postTitle: 'Isbading for mental trening',
                postText: `Isbading er en m??te ?? anerkjenne og bel??nne ferdigheter og prestasjoner p??. Det fungerer ved at en person tjener merker, eller "badges", for ?? fullf??re visse oppgaver eller demonstrere bestemte ferdigheter. Disse merkene kan deretter vises p?? en persons profil eller nettsted som en m??te ?? vise frem deres prestasjoner.
                En av fordelene med isbadging er at det kan gi en mer omfattende og n??yaktig m??te ?? anerkjenne prestasjoner p?? enn tradisjonelle sertifiseringer eller grader. Isbadging kan v??re spesifikk for en bestemt ferdighet eller oppgave, og kan ogs?? v??re mer fleksibel og tilpassbar for ?? im??tekomme individuelle behov og m??l.
                Isbadging er ogs?? en effektiv m??te ?? ??ke engasjementet og motivasjonen til deltakerne. ?? tjene digitale merker kan v??re en bel??nning i seg selv, og det kan ogs?? gi en f??lelse av prestasjon og tilh??righet til en bestemt gruppe eller samfunn.
                Mens isbadging har blitt popul??rt i utdanningssektoren, blir det ogs?? brukt i andre bransjer som teknologi, helsevesen og forretningsverdenen. Isbadging kan v??re spesielt nyttig i karriereutvikling, der det kan gi arbeidsgivere en mer n??yaktig og omfattende m??te ?? evaluere potensielle kandidater p??.
                Alt i alt kan isbadging v??re en verdifull tillegg til tradisjonelle m??ter ?? anerkjenne ferdigheter og prestasjoner p??. Ved ?? gi en mer omfattende og tilpassbar m??te ?? bel??nne deltakelse og prestasjon, kan isbadging hjelpe enkeltpersoner og organisasjoner ?? n?? sine m??l og oppn?? suksess.`,
                postPicture: 'img/isbading.jpg',
            },
            {
                postId: 2,
                postTitle: 'Sov deg til bedre mental helse',
                postText: `Hvordan f?? bedre s??vn for bedre mental helse": S??vn spiller en viktig rolle i v??r mentale helse, og ?? forbedre s??vnkvaliteten kan ha en positiv innvirkning p?? hum??r, stressniv?? og energiniv?? i l??pet av dagen. Dette kan inkludere ?? opprettholde en jevn s??vnplan, skape et behagelig sovemilj?? og redusere bruk av elektroniske enheter f??r sengetid.
                Unng?? koffein og alkohol f??r sengetid: Koffein og alkohol kan forstyrre s??vnm??nstre og f??re til d??rligere s??vnkvalitet. Pr??v ?? begrense inntaket av koffein og alkohol, spesielt i timene f??r sengetid, for ?? sikre at du f??r en god natts s??vn.
                Pr??v avslapningsteknikker: Avslapningsteknikker som yoga, meditasjon eller dyp pusting kan hjelpe deg med ?? roe ned f??r sengetid og forbedre s??vnkvaliteten. Pr??v ?? inkludere disse teknikkene i din daglige rutine for ?? redusere stress og angst.
                V??r oppmerksom p?? skjermtid: Skjermene fra mobiltelefoner, datamaskiner og TV-er kan utsette hjernen for bl??tt lys, som kan forstyrre s??vnrytmen. Pr??v ?? redusere skjermtiden din i timene f??r sengetid, og bruk gjerne nattmodus p?? enhetene dine for ?? redusere mengden av bl??tt lys som utsettes for ??ynene dine.`,
                postPicture: 'img/soving.jpg',
            },
            {
                postId: 3,
                postTitle: 'Trening for mental helse',
                postText: `Reduser stressniv??et: Trening kan hjelpe med ?? redusere stressniv??et ved ?? utl??se endorfiner, som er naturlige smertestillende midler i hjernen. Dette kan gi en f??lelse av velv??re og hjelpe deg med ?? h??ndtere stress og angst p?? en mer effektiv m??te.
                Forbedre hum??ret: Trening kan ogs?? forbedre hum??ret ditt ved ?? ??ke niv??et av serotonin i hjernen din. Serotonin er en kjemisk forbindelse som er knyttet til lykke og velv??re, og trening kan bidra til ?? ??ke niv??et av denne forbindelsen i hjernen.
                ??ke selvtilliten: Trening kan bidra til ?? ??ke selvtilliten din ved ?? forbedre kroppsbilde og selvoppfatning. N??r du trener, kan du oppleve en f??lelse av mestring og tilfredshet n??r du oppn??r dine treningsm??l, som kan f??re til en ??kning i selvtilliten din.
                Forbedre s??vnkvaliteten: Trening kan ogs?? hjelpe med ?? forbedre s??vnkvaliteten ved ?? redusere stressniv??et og utmattelse i kroppen. Dette kan hjelpe deg med ?? sovne raskere og sove dypere gjennom natten, som kan forbedre hum??ret og energiniv??et ditt i l??pet av dagen.`,
                postPicture: 'img/treningMental.jpg',
            },

        ],

        blogPictures: [
            {
                imageLink: 'img/blogPicture1.jpg',
                editorBorder: '#c7d4bc',
            },
            {
                imageLink: 'img/blogPicture3.jpg',
                editorBorder: '#c7d4bc',
            },
            {
                imageLink: 'img/mentalhealth.jpg',
                editorBorder: '#c7d4bc',
            },
            {
                imageLink: 'img/treningMental.jpg',
                editorBorder: '#c7d4bc',
            },
            {
                imageLink: 'img/soving.jpg',
                editorBorder: '#c7d4bc',
            },
        ],
        frontPagePictures: [
            {
                imageLink: 'img/fleetskarvenFront.jpeg',
                pictureTitle: 'Forside bilde 1',
            },
            {
                imageLink: 'img/fleetmakenFront.jpeg',
                pictureTitle: 'Forside bilde 2',
            },
            {
                imageLink: 'img/larvikinnlop2560x1440.jpeg',
                pictureTitle: 'Forside bilde 3',
            }

        ],

        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //funker det ?? ha denne her?
        hoursInDay: 24,

        prices: {
            weekdayPriceHour: 200,
            weekdayPriceDay: 1800,
            weekendPriceHour: 300,
            weekendPriceDay: 2600,
        },
    },
}
// Hvordan g??r man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
// 
