//#region Data for Services page
let data = [
    {
        id: "design-01",
        position: "service-01",
        topic: "Design and Development",
        type: "design",
        name: "Print Circuit Board design",
        img: "../public/images/design-01.jpg"
    },
    {
        id: "design-02",
        position: "service-02",
        topic: "Design and Development",
        type: "design",
        name: "Optical and RF design",
        img: "../public/images/design-02.jpg"
    },
    {
        id: "design-03",
        position: "service-03",
        topic: "Design and Development",
        type: "design",
        name: "Software design on embedded systems",
        img: "../public/images/design-03.jpg"
    },
    {
        id: "npi-01",
        position: "service-01",
        topic: "New Product Introduction",
        type: "npi",
        name: "Rapid Prototyping",
        img: "../public/images/npi-01.jpg"
    },
    {
        id: "supply-01",
        position: "service-01",
        topic: "Supply Chain Management",
        type: "supplyChain",
        name: "Supplier Diversity",
        img: "../public/images/supply-01.jpg"
    },
    {
        id: "supply-02",
        position: "service-02",
        topic: "Supply Chain Management",
        type: "supplyChain",
        name: "Enhanced Planning Solutions",
        img: "../public/images/supply-02.jpg"
    },
    {
        id: "supply-03",
        position: "service-03",
        topic: "Supply Chain Management",
        type: "supplyChain",
        name: "Supply Chain Excellence",
        img: "../public/images/supply-03.jpg"
    },
    {
        id: "smt-01",
        position: "service-01",
        topic: "PCB Assembly & SMT",
        type: "smt",
        name: "RF Microelectronics",
        img: "../public/images/smt-01.jpg"
    },
    {
        id: "smt-02",
        position: "service-02",
        topic: "PCB Assembly & SMT",
        type: "smt",
        name: "3D-AOI Technology",
        img: "../public/images/smt-02.jpg"
    },
    {
        id: "smt-03",
        position: "service-03",
        topic: "PCB Assembly & SMT",
        type: "smt",
        name: "X-RAY Inspection",
        img: "../public/images/smt-03.jpg"
    },
    {
        id: "test-01",
        position: "service-01",
        topic: "Test Development",
        type: "testDevelop",
        name: "In-circuit Testing (ICT)",
        img: "../public/images/test-01.jpg"
    },
    {
        id: "test-02",
        position: "service-02",
        topic: "Test Development",
        type: "testDevelop",
        name: "Functional Testing (FCT)",
        img: "../public/images/test-02.jpg"
    },
    {
        id: "test-03",
        position: "service-03",
        topic: "Test Development",
        type: "testDevelop",
        name: "Automated Optical Inspection (AOI)",
        img: "../public/images/test-03.jpg"
    },
    {
        id: "after-01",
        position: "service-01",
        topic: "After Market Services",
        type: "afterMarket",
        name: "Returns & Warranty Management",
        img: "../public/images/after-01.jpg"
    },
    {
        id: "after-02",
        position: "service-02",
        topic: "After Market Services",
        type: "afterMarket",
        name: "Repair & Refurbishment",
        img: "../public/images/after-02.jpeg"
    },
    {
        id: "after-03",
        position: "service-03",
        topic: "After Market Services",
        type: "afterMarket",
        name: "Failure Analysis",
        img: "../public/images/after-03.jpg"
    },
//#endregion

//#region Data for Markets page
    {
        id: "automotive-01",
        position: "market-01",
        topic: "Automotive",
        type: "automotive",
        name: "LED Lighting",
        img: "../public/images/automotive-01.jpg"
    },
    {
        id: "automotive-02",
        position: "market-02",
        topic: "Automotive",
        type: "automotive",
        name: "Advanced driver-assistance system (ADAS)",
        img: "../public/images/automotive-02.jpg"
    },
    {
        id: "automotive-03",
        position: "market-03",
        topic: "Automotive",
        type: "automotive",
        name: "Safety and security system",
        img: "../public/images/automotive-03.jpg"
    },
    {
        id: "medical-01",
        position: "market-01",
        topic: "Medical",
        type: "medical",
        name: "Ultrasound",
        img: "../public/images/medical-01.jpg"
    },
    {
        id: "medical-02",
        position: "market-02",
        topic: "Medical",
        type: "medical",
        name: "Medical imaging & large systems",
        img: "../public/images/medical-02.jpg"
    },
    {
        id: "industrial-01",
        position: "market-01",
        topic: "Industrial & Smart Energy",
        type: "industrial",
        name: "Inverter System",
        img: "../public/images/industrial-01.jpg"
    },
    {
        id: "industrial-02",
        position: "market-02",
        topic: "Industrial & Smart Energy",
        type: "industrial",
        name: "Electric Car Chargers",
        img: "../public/images/industrial-02.jpg"
    },
    {
        id: "industrial-03",
        position: "market-03",
        topic: "Industrial & Smart Energy",
        type: "industrial",
        name: "Measurement",
        img: "../public/images/industrial-03.jpg"
    },
    {
        id: "illumination-01",
        position: "market-01",
        topic: "Illumlnation",
        type: "illumination",
        name: "LED Smart Blub",
        img: "../public/images/illum-01.jpg"
    },
    {
        id: "illumination-02",
        position: "market-02",
        topic: "Illumlnation",
        type: "illumination",
        name: "LED Traffic Signal",
        img: "../public/images/illum-02.jpg"
    },
    {
        id: "smartHome-01",
        position: "market-01",
        topic: "Smart Home",
        type: "smartHome",
        name: "Home Security Wi-Fi Camera",
        img: "../public/images/smarthome-01.jpg"
    },
    {
        id: "smartHome-02",
        position: "market-02",
        topic: "Smart Home",
        type: "smartHome",
        name: "Smart Plug",
        img: "../public/images/smarthome-02.jpg"
    },
    {
        id: "mobile-01",
        position: "market-01",
        topic: "Mobile Accessories",
        type: "mobile",
        name: "Wireless Charger",
        img: "../public/images/mobile-01.jpg"
    },
    {
        id: "mobile-02",
        position: "market-02",
        topic: "Mobile Accessories",
        type: "mobile",
        name: "Bluetooth TWS",
        img: "../public/images/mobile-02.jpg"
    },
    {
        id: "mobile-03",
        position: "market-03",
        topic: "Mobile Accessories",
        type: "mobile",
        name: "Power Bank",
        img: "../public/images/mobile-03.jpg"
    }
]
//#endregion