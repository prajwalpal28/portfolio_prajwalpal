import { Typography } from "@material-tailwind/react";
import Hero_imgg from '../assets/Hero_imgg.png'

export function Footer() {
    return (
        <footer className="w-full bg-transparent p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
                <img src={Hero_imgg} alt="logo-ct" className="w-10" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="gray"
                            className="font-normal transition-colors hover:text-white focus:text-white"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="gray"
                            className="font-normal transition-colors hover:text-white focus:text-white"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="gray"
                            className="font-normal transition-colors hover:text-white focus:text-white"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="gray"
                            className="font-normal transition-colors hover:text-white focus:text-white"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-gray-300" />
            <Typography color="gray" className="text-center font-normal">
                &copy; 2024 Prajwal.Pal
            </Typography>
        </footer>
    );
}
