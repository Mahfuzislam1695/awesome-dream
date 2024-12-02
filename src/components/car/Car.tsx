import AreaText from "./AreaText";
// import CarCanvas from "./CarCanvas";


const Car = () => {

  return (
    <div className="min-h-screen relative" >
      <div className="flex flex-col items-center pt-10">
        <AreaText text="1992-BMW-M3-E30" />
        <AreaText text="Sport-Evolution" />
      </div>
      {/* <CarCanvas/> */}
    </div>
  );
};

export default Car;
