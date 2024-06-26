import { Box } from "./tochange/Box";

const Topic = () => {
    return (
        <main className="flex-col w-screen justify-center">
            <div className="grid grid-cols-1">
                <div className="p-7 ml-32">
                    <h1 className="font-semibold">THOPIC EDUCATIONAL</h1>
                </div>
                <img src="./img/Slider.jpeg" className="bane w-screen max-w-5xl mx-auto h-72" alt="Slider" />
            </div>
            <section className="flex justify-center flex-wrap">
                <Box imageSrc="./img/mathbg.png" />
                <Box imageSrc="./img/socialbg.png" />
                <Box imageSrc="./img/engbg.png" />
            </section>
        </main>
    );
}

export default Topic;
