const routes = [{
        path: "/",
        exact: true,
        main: () => < Dashboard / > ,
        title: () => < div > Dashboard < /div>,
    },
    {
        path: "/Logistik",
        main: () => < Logistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Bencana",
        main: () => < h2 > Ini Nanti Bencana Alam < /h2>,
        title: () => < div > Bencana Alam < /div>,
    },
    {
        path: "/Penanggulangan",
        main: () => < h2 > Ini Nanti Data Penangulangan < /h2>,
        title: () => < div > Penanggulangan Bencana < /div>,
    },
    {
        path: "/DataSupplier",
        main: () => < DataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/AddDataLogistik",
        main: () => < AddDataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/EditDataLogistik",
        main: () => < EditDataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/EditDataSupplier",
        main: () => < EditDataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/AddDataSupplier",
        main: () => < AddDataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/DataLogistik",
        main: () => < DataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Pegawai",
        main: () => < h2 > Ini Nanti Data Pegawai < /h2>,
        title: () => < div > Pegawai < /div>,
    },
    {
        path: "/Relawan",
        main: () => < h2 > Ini Nanti Data Relawan < /h2>,
        title: () => < div > Relawan < /div>,
    },
    {
        path: "/Laporan",
        main: () => < h2 > Ini Nanti Data Laporan < /h2>,
        title: () => < div > Laporan < /div>,
    },
];