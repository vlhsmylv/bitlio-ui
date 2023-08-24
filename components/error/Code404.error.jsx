import BitlioLink from "../pillars/custom/BitlioLink.component";

const Code404 = () => {
  return (
    <>
    <div> 
        <div className="text-center">
          <img src="/png/code404.png" id="code404-hero" />
        </div>
        <div>
          <BitlioLink href="/" className={"fs-5 btn btn-light text-light bg-bitlio"}>
            <i className="fa-solid fa-chevron-left"></i> Geri qayıt
          </BitlioLink>
        </div>
      </div>

      <style jsx>{`
        #code404-hero {
          width: 500px;
        }
      `}</style>
    </>
  );
};

export default Code404;
