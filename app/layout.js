import {Poppins} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers"

const poppins = Poppins({
    subsets: ["latin"],
    weight: [
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
},);

export const metadata = {
    title: "RQ Ecom",
    description: "Generated by create next app"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} px-4`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
