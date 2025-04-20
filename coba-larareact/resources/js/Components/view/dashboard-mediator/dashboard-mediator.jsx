import { Contact18 } from "@/Components/beranda/Contact18";
import { Cta13 } from "@/Components/beranda/Cta13";
import { Header5 } from "@/Components/beranda/Header5";
import { Layout16 } from "@/Components/beranda/Layout16";
import { Layout239 } from "@/Components/beranda/Layout239";
import { Layout240 } from "@/Components/beranda/Layout240";
import { Navbar8 } from "@/Components/beranda/Navbar8";
import { Testimonial6 } from "@/Components/beranda/Testimonial6";

import React from "react";

const DashboardMediator = () => {
    return (
        <>
            <Navbar8 />
            <Header5 />
            <Layout16 />
            <Layout239 />
            <Layout240 />
            <Testimonial6 />
            <Cta13 />
            <Contact18 />
        </>
    );
};

export default DashboardMediator;
