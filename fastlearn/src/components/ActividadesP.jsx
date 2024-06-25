import { ButtonAdd } from "./buttons/Add";
import { BoxA } from "./tochange/BoxA";

const Act1 = () => {
  return (
    <main className="w-screen flex">
      <BoxA />
      <BoxA />
      <BoxA />
      <div className="absolute bottom-4 right-4">
        <ButtonAdd />
      </div>
    </main>
  );
};

export default Act1;