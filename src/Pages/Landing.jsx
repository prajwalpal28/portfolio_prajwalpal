import { Hero_com } from '../Components/Hero_com';
import { Projects } from '../Components/Projects';
import { MyWorld } from '../Components/MyWorld';
import { Collaborate } from '../Components/Collaborate';

export const Landing = () => {
    return (
        <>
            <Hero_com />
            <Projects />
            <MyWorld/>
            <Collaborate/>
        </>
    );
};
