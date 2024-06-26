import { Box } from "./tochange/Box";

const Topic = () => {
    return (
        <main className="flex-col w-screen justify-center">
            <div className="grid grid-cols-1">
                <div className="p-7 ml-32">
                    <h1 className="font-semibold">Dashboard UserTeah26</h1>
                </div>
                <img src="./img/Slide.jpeg" className="bane w-screen max-w-5xl mx-auto h-72" alt="Slider" />
            </div>
            <section className="flex justify-center flex-wrap">
                <Box imageSrc="./img/ww2bg.png" />
                <Box imageSrc="./img/socialbg.png" />
                <Box imageSrc="./img/basquetbg.png" />
            </section>
        </main>
    );
}

export default Topic;
