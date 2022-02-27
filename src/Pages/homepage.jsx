import React, { useEffect } from "react";
import { AddCarousel } from "./HomePage/AddCarousel";
import { Entertainment } from "./HomePage/Entertainment";
import { Section1 } from "./HomePage/section1";
 import Premier from "./HomePage/premier"
 import { Section2 } from "./HomePage/section2";
import Footer from "./HomePage/footer"

export const HomePage = () => {

    return (
        <div style={{ backgroundColor: "#F2F5F9" }}>
            <AddCarousel />
              <Section1></Section1>
              <Entertainment />

            <div style={{ backgroundColor: "#F2F2F2" }}>
                <Premier></Premier>
                <Section2></Section2>
            </div>
        </div>
    )
}